
// color: #e21c1c;

let input_id = document.getElementById("input_id");
let input_pw = document.getElementById("input_pw");
let input_pw_check = document.getElementById("input_pw-check");
let input_student_number = document.getElementById("input_student-number");
//let  = document.getElementById();
let input_phone_number = document.getElementById("input_phone-number");

let cancel_btn = document.getElementById("cancel-btn");

// 이메일 형식 확인
function testEmailFormat(email) {
  let mail_format = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  let email_msg = document.getElementById("email-test");
  
  if (!mail_format.test(email)) {
    email_msg.style.color = "#ee1c1c";
    email_msg.innerText = "이메일 형식이 아닙니다.";
  }
  else {
    email_msg.innerText = ""
  }
}
input_id.addEventListener("blur", () => testEmailFormat(input_id.value));


// 비밀번호 입력 유무
function inputPassword(pw_value) {
  let pw_msg = document.getElementById("pw-test");
  
  // if (pw_value == "") {
  //   pw_msg.style.color = "#ee1c1c";
  //   pw_msg.innerText = "비밀번호를 입력하세요.";
  // }
  // else {
  //   pw_msg.innerText = "";
  //   // 비밀번호 유효성 검사 (비밀번호 길이가 8~20자 인지)
    checkLength(pw_value, pw_msg);
    // if (pw_value.length < 8) {
    //   pw_msg.style.color = "#ee1c1c";
    //   pw_msg.innerText = "8~20자를 입력하세요.";
    // }
  // }
}
function checkLength(value, msg) {
  if (value.length < 8) {
    msg.style.color = "#ee1c1c";
    msg.innerText = "8~20자를 입력하세요.";
    return false;
  }
  else {
    msg.innerText = "";
    return true;
  }
}
input_pw.addEventListener("blur", () => inputPassword(input_pw.value));


// 비밀번호 확인
function testPassword(pw, pw_check) {
  let pw_check_msg = document.getElementById("pw-check-test");

  let check_length = checkLength(pw_check, pw_check_msg);
  
  if (!check_length) {
  }
  else {
    if (pw != pw_check) {
      pw_check_msg.style.color = "#ee1c1c";
      pw_check_msg.innerText = "비밀번호가 동일하지 않습니다.";
    }
    else {
      pw_check_msg.style.color = "#129b29";
      pw_check_msg.innerText = "비밀번호가 동일합니다.";
    }
  }
    
}
input_pw_check.addEventListener("blur", () => testPassword(input_pw.value, input_pw_check.value))


// 학번 유효성 검사
STU_MAX = 2022999999;
STU_MIN = 1991000000;
function testStudentNumber(stu_num) {
  let stu_num_msg = document.getElementById("student-number-test");
  if (stu_num > STU_MAX || stu_num < STU_MIN) {
    stu_num_msg.style.color = "#ee1c1c";
    stu_num_msg.innerText = "학번이 유효하지 않습니다.";
  }
  else {
    // 학번에 따라 전공 선택
  }
}
input_student_number.addEventListener("blur", () => testStudentNumber(input_student_number.value))


// 휴대전화번호 자동 수정
function addHyphen(phone_num) {

}


// 취소 버튼
cancel_btn.addEventListener("click", () => {
  window.location.href="login.html";
});