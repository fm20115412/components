/**
 * Created by fm_babybear on 2017/6/12.
 */
var EventUtil = {
    indexOf: function (elem) {
        var parent = elem.parentElement,
            children = parent.children;
        for (var i = 0; i < children.length; i++) {
            if (children[i] === elem) {
                return i;
            }
        }
        return -1;
    },
    // 移除一个元素的类名
    singleRemoveClass: function (elem, str) {
        var className = elem.getAttribute("class");
        var arr = className.split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (str === arr[i]) {
                arr.splice(i, 1);
            }
        }
        elem.setAttribute("class", arr.join(" "));
    },
    // 移除多个元素的类名
    removeClass: function (elems, str) {
        if (elems.length && elems.length > 0) {
            for (var i = 0; i < elems.length; i++) {
                EventUtil.singleRemoveClass(elems[i], str);
            }
        }else{
            EventUtil.singleRemoveClass(elems, str);
        }
    },
    // 给一个元素的class添加一个类名
    singleAddClass: function (elem, str) {
        var className = elem.getAttribute("class");
        var arr = className.split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (str === arr[i]) {
                return;
            }
        }
        arr.push(str);
        elem.setAttribute("class", arr.join(" "));
    },
    // 给多个元素的class添加一个类名
    addClass: function (elems, str) {
        if (elems.length && elems.length > 0) {
            for (var i = 0; i < elems.length; i++) {
                EventUtil.singleAddClass(elems[i], str);
            }
        }else{
            EventUtil.singleAddClass(elems, str);
        }
    }
}
var list = document.querySelector(".list");
list.addEventListener("click", function (event) {
    var target = event.target,
        items = list.children,
        index = EventUtil.indexOf(target),
        panels = document.querySelectorAll(".panel");
    if (index > -1) {
        EventUtil.removeClass(items, "active");
        EventUtil.addClass(target, "active");
        EventUtil.removeClass(panels, "active");
        EventUtil.addClass(panels[index], "active");
    }
}, false);
