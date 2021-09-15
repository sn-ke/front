const SurveyButton = document.querySelector("#survey button");

function handleSurveyBtnClick() {
  console.log("submit!");
}

function doSave() {
  let times = document.getElementsByName("times");
  let checked_time_items = [];
  for (let i = 0; i < times.length; i++) {
    if (times[i].checked) {
      checked_time_items.push(times[i].value);
    }
  }

  console.log(checked_time_items);
}
function doSave() {
  let area = document.getElementsByName("area");
  let checked_area_items = [];
  for (let i = 0; i < area.length; i++) {
    if (times[i].checked) {
      checked_area_items.push(area[i].value);
    }
  }

  console.log(checked_area_items);
}
function doSave() {
  let purpose = document.getElementsByName("purpose");
  let checked_purpose_items = [];
  for (let i = 0; i < purpose.length; i++) {
    if (purpose[i].checked) {
      checked_purpose_items.push(purpose[i].value);
    }
  }

  console.log(checked_purpose_items);
}

const firstVideoClick = document.getElementById("first");

window.focus();

window.addEventListener(
  "blur",
  () => {
    setTimeout(() => {
      if (document.activeElement.id === "first") {
        firstVideoClick.textContent = "clicked " + Date.now();
        console.log("firstvideoclick");
      }
    });
  },
  { once: true }
);
const secondVideoClick = document.getElementById("second");

window.focus();

window.addEventListener(
  "blur",
  () => {
    setTimeout(() => {
      if (document.activeElement.id === "second") {
        secondVideoClick.textContent = "clicked " + Date.now();
        console.log("secondvideoclick");
      }
    });
  },
  { once: true }
);
const thirdVideoClick = document.getElementById("third");

window.focus();

window.addEventListener(
  "blur",
  () => {
    setTimeout(() => {
      if (document.activeElement.id === "third") {
        thirdVideoClick.textContent = "clicked " + Date.now();
        console.log("thirdvideoclick");
      }
    });
  },
  { once: true }
);
