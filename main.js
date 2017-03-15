function generateGearStr() {

  let itemType = document
    .getElementsByClassName("wowhead-tooltip")[0]
    .getElementsByTagName("table")[1]
    .getElementsByTagName("table")[0]
    .getElementsByTagName("td")[0]
    .innerHTML
    .toLowerCase();
  
  // example array  ["", "item=123213", "itemname&bonus=1233:123:302"]
  const urlLocArr = window
    .location
    .pathname
    .split("/");

  const itemId = urlLocArr[1].substr(5, urlLocArr[1].length);
  const item = urlLocArr[2].split("&");
  const itemName = item[0]
    .split("-")
    .join("_");

  let bonusIdStr = "";
  if (item.length > 1) {
    bonusIdStr = ",bonus_id=" + urlLocArr[2]
      .split("&")[1]
      .substr(6, urlLocArr[2].split("&")[1].length)
      .split(":")
      .join("/");
  }

  let str = itemType + "=" + itemName + ",id=" + itemId + bonusIdStr;
  let el = document.getElementById("simcstr");
  el.innerHTML = str;
}

function createGearStrElement() {
  let el = document.createElement("span");
  el.style.color = "#ffa";
  el.id = "simcstr";
  document
    .getElementsByClassName("text")[0]
    .insertBefore(el, document.getElementsByClassName("text")[0].childNodes[0]);
}

window.onload = function () {
  createGearStrElement();
  generateGearStr();
}

window.onclick = function () {
  generateGearStr();
}
