webpackJsonp([5], {
    "63CM": function(t, e, n) {
        "use strict";
        var a = n("BEQ0");

        function i(t) {
            return void 0 === t ? document.body : "string" == typeof t && 0 === t.indexOf("?") ? document.body : ("string" == typeof t && t.indexOf("?") > 0 && (t = t.split("?")[0]), "body" === t || !0 === t ? document.body : t instanceof window.Node ? t : document.querySelector(t))
        }
        var s = {
            inserted: function(t, e, n) {
                var a = e.value;
                t.className = t.className ? t.className + " v-transfer-dom" : "v-transfer-dom";
                var s = t.parentNode,
                    o = document.createComment(""),
                    r = !1;
                !1 !== a && (s.replaceChild(o, t), i(a).appendChild(t), r = !0), t.__transferDomData || (t.__transferDomData = {
                    parentNode: s,
                    home: o,
                    target: i(a),
                    hasMovedOut: r
                })
            },
            componentUpdated: function(t, e) {
                var n = e.value;
                if (function(t) {
                        if (!t) return !1;
                        if ("string" == typeof t && t.indexOf("?") > 0) try {
                            return JSON.parse(t.split("?")[1]).autoUpdate || !1
                        } catch (t) {
                            return !1
                        }
                        return !1
                    }(n)) {
                    var s = t.__transferDomData,
                        o = s.parentNode,
                        r = s.home,
                        c = s.hasMovedOut;
                    !c && n ? (o.replaceChild(r, t), i(n).appendChild(t), t.__transferDomData = a({}, t.__transferDomData, {
                        hasMovedOut: !0,
                        target: i(n)
                    })) : c && !1 === n ? (o.replaceChild(t, r), t.__transferDomData = a({}, t.__transferDomData, {
                        hasMovedOut: !1,
                        target: i(n)
                    })) : n && i(n).appendChild(t)
                }
            },
            unbind: function(t, e) {
                t.className = t.className.replace("v-transfer-dom", ""), t.__transferDomData && !0 === t.__transferDomData.hasMovedOut && t.__transferDomData.parentNode && t.__transferDomData.parentNode.appendChild(t), t.__transferDomData = null
            }
        };
        e.a = s
    },
    NbL3: function(t, e) {},
    oaTu: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n("Xxa5"),
            i = n.n(a),
            s = n("exGp"),
            o = n.n(s),
            r = n("mzja"),
            c = n("63CM"),
            d = (c.a, r.a, function() {
                var t = o()(i.a.mark(function t() {
                    var e;
                    return i.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return document.title = "进站预约", this.getStationItem(), this.setHeaderBtn(), t.next = 5, this.$bwtHybrid.runtime.getAppInfo();
                            case 5:
                                e = t.sent, this.appInfo = e, console.log("当前版本号"), console.log(this.appInfo?.version);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }))
            }(), {
                directives: {
                    TransferDom: c.a
                },
                components: {
                    Alert: r.a
                },
                data: function() {
                    return {
                        stationList: [],
                        showDialog: !1,
                        selectTripType: "1",
                        tCardNum: "",
                        btnText: "确认",
                        needBindCard: !1,
                        appInfo: ""
                    }
                },
                filters: {},
                mounted: function() {
                    var t = o()(i.a.mark(function t() {
                        var e;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return document.title = "进站预约", this.getStationItem(), this.setHeaderBtn(), t.next = 5, this.$bwtHybrid.runtime.getAppInfo();
                                case 5:
                                    e = t.sent, this.appInfo = e, console.log("当前版本号"), console.log(this.appInfo?.version);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                watch: {
                    selectTripType: function(t, e) {
                        this.setBtnText()
                    }
                },
                methods: {
                    jumpToStation: function(t, e, n, a) {
                        if (0 == window.openBwt) return this.$vux.toast.show({
                            type: "text",
                            text: "预约将于3月17日14:00开启"
                        }), !1;
                        if ("101" == window.mobileTypeBwt) {
                            var i = jugUrl();
                            window.location.href = "../" + i + "/#/appointmentList?stationId=" + t + "&stationName=" + encodeURIComponent(e) + "&lineId=" + n + "&lineName=" + encodeURIComponent(a) + "&tripType=" + this.selectTripType + "&tCardNum=" + this.tCardNum
                        } else this.$router.push({
                            path: "/appointmentList?stationId=" + t + "&stationName=" + encodeURIComponent(e) + "&lineId=" + n + "&lineName=" + encodeURIComponent(a) + "&tripType=" + this.selectTripType + "&tCardNum=" + this.tCardNum
                        })
                    },
                    getTCardStatus: function() {
                        var t = this;
                        return o()(i.a.mark(function e() {
                            var n, a, s, o;
                            return i.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = {
                                            city_id: "5000"
                                        }, console.log("开关：" + window.openSelect), e.next = 4, t.$api.mgApi.queryCard(n);
                                    case 4:
                                        a = e.sent, s = a.isSuc, o = a.info, a.msg, "0005" == a.errCode ? (console.log("case1"), t.showDialog = !1) : (console.log("case2"), 1 == window.openSelect && console.log("case3")), s ? (t.$vux.loading.hide(), 1 == o.bind_flag ? (t.needBindCard = !1, t.tCardNum = o.card_no, t.setBtnText()) : (t.needBindCard = !0, t.setBtnText())) : (t.needBindCard = !0, t.setBtnText());
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    getStationItem: function() {
                        var t = this;
                        return o()(i.a.mark(function e() {
                            var n, a, s, o;
                            return i.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = {}, e.next = 3, t.$api.mgApi.supportStationList(n);
                                    case 3:
                                        if (a = e.sent, s = a.isSuc, o = a.info, a.msg, a.errCode, !s) {
                                            e.next = 15;
                                            break
                                        }
                                        if (console.log(o), o) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 12:
                                        t.stationList = o, e.next = 17;
                                        break;
                                    case 15:
                                        t.needBindCard = !0, t.setBtnText();
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    setBtnText: function() {
                        "2" == this.selectTripType ? "" != this.tCardNum ? (this.btnText = "确认", this.needBindCard = !1) : (this.btnText = "绑定一卡通", this.needBindCard = !0) : "1" == this.selectTripType && (this.btnText = "确认", this.needBindCard = !1)
                    },
                    linkToGuide: function() {
                        this.$bwtHybrid.navigator.setRightBtn({
                            isShow: 1,
                            text: " ",
                            index: 0,
                            success: function(t) {},
                            error: function(t) {}
                        }), window.location.href = "https://api.bwton.com/app-h5/helpCenter/hextechController2X.html?cityId=5000&typeCode=34"
                    },
                    setHeaderBtn: function() {
                        console.log("设置按钮");
                        var t = this;
                        this.$bwtHybrid.navigator.setRightBtn({
                            isShow: 1,
                            text: "预约记录",
                            index: 0,
                            success: function(e) {
                                if ("101" == window.mobileTypeBwt) {
                                    var n = jugUrl();
                                    window.location.href = "../" + n + "/#/appointmentRecordList"
                                } else t.$router.push({
                                    path: "/appointmentRecordList"
                                })
                            },
                            error: function(t) {}
                        })
                    },
                    onHide: function() {
                        if (this.needBindCard)
                            if ("101" == window.mobileTypeBwt) {
                                if ("1.0.0" == this.appInfo?.version || "1.0.1" == this.appInfo?.version) return this.$vux.toast.show({
                                    type: "text",
                                    text: "当前版本暂不支持绑定一卡通，请前往应用商店升级app，或者选择[其他]出行方式以继续操作"
                                }), !1;
                                var t = jugUrl();
                                window.location.href = "../" + t + "/#/travelCard"
                            } else this.$router.push({
                                path: "/travelCard"
                            });
                        else window.sessionStorage.setItem("selectFlag", "done")
                    },
                    getRGB: function(t, e) {
                        if (!t) return "rgba(204,204,204," + e + ")";
                        var n, a;
                        t = t.substr(1);
                        for (var i = [], s = 0; s < 3; s++) n = t.substr(2 * s, 2), i[s] = parseInt(n, 16);
                        return a = "rgba(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + e + ")", console.log(a), a
                    }
                }
            }),
            p = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "appointment-main-banner",
                        on: {
                            click: t.linkToGuide
                        }
                    }, [n("img", {
                        attrs: {
                            src: "https://bwton-cdn.oss-cn-shanghai.aliyuncs.com/act-img/ncpConfig/50000302banner.png"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "appointment-station-wrap"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "appointment-station-list"
                    }, t._l(t.stationList, function(e, a) {
                        return n("div", {
                            key: a,
                            staticClass: "appointment-station-item",
                            style: "background: linear-gradient(90deg," + t.getRGB(e.color, "0.7") + " 0%," + t.getRGB(e.color, "1") + " 100%)",
                            on: {
                                click: function(n) {
                                    t.jumpToStation(e.station_id, e.station_name, e.line_id, e.line_name)
                                }
                            }
                        }, [n("span", {
                            staticClass: "station-icon"
                        }, [t._v(" ")]), t._v(" "), n("div", {
                            staticClass: "station-item-line"
                        }, [t._v(t._s(e.line_name))]), t._v(" "), n("div", {
                            staticClass: "station-item-name"
                        }, [t._v(t._s(e.station_name) + "站")])])
                    }))]), t._v(" "), n("div", {
                        directives: [{
                            name: "transfer-dom",
                            rawName: "v-transfer-dom"
                        }]
                    }, [n("alert", {
                        attrs: {
                            title: "选择出行方式",
                            "mask-z-index": 1,
                            "button-text": t.btnText
                        },
                        on: {
                            "on-hide": t.onHide
                        },
                        model: {
                            value: t.showDialog,
                            callback: function(e) {
                                t.showDialog = e
                            },
                            expression: "showDialog"
                        }
                    }, [n("div", {
                        staticClass: "tripType-wrap"
                    }, [n("div", {
                        staticClass: "btn-tripType",
                        class: {
                            btntypeact: "2" == t.selectTripType
                        },
                        on: {
                            click: function(e) {
                                t.selectTripType = "2"
                            }
                        }
                    }, [t._v("一卡通")]), t._v(" "), n("div", {
                        staticClass: "btn-tripType",
                        class: {
                            btntypeact: "1" == t.selectTripType
                        },
                        on: {
                            click: function(e) {
                                t.selectTripType = "1"
                            }
                        }
                    }, [t._v("其他")])]), t._v(" "), "" != t.tCardNum && "2" == t.selectTripType ? n("div", {
                        staticClass: "tripType-tcard"
                    }, [t._v("\n        已绑定一卡通：" + t._s(t.tCardNum) + "\n      ")]) : t._e()])], 1)])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "appointment-station-info"
                    }, [e("span", {
                        staticClass: "appointment-block-title"
                    }, [this._v("选择预约站点")]), this._v(" "), e("span", {
                        staticClass: "appointment-block-desc"
                    }, [this._v("工作日14:00开放当天晚高峰预约名额")])])
                }]
            };
        var l = n("VU/8")(d, p, !1, function(t) {
            n("NbL3")
        }, "data-v-3e7ba566", null);
        e.default = l.exports
    }
});
//# sourceMappingURL=5.ff0038c04b68c03111da.js.map