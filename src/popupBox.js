import $ from "jquery";

function initImg(popupBoxObj, attrName, path) {
  $("img[data-role='" + attrName + "']").attr("src", path);
}

function updateMsg(popupBoxObj, attrName, text) {
  popupBoxObj.find("[data-role='" + attrName + "']").html(text);
}

function initMsgTitle(popupBoxObj, attrName, text) {
  updateMsg(popupBoxObj, attrName, text);
}

function initMsgTo(popupBoxObj, attrName, text) {
  updateMsg(popupBoxObj, attrName, text);
}

function initMsgDesc(popupBoxObj, attrName, text) {
  updateMsg(popupBoxObj, attrName, text);
}

function initMsgFrom(popupBoxObj, attrName, text) {
  updateMsg(popupBoxObj, attrName, text);
}

function initAnimation(popUpObj, attrAnimation, effect) {
  popUpObj.attr(attrAnimation, effect);
}

function showDialog(popUpObj) {
  popUpObj.show();
}

var initpopUpBox_christmas = function (
  popUpObj,
  attrImg,
  imgPath,
  attrTitle,
  titleDesc,
  attrMsgTo,
  msgToDesc,
  attrMsgDesc,
  msgDesc,
  attrMsgFrom,
  msgFrom,
  attrAnimation,
  effect
) {
  showDialog(popUpObj);
  initImg(popUpObj, attrImg, imgPath);
  initMsgTo(popUpObj, attrMsgTo, msgToDesc);
  initMsgTitle(popUpObj, attrTitle, titleDesc);
  initMsgDesc(popUpObj, attrMsgDesc, msgDesc);
  initMsgFrom(popUpObj, attrMsgFrom, msgFrom);
  initAnimation(popUpObj, attrAnimation, effect);
};

var initpopUpBox_newyear = function (
  popUpObj,
  attrImg,
  imgPath,
  attrTitle,
  titleDesc,
  attrMsgTo,
  msgToDesc,
  attrMsgDesc,
  msgDesc,
  attrMsgFrom,
  msgFrom,
  attrAnimation,
  effect
) {
  showDialog(popUpObj);
  initImg(popUpObj, attrImg, imgPath);
  initMsgTo(popUpObj, attrMsgTo, msgToDesc);
  initMsgTitle(popUpObj, attrTitle, titleDesc);
  initMsgDesc(popUpObj, attrMsgDesc, msgDesc);
  initMsgFrom(popUpObj, attrMsgFrom, msgFrom);
  initAnimation(popUpObj, attrAnimation, effect);
};

$(document).ready(function () {
  initpopUpBox_christmas(
    $("#popupBox-christmas"),
    "popupBox-img",
    "/src/2020_pika_stamp.png",
    "popupBox-title",
    "聖誕挑戰書",
    "popupBox-msgTo",
    "Dear Pika",
    "popupBox-msgDesc",
    "聖誕來鬥快!",
    "popupBox-msgFrom",
    "聖誕老人上",
    "data-animation",
    "slideUp"
  );

  initpopUpBox_newyear(
    $("#popupBox-newyear"),
    "popupBox-img",
    "/src/2020_pika_stamp.png",
    "popupBox-title",
    "新年的祝福",
    "popupBox-msgTo",
    "Dear 小智",
    "popupBox-msgDesc",
    "我的紅包呢!",
    "popupBox-msgFrom",
    "小智上",
    "data-animation",
    "slideDown"
  );
});
