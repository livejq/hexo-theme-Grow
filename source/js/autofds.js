"use strict";

function _templateObject2() {
    var e = _taggedTemplateLiteral(["(", ":[s]*|[\r\n]*)"], ["(", ":[\\s]*|[\\r\\n]*)"]);
    return _templateObject2 = function () {
        return e
    }, e
}

function _templateObject() {
    var e = _taggedTemplateLiteral(["", ":[^\n]*\n"], ["", ":[^\\n]*\\n"]);
    return _templateObject = function () {
        return e
    }, e
}

function _taggedTemplateLiteral(e, t) {
    return t = t || e.slice(0), Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
        }
    }))
}! function (e) {
    function i(e) {
        return new i.prototype.init(e)
    }
    i.extend = (i.prototype = {
        constructor: i,
        version: "2020-08-17 16:52:00",
        owner: "livejq",
        repo: "friends",
        direction_sort: "asc",
        page: 1,
        per_page: 100,
        el: "#friend1",
        sort_container: [ "大佬们", "菜鸡们"],
        text: [],
        labelDescr: {
            "大佬们": "<span style='color:#E67E22;font-weight:500'>这是一群大佬哦！</span>",
            "菜鸡们": "<span style='color:red;font-weight:500'>这是一群菜鸡哦！</span>"
        },
        init: function (e) {
            for (var t in e) this[t] = e[t];
            return  i.setHead(this), i.getPageFriend(this), this
        }
    }).extend = function (e) {
        for (var t in e) this[t] = e[t]
    }, i.extend({
        setHead: function () {
            i.loadingCss()
        },
        loadingCss: function () {
            $("head").append("<style>.loader{width:150px;height:150px;margin:0 auto}svg{width:90%;fill:none}.load{transform-origin:50% 50%;stroke-dasharray:570;stroke-width:20px}.load.one{stroke:#554d73;animation:load 1.5s infinite}.load.two{stroke:#a496a4;animation:load 1.5s infinite;animation-delay:.1s}.load.three{stroke:#a5a7bb;animation:load 1.5s infinite;animation-delay:.2s}.point{animation:bounce 1s infinite ease-in-out}.point.one{fill:#a5a7bb;animation-delay:0s}.point.two{fill:#a496a4;animation-delay:.1s}.point.three{fill:#554d73;animation-delay:.2s}@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes load{0%{stroke-dashoffset:570}50%{stroke-dashoffset:530}100%{stroke-dashoffset:570;transform:rotate(360deg)}}</style>")
        },
        loading: function (e) {
            $("".concat(e.el)).html('<div class="loader"><svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="load one" cx="60" cy="60" r="40"></circle><circle class="load two" cx="60" cy="60" r="40"></circle><circle class="load three" cx="60" cy="60" r="40"></circle><g><circle class="point one" cx="45" cy="70" r="5"></circle><circle class="point two" cx="60" cy="70" r="5"></circle><circle class="point three" cx="75" cy="70" r="5"></circle></g></svg></div>')
        },
        createContainer: function (e) {
            for (var t in e.sort_container) $("".concat(e.el)).append("<h2 id=".concat(e.sort_container[t], ">").concat(e.sort_container[t], '</h2><div class="flink-desc"><h4>').concat(e.sort_container[t], '</h4></div><div class="flink-list">') + "</div>")
        }
    }), i.extend({
        createFriend: function (e) {
            var t, n = e.text;
            for (var a in $(".loader").hide(), n) n[a].labels && (t = n[a].body, $("#" + n[a].labels).length ? $("#".concat(n[a].labels)).next().next().append(t) : $(e.el).append("<h2 id=".concat(n[a].labels, ">").concat(n[a].labels, '</h2><div class="flink-desc">').concat(i.getLabelDescr(e, n[a].labels), '</div><div class="flink-list">') + t + "</div>"))
        },
        getPageFriend: function (e) {
            i.loading(e), i.getFriends(e).then(function () {
                    return i.createFriend(e)
            })
        }
    }), i.extend({
        getFriends: function (a) {
            return $.ajax({
                url: "https://gitee.com/api/v5/repos/".concat(a.owner, "/").concat(a.repo, "/issues?state=open&sort=created&direction=").concat(a.direction_sort, "&page=").concat(a.page, "&per_page=").concat(a.per_page),
                type: "get",
                success: function (e) {
                    if (a.text = [], e)
                        for (var t in e) {
                            var n = {};
                            n.body = i.getBody(a, e[t].body), n.labels = i.getLabels(e[t].labels), a.text.push(n)
                        }
                }
            })
        }
    }), i.extend({
        getBody: function (e, t) {
            var n = i.getInfo(e, t, "link"),
                a = i.getInfo(e, t, "name"),
                o = i.getInfo(e, t, "avatar"),
                r = i.getInfo(e, t, "descr");
            return '<div class="flink-list-item ' + 'friend-card'+parseInt(Math.random()*10, 10) + '" style="'.concat(i.getCustom(e, t), '"><a href="').concat(n, '" title="').concat(a, '" target="_blank"><img class="rauto" style="animation:').concat(i.getImgCustom(e, t), '" data-lazy-src="').concat(o, '" onerror="this.onerror=null,this.src=&quot;https://www.livejq.top/img/friend_404.gif&quot;" alt="').concat(a, '" src="').concat(o, '"><span class="flink-item-name">').concat(a, '</span><span class="flink-item-desc" title="').concat(r, '">').concat(r, "</span></a></div>")
        },
        getLabels: function (e) {
            if (e.length) return e[0].name
        }
    }), i.extend({
        getLabelDescr: function (e, t) {
            var n = "";
            return e.labelDescr[t] && (n = e.labelDescr[t]), n
        },
        getInfo: function (e, t, n) {
            var a = new RegExp(String.raw(_templateObject(), n)),
                o = new RegExp(String.raw(_templateObject2(), n), "g"),
                r = "你写的好像不对哦！";
            return (t = t.match(a)) && 0 < t.length && (r = t[0].replace(o, "")), r
        },
        getCustom: function (e, t) {
            var n = ["--primary-color", "border-width", "border-style", "animation", "background", "--primary-rotate"],
                a = "";
            for (var o in n) {
                var r = i.getInfo(e, t, n[o]);
                "你写的好像不对哦！" !== r && (a += "".concat(n[o], ":").concat(r, ";"))
            }
            return a
        },
        getImgCustom: function (e, t) {
            var n = ["img_animation"],
                a = "";
            for (var o in n) {
                var r = i.getInfo(e, t, n[o]);
                "你写的好像不对哦！" !== r && (a += "".concat(r, ";"))
            }
            return a
        }
    }), i.prototype.init.prototype = i.prototype, e.Friend = i
}(window);
