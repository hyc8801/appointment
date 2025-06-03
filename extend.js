// window._consolelog = console.log
// console.log = () => {};

const mylog = (...args) => {
  console.log('🚀🚀🚀', ...args);
};


const delayTime = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const startDebug = () => {
  localStorage.setItem('active-eruda', 'true')
  window.location.reload();
}

window.onload = async () => {
  let clickCount = 0;
  let clickTimer = null;

  await delayTime(600)

  const banner = document.querySelector('.appointment-main-banner');
  if (banner) {
    banner.addEventListener('click', function() {
      clickCount++;
      if (clickCount === 5) {
        alert(`出发debug模式，即将刷新`)
        startDebug();
        clickCount = 0; // 重置计数
        clearTimeout(clickTimer);
        clickTimer = null;
        return;
      }
      // 2秒内未连续点击则重置
      if (clickTimer) clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 2000);
    });
  }
}


['fullscreen', 'standalone', 'minimal-ui', 'browser', 'window-controls-overlay'].forEach(mode => {
  if (window.matchMedia?.('(display-mode: ' + mode + ')').matches) {
    mylog('当前 display-mode: ' + mode);
  }
});

if (window.location.hash === '#/' || window.location.hash === '') {
  // h5跳转到 /#/appointmentMain
  window.location.replace(window.location.pathname + `#/appointmentMain`)
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

