const mylog = (...args) => {
  console.log('🚀🚀🚀', ...args);
};

if (window.location.hash === '#/' || window.location.hash === '') {
  // h5跳转到 /#/appointmentMain
  window.location.replace(`/appointment/#/appointmentMain`)
}

(function () {
  var src = '//cdn.jsdelivr.net/npm/eruda';
  if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
  document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
  document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?9c12815d2407f001cbed45447a638014';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
})();

function jugUrl() {
  var localUrl = window.location.href;
  if (localUrl.indexOf('appointment/#') > -1) {
    return 'appointment';
  } else {
    return 'appointment';
  }
}

const delayTime = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

function parseUrlParams(url) {
  var params = url ? url.split('?')[1] : '';
  if (!params) {
    return {};
  }
  params = params.split('&');
  var result = {};
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split('=');
    var key = decodeURIComponent(param[0]);
    var value = decodeURIComponent(param[1] || '');

    if (result[key]) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}

function formatDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  return `${year}-${month}-${day}`;
}

const formatRes = (res) => {
  return Object.assign({}, res, {
    msg: '成功',
    isSuc: true,
    errCode: '0000',
    info: res.result,
  });
};

function isInStandaloneMode() {
  console.log(`😋🙃 ~ isInStandaloneMode ~ window.navigator.standalone:`, window.navigator);
  console.log(`😋🙃 ~ isInStandaloneMode ~ window.matchMedia:`, window.matchMedia);
  return (
    window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
  );
}

// 如果是 桌面应用 则显示导航栏
if (isInStandaloneMode()) {
  document.getElementById('standalone-navbar').style.display = 'flex';
  var style = document.createElement('style');
  style.innerHTML = `
    body { background: #fff; }
    ._v-container[data-v-ecaca2b0] { padding-top: 20px; }
  `;
  document.head.appendChild(style);
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').then(
      function (reg) {
        mylog('ServiceWorker 注册成功: ', reg);

        reg.onupdatefound = function () {
          var installingWorker = reg.installing;
          installingWorker.onstatechange = function () {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // 有新内容，提示用户刷新
                if (confirm('检测到新版本，是否立即刷新页面？')) {
                  window.location.reload();
                }
              }
            }
          };
        };
      },
      function (err) {
        mylog('ServiceWorker 注册失败: ', err);
      }
    );
  });
}
