# 渝畅行预约页面-仅供学习

## 🌍 支持功能

1. iPhone 可添加到主屏幕，离线访问
   - 使用Safari浏览器打开
   - 点击下方分享按钮(中间位置)
   - 点击“添加到主屏幕”
   - 返回桌面即可看到图标

2. 支持 PWA 安装，离线访问

## 🚨 注意

因托管在github，初次（浏览器和桌面打开2次）打开速度较慢，请耐心等待...,从此可支持离线访问


## 🚀 在线链接：
[https://hyc8801.github.io/appointment/#/appointmentMain](https://hyc8801.github.io/appointment/#/appointmentMain)

## 📱 手机扫码：
![qrcode](./static/img/qrcode.png)

## 开发注意事项

1. 修改代码后，需要修改[service-worker](./service-worker.js)中的`CACHE_NAME`,否则不会更新
