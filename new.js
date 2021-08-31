const SurveyInput = document.querySelector("#survey input");
const SurveyButton = document.querySelector("#survey button");

function handleSurveyBtnClick() {
  console.log("submit!");
}
SurveyButton.addEventListener("click", handleSurveyBtnClick);

const MiddleIframe = document.querySelector("#middle iframe");

function handleMiddleBtnClick() {
  console.log("click");
}

MiddleIframe.addEventListener("click", handleMiddleBtnClick);
