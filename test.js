// ==UserScript==
// @name         半自动化下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://o8tv.com/vodplay/*
// @icon         https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018459568f541732f87574be60c997.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672283259&t=79cc710c1ab45d55482859dccfe22450
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_openInTab
// ==/UserScript==
var study_css = ".egg_study_btn{outline:0;border:0;position:fixed;top:500px;left:500px;padding:12px 20px;border-radius:10px;cursor:pointer;background-color:#fff;color:#d90609;font-size:18px;font-weight:bold;text-align:center;box-shadow:0 0 9px #666777}.egg_manual_btn{transition:0.5s;outline:none;border:none;padding:12px 20px;border-radius:10px;cursor:pointer;background-color:#e3484b;color:rgb(255,255,255);font-size:18px;font-weight:bold;text-align:center;}.egg_auto_btn{transition:0.5s;outline:none;border:none;padding:12px 20px;border-radius:10px;cursor:pointer;background-color:#666777;color:rgb(255,255,255);font-size:18px;font-weight:bold;text-align:center;}.egg_setting_box{position:fixed;top:70px;left:5px;padding:12px 20px;border-radius:10px;background-color:#fff;box-shadow:0 0 9px #666777}.egg_setting_item{margin-top:5px;height:30px;width:140px;font-size:16px;display:flex;justify-items:center;justify-content:space-between}input[type='checkbox'].egg_setting_switch{cursor:pointer;margin:0;outline:0;appearance:none;-webkit-appearance:none;-moz-appearance:none;position:relative;width:40px;height:22px;background:#ccc;border-radius:50px;transition:border-color .3s,background-color .3s}input[type='checkbox'].egg_setting_switch::after{content:'';display:inline-block;width:1rem;height:1rem;border-radius:50%;background:#fff;box-shadow:0,0,2px,#999;transition:.4s;top:3px;position:absolute;left:3px}input[type='checkbox'].egg_setting_switch:checked{background:#fd5052}input[type='checkbox'].egg_setting_switch:checked::after{content:'';position:absolute;left:55%;top:3px}";
GM_addStyle(study_css);
var readyCount = 0;
//创建“开始下载”按钮和获取需要下载地址
function createStartButton() {
    let base = document.createElement("div");
    let body = document.getElementsByTagName("body")[0];
    let startButton = document.createElement("button");
    startButton.setAttribute("id", "startButton");
    startButton.innerText = "开始下载";
    startButton.className = "egg_study_btn egg_menu";
    //添加事件监听
    try {// Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        startButton.addEventListener("click", startDown, false);
    } catch (e) {
        try {// IE8.0及其以下版本
            startButton.attachEvent('onclick', startDown);
        } catch (e) {// 早期浏览器
            console.log("事件绑定失败")
        }
    }
    //插入节点
    body.append(startButton);
}

function getStartDownUrls() {
    //匹配正在活动的集数（这个需要进入播放页面有局限性，后期改善），
    var allChildren = $(".module-list.sort-list.tab-list.play-tab-list.active .module-play-list-base").children('.active').nextAll();
    var openUrls = [];
    allChildren.each(function(index, children){
        let onclickTextArr = $(children).attr('onclick').split('\'');
        let openUrl = window.location.protocol + '//'+ window.location.host + '/vodplay/' + onclickTextArr[1] + '-' + onclickTextArr[3] + '-' + onclickTextArr[5] + '.html';
        openUrls.push(openUrl);
    });
    GM_setValue('openUrls', openUrls);
}

//开始下载
async function startDown() {
    getStartDownUrls();
    let openUrls = GM_getValue('openUrls');
    for (let i = 0; i < openUrls.length; i++) {
        GM_setValue('readingUrl', openUrls[i]);
        let newPage = GM_openInTab(openUrls[i], { active: true, insert: true, setParent: true });
        await waitingClose(newPage);
    }
}

function waitingClose(newPage) {
    return new Promise(resolve => {
        let doing = setInterval(function () {
            if (newPage.closed || GM_getValue('tabIsClose')) {
                clearInterval(doing);//停止定时器
                resolve('done');
            }
        }, 1000);
    });
}


//默认情况下, chrome 只允许 window.close 关闭 window.open 打开的窗口,所以我们就要用window.open命令,在原地网页打开自身窗口再关上,就可以成功关闭了
function closeWin() {
    try {
        window.opener = window;
        var win = window.open("","_self");
        GM_setValue('tabIsClose', true);
        win.close();
        top.close();
    } catch (e) {
    }
}

//等待时间工具函数
function waitingTime(time) {
    if (!Number.isInteger(time)) {
        time = 1000;
    }
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('done');
        }, time);
    });
}

$(document).ready(function() {
    GM_setValue('tabIsClose', false);
    let url = window.location.href;
    //alert(GM_getValue("readingUrl"));
    createStartButton();
    //GM_setValue('readingUrl', undefined)
    //alert(typeof GM_getValue("readingUrl"));
    window.onbeforeunload = function (e) {
        var message = 'some word';
        e = e || window.event;
        alert(23)
        if (e) {
            e.returnValue = message;
        }

        return message;
    };
    if (url == GM_getValue('readingUrl')) {
        var time = 1;
        // 是否嗅探出资源，如果已经嗅探出，就不需要在进行嗅探
        var resourceIs = false
        time = parseInt(Math.random() * (8 - 4 + 1) + 4, 10);
        alert(time)
        var readingInterval = setInterval(function () {
            time--;
            var srcObject = JSON.parse(mbrowser.getSniffMediaResource());
            if(Object.keys(srcObject).length !=0 && !resourceIs) {
                resourceIs = true;
                GM_download({
                    url: srcObject['src'],
                    name: srcObject['title'],
                    confirm: false,
                })
            }

            if (time <= 0) {
                GM_setValue('readingUrl', null);
                clearInterval(readingInterval);
                closeWin();
            }
        }, 1000);
    }
})();
