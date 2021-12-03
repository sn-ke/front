const SurveyButton = document.querySelector("#survey button");

function handleSurveyBtnClick() {
  console.log("submit!");
}
// submit log test
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

const LikeButton = document.querySelector("button");

function handleLikeBtnClick() {
  console.log("like");
}

LikeButton.addEventListener("click", handleLikeBtnClick);
// button click event

var slides = document.querySelector(".ctgr_upper_video"),
  slide = document.querySelectorAll(".ctgr_upper_video li"),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 300,
  slideMargin = 30,
  prevBtn = document.querySelector(".prev");
nextBtn = document.querySelector(".next");

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + "px";

function moveSlide(num) {
  slides.style.left = num * 330 + "px";
  currentIdx = num;
}
nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 3) {
    moveSlide(currentIdx + 1);
    console.log(currentIdx);
  } else {
    moveSlide(0);
  }
});
prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 3);
  }
});
// multie slide 미완성
function id_overlap_check() {
  $(".username_input").change(function () {
    $("#id_check_sucess").hide();
    $(".id_overlap_button").show();
    $(".username_input").attr("check_result", "fail");
  });

  if ($(".username_input").val() == "") {
    alert("이메일을 입력해주세요.");
    return;
  }

  id_overlap_input = document.querySelector('input[name="username"]');

  $.ajax({
    url: "{% url 'lawyerAccount:id_overlap_check' %}",
    data: {
      username: id_overlap_input.value,
    },
    datatype: "json",
    success: function (data) {
      console.log(data["overlap"]);
      if (data["overlap"] == "fail") {
        alert("이미 존재하는 아이디 입니다.");
        id_overlap_input.focus();
        return;
      } else {
        alert("사용가능한 아이디 입니다.");
        $(".username_input").attr("check_result", "success");
        $("#id_check_sucess").show();
        $(".id_overlap_button").hide();
        return;
      }
    },
  });
}
// 아이디 중복확인 미완성
