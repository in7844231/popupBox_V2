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

var initpopUpBox = function (
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
  msgFrom
) {
  initImg(popUpObj, attrImg, imgPath);
  initMsgTo(popUpObj, attrMsgTo, msgToDesc);
  initMsgTitle(popUpObj, attrTitle, titleDesc);
  initMsgDesc(popUpObj, attrMsgDesc, msgDesc);
  initMsgFrom(popUpObj, attrMsgFrom, msgFrom);
};

$(document).ready(function () {
  initpopUpBox(
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
    "聖誕老人上"
  );
});
