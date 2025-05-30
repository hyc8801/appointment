const fs = require('fs');
const path = require('path');

const rootFiles = ['index.html', 'extend.js']; // 需要缓存的根目录文件
const staticDir = path.join(__dirname, 'static');
const swPath = path.join(__dirname, 'service-worker.js');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(path.relative(__dirname, filePath).replace(/\\/g, '/'));
    }
  });
  return results;
}

const staticFiles = fs.existsSync(staticDir) ? walk(staticDir) : [];
const urlsToCache = rootFiles.concat(staticFiles);

let swContent = fs.readFileSync(swPath, 'utf-8');
swContent = swContent.replace(
  /const urlsToCache = \[[\s\S]*?\];/,
  `const urlsToCache = ${JSON.stringify(urlsToCache.map(f => './' + f), null, 2)};`
);

fs.writeFileSync(swPath, swContent, 'utf-8');
console.log('已自动更新 service-worker.js 的 urlsToCache 列表！（全部为相对路径）'); 