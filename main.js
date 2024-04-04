const shareBtn = document.querySelector(".content-tooltip");
const shareTooltip = document.querySelector(".content-tooltiptext");
let visibleFlag = false;

shareBtn.addEventListener("click", () => {
  if (!visibleFlag) {
    shareTooltip.style.visibility = "visible";
    shareTooltip.style.cursor = "initial";
    visibleFlag = true;
  } else {
    shareTooltip.style.visibility = "hidden";
    visibleFlag = false;
  }
});
