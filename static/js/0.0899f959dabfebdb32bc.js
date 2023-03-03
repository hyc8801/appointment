webpackJsonp([0], {
    "/37X": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        o("kZIZ");
        var i = o("1o/d"),
            n = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.recordDetail.order_no ? i("div", {
                        staticClass: "appointment-record-detail-wrapper"
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOverTimeForEnd,
                            expression: "!isOverTimeForEnd"
                        }],
                        staticClass: "top-remind"
                    }, [i("img", {
                        staticClass: "top-remind-img",
                        attrs: {
                            src: o("w+jv"),
                            alt: "提示"
                        }
                    }), t._v(" "), i("span", {
                        staticClass: "top-remind-text"
                    }, [t._v("请务必在预约时间段")]), i("span", {
                        staticStyle: {
                            color: "#FF8F3D",
                            "font-size": "0.32rem"
                        }
                    }, [t._v("前5分钟")]), i("span", {
                        staticClass: "top-remind-text"
                    }, [t._v("内进站")])]), t._v(" "), i("bwt-scroll", {
                        ref: "orderScroller",
                        attrs: {
                            openPullUp: !1,
                            openPullDown: !t.isOverTimeForEnd,
                            isAll: !1
                        },
                        on: {
                            pulldown: t.refresh
                        }
                    }, [i("div", {
                        staticClass: "detail-content"
                    }, [i("div", {
                        staticClass: "content-card"
                    }, [t.isOverTimeForStart && !t.isOverTimeForEnd ? i("div", {
                        staticClass: "count-down"
                    }, [t._v("失效时间：\n          "), i("countdown", {
                        attrs: {
                            time: t.orderCountTime
                        },
                        on: {
                            end: t.orderTimeOut
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [i("span", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.hours > 0,
                                        expression: "props.hours > 0"
                                    }]
                                }, [t._v(t._s(t._f("countTimeFilter")(e.hours)) + "小时")]), t._v(t._s(t._f("countTimeFilter")(e.minutes)) + "分" + t._s(t._f("countTimeFilter")(e.seconds)) + "秒")]
                            }
                        }])
                    })], 1) : t._e(), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOverTimeForStart,
                            expression: "!isOverTimeForStart"
                        }],
                        staticClass: "not-intime-wrapper"
                    }, [i("img", {
                        staticClass: "not-intime-img",
                        attrs: {
                            src: o("NIiy"),
                            alt: ""
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "not-intime-text"
                    }, [t._v("二维码将在预约时间前5分钟展示")])]), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOverTimeForStart,
                            expression: "isOverTimeForStart"
                        }],
                        staticStyle: {
                            "background-color": "#00BAFF",
                            position: "relative",
                            width: "200px",
                            height: "200px"
                        }
                    }, [i("div", {
                        ref: "qrcode",
                        attrs: {
                            id: "qrcode"
                        }
                    }), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOverTimeForEnd,
                            expression: "isOverTimeForEnd"
                        }],
                        staticClass: "overtime-wrapper"
                    }, [i("img", {
                        staticClass: "overtime-img",
                        attrs: {
                            src: o("xi5P"),
                            alt: ""
                        }
                    })])]), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOverTimeForStart && !t.isOverTimeForEnd,
                            expression: "isOverTimeForStart && !isOverTimeForEnd"
                        }],
                        staticClass: "qrcode-remind"
                    }, [t._v("\n          请凭此二维码，前往地铁站指定预约通道扫码进站\n        ")]), t._v(" "), i("div", {
                        staticStyle: {
                            "margin-top": "0.20rem"
                        },
                        style: {
                            marginTop: t.isOverTimeForEnd ? "1rem" : "0.2rem"
                        }
                    }, [i("span", {
                        staticClass: "content-bottom-text",
                        class: {
                            "disabled-color": t.isOverTimeForEnd
                        }
                    }, [t._v(t._s(t.recordDetail.line_name))]), t._v(" \n          "), i("span", {
                        staticClass: "content-bottom-text-light",
                        class: {
                            "disabled-color": t.isOverTimeForEnd
                        }
                    }, [t._v(t._s(t._f("stationFilter")(t.recordDetail.station_name)))])]), t._v(" "), i("div", [i("span", {
                        staticClass: "content-bottom-text",
                        class: {
                            "disabled-color": t.isOverTimeForEnd
                        }
                    }, [t._v(t._s(t.recordDetail.appiont_date) + " ")]), t._v(" \n          "), i("span", {
                        staticClass: "content-bottom-text-light",
                        class: {
                            "disabled-color": t.isOverTimeForEnd
                        }
                    }, [t._v(t._s(t._f("timeFilter")(t.recordDetail)))])])]), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOverTimeForStart,
                            expression: "!isOverTimeForStart"
                        }],
                        staticClass: "cancel-content"
                    }, [i("button", {
                        staticClass: "cancel-btn",
                        on: {
                            click: t.handleCancle
                        }
                    }, [t._v("取消预约")])])])]), t._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.recordDetail.order_no,
                            expression: "recordDetail.order_no"
                        }],
                        staticClass: "float-btn",
                        on: {
                            click: t.handleToRidecode
                        }
                    }, [i("img", {
                        staticClass: "float-btn-img",
                        attrs: {
                            src: o("5oMf"),
                            alt: ""
                        }
                    })]), t._v(" "), i("div", {
                        staticClass: "footer",
                        style: {
                            height: t.bottomImgHeight
                        }
                    }, [i("img", {
                        staticClass: "footer-img",
                        attrs: {
                            src: o("2Y52"),
                            alt: ""
                        }
                    })])], 1) : t._e()
                },
                staticRenderFns: []
            };
        var r = function(t) {
                o("5mV4")
            },
            s = o("VU/8")(i.a, n, !1, r, "data-v-2b9da042", null);
        e.default = s.exports
    },
    "1o/d": function(t, e, o) {
        "use strict";
        (function(t) {
            var i = o("mvHQ"),
                n = o.n(i),
                r = o("Xxa5"),
                s = o.n(r),
                a = o("exGp"),
                l = o.n(a),
                h = o("MJLE"),
                c = o.n(h),
                u = o("c6Ft"),
                p = o("oMTx");
            e.a = {
                name: "appointmentRecordDetail",
                components: {
                    QRCode: c.a,
                    "bwt-scroll": u.a
                },
                data: function() {
                    return {
                        orderCountTime: 0,
                        isOverTimeForStart: !1,
                        isOverTimeForEnd: !1,
                        recordDetail: {},
                        bottomImgHeight: "100px"
                    }
                },
                filters: {
                    stationFilter: function(t) {
                        return t ? t + "站" : ""
                    },
                    timeFilter: function(t) {
                        return t.start_time && t.end_time ? t.start_time + "~" + t.end_time : ""
                    },
                    countTimeFilter: function(t) {
                        return t < 10 ? "0" + t : t
                    }
                },
                mounted: function() {
                    document.title = "预约结果", this.init()
                },
                methods: {
                    init: function() {
                        var t = this;
                        this.getClientWidth(), this.setHeaderBtn(), this.$nextTick(function() {
                            t.getDetail()
                        })
                    },
                    getClientWidth: function() {
                        var t = document.documentElement.clientHeight || 650;
                        this.bottomImgHeight = t < 690 ? "80px" : "100px", console.log("bottomImgHeight", t, this.bottomImgHeight)
                    },
                    setHeaderBtn: function() {
                        this.$bwtHybrid.navigator.setRightBtn({
                            isShow: 0,
                            text: " ",
                            index: 0,
                            success: function(t) {},
                            error: function(t) {}
                        })
                    },
                    refresh: function() {
                        var t = this;
                        return l()(s.a.mark(function e() {
                            return s.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("下拉刷新"), e.next = 3, t.getDetail();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    scrollPullDownEnd: function() {
                        var t = this;
                        this.$nextTick(function() {
                            t.$refs.orderScroller && t.$refs.orderScroller.pullDownEnd()
                        })
                    },
                    getDetail: function() {
                        var t = this;
                        return l()(s.a.mark(function e() {
                            var o, i, n, r, a;
                            return s.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = {
                                            order_no: t.$route.query.order_no
                                        }, console.log("record detail req===", o), e.next = 4, t.$api.mgApi.queryAppiontDetail(o);
                                    case 4:
                                        i = e.sent, n = i.isSuc, r = i.info, a = i.msg, n ? (t.recordDetail = r, t.$nextTick(function() {
                                            t.getDiffTime()
                                        })) : (t.$vux.toast.show({
                                            type: "text",
                                            text: "网络异常，请重试"
                                        }), console.log("获取预约记录详情失败，" + a)), t.scrollPullDownEnd();
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    getQrCode: function() {
                        var t = this.$refs.qrcode;
                        t.innerHTML = "", console.log("qrcodeDom111===", t, t.innerHTML);
                        var e = "order_no=" + this.recordDetail.order_no;
                        new c.a(t, {
                            width: 200,
                            height: 200,
                            text: e
                        })
                    },
                    getDiffTime: function() {
                        var e = this,
                            o = t(this.recordDetail.local_time).valueOf(),
                            i = this.recordDetail.appiont_date.replace(/-/g, "/"),
                            n = t(i + " " + this.recordDetail.start_time).valueOf(),
                            r = t(i + " " + this.recordDetail.end_time).valueOf();
                        o >= n - 3e5 && o <= r + 6e5 ? (this.isOverTimeForStart = !0, this.isOverTimeForEnd = !1, this.orderCountTime = r + 6e5 - o) : o > r + 6e5 && (this.isOverTimeForStart = !0, this.isOverTimeForEnd = !0), this.isOverTimeForStart && this.$nextTick(function() {
                            e.getQrCode()
                        }), console.log("time", o, r, o < n - 3e5, o >= n - 3e5 && o <= r + 6e5, o > r + 6e5)
                    },
                    orderTimeOut: function() {
                        console.log("orderCountTime", this.orderCountTime), 0 !== this.orderCountTime && (this.isOverTimeForEnd = !0, this.isOverTimeForStart = !0)
                    },
                    handleCancle: function() {
                        var t = this;
                        this.$vux.confirm.show({
                            title: "提示",
                            content: "是否确认取消预约？",
                            confirmText: "确认",
                            cancelText: "取消",
                            onCancel: function() {},
                            onConfirm: function() {
                                t.cancleOrder()
                            }
                        })
                    },
                    cancleOrder: function() {
                        var t = this;
                        return l()(s.a.mark(function e() {
                            var o, i, n, r, a, l;
                            return s.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = {
                                            orderNo: t.$route.query.order_no
                                        }, console.log("record detail req===", o), e.next = 4, t.$api.mgApi.queryAppiontCancel(o);
                                    case 4:
                                        i = e.sent, n = i.isSuc, r = i.info, a = i.msg, l = i.errCode, n ? (console.log("取消成功", r, a), t.$vux.toast.show({
                                            type: "text",
                                            text: "取消成功"
                                        }), setTimeout(function() {
                                            t.$router.back()
                                        }, 1e3)) : "0602" === l ? t.$vux.toast.show({
                                            type: "text",
                                            text: "预约时间进站前5分钟后，不可取消预约"
                                        }) : (t.$vux.toast.show({
                                            type: "text",
                                            text: "网络异常，请重试"
                                        }), console.log("取消预约失败，" + a));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    handleToRidecode: function() {
                        console.log("handleToRidecode"), p.a.page.push({
                            url: "msx://m.bwton.com/main/tab?gototab=1",
                            success: function(t) {},
                            error: function(t) {
                                console.log("失败:" + n()(t))
                            }
                        })
                    }
                },
                destroyed: function() {
                    console.log("recordDetail destroyed"), this.$vux.confirm && this.$vux.confirm.hide()
                }
            }
        }).call(e, o("oqQY"))
    },
    "2Y52": function(t, e, o) {
        t.exports = o.p + "static/img/footer-img.a7441ee.png"
    },
    "3fYP": function(t, e) {},
    "5mV4": function(t, e) {},
    "5oMf": function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    MJLE: function(t, e, o) {
        var i, n;
        n = function() {
            function t(t) {
                this.mode = o.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
                for (var e = 0, i = this.data.length; e < i; e++) {
                    var n = [],
                        r = this.data.charCodeAt(e);
                    r > 65536 ? (n[0] = 240 | (1835008 & r) >>> 18, n[1] = 128 | (258048 & r) >>> 12, n[2] = 128 | (4032 & r) >>> 6, n[3] = 128 | 63 & r) : r > 2048 ? (n[0] = 224 | (61440 & r) >>> 12, n[1] = 128 | (4032 & r) >>> 6, n[2] = 128 | 63 & r) : r > 128 ? (n[0] = 192 | (1984 & r) >>> 6, n[1] = 128 | 63 & r) : n[0] = r, this.parsedData.push(n)
                }
                this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
            }

            function e(t, e) {
                this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            t.prototype = {
                getLength: function(t) {
                    return this.parsedData.length
                },
                write: function(t) {
                    for (var e = 0, o = this.parsedData.length; e < o; e++) t.put(this.parsedData[e], 8)
                }
            }, e.prototype = {
                addData: function(e) {
                    var o = new t(e);
                    this.dataList.push(o), this.dataCache = null
                },
                isDark: function(t, e) {
                    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
                    return this.modules[t][e]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(t, o) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                    for (var i = 0; i < this.moduleCount; i++) {
                        this.modules[i] = new Array(this.moduleCount);
                        for (var n = 0; n < this.moduleCount; n++) this.modules[i][n] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, o), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, o)
                },
                setupPositionProbePattern: function(t, e) {
                    for (var o = -1; o <= 7; o++)
                        if (!(t + o <= -1 || this.moduleCount <= t + o))
                            for (var i = -1; i <= 7; i++) e + i <= -1 || this.moduleCount <= e + i || (this.modules[t + o][e + i] = 0 <= o && o <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == o || 6 == o) || 2 <= o && o <= 4 && 2 <= i && i <= 4)
                },
                getBestMaskPattern: function() {
                    for (var t = 0, e = 0, o = 0; o < 8; o++) {
                        this.makeImpl(!0, o);
                        var i = d.getLostPoint(this);
                        (0 == o || t > i) && (t = i, e = o)
                    }
                    return e
                },
                createMovieClip: function(t, e, o) {
                    var i = t.createEmptyMovieClip(e, o);
                    this.make();
                    for (var n = 0; n < this.modules.length; n++)
                        for (var r = 1 * n, s = 0; s < this.modules[n].length; s++) {
                            var a = 1 * s;
                            this.modules[n][s] && (i.beginFill(0, 100), i.moveTo(a, r), i.lineTo(a + 1, r), i.lineTo(a + 1, r + 1), i.lineTo(a, r + 1), i.endFill())
                        }
                    return i
                },
                setupTimingPattern: function() {
                    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
                },
                setupPositionAdjustPattern: function() {
                    for (var t = d.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                        for (var o = 0; o < t.length; o++) {
                            var i = t[e],
                                n = t[o];
                            if (null == this.modules[i][n])
                                for (var r = -2; r <= 2; r++)
                                    for (var s = -2; s <= 2; s++) this.modules[i + r][n + s] = -2 == r || 2 == r || -2 == s || 2 == s || 0 == r && 0 == s
                        }
                },
                setupTypeNumber: function(t) {
                    for (var e = d.getBCHTypeNumber(this.typeNumber), o = 0; o < 18; o++) {
                        var i = !t && 1 == (e >> o & 1);
                        this.modules[Math.floor(o / 3)][o % 3 + this.moduleCount - 8 - 3] = i
                    }
                    for (o = 0; o < 18; o++) {
                        i = !t && 1 == (e >> o & 1);
                        this.modules[o % 3 + this.moduleCount - 8 - 3][Math.floor(o / 3)] = i
                    }
                },
                setupTypeInfo: function(t, e) {
                    for (var o = this.errorCorrectLevel << 3 | e, i = d.getBCHTypeInfo(o), n = 0; n < 15; n++) {
                        var r = !t && 1 == (i >> n & 1);
                        n < 6 ? this.modules[n][8] = r : n < 8 ? this.modules[n + 1][8] = r : this.modules[this.moduleCount - 15 + n][8] = r
                    }
                    for (n = 0; n < 15; n++) {
                        r = !t && 1 == (i >> n & 1);
                        n < 8 ? this.modules[8][this.moduleCount - n - 1] = r : n < 9 ? this.modules[8][15 - n - 1 + 1] = r : this.modules[8][15 - n - 1] = r
                    }
                    this.modules[this.moduleCount - 8][8] = !t
                },
                mapData: function(t, e) {
                    for (var o = -1, i = this.moduleCount - 1, n = 7, r = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                        for (6 == s && s--;;) {
                            for (var a = 0; a < 2; a++)
                                if (null == this.modules[i][s - a]) {
                                    var l = !1;
                                    r < t.length && (l = 1 == (t[r] >>> n & 1)), d.getMask(e, i, s - a) && (l = !l), this.modules[i][s - a] = l, -1 == --n && (r++, n = 7)
                                }
                            if ((i += o) < 0 || this.moduleCount <= i) {
                                i -= o, o = -o;
                                break
                            }
                        }
                }
            }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function(t, o, i) {
                for (var n = g.getRSBlocks(t, o), r = new y, s = 0; s < i.length; s++) {
                    var a = i[s];
                    r.put(a.mode, 4), r.put(a.getLength(), d.getLengthInBits(a.mode, t)), a.write(r)
                }
                var l = 0;
                for (s = 0; s < n.length; s++) l += n[s].dataCount;
                if (r.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + r.getLengthInBits() + ">" + 8 * l + ")");
                for (r.getLengthInBits() + 4 <= 8 * l && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(!1);
                for (; !(r.getLengthInBits() >= 8 * l || (r.put(e.PAD0, 8), r.getLengthInBits() >= 8 * l));) r.put(e.PAD1, 8);
                return e.createBytes(r, n)
            }, e.createBytes = function(t, e) {
                for (var o = 0, i = 0, n = 0, r = new Array(e.length), s = new Array(e.length), a = 0; a < e.length; a++) {
                    var l = e[a].dataCount,
                        h = e[a].totalCount - l;
                    i = Math.max(i, l), n = Math.max(n, h), r[a] = new Array(l);
                    for (var c = 0; c < r[a].length; c++) r[a][c] = 255 & t.buffer[c + o];
                    o += l;
                    var u = d.getErrorCorrectPolynomial(h),
                        p = new v(r[a], u.getLength() - 1).mod(u);
                    s[a] = new Array(u.getLength() - 1);
                    for (c = 0; c < s[a].length; c++) {
                        var f = c + p.getLength() - s[a].length;
                        s[a][c] = f >= 0 ? p.get(f) : 0
                    }
                }
                var m = 0;
                for (c = 0; c < e.length; c++) m += e[c].totalCount;
                var g = new Array(m),
                    y = 0;
                for (c = 0; c < i; c++)
                    for (a = 0; a < e.length; a++) c < r[a].length && (g[y++] = r[a][c]);
                for (c = 0; c < n; c++)
                    for (a = 0; a < e.length; a++) c < s[a].length && (g[y++] = s[a][c]);
                return g
            };
            for (var o = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }, n = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }, r = 0, s = 1, a = 2, l = 3, h = 4, c = 5, u = 6, p = 7, d = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(t) {
                        for (var e = t << 10; d.getBCHDigit(e) - d.getBCHDigit(d.G15) >= 0;) e ^= d.G15 << d.getBCHDigit(e) - d.getBCHDigit(d.G15);
                        return (t << 10 | e) ^ d.G15_MASK
                    },
                    getBCHTypeNumber: function(t) {
                        for (var e = t << 12; d.getBCHDigit(e) - d.getBCHDigit(d.G18) >= 0;) e ^= d.G18 << d.getBCHDigit(e) - d.getBCHDigit(d.G18);
                        return t << 12 | e
                    },
                    getBCHDigit: function(t) {
                        for (var e = 0; 0 != t;) e++, t >>>= 1;
                        return e
                    },
                    getPatternPosition: function(t) {
                        return d.PATTERN_POSITION_TABLE[t - 1]
                    },
                    getMask: function(t, e, o) {
                        switch (t) {
                            case r:
                                return (e + o) % 2 == 0;
                            case s:
                                return e % 2 == 0;
                            case a:
                                return o % 3 == 0;
                            case l:
                                return (e + o) % 3 == 0;
                            case h:
                                return (Math.floor(e / 2) + Math.floor(o / 3)) % 2 == 0;
                            case c:
                                return e * o % 2 + e * o % 3 == 0;
                            case u:
                                return (e * o % 2 + e * o % 3) % 2 == 0;
                            case p:
                                return (e * o % 3 + (e + o) % 2) % 2 == 0;
                            default:
                                throw new Error("bad maskPattern:" + t)
                        }
                    },
                    getErrorCorrectPolynomial: function(t) {
                        for (var e = new v([1], 0), o = 0; o < t; o++) e = e.multiply(new v([1, f.gexp(o)], 0));
                        return e
                    },
                    getLengthInBits: function(t, e) {
                        if (1 <= e && e < 10) switch (t) {
                            case o.MODE_NUMBER:
                                return 10;
                            case o.MODE_ALPHA_NUM:
                                return 9;
                            case o.MODE_8BIT_BYTE:
                            case o.MODE_KANJI:
                                return 8;
                            default:
                                throw new Error("mode:" + t)
                        } else if (e < 27) switch (t) {
                            case o.MODE_NUMBER:
                                return 12;
                            case o.MODE_ALPHA_NUM:
                                return 11;
                            case o.MODE_8BIT_BYTE:
                                return 16;
                            case o.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error("mode:" + t)
                        } else {
                            if (!(e < 41)) throw new Error("type:" + e);
                            switch (t) {
                                case o.MODE_NUMBER:
                                    return 14;
                                case o.MODE_ALPHA_NUM:
                                    return 13;
                                case o.MODE_8BIT_BYTE:
                                    return 16;
                                case o.MODE_KANJI:
                                    return 12;
                                default:
                                    throw new Error("mode:" + t)
                            }
                        }
                    },
                    getLostPoint: function(t) {
                        for (var e = t.getModuleCount(), o = 0, i = 0; i < e; i++)
                            for (var n = 0; n < e; n++) {
                                for (var r = 0, s = t.isDark(i, n), a = -1; a <= 1; a++)
                                    if (!(i + a < 0 || e <= i + a))
                                        for (var l = -1; l <= 1; l++) n + l < 0 || e <= n + l || 0 == a && 0 == l || s == t.isDark(i + a, n + l) && r++;
                                r > 5 && (o += 3 + r - 5)
                            }
                        for (i = 0; i < e - 1; i++)
                            for (n = 0; n < e - 1; n++) {
                                var h = 0;
                                t.isDark(i, n) && h++, t.isDark(i + 1, n) && h++, t.isDark(i, n + 1) && h++, t.isDark(i + 1, n + 1) && h++, 0 != h && 4 != h || (o += 3)
                            }
                        for (i = 0; i < e; i++)
                            for (n = 0; n < e - 6; n++) t.isDark(i, n) && !t.isDark(i, n + 1) && t.isDark(i, n + 2) && t.isDark(i, n + 3) && t.isDark(i, n + 4) && !t.isDark(i, n + 5) && t.isDark(i, n + 6) && (o += 40);
                        for (n = 0; n < e; n++)
                            for (i = 0; i < e - 6; i++) t.isDark(i, n) && !t.isDark(i + 1, n) && t.isDark(i + 2, n) && t.isDark(i + 3, n) && t.isDark(i + 4, n) && !t.isDark(i + 5, n) && t.isDark(i + 6, n) && (o += 40);
                        var c = 0;
                        for (n = 0; n < e; n++)
                            for (i = 0; i < e; i++) t.isDark(i, n) && c++;
                        return o += 10 * (Math.abs(100 * c / e / e - 50) / 5)
                    }
                }, f = {
                    glog: function(t) {
                        if (t < 1) throw new Error("glog(" + t + ")");
                        return f.LOG_TABLE[t]
                    },
                    gexp: function(t) {
                        for (; t < 0;) t += 255;
                        for (; t >= 256;) t -= 255;
                        return f.EXP_TABLE[t]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, m = 0; m < 8; m++) f.EXP_TABLE[m] = 1 << m;
            for (m = 8; m < 256; m++) f.EXP_TABLE[m] = f.EXP_TABLE[m - 4] ^ f.EXP_TABLE[m - 5] ^ f.EXP_TABLE[m - 6] ^ f.EXP_TABLE[m - 8];
            for (m = 0; m < 255; m++) f.LOG_TABLE[f.EXP_TABLE[m]] = m;

            function v(t, e) {
                if (void 0 == t.length) throw new Error(t.length + "/" + e);
                for (var o = 0; o < t.length && 0 == t[o];) o++;
                this.num = new Array(t.length - o + e);
                for (var i = 0; i < t.length - o; i++) this.num[i] = t[i + o]
            }

            function g(t, e) {
                this.totalCount = t, this.dataCount = e
            }

            function y() {
                this.buffer = [], this.length = 0
            }
            v.prototype = {
                get: function(t) {
                    return this.num[t]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(t) {
                    for (var e = new Array(this.getLength() + t.getLength() - 1), o = 0; o < this.getLength(); o++)
                        for (var i = 0; i < t.getLength(); i++) e[o + i] ^= f.gexp(f.glog(this.get(o)) + f.glog(t.get(i)));
                    return new v(e, 0)
                },
                mod: function(t) {
                    if (this.getLength() - t.getLength() < 0) return this;
                    for (var e = f.glog(this.get(0)) - f.glog(t.get(0)), o = new Array(this.getLength()), i = 0; i < this.getLength(); i++) o[i] = this.get(i);
                    for (i = 0; i < t.getLength(); i++) o[i] ^= f.gexp(f.glog(t.get(i)) + e);
                    return new v(o, 0).mod(t)
                }
            }, g.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], g.getRSBlocks = function(t, e) {
                var o = g.getRsBlockTable(t, e);
                if (void 0 == o) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                for (var i = o.length / 3, n = [], r = 0; r < i; r++)
                    for (var s = o[3 * r + 0], a = o[3 * r + 1], l = o[3 * r + 2], h = 0; h < s; h++) n.push(new g(a, l));
                return n
            }, g.getRsBlockTable = function(t, e) {
                switch (e) {
                    case n.L:
                        return g.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                    case n.M:
                        return g.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                    case n.Q:
                        return g.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                    case n.H:
                        return g.RS_BLOCK_TABLE[4 * (t - 1) + 3];
                    default:
                        return
                }
            }, y.prototype = {
                get: function(t) {
                    var e = Math.floor(t / 8);
                    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                },
                put: function(t, e) {
                    for (var o = 0; o < e; o++) this.putBit(1 == (t >>> e - o - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            };
            var w = [
                [17, 14, 11, 7],
                [32, 26, 20, 14],
                [53, 42, 32, 24],
                [78, 62, 46, 34],
                [106, 84, 60, 44],
                [134, 106, 74, 58],
                [154, 122, 86, 64],
                [192, 152, 108, 84],
                [230, 180, 130, 98],
                [271, 213, 151, 119],
                [321, 251, 177, 137],
                [367, 287, 203, 155],
                [425, 331, 241, 177],
                [458, 362, 258, 194],
                [520, 412, 292, 220],
                [586, 450, 322, 250],
                [644, 504, 364, 280],
                [718, 560, 394, 310],
                [792, 624, 442, 338],
                [858, 666, 482, 382],
                [929, 711, 509, 403],
                [1003, 779, 565, 439],
                [1091, 857, 611, 461],
                [1171, 911, 661, 511],
                [1273, 997, 715, 535],
                [1367, 1059, 751, 593],
                [1465, 1125, 805, 625],
                [1528, 1190, 868, 658],
                [1628, 1264, 908, 698],
                [1732, 1370, 982, 742],
                [1840, 1452, 1030, 790],
                [1952, 1538, 1112, 842],
                [2068, 1628, 1168, 898],
                [2188, 1722, 1228, 958],
                [2303, 1809, 1283, 983],
                [2431, 1911, 1351, 1051],
                [2563, 1989, 1423, 1093],
                [2699, 2099, 1499, 1139],
                [2809, 2213, 1579, 1219],
                [2953, 2331, 1663, 1273]
            ];

            function k() {
                var t = !1,
                    e = navigator.userAgent;
                if (/android/i.test(e)) {
                    t = !0;
                    var o = e.toString().match(/android ([0-9]\.[0-9])/i);
                    o && o[1] && (t = parseFloat(o[1]))
                }
                return t
            }
            var T = function() {
                    var t = function(t, e) {
                        this._el = t, this._htOption = e
                    };
                    return t.prototype.draw = function(t) {
                        var e = this._htOption,
                            o = this._el,
                            i = t.getModuleCount();
                        Math.floor(e.width / i), Math.floor(e.height / i);

                        function n(t, e) {
                            var o = document.createElementNS("http://www.w3.org/2000/svg", t);
                            for (var i in e) e.hasOwnProperty(i) && o.setAttribute(i, e[i]);
                            return o
                        }
                        this.clear();
                        var r = n("svg", {
                            viewBox: "0 0 " + String(i) + " " + String(i),
                            width: "100%",
                            height: "100%",
                            fill: e.colorLight
                        });
                        r.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), o.appendChild(r), r.appendChild(n("rect", {
                            fill: e.colorLight,
                            width: "100%",
                            height: "100%"
                        })), r.appendChild(n("rect", {
                            fill: e.colorDark,
                            width: "1",
                            height: "1",
                            id: "template"
                        }));
                        for (var s = 0; s < i; s++)
                            for (var a = 0; a < i; a++)
                                if (t.isDark(s, a)) {
                                    var l = n("use", {
                                        x: String(a),
                                        y: String(s)
                                    });
                                    l.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), r.appendChild(l)
                                }
                    }, t.prototype.clear = function() {
                        for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
                    }, t
                }(),
                b = "svg" === document.documentElement.tagName.toLowerCase() ? T : "undefined" == typeof CanvasRenderingContext2D ? function() {
                    var t = function(t, e) {
                        this._el = t, this._htOption = e
                    };
                    return t.prototype.draw = function(t) {
                        for (var e = this._htOption, o = this._el, i = t.getModuleCount(), n = Math.floor(e.width / i), r = Math.floor(e.height / i), s = ['<table style="border:0;border-collapse:collapse;">'], a = 0; a < i; a++) {
                            s.push("<tr>");
                            for (var l = 0; l < i; l++) s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + n + "px;height:" + r + "px;background-color:" + (t.isDark(a, l) ? e.colorDark : e.colorLight) + ';"></td>');
                            s.push("</tr>")
                        }
                        s.push("</table>"), o.innerHTML = s.join("");
                        var h = o.childNodes[0],
                            c = (e.width - h.offsetWidth) / 2,
                            u = (e.height - h.offsetHeight) / 2;
                        c > 0 && u > 0 && (h.style.margin = u + "px " + c + "px")
                    }, t.prototype.clear = function() {
                        this._el.innerHTML = ""
                    }, t
                }() : function() {
                    function t() {
                        this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
                    }
                    if (this._android && this._android <= 2.1) {
                        var e = 1 / window.devicePixelRatio,
                            o = CanvasRenderingContext2D.prototype.drawImage;
                        CanvasRenderingContext2D.prototype.drawImage = function(t, i, n, r, s, a, l, h, c) {
                            if ("nodeName" in t && /img/i.test(t.nodeName))
                                for (var u = arguments.length - 1; u >= 1; u--) arguments[u] = arguments[u] * e;
                            else void 0 === h && (arguments[1] *= e, arguments[2] *= e, arguments[3] *= e, arguments[4] *= e);
                            o.apply(this, arguments)
                        }
                    }
                    var i = function(t, e) {
                        this._bIsPainted = !1, this._android = k(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
                    };
                    return i.prototype.draw = function(t) {
                        var e = this._elImage,
                            o = this._oContext,
                            i = this._htOption,
                            n = t.getModuleCount(),
                            r = i.width / n,
                            s = i.height / n,
                            a = Math.round(r),
                            l = Math.round(s);
                        e.style.display = "none", this.clear();
                        for (var h = 0; h < n; h++)
                            for (var c = 0; c < n; c++) {
                                var u = t.isDark(h, c),
                                    p = c * r,
                                    d = h * s;
                                o.strokeStyle = u ? i.colorDark : i.colorLight, o.lineWidth = 1, o.fillStyle = u ? i.colorDark : i.colorLight, o.fillRect(p, d, r, s), o.strokeRect(Math.floor(p) + .5, Math.floor(d) + .5, a, l), o.strokeRect(Math.ceil(p) - .5, Math.ceil(d) - .5, a, l)
                            }
                        this._bIsPainted = !0
                    }, i.prototype.makeImage = function() {
                        this._bIsPainted && function(t, e) {
                            var o = this;
                            if (o._fFail = e, o._fSuccess = t, null === o._bSupportDataURI) {
                                var i = document.createElement("img"),
                                    n = function() {
                                        o._bSupportDataURI = !1, o._fFail && o._fFail.call(o)
                                    };
                                return i.onabort = n, i.onerror = n, i.onload = function() {
                                    o._bSupportDataURI = !0, o._fSuccess && o._fSuccess.call(o)
                                }, void(i.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                            }!0 === o._bSupportDataURI && o._fSuccess ? o._fSuccess.call(o) : !1 === o._bSupportDataURI && o._fFail && o._fFail.call(o)
                        }.call(this, t)
                    }, i.prototype.isPainted = function() {
                        return this._bIsPainted
                    }, i.prototype.clear = function() {
                        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
                    }, i.prototype.round = function(t) {
                        return t ? Math.floor(1e3 * t) / 1e3 : t
                    }, i
                }();

            function P(t, e) {
                for (var o = 1, i = function(t) {
                        var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                        return e.length + (e.length != t ? 3 : 0)
                    }(t), r = 0, s = w.length; r <= s; r++) {
                    var a = 0;
                    switch (e) {
                        case n.L:
                            a = w[r][0];
                            break;
                        case n.M:
                            a = w[r][1];
                            break;
                        case n.Q:
                            a = w[r][2];
                            break;
                        case n.H:
                            a = w[r][3]
                    }
                    if (i <= a) break;
                    o++
                }
                if (o > w.length) throw new Error("Too long data");
                return o
            }
            return (i = function(t, e) {
                if (this._htOption = {
                        width: 256,
                        height: 256,
                        typeNumber: 4,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: n.H
                    }, "string" == typeof e && (e = {
                        text: e
                    }), e)
                    for (var o in e) this._htOption[o] = e[o];
                "string" == typeof t && (t = document.getElementById(t)), this._htOption.useSVG && (b = T), this._android = k(), this._el = t, this._oQRCode = null, this._oDrawing = new b(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
            }).prototype.makeCode = function(t) {
                this._oQRCode = new e(P(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
            }, i.prototype.makeImage = function() {
                "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
            }, i.prototype.clear = function() {
                this._oDrawing.clear()
            }, i.CorrectLevel = n, i
        }, t.exports = n()
    },
    NIiy: function(t, e, o) {
        t.exports = o.p + "static/img/not-in-time-icon.8c0e6a0.png"
    },
    c6Ft: function(t, e, o) {
        "use strict";
        var i = o("Xxa5"),
            n = o.n(i),
            r = o("//Fk"),
            s = o.n(r),
            a = o("exGp"),
            l = o.n(a),
            h = function(t, e) {
                return (h = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            };

        function c(t, e) {
            function o() {
                this.constructor = t
            }
            h(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }
        var u = function() {
            return (u = Object.assign || function(t) {
                for (var e, o = 1, i = arguments.length; o < i; o++)
                    for (var n in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }).apply(this, arguments)
        };

        function p(t) {
            console.error("[BScroll warn]: " + t)
        }
        var d = "undefined" != typeof window,
            f = d && navigator.userAgent.toLowerCase(),
            m = f && /wechatdevtools/.test(f),
            v = f && f.indexOf("android") > 0;

        function g() {
            return window.performance && window.performance.now && window.performance.timing ? window.performance.now() + window.performance.timing.navigationStart : +new Date
        }

        function y(t) {
            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                for (var r in n) t[r] = n[r]
            }
            return t
        }

        function w(t) {
            return void 0 === t || null === t
        }
        var k = d && document.createElement("div").style,
            T = function() {
                if (!d) return !1;
                var t = {
                    webkit: "webkitTransform",
                    Moz: "MozTransform",
                    O: "OTransform",
                    ms: "msTransform",
                    standard: "transform"
                };
                for (var e in t)
                    if (void 0 !== k[t[e]]) return e;
                return !1
            }();

        function b(t) {
            return !1 === T ? t : "standard" === T ? "transitionEnd" === t ? "transitionend" : t : T + t.charAt(0).toUpperCase() + t.substr(1)
        }

        function P(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }

        function D(t, e, o, i) {
            t.addEventListener(e, o, {
                passive: !1,
                capture: !!i
            })
        }

        function C(t, e, o, i) {
            t.removeEventListener(e, o, {
                capture: !!i
            })
        }

        function E(t) {
            for (var e = 0, o = 0; t;) e -= t.offsetLeft, o -= t.offsetTop, t = t.offsetParent;
            return {
                left: e,
                top: o
            }
        }
        T && "standard" !== T && T.toLowerCase();
        var S = b("transform"),
            A = b("transition"),
            B = d && b("perspective") in k,
            L = d && ("ontouchstart" in window || m),
            O = d && A in k,
            M = {
                transform: S,
                transition: A,
                transitionTimingFunction: b("transitionTimingFunction"),
                transitionDuration: b("transitionDuration"),
                transitionDelay: b("transitionDelay"),
                transformOrigin: b("transformOrigin"),
                transitionEnd: b("transitionEnd")
            },
            x = {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2
            };

        function _(t) {
            if (t instanceof window.SVGElement) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height
                }
            }
            return {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }

        function R(t, e) {
            for (var o in e)
                if (e[o].test(t[o])) return !0;
            return !1
        }
        var F = R;

        function U(t, e) {
            var o;
            void 0 === e && (e = "click"), "mouseup" === t.type ? o = t : "touchend" !== t.type && "touchcancel" !== t.type || (o = t.changedTouches[0]);
            var i, n = {};
            o && (n.screenX = o.screenX || 0, n.screenY = o.screenY || 0, n.clientX = o.clientX || 0, n.clientY = o.clientY || 0);
            var r = !0,
                s = !0;
            if ("undefined" != typeof MouseEvent) try {
                i = new MouseEvent(e, y({
                    bubbles: r,
                    cancelable: s
                }, n))
            } catch (t) {
                a()
            } else a();

            function a() {
                (i = document.createEvent("Event")).initEvent(e, r, s), y(i, n)
            }
            i.forwardedTouchEvent = !0, i._constructed = !0, t.target.dispatchEvent(i)
        }
        var Y = {
                swipe: {
                    style: "cubic-bezier(0.23, 1, 0.32, 1)",
                    fn: function(t) {
                        return 1 + --t * t * t * t * t
                    }
                },
                swipeBounce: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(t) {
                        return t * (2 - t)
                    }
                },
                bounce: {
                    style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                    fn: function(t) {
                        return 1 - --t * t * t * t
                    }
                }
            },
            X = d && window;

        function N() {}
        var I = d ? X.requestAnimationFrame || X.webkitRequestAnimationFrame || X.mozRequestAnimationFrame || X.oRequestAnimationFrame || function(t) {
                return window.setTimeout(t, (t.interval || 100 / 60) / 2)
            } : N,
            H = d ? X.cancelAnimationFrame || X.webkitCancelAnimationFrame || X.mozCancelAnimationFrame || X.oCancelAnimationFrame || function(t) {
                window.clearTimeout(t)
            } : N,
            K = function(t) {},
            Q = {
                enumerable: !0,
                configurable: !0,
                get: K,
                set: K
            },
            j = function(t, e) {
                for (var o = e.split("."), i = 0; i < o.length - 1; i++)
                    if ("object" != typeof(t = t[o[i]]) || !t) return;
                var n = o.pop();
                return "function" == typeof t[n] ? function() {
                    return t[n].apply(t, arguments)
                } : t[n]
            },
            q = function(t, e, o) {
                for (var i, n = e.split("."), r = 0; r < n.length - 1; r++) t[i = n[r]] || (t[i] = {}), t = t[i];
                t[n.pop()] = o
            };
        var J = function() {
                function t(t) {
                    this.events = {}, this.eventTypes = {}, this.registerType(t)
                }
                return t.prototype.on = function(t, e, o) {
                    return void 0 === o && (o = this), this.hasType(t), this.events[t] || (this.events[t] = []), this.events[t].push([e, o]), this
                }, t.prototype.once = function(t, e, o) {
                    var i = this;
                    void 0 === o && (o = this), this.hasType(t);
                    var n = function() {
                        for (var r = [], s = 0; s < arguments.length; s++) r[s] = arguments[s];
                        i.off(t, n), e.apply(o, r)
                    };
                    return n.fn = e, this.on(t, n), this
                }, t.prototype.off = function(t, e) {
                    if (!t && !e) return this.events = {}, this;
                    if (t) {
                        if (this.hasType(t), !e) return this.events[t] = [], this;
                        var o = this.events[t];
                        if (!o) return this;
                        for (var i = o.length; i--;)(o[i][0] === e || o[i][0] && o[i][0].fn === e) && o.splice(i, 1);
                        return this
                    }
                }, t.prototype.trigger = function(t) {
                    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
                    this.hasType(t);
                    var i = this.events[t];
                    if (i)
                        for (var n, r = i.length, s = i.slice(), a = 0; a < r; a++) {
                            var l = s[a],
                                h = l[0],
                                c = l[1];
                            if (h && !0 === (n = h.apply(c, e))) return n
                        }
                }, t.prototype.registerType = function(t) {
                    var e = this;
                    t.forEach(function(t) {
                        e.eventTypes[t] = t
                    })
                }, t.prototype.destroy = function() {
                    this.events = {}, this.eventTypes = {}
                }, t.prototype.hasType = function(t) {
                    var e = this.eventTypes;
                    e[t] === t || p('EventEmitter has used unknown event type: "' + t + '", should be oneof [' + Object.keys(e).map(function(t) {
                        return JSON.stringify(t)
                    }) + "]")
                }, t
            }(),
            z = function() {
                function t(t, e) {
                    this.wrapper = t, this.events = e, this.addDOMEvents()
                }
                return t.prototype.destroy = function() {
                    this.removeDOMEvents(), this.events = []
                }, t.prototype.addDOMEvents = function() {
                    this.handleDOMEvents(D)
                }, t.prototype.removeDOMEvents = function() {
                    this.handleDOMEvents(C)
                }, t.prototype.handleDOMEvents = function(t) {
                    var e = this,
                        o = this.wrapper;
                    this.events.forEach(function(i) {
                        t(o, i.name, e, !!i.capture)
                    })
                }, t.prototype.handleEvent = function(t) {
                    var e = t.type;
                    this.events.some(function(o) {
                        return o.name === e && (o.handler(t), !0)
                    })
                }, t
            }(),
            V = function() {
                function t() {
                    this.startX = 0, this.startY = 0, this.scrollX = !1, this.scrollY = !0, this.freeScroll = !1, this.directionLockThreshold = 5, this.eventPassthrough = "", this.click = !1, this.dblclick = !1, this.tap = "", this.bounce = {
                        top: !0,
                        bottom: !0,
                        left: !0,
                        right: !0
                    }, this.bounceTime = 800, this.momentum = !0, this.momentumLimitTime = 300, this.momentumLimitDistance = 15, this.swipeTime = 2500, this.swipeBounceTime = 500, this.deceleration = .0015, this.flickLimitTime = 200, this.flickLimitDistance = 100, this.resizePolling = 60, this.probeType = 0, this.stopPropagation = !1, this.preventDefault = !0, this.preventDefaultException = {
                        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
                    }, this.tagException = {
                        tagName: /^TEXTAREA$/
                    }, this.HWCompositing = !0, this.useTransition = !0, this.bindToWrapper = !1, this.disableMouse = L, this.disableTouch = !L, this.autoBlur = !0
                }
                return t.prototype.merge = function(t) {
                    if (!t) return this;
                    for (var e in t) this[e] = t[e];
                    return this
                }, t.prototype.process = function() {
                    return this.translateZ = this.HWCompositing && B ? " translateZ(0)" : "", this.useTransition = this.useTransition && O, this.preventDefault = !this.eventPassthrough && this.preventDefault, this.resolveBounce(), this.scrollX = "horizontal" !== this.eventPassthrough && this.scrollX, this.scrollY = "vertical" !== this.eventPassthrough && this.scrollY, this.freeScroll = this.freeScroll && !this.eventPassthrough, this.scrollX = !!this.freeScroll || this.scrollX, this.scrollY = !!this.freeScroll || this.scrollY, this.directionLockThreshold = this.eventPassthrough ? 0 : this.directionLockThreshold, this
                }, t.prototype.resolveBounce = function() {
                    var t = this.bounce;
                    !1 !== t && !0 !== t || (this.bounce = function(t, e) {
                        void 0 === e && (e = !0);
                        var o = {};
                        return t.forEach(function(t) {
                            o[t] = e
                        }), o
                    }(["top", "right", "bottom", "left"], t))
                }, t
            }();
        var Z = function() {
                function t(t, e) {
                    this.wrapper = t, this.options = e, this.hooks = new J(["beforeStart", "start", "move", "end", "click"]), this.handleDOMEvents()
                }
                return t.prototype.handleDOMEvents = function() {
                    var t = this.options,
                        e = t.bindToWrapper,
                        o = t.disableMouse,
                        i = t.disableTouch,
                        n = t.click,
                        r = this.wrapper,
                        s = e ? r : window,
                        a = [],
                        l = [],
                        h = L && !i,
                        c = !o;
                    n && a.push({
                        name: "click",
                        handler: this.click.bind(this),
                        capture: !0
                    }), h && (a.push({
                        name: "touchstart",
                        handler: this.start.bind(this)
                    }), l.push({
                        name: "touchmove",
                        handler: this.move.bind(this)
                    }, {
                        name: "touchend",
                        handler: this.end.bind(this)
                    }, {
                        name: "touchcancel",
                        handler: this.end.bind(this)
                    })), c && (a.push({
                        name: "mousedown",
                        handler: this.start.bind(this)
                    }), l.push({
                        name: "mousemove",
                        handler: this.move.bind(this)
                    }, {
                        name: "mouseup",
                        handler: this.end.bind(this)
                    })), this.wrapperEventRegister = new z(r, a), this.targetEventRegister = new z(s, l)
                }, t.prototype.beforeHandler = function(t, e) {
                    var o = this.options,
                        i = o.preventDefault,
                        n = o.stopPropagation,
                        r = o.preventDefaultException;
                    ({
                        start: function() {
                            return i && !R(t.target, r)
                        },
                        end: function() {
                            return i && !R(t.target, r)
                        },
                        move: function() {
                            return i
                        }
                    })[e]() && t.preventDefault(), n && t.stopPropagation()
                }, t.prototype.setInitiated = function(t) {
                    void 0 === t && (t = 0), this.initiated = t
                }, t.prototype.start = function(t) {
                    var e = x[t.type];
                    if (!this.initiated || this.initiated === e)
                        if (this.setInitiated(e), F(t.target, this.options.tagException)) this.setInitiated();
                        else if ((2 !== e || 0 === t.button) && !this.hooks.trigger(this.hooks.eventTypes.beforeStart, t)) {
                        this.beforeHandler(t, "start");
                        var o = t.touches ? t.touches[0] : t;
                        this.pointX = o.pageX, this.pointY = o.pageY, this.hooks.trigger(this.hooks.eventTypes.start, t)
                    }
                }, t.prototype.move = function(t) {
                    if (x[t.type] === this.initiated) {
                        this.beforeHandler(t, "move");
                        var e = t.touches ? t.touches[0] : t,
                            o = e.pageX - this.pointX,
                            i = e.pageY - this.pointY;
                        if (this.pointX = e.pageX, this.pointY = e.pageY, !this.hooks.trigger(this.hooks.eventTypes.move, {
                                deltaX: o,
                                deltaY: i,
                                e: t
                            })) {
                            var n = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft,
                                r = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                                s = this.pointX - n,
                                a = this.pointY - r;
                            (s > document.documentElement.clientWidth - this.options.momentumLimitDistance || s < this.options.momentumLimitDistance || a < this.options.momentumLimitDistance || a > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this.end(t)
                        }
                    }
                }, t.prototype.end = function(t) {
                    x[t.type] === this.initiated && (this.setInitiated(), this.beforeHandler(t, "end"), this.hooks.trigger(this.hooks.eventTypes.end, t))
                }, t.prototype.click = function(t) {
                    this.hooks.trigger(this.hooks.eventTypes.click, t)
                }, t.prototype.destroy = function() {
                    this.wrapperEventRegister.destroy(), this.targetEventRegister.destroy(), this.hooks.destroy()
                }, t
            }(),
            G = {
                x: ["translateX", "px"],
                y: ["translateY", "px"]
            },
            W = function() {
                function t(t) {
                    this.content = t, this.style = t.style, this.hooks = new J(["beforeTranslate", "translate"])
                }
                return t.prototype.getComputedPosition = function() {
                    var t = window.getComputedStyle(this.content, null)[M.transform].split(")")[0].split(", ");
                    return {
                        x: +(t[12] || t[4]),
                        y: +(t[13] || t[5])
                    }
                }, t.prototype.translate = function(t) {
                    var e = [];
                    Object.keys(t).forEach(function(o) {
                        if (G[o]) {
                            var i = G[o][0];
                            if (i) {
                                var n = G[o][1],
                                    r = t[o];
                                e.push(i + "(" + r + n + ")")
                            }
                        }
                    }), this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, e, t), this.style[M.transform] = e.join(" "), this.hooks.trigger(this.hooks.eventTypes.translate, t)
                }, t.prototype.destroy = function() {
                    this.hooks.destroy()
                }, t
            }(),
            $ = function() {
                function t(t, e, o) {
                    this.content = t, this.translater = e, this.options = o, this.hooks = new J(["move", "end", "beforeForceStop", "forceStop", "time", "timeFunction"]), this.style = t.style
                }
                return t.prototype.translate = function(t) {
                    this.translater.translate(t)
                }, t.prototype.setPending = function(t) {
                    this.pending = t
                }, t.prototype.setForceStopped = function(t) {
                    this.forceStopped = t
                }, t.prototype.destroy = function() {
                    this.hooks.destroy(), H(this.timer)
                }, t
            }(),
            tt = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return c(e, t), e.prototype.startProbe = function() {
                    var t = this,
                        e = function() {
                            var o = t.translater.getComputedPosition();
                            t.hooks.trigger(t.hooks.eventTypes.move, o), t.pending ? t.timer = I(e) : t.hooks.trigger(t.hooks.eventTypes.end, o)
                        };
                    H(this.timer), this.timer = I(e)
                }, e.prototype.transitionTime = function(t) {
                    void 0 === t && (t = 0), this.style[M.transitionDuration] = t + "ms", this.hooks.trigger(this.hooks.eventTypes.time, t)
                }, e.prototype.transitionTimingFunction = function(t) {
                    this.style[M.transitionTimingFunction] = t, this.hooks.trigger(this.hooks.eventTypes.timeFunction, t)
                }, e.prototype.move = function(t, e, o, i, n) {
                    this.setPending(o > 0 && (t.x !== e.x || t.y !== e.y)), this.transitionTimingFunction(i), this.transitionTime(o), this.translate(e), o && 3 === this.options.probeType && this.startProbe(), o || (this._reflow = this.content.offsetHeight), o || n || (this.hooks.trigger(this.hooks.eventTypes.move, e), this.hooks.trigger(this.hooks.eventTypes.end, e))
                }, e.prototype.stop = function() {
                    if (this.pending) {
                        this.setPending(!1), H(this.timer);
                        var t = this.translater.getComputedPosition(),
                            e = t.x,
                            o = t.y;
                        if (this.transitionTime(), this.translate({
                                x: e,
                                y: o
                            }), this.setForceStopped(!0), this.hooks.trigger(this.hooks.eventTypes.beforeForceStop, {
                                x: e,
                                y: o
                            })) return;
                        this.hooks.trigger(this.hooks.eventTypes.forceStop, {
                            x: e,
                            y: o
                        })
                    }
                }, e
            }($),
            et = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return c(e, t), e.prototype.move = function(t, e, o, i, n) {
                    if (!o) {
                        if (this.translate(e), this._reflow = this.content.offsetHeight, n) return;
                        return this.hooks.trigger(this.hooks.eventTypes.move, e), void this.hooks.trigger(this.hooks.eventTypes.end, e)
                    }
                    this.animate(t, e, o, i)
                }, e.prototype.animate = function(t, e, o, i) {
                    var n = this,
                        r = g(),
                        s = r + o,
                        a = function() {
                            var l = g();
                            if (l >= s) return n.translate(e), n.hooks.trigger(n.hooks.eventTypes.move, e), void n.hooks.trigger(n.hooks.eventTypes.end, e);
                            var h = i(l = (l - r) / o),
                                c = {};
                            Object.keys(e).forEach(function(o) {
                                var i = t[o],
                                    n = e[o];
                                c[o] = (n - i) * h + i
                            }), n.translate(c), n.pending && (n.timer = I(a)), 3 === n.options.probeType && n.hooks.trigger(n.hooks.eventTypes.move, c)
                        };
                    this.setPending(!0), H(this.timer), a()
                }, e.prototype.stop = function() {
                    if (this.pending) {
                        this.setPending(!1), H(this.timer);
                        var t = this.translater.getComputedPosition();
                        if (this.setForceStopped(!0), this.hooks.trigger(this.hooks.eventTypes.beforeForceStop, t)) return;
                        this.hooks.trigger(this.hooks.eventTypes.forceStop, t)
                    }
                }, e
            }($);
        var ot, it, nt, rt, st = function() {
                function t(t, e) {
                    this.wrapper = t, this.options = e, this.hooks = new J(["momentum", "end"]), this.content = this.wrapper.children[0], this.currentPos = 0, this.startPos = 0
                }
                return t.prototype.start = function() {
                    this.direction = 0, this.movingDirection = 0, this.dist = 0
                }, t.prototype.move = function(t) {
                    t = this.hasScroll ? t : 0, this.movingDirection = t > 0 ? -1 : t < 0 ? 1 : 0;
                    var e = this.currentPos + t;
                    return (e > this.minScrollPos || e < this.maxScrollPos) && (e = e > this.minScrollPos && this.options.bounces[0] || e < this.maxScrollPos && this.options.bounces[1] ? this.currentPos + t / 3 : e > this.minScrollPos ? this.minScrollPos : this.maxScrollPos), e
                }, t.prototype.end = function(t) {
                    var e = {
                            duration: 0
                        },
                        o = Math.abs(this.currentPos - this.startPos);
                    if (this.options.momentum && t < this.options.momentumLimitTime && o > this.options.momentumLimitDistance) {
                        var i = -1 === this.direction && this.options.bounces[0] || 1 === this.direction && this.options.bounces[1] ? this.wrapperSize : 0;
                        e = this.hasScroll ? this.momentum(this.currentPos, this.startPos, t, this.maxScrollPos, this.minScrollPos, i, this.options) : {
                            destination: this.currentPos,
                            duration: 0
                        }
                    } else this.hooks.trigger(this.hooks.eventTypes.end, e);
                    return e
                }, t.prototype.momentum = function(t, e, o, i, n, r, s) {
                    void 0 === s && (s = this.options);
                    var a = t - e,
                        l = Math.abs(a) / o,
                        h = s.deceleration,
                        c = s.swipeBounceTime,
                        u = s.swipeTime,
                        p = {
                            destination: t + l / h * (a < 0 ? -1 : 1),
                            duration: u,
                            rate: 15
                        };
                    return this.hooks.trigger(this.hooks.eventTypes.momentum, p, a), p.destination < i ? (p.destination = r ? Math.max(i - r / 4, i - r / p.rate * l) : i, p.duration = c) : p.destination > n && (p.destination = r ? Math.min(n + r / 4, n + r / p.rate * l) : n, p.duration = c), p.destination = Math.round(p.destination), p
                }, t.prototype.updateDirection = function() {
                    var t = Math.round(this.currentPos) - this.absStartPos;
                    this.direction = t > 0 ? -1 : t < 0 ? 1 : 0
                }, t.prototype.refresh = function() {
                    var t = this.options.rect,
                        e = t.size,
                        o = t.position,
                        i = "static" === window.getComputedStyle(this.wrapper, null).position,
                        n = _(this.wrapper);
                    this.wrapperSize = n[e];
                    var r = _(this.content);
                    this.contentSize = r[e], this.relativeOffset = r[o], i && (this.relativeOffset -= n[o]), this.minScrollPos = 0, this.maxScrollPos = this.wrapperSize - this.contentSize, this.maxScrollPos < 0 && (this.maxScrollPos -= this.relativeOffset, this.minScrollPos = -this.relativeOffset), this.hasScroll = this.options.scrollable && this.maxScrollPos < this.minScrollPos, this.hasScroll || (this.maxScrollPos = this.minScrollPos, this.contentSize = this.wrapperSize), this.direction = 0
                }, t.prototype.updatePosition = function(t) {
                    this.currentPos = t
                }, t.prototype.getCurrentPos = function() {
                    return Math.round(this.currentPos)
                }, t.prototype.checkInBoundary = function() {
                    var t = this.adjustPosition(this.currentPos);
                    return {
                        position: t,
                        inBoundary: t === this.getCurrentPos()
                    }
                }, t.prototype.adjustPosition = function(t) {
                    var e = Math.round(t);
                    return !this.hasScroll || e > this.minScrollPos ? e = this.minScrollPos : e < this.maxScrollPos && (e = this.maxScrollPos), e
                }, t.prototype.updateStartPos = function() {
                    this.startPos = this.currentPos
                }, t.prototype.updateAbsStartPos = function() {
                    this.absStartPos = this.currentPos
                }, t.prototype.resetStartPos = function() {
                    this.updateStartPos(), this.updateAbsStartPos()
                }, t.prototype.getAbsDist = function(t) {
                    return this.dist += t, Math.abs(this.dist)
                }, t.prototype.destroy = function() {
                    this.hooks.destroy()
                }, t
            }(),
            at = ((ot = {}).yes = function(t) {
                return !0
            }, ot.no = function(t) {
                return t.preventDefault(), !1
            }, ot),
            lt = ((it = {}).horizontal = ((nt = {}).yes = "horizontal", nt.no = "vertical", nt), it.vertical = ((rt = {}).yes = "vertical", rt.no = "horizontal", rt), it),
            ht = function() {
                function t(t, e, o) {
                    this.directionLockThreshold = t, this.freeScroll = e, this.eventPassthrough = o, this.reset()
                }
                return t.prototype.reset = function() {
                    this.directionLocked = ""
                }, t.prototype.checkMovingDirection = function(t, e, o) {
                    return this.computeDirectionLock(t, e), this.handleEventPassthrough(o)
                }, t.prototype.adjustDelta = function(t, e) {
                    return "horizontal" === this.directionLocked ? e = 0 : "vertical" === this.directionLocked && (t = 0), {
                        deltaX: t,
                        deltaY: e
                    }
                }, t.prototype.computeDirectionLock = function(t, e) {
                    "" !== this.directionLocked || this.freeScroll || (t > e + this.directionLockThreshold ? this.directionLocked = "horizontal" : e >= t + this.directionLockThreshold ? this.directionLocked = "vertical" : this.directionLocked = "none")
                }, t.prototype.handleEventPassthrough = function(t) {
                    var e = lt[this.directionLocked];
                    if (e) {
                        if (this.eventPassthrough === e.yes) return at.yes(t);
                        if (this.eventPassthrough === e.no) return at.no(t)
                    }
                    return !1
                }, t
            }(),
            ct = function() {
                function t(t, e, o, i, n) {
                    this.hooks = new J(["start", "beforeMove", "scrollStart", "scroll", "beforeEnd", "end", "scrollEnd"]), this.scrollBehaviorX = t, this.scrollBehaviorY = e, this.actionsHandler = o, this.animater = i, this.options = n, this.directionLockAction = new ht(n.directionLockThreshold, n.freeScroll, n.eventPassthrough), this.enabled = !0, this.bindActionsHandler()
                }
                return t.prototype.bindActionsHandler = function() {
                    var t = this;
                    this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function(e) {
                        return !t.enabled || t.handleStart(e)
                    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function(e) {
                        var o = e.deltaX,
                            i = e.deltaY,
                            n = e.e;
                        return !t.enabled || t.handleMove(o, i, n)
                    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function(e) {
                        return !t.enabled || t.handleEnd(e)
                    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function(e) {
                        t.enabled && !e._constructed && t.handleClick(e)
                    })
                }, t.prototype.handleStart = function(t) {
                    var e = g();
                    this.moved = !1, this.startTime = e, this.directionLockAction.reset(), this.scrollBehaviorX.start(), this.scrollBehaviorY.start(), this.animater.stop(), this.scrollBehaviorX.resetStartPos(), this.scrollBehaviorY.resetStartPos(), this.hooks.trigger(this.hooks.eventTypes.start, t)
                }, t.prototype.handleMove = function(t, e, o) {
                    if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, o)) {
                        var i = this.scrollBehaviorX.getAbsDist(t),
                            n = this.scrollBehaviorY.getAbsDist(e),
                            r = g();
                        if (this.checkMomentum(i, n, r)) return !0;
                        if (this.directionLockAction.checkMovingDirection(i, n, o)) return this.actionsHandler.setInitiated(), !0;
                        var s = this.directionLockAction.adjustDelta(t, e),
                            a = this.scrollBehaviorX.move(s.deltaX),
                            l = this.scrollBehaviorY.move(s.deltaY);
                        this.moved || (this.moved = !0, this.hooks.trigger(this.hooks.eventTypes.scrollStart)), this.animater.translate({
                            x: a,
                            y: l
                        }), this.dispatchScroll(r)
                    }
                }, t.prototype.dispatchScroll = function(t) {
                    t - this.startTime > this.options.momentumLimitTime && (this.startTime = t, this.scrollBehaviorX.updateStartPos(), this.scrollBehaviorY.updateStartPos(), 1 === this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())), this.options.probeType > 1 && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())
                }, t.prototype.checkMomentum = function(t, e, o) {
                    return o - this.endTime > this.options.momentumLimitTime && e < this.options.momentumLimitDistance && t < this.options.momentumLimitDistance
                }, t.prototype.handleEnd = function(t) {
                    if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, t)) {
                        var e = this.getCurrentPos();
                        if (this.scrollBehaviorX.updateDirection(), this.scrollBehaviorY.updateDirection(), this.hooks.trigger(this.hooks.eventTypes.end, t, e)) return !0;
                        this.animater.translate(e), this.endTime = g();
                        var o = this.endTime - this.startTime;
                        this.hooks.trigger(this.hooks.eventTypes.scrollEnd, e, o)
                    }
                }, t.prototype.handleClick = function(t) {
                    R(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation())
                }, t.prototype.getCurrentPos = function() {
                    return {
                        x: this.scrollBehaviorX.getCurrentPos(),
                        y: this.scrollBehaviorY.getCurrentPos()
                    }
                }, t.prototype.refresh = function() {
                    this.endTime = 0
                }, t.prototype.destroy = function() {
                    this.hooks.destroy()
                }, t
            }();

        function ut(t, e, o, i) {
            var n = ["momentum", "momentumLimitTime", "momentumLimitDistance", "deceleration", "swipeBounceTime", "swipeTime"].reduce(function(e, o) {
                return e[o] = t[o], e
            }, {});
            return n.scrollable = t[e], n.bounces = o, n.rect = i, n
        }

        function pt(t, e, o) {
            o.forEach(function(o) {
                var i, n;
                "string" == typeof o ? i = n = o : (i = o.source, n = o.target), t.on(i, function() {
                    for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                    return e.trigger.apply(e, [n].concat(t))
                })
            })
        }
        var dt, ft, mt = function() {
                function t(t, e) {
                    this.hooks = new J(["beforeStart", "beforeMove", "beforeScrollStart", "scrollStart", "scroll", "beforeEnd", "scrollEnd", "refresh", "touchEnd", "end", "flick", "scrollCancel", "momentum", "scrollTo", "ignoreDisMoveForSamePos", "scrollToElement", "resize"]), this.wrapper = t, this.content = t.children[0], this.options = e;
                    var o, i = this.options.bounce,
                        n = i.left,
                        r = void 0 === n || n,
                        s = i.right,
                        a = void 0 === s || s,
                        l = i.top,
                        h = void 0 === l || l,
                        c = i.bottom,
                        u = void 0 === c || c;
                    this.scrollBehaviorX = new st(t, ut(e, "scrollX", [r, a], {
                        size: "width",
                        position: "left"
                    })), this.scrollBehaviorY = new st(t, ut(e, "scrollY", [h, u], {
                        size: "height",
                        position: "top"
                    })), this.translater = new W(this.content), this.animater = function(t, e, o) {
                        var i = o.useTransition,
                            n = {};
                        return Object.defineProperty(n, "probeType", {
                            enumerable: !0,
                            configurable: !1,
                            get: function() {
                                return o.probeType
                            }
                        }), i ? new tt(t, e, n) : new et(t, e, n)
                    }(this.content, this.translater, this.options), this.actionsHandler = new Z(t, (o = this.options, ["click", "bindToWrapper", "disableMouse", "disableTouch", "preventDefault", "stopPropagation", "tagException", "preventDefaultException"].reduce(function(t, e) {
                        return t[e] = o[e], t
                    }, {}))), this.actions = new ct(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
                    var p = this.resize.bind(this);
                    this.resizeRegister = new z(window, [{
                        name: "orientationchange",
                        handler: p
                    }, {
                        name: "resize",
                        handler: p
                    }]), this.transitionEndRegister = new z(this.content, [{
                        name: M.transitionEnd,
                        handler: this.transitionEnd.bind(this)
                    }]), this.init()
                }
                return t.prototype.init = function() {
                    var t = this;
                    this.bindTranslater(), this.bindAnimater(), this.bindActions(), this.hooks.on(this.hooks.eventTypes.scrollEnd, function() {
                        t.togglePointerEvents(!0)
                    })
                }, t.prototype.bindTranslater = function() {
                    var t = this,
                        e = this.translater.hooks;
                    e.on(e.eventTypes.beforeTranslate, function(e) {
                        t.options.translateZ && e.push(t.options.translateZ)
                    }), e.on(e.eventTypes.translate, function(e) {
                        t.updatePositions(e), t.togglePointerEvents(!1)
                    })
                }, t.prototype.bindAnimater = function() {
                    var t = this;
                    this.animater.hooks.on(this.animater.hooks.eventTypes.end, function(e) {
                        t.resetPosition(t.options.bounceTime) || (t.animater.setPending(!1), t.hooks.trigger(t.hooks.eventTypes.scrollEnd, e))
                    }), pt(this.animater.hooks, this.hooks, [{
                        source: this.animater.hooks.eventTypes.move,
                        target: this.hooks.eventTypes.scroll
                    }, {
                        source: this.animater.hooks.eventTypes.forceStop,
                        target: this.hooks.eventTypes.scrollEnd
                    }])
                }, t.prototype.bindActions = function() {
                    var t = this,
                        e = this.actions;
                    pt(e.hooks, this.hooks, [{
                        source: e.hooks.eventTypes.start,
                        target: this.hooks.eventTypes.beforeStart
                    }, {
                        source: e.hooks.eventTypes.start,
                        target: this.hooks.eventTypes.beforeScrollStart
                    }, {
                        source: e.hooks.eventTypes.beforeMove,
                        target: this.hooks.eventTypes.beforeMove
                    }, {
                        source: e.hooks.eventTypes.scrollStart,
                        target: this.hooks.eventTypes.scrollStart
                    }, {
                        source: e.hooks.eventTypes.scroll,
                        target: this.hooks.eventTypes.scroll
                    }, {
                        source: e.hooks.eventTypes.beforeEnd,
                        target: this.hooks.eventTypes.beforeEnd
                    }]), e.hooks.on(e.hooks.eventTypes.end, function(o, i) {
                        return t.hooks.trigger(t.hooks.eventTypes.touchEnd, i), !!t.hooks.trigger(t.hooks.eventTypes.end, i) || (!e.moved && t.checkClick(o) ? (t.animater.setForceStopped(!1), t.hooks.trigger(t.hooks.eventTypes.scrollCancel), !0) : (t.animater.setForceStopped(!1), !!t.resetPosition(t.options.bounceTime, Y.bounce) || void 0))
                    }), e.hooks.on(e.hooks.eventTypes.scrollEnd, function(e, o) {
                        var i = Math.abs(e.x - t.scrollBehaviorX.startPos),
                            n = Math.abs(e.y - t.scrollBehaviorY.startPos);
                        t.checkFlick(o, i, n) ? t.hooks.trigger(t.hooks.eventTypes.flick) : t.momentum(e, o) || t.hooks.trigger(t.hooks.eventTypes.scrollEnd, e)
                    })
                }, t.prototype.checkFlick = function(t, e, o) {
                    if (this.hooks.events.flick.length > 1 && t < this.options.flickLimitTime && e < this.options.flickLimitDistance && o < this.options.flickLimitDistance) return !0
                }, t.prototype.momentum = function(t, e) {
                    var o = {
                            time: 0,
                            easing: Y.swiper,
                            newX: t.x,
                            newY: t.y
                        },
                        i = this.scrollBehaviorX.end(e),
                        n = this.scrollBehaviorY.end(e);
                    if (o.newX = w(i.destination) ? o.newX : i.destination, o.newY = w(n.destination) ? o.newY : n.destination, o.time = Math.max(i.duration, n.duration), this.hooks.trigger(this.hooks.eventTypes.momentum, o, this), o.newX !== t.x || o.newY !== t.y) return (o.newX > this.scrollBehaviorX.minScrollPos || o.newX < this.scrollBehaviorX.maxScrollPos || o.newY > this.scrollBehaviorY.minScrollPos || o.newY < this.scrollBehaviorY.maxScrollPos) && (o.easing = Y.swipeBounce), this.scrollTo(o.newX, o.newY, o.time, o.easing), !0
                }, t.prototype.checkClick = function(t) {
                    var e = this.animater.forceStopped;
                    if (this.hooks.trigger(this.hooks.eventTypes.checkClick)) return !0;
                    if (!e) {
                        var o = this.options.dblclick,
                            i = !1;
                        if (o && this.lastClickTime) {
                            var n = o.delay,
                                r = void 0 === n ? 300 : n;
                            g() - this.lastClickTime < r && (i = !0, function(t) {
                                U(t, "dblclick")
                            }(t))
                        }
                        return this.options.tap && function(t, e) {
                            var o = document.createEvent("Event");
                            o.initEvent(e, !0, !0), o.pageX = t.pageX, o.pageY = t.pageY, t.target.dispatchEvent(o)
                        }(t, this.options.tap), this.options.click && !R(t.target, this.options.preventDefaultException) && U(t), this.lastClickTime = i ? null : g(), !0
                    }
                    return !1
                }, t.prototype.resize = function() {
                    var t = this;
                    this.actions.enabled && (v && (this.wrapper.scrollTop = 0), this.hooks.trigger(this.hooks.eventTypes.resize) || (clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(function() {
                        t.refresh()
                    }, this.options.resizePolling)))
                }, t.prototype.transitionEnd = function(t) {
                    t.target === this.content && this.animater.pending && (this.animater.transitionTime(), this.resetPosition(this.options.bounceTime, Y.bounce) || (this.animater.setPending(!1), 3 !== this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos())))
                }, t.prototype.togglePointerEvents = function(t) {
                    void 0 === t && (t = !0);
                    for (var e = this.content.children.length ? this.content.children : [this.content], o = t ? "auto" : "none", i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.isBScrollContainer || (n.style.pointerEvents = o)
                    }
                }, t.prototype.refresh = function() {
                    this.scrollBehaviorX.refresh(), this.scrollBehaviorY.refresh(), this.actions.refresh(), this.wrapperOffset = E(this.wrapper)
                }, t.prototype.scrollBy = function(t, e, o, i) {
                    void 0 === o && (o = 0);
                    var n = this.getCurrentPos(),
                        r = n.x,
                        s = n.y;
                    i = i || Y.bounce, t += r, e += s, this.scrollTo(t, e, o, i)
                }, t.prototype.scrollTo = function(t, e, o, i, n, r) {
                    void 0 === o && (o = 0), void 0 === n && (n = {
                        start: {},
                        end: {}
                    }), i = i || Y.bounce;
                    var s = this.options.useTransition ? i.style : i.fn,
                        a = this.getCurrentPos(),
                        l = u({
                            x: a.x,
                            y: a.y
                        }, n.start),
                        h = u({
                            x: t,
                            y: e
                        }, n.end);
                    this.hooks.trigger(this.hooks.eventTypes.scrollTo, h), (this.hooks.trigger(this.hooks.eventTypes.ignoreDisMoveForSamePos) || l.x !== h.x || l.y !== h.y) && this.animater.move(l, h, o, s, r)
                }, t.prototype.scrollToElement = function(t, e, o, i, n) {
                    var r = P(t),
                        s = E(r),
                        a = function(t, e, o) {
                            return "number" == typeof t ? t : t ? Math.round(e / 2 - o / 2) : 0
                        };
                    o = a(o, r.offsetWidth, this.wrapper.offsetWidth), i = a(i, r.offsetHeight, this.wrapper.offsetHeight);
                    var l = function(t, e, o, i) {
                        return t -= e, t = i.adjustPosition(t - o)
                    };
                    s.left = l(s.left, this.wrapperOffset.left, o, this.scrollBehaviorX), s.top = l(s.top, this.wrapperOffset.top, i, this.scrollBehaviorY), this.hooks.trigger(this.hooks.eventTypes.scrollToElement, r, s) || this.scrollTo(s.left, s.top, e, n)
                }, t.prototype.resetPosition = function(t, e) {
                    void 0 === t && (t = 0), e = e || Y.bounce;
                    var o = this.scrollBehaviorX.checkInBoundary(),
                        i = o.position,
                        n = o.inBoundary,
                        r = this.scrollBehaviorY.checkInBoundary(),
                        s = r.position,
                        a = r.inBoundary;
                    return (!n || !a) && (this.scrollTo(i, s, t, e), !0)
                }, t.prototype.updatePositions = function(t) {
                    this.scrollBehaviorX.updatePosition(t.x), this.scrollBehaviorY.updatePosition(t.y)
                }, t.prototype.getCurrentPos = function() {
                    return this.actions.getCurrentPos()
                }, t.prototype.enable = function() {
                    this.actions.enabled = !0
                }, t.prototype.disable = function() {
                    H(this.animater.timer), this.actions.enabled = !1
                }, t.prototype.destroy = function() {
                    var t = this;
                    ["resizeRegister", "transitionEndRegister", "actionsHandler", "actions", "hooks", "animater", "translater", "scrollBehaviorX", "scrollBehaviorY"].forEach(function(e) {
                        return t[e].destroy()
                    })
                }, t
            }(),
            vt = [{
                sourceKey: "scroller.scrollBehaviorX.currentPos",
                key: "x"
            }, {
                sourceKey: "scroller.scrollBehaviorY.currentPos",
                key: "y"
            }, {
                sourceKey: "scroller.scrollBehaviorX.hasScroll",
                key: "hasHorizontalScroll"
            }, {
                sourceKey: "scroller.scrollBehaviorY.hasScroll",
                key: "hasVerticalScroll"
            }, {
                sourceKey: "scroller.scrollBehaviorX.contentSize",
                key: "scrollerWidth"
            }, {
                sourceKey: "scroller.scrollBehaviorY.contentSize",
                key: "scrollerHeight"
            }, {
                sourceKey: "scroller.scrollBehaviorX.maxScrollPos",
                key: "maxScrollX"
            }, {
                sourceKey: "scroller.scrollBehaviorY.maxScrollPos",
                key: "maxScrollY"
            }, {
                sourceKey: "scroller.scrollBehaviorX.minScrollPos",
                key: "minScrollX"
            }, {
                sourceKey: "scroller.scrollBehaviorY.minScrollPos",
                key: "minScrollY"
            }, {
                sourceKey: "scroller.scrollBehaviorX.movingDirection",
                key: "movingDirectionX"
            }, {
                sourceKey: "scroller.scrollBehaviorY.movingDirection",
                key: "movingDirectionY"
            }, {
                sourceKey: "scroller.scrollBehaviorX.direction",
                key: "directionX"
            }, {
                sourceKey: "scroller.scrollBehaviorY.direction",
                key: "directionY"
            }, {
                sourceKey: "scroller.actions.enabled",
                key: "enabled"
            }, {
                sourceKey: "scroller.animater.pending",
                key: "pending"
            }, {
                sourceKey: "scroller.animater.stop",
                key: "stop"
            }, {
                sourceKey: "scroller.scrollTo",
                key: "scrollTo"
            }, {
                sourceKey: "scroller.scrollBy",
                key: "scrollBy"
            }, {
                sourceKey: "scroller.scrollToElement",
                key: "scrollToElement"
            }, {
                sourceKey: "scroller.resetPosition",
                key: "resetPosition"
            }],
            gt = function(t) {
                function e(e, o) {
                    var i = t.call(this, ["refresh", "enable", "disable", "beforeScrollStart", "scrollStart", "scroll", "scrollEnd", "scrollCancel", "touchEnd", "flick", "destroy"]) || this,
                        n = P(e);
                    return n ? n.children[0] ? (i.plugins = {}, i.options = (new V).merge(o).process(), i.hooks = new J(["init", "refresh", "enable", "disable", "destroy"]), i.init(n), i) : (p("The wrapper need at least one child element to be scroller."), i) : (p("Can not resolve the wrapper DOM."), i)
                }
                return c(e, t), e.use = function(t) {
                    var e = t.pluginName;
                    return this.plugins.some(function(e) {
                        return t === e.ctor
                    }) ? this : w(e) ? (p("Plugin Class must specify plugin's name in static property by 'pluginName' field."), this) : this.pluginsMap[e] ? (p("This plugin has been registered, maybe you need change plugin's name"), this) : (this.pluginsMap[e] = !0, this.plugins.push({
                        name: e,
                        applyOrder: t.applyOrder,
                        ctor: t
                    }), this)
                }, e.prototype.init = function(t) {
                    this.wrapper = t, t.isBScrollContainer = !0, this.scroller = new mt(t, this.options), this.eventBubbling(), this.handleAutoBlur(), this.innerRefresh(), this.scroller.scrollTo(this.options.startX, this.options.startY), this.enable(), this.proxy(vt), this.applyPlugins()
                }, e.prototype.applyPlugins = function() {
                    var t = this,
                        e = this.options;
                    this.constructor.plugins.sort(function(t, e) {
                        var o, i = ((o = {}).pre = -1, o.post = 1, o);
                        return (t.applyOrder ? i[t.applyOrder] : 0) - (e.applyOrder ? i[e.applyOrder] : 0)
                    }).forEach(function(o) {
                        var i = o.ctor;
                        e[o.name] && "function" == typeof i && (t.plugins[o.name] = new i(t))
                    })
                }, e.prototype.handleAutoBlur = function() {
                    this.options.autoBlur && this.on(this.eventTypes.beforeScrollStart, function() {
                        var t = document.activeElement;
                        !t || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || t.blur()
                    })
                }, e.prototype.eventBubbling = function() {
                    pt(this.scroller.hooks, this, ["beforeScrollStart", "scrollStart", "scroll", "scrollEnd", "scrollCancel", "touchEnd", "flick"])
                }, e.prototype.innerRefresh = function() {
                    this.scroller.refresh(), this.hooks.trigger(this.hooks.eventTypes.refresh), this.trigger(this.eventTypes.refresh)
                }, e.prototype.proxy = function(t) {
                    var e = this;
                    t.forEach(function(t) {
                        var o = t.key,
                            i = t.sourceKey;
                        ! function(t, e, o) {
                            Q.get = function() {
                                return j(this, e)
                            }, Q.set = function(t) {
                                q(this, e, t)
                            }, Object.defineProperty(t, o, Q)
                        }(e, i, o)
                    })
                }, e.prototype.refresh = function() {
                    this.innerRefresh(), this.scroller.resetPosition()
                }, e.prototype.enable = function() {
                    this.scroller.enable(), this.hooks.trigger(this.hooks.eventTypes.enable), this.trigger(this.eventTypes.enable)
                }, e.prototype.disable = function() {
                    this.scroller.disable(), this.hooks.trigger(this.hooks.eventTypes.disable), this.trigger(this.eventTypes.disable)
                }, e.prototype.destroy = function() {
                    this.hooks.trigger(this.hooks.eventTypes.destroy), this.trigger(this.eventTypes.destroy), this.scroller.destroy()
                }, e.prototype.eventRegister = function(t) {
                    this.registerType(t)
                }, e.plugins = [], e.pluginsMap = {}, e
            }(J);
        ! function(t) {
            t[t.Positive = 1] = "Positive", t[t.Negative = -1] = "Negative", t[t.Default = 0] = "Default"
        }(dt || (dt = {})),
        function(t) {
            t[t.Default = 0] = "Default", t[t.Throttle = 1] = "Throttle", t[t.Normal = 2] = "Normal", t[t.Realtime = 3] = "Realtime"
        }(ft || (ft = {}));
        var yt = [{
                key: "finishPullUp",
                name: "finish"
            }, {
                key: "openPullUp",
                name: "open"
            }, {
                key: "closePullUp",
                name: "close"
            }].map(function(t) {
                return {
                    key: t.key,
                    sourceKey: "plugins.pullUpLoad." + t.name
                }
            }),
            wt = function() {
                function t(t) {
                    this.bscroll = t, this.watching = !1, t.options.pullUpLoad && this._watch(), this.bscroll.registerType(["pullingUp"]), this.bscroll.proxy(yt)
                }
                return t.prototype._watch = function() {
                    this.watching || (this.bscroll.options.probeType = ft.Realtime, this.watching = !0, this.bscroll.on("scroll", this._checkToEnd, this))
                }, t.prototype._checkToEnd = function(t) {
                    var e = this;
                    if (this.bscroll.options.pullUpLoad) {
                        var o = this.bscroll.options.pullUpLoad.threshold,
                            i = void 0 === o ? 0 : o;
                        this.bscroll.movingDirectionY === dt.Positive && t.y <= this.bscroll.maxScrollY + i && (this.bscroll.once("scrollEnd", function() {
                            e.watching = !1
                        }), this.bscroll.trigger("pullingUp"), this.bscroll.off("scroll", this._checkToEnd))
                    }
                }, t.prototype.finish = function() {
                    this.watching ? this.bscroll.once("scrollEnd", this._watch, this) : this._watch()
                }, t.prototype.open = function(t) {
                    void 0 === t && (t = !0), this.bscroll.options.pullUpLoad = t, this._watch()
                }, t.prototype.close = function() {
                    this.bscroll.options.pullUpLoad = !1, this.watching && (this.watching = !1, this.bscroll.off("scroll", this._checkToEnd))
                }, t.pluginName = "pullUpLoad", t
            }(),
            kt = "undefined" != typeof window,
            Tt = kt && navigator.userAgent.toLowerCase(),
            bt = (Tt && /wechatdevtools/.test(Tt), Tt && Tt.indexOf("android"), kt && document.createElement("div").style),
            Pt = function() {
                if (!kt) return !1;
                var t = {
                    webkit: "webkitTransform",
                    Moz: "MozTransform",
                    O: "OTransform",
                    ms: "msTransform",
                    standard: "transform"
                };
                for (var e in t)
                    if (void 0 !== bt[t[e]]) return e;
                return !1
            }();

        function Dt(t) {
            return !1 === Pt ? t : "standard" === Pt ? "transitionEnd" === t ? "transitionend" : t : Pt + t.charAt(0).toUpperCase() + t.substr(1)
        }
        Pt && "standard" !== Pt && Pt.toLowerCase(), Dt("transform"), Dt("transition"), kt && Dt("perspective"), Dt("transitionTimingFunction"), Dt("transitionDuration"), Dt("transitionDelay"), Dt("transformOrigin"), Dt("transitionEnd");
        var Ct = {
                style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                fn: function(t) {
                    return 1 - --t * t * t * t
                }
            },
            Et = kt && window;

        function St() {}
        kt && (Et.requestAnimationFrame || Et.webkitRequestAnimationFrame || Et.mozRequestAnimationFrame || Et.oRequestAnimationFrame), kt && (Et.cancelAnimationFrame || Et.webkitCancelAnimationFrame || Et.mozCancelAnimationFrame || Et.oCancelAnimationFrame);
        var At = [{
                key: "finishPullDown",
                name: "finish"
            }, {
                key: "openPullDown",
                name: "open"
            }, {
                key: "closePullDown",
                name: "close"
            }, {
                key: "autoPullDownRefresh",
                name: "autoPull"
            }].map(function(t) {
                return {
                    key: t.key,
                    sourceKey: "plugins.pullDownRefresh." + t.name
                }
            }),
            Bt = function() {
                function t(t) {
                    this.scroll = t, this.pulling = !1, t.options.pullDownRefresh && this._watch(), this.scroll.registerType(["pullingDown"]), this.scroll.proxy(At)
                }
                return t.prototype._watch = function() {
                    this.scroll.options.probeType = 3, this.scroll.scroller.hooks.on("end", this._checkPullDown, this)
                }, t.prototype._checkPullDown = function() {
                    if (this.scroll.options.pullDownRefresh) {
                        var t = this.scroll.options.pullDownRefresh,
                            e = t.threshold,
                            o = void 0 === e ? 90 : e,
                            i = t.stop,
                            n = void 0 === i ? 40 : i;
                        return !(-1 !== this.scroll.directionY || this.scroll.y < o) && (this.pulling || (this.pulling = !0, this.scroll.trigger("pullingDown"), this.originalMinScrollY = this.scroll.minScrollY, this.scroll.minScrollY = n), this.scroll.scrollTo(this.scroll.x, n, this.scroll.options.bounceTime, Ct), this.pulling)
                    }
                }, t.prototype.finish = function() {
                    this.pulling = !1, this.scroll.minScrollY = this.originalMinScrollY, this.scroll.resetPosition(this.scroll.options.bounceTime, Ct)
                }, t.prototype.open = function(t) {
                    void 0 === t && (t = !0), this.scroll.options.pullDownRefresh = t, this._watch()
                }, t.prototype.close = function() {
                    this.scroll.options.pullDownRefresh = !1
                }, t.prototype.autoPull = function() {
                    var t = this.scroll.options.pullDownRefresh,
                        e = t.threshold,
                        o = void 0 === e ? 90 : e,
                        i = t.stop,
                        n = void 0 === i ? 40 : i;
                    this.pulling || (this.pulling = !0, this.originalMinScrollY = this.scroll.minScrollY, this.scroll.minScrollY = o, this.scroll.scrollTo(this.scroll.x, o), this.scroll.trigger("pullingDown"), this.scroll.scrollTo(this.scroll.x, n, this.scroll.options.bounceTime, Ct))
                }, t.pluginName = "pullDownRefresh", t
            }(),
            Lt = (Boolean, String, {
                name: "load-more",
                props: {
                    showLoading: {
                        type: Boolean,
                        default: !0
                    },
                    tip: String
                }
            }),
            Ot = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "vux-loadmore weui-loadmore",
                        class: {
                            "weui-loadmore_line": !t.showLoading, "weui-loadmore_dot": !t.showLoading && !t.tip
                        }
                    }, [t.showLoading ? o("i", {
                        staticClass: "weui-loading"
                    }) : t._e(), t._v(" "), o("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.tip || !t.showLoading,
                            expression: "tip || !showLoading"
                        }],
                        staticClass: "weui-loadmore__tips"
                    }, [t._v(t._s(t.tip))])])
                },
                staticRenderFns: []
            };
        var Mt = o("VU/8")(Lt, Ot, !1, function(t) {
            o("3fYP")
        }, null, null).exports;
        gt.use(wt), gt.use(Bt);
        Boolean, Boolean, Boolean;
        gt.use(wt), gt.use(Bt);
        var xt = {
                name: "bwt-scroll",
                data: function() {
                    return {
                        isClosed: !1,
                        scroll: null,
                        pullUpTxt: "",
                        beforePullDown: !0,
                        isPullingDown: !1,
                        isPullUpLoad: !1,
                        isNormal: !0
                    }
                },
                props: {
                    isAll: {
                        Boolean: Boolean,
                        default: !1
                    },
                    openPullUp: {
                        Boolean: Boolean,
                        default: !1
                    },
                    openPullDown: {
                        Boolean: Boolean,
                        default: !1
                    }
                },
                components: {
                    LoadMore: Mt
                },
                computed: {},
                mounted: function() {
                    var t = this;
                    setTimeout(function() {
                        t.initScroll()
                    }, 20)
                },
                methods: {
                    initScroll: function() {
                        this.$refs.wrapper ? (this.scroll = new gt(this.$refs.wrapper, {
                            scrollY: !0,
                            pullUpLoad: this.openPullUp,
                            click: !0,
                            bounceTime: 800,
                            pullDownRefresh: !!this.openPullDown && {
                                threshold: 70,
                                stop: 56
                            }
                        }), this.openPullUp && this.scroll.on("pullingUp", this.pullingUpHandler), this.openPullDown && this.scroll.on("pullingDown", this.pullingDownHandler)) : console.log("没有定义容器")
                    },
                    pullingDownHandler: function() {
                        console.log("pullingDown"), this.beforePullDown = !1, this.isPullingDown = !0, this.$emit("pulldown")
                    },
                    pullDownEnd: function() {
                        this.isPullingDown = !1, this.scroll && (this.beforePullDown = !0, this.scroll.finishPullDown(), this.scroll.refresh())
                    },
                    pullingUpHandler: function() {
                        this.isPullUpLoad = !0, this.$emit("pullup")
                    },
                    pullUpEnd: function() {
                        this.isPullUpLoad = !1, this.scroll && (this.scroll.finishPullUp(), this.scroll.refresh())
                    },
                    finishPullDown: function() {
                        var t = this;
                        return l()(n.a.mark(function e() {
                            var o;
                            return n.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = 600, e.next = 3, new s.a(function(e) {
                                            setTimeout(function() {
                                                t.scroll.finishPullDown(), e()
                                            }, o)
                                        });
                                    case 3:
                                        setTimeout(function() {
                                            t.beforePullDown = !0, t.scroll.refresh()
                                        }, 800);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    pullUpClose: function() {
                        this.isClosed || (this.isClosed = !0, this.scroll && this.scroll.closePullUp())
                    },
                    pullUpOpen: function() {
                        this.isClosed && (this.isClosed = !1, this.scroll && this.scroll.openPullUp())
                    },
                    refresh: function() {
                        this.scroll && this.scroll.refresh()
                    },
                    scrollTo: function() {
                        this.scroll.scrollTo(0, 0, 500)
                    }
                },
                watch: {}
            },
            _t = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        ref: "wrapper",
                        staticClass: "list-wrapper"
                    }, [o("div", {
                        staticClass: "scroll-content"
                    }, [o("div", {
                        staticClass: "pulldown-wrapper"
                    }, [o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.beforePullDown,
                            expression: "beforePullDown"
                        }]
                    }, [o("span", [t._v("下拉刷新")])]), t._v(" "), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.beforePullDown,
                            expression: "!beforePullDown"
                        }]
                    }, [o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isPullingDown,
                            expression: "isPullingDown"
                        }]
                    }, [o("load-more")], 1), t._v(" "), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isPullingDown,
                            expression: "!isPullingDown"
                        }]
                    }, [o("span", [t._v("刷新成功")])])])]), t._v(" "), t._t("default"), t._v(" "), o("div", {
                        staticClass: "pullup-wrapper"
                    }, [t.isPullUpLoad ? o("div", {
                        staticClass: "after-trigger"
                    }, [o("load-more")], 1) : o("div", {
                        staticClass: "before-trigger"
                    }), t._v(" "), t.isAll ? o("span", {
                        staticStyle: {
                            color: "#999"
                        }
                    }, [t._v("没有更多了")]) : t._e()])], 2)])
                },
                staticRenderFns: []
            };
        var Rt = o("VU/8")(xt, _t, !1, function(t) {
            o("y7Yt")
        }, "data-v-398dd36c", null);
        e.a = Rt.exports
    },
    kZIZ: function(t, e, o) {
        "use strict";
        (function(t) {
            var e = o("mvHQ"),
                i = (o.n(e), o("Xxa5")),
                n = (o.n(i), o("exGp")),
                r = (o.n(n), o("MJLE")),
                s = o.n(r),
                a = o("c6Ft");
            o("oMTx"), s.a, a.a
        }).call(e, o("oqQY"))
    },
    "w+jv": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACQklEQVRIS8WWTWjTcBjGnzdpp1u9OG9+ndbMXSYDj7KZIqigeBFPIiKCFIQxmdpFx0ppk/mxoSKC+HESPAsTvGha5sGLBxUPidODiDCGuDHE2aX/VzqbUWPSj7XWHPMPz+/lfd7/+4TQoofWynk6tLVzXUfkuMTgeQcPDl+xFitp1Q0ykwhRPhpn0BiATSXxJ6puH2wayLzUvR+CJwH0eEQdVbfDDYPMEWUHESYZOBAkpur2H915Pdwb+RZeGiSZZgfS1v2KrSv6sL4jMsbMcQDlFS+AOA2mqy7YBTFAuYvKMcEYJ2AzM77EDHuLLyjAB4C5AJLuyVwY7Tdm5kxNYS8oq3WPMjhVev+SReFMbPzDq79AQT4Q47lDNLRXt9644n4gc6TrCCQpQcCNgYz9kICVYiirKcW+32FgW0D/Z2Si4f6M9dh77gcK8rAI+hQAWfFhLtx282jyXd5PoC5Q+cclsa8gPJKFSBV9qDSyawZ5R7Ta1vivoKymTDOwu7xIAl5QPVXVMgwtAwVOXcuGoWXjXe3CEtF7AZyLNXphvT0tghmY8EaBBDxbBp2ttoJyia4+luUTgnA7lrYsVz94qTrRuBCUJKBztZgalqqpRa8DNEhAHoRbGxwntevyx4Wmx8RUYvvGiNRugMUpEMlgvFUNu7emKM+dj/ZwiCbqCb7pC8rOQgg6GJ/36PbpmkCrsRAU5Yxl1bDbGo7ycgHfUCRMqRn7UFNBrtjv3632kzIk58fP+bv7rs1+/yegapvde/4L4DJDcG4eh38AAAAASUVORK5CYII="
    },
    xi5P: function(t, e, o) {
        t.exports = o.p + "static/img/overtime-icon.fb6c189.png"
    },
    y7Yt: function(t, e) {}
});
//# sourceMappingURL=0.0899f959dabfebdb32bc.js.map