
// color: #e21c1c;


//let  = document.getElementById();



// 이메일 형식 확인
function testEmailFormat(id) {
  let mail_format = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  let email_msg = document.getElementById("email-test");
  
  if (!mail_format.test(id)) {
    email_msg.style.color = "#ee1c1c";
    email_msg.innerText = "이메일 형식이 아닙니다.";
  }
  else {
    email_msg.innerText = ""
  }
}
const input_id = document.getElementById("input_id");
input_id.addEventListener("blur", () => testEmailFormat(input_id.value));


const pw = document.getElementById("input_pw");
const pw_check = document.getElementById("input_pw-check");

// 비밀번호 입력 유무
function inputPassword() {
  const pw_msg = document.getElementById("pw-test");
  
  if (pw == "") {
    pw_msg.style.color = "#ee1c1c";
    pw_msg.innerText = "비밀번호를 입력하세요.";
  }
  else {
    pw_msg.innerText = "";
    // 비밀번호 유효성 검사 (비밀번호 길이가 8~20자 인지)
    checkLength(pw, pw_msg);
    if (pw.value.length < 8) {
      pw_msg.style.color = "#ee1c1c";
      pw_msg.innerText = "8~20자를 입력하세요.";
    }
  }
}

pw.addEventListener("blur", () => inputPassword());

function checkLength(value, msg) {
  if (value.length < 8 || value.length > 20) {
    msg.style.color = "#ee1c1c";
    msg.innerText = "8~20자를 입력하세요.";
    return false;
  }
  else {
    msg.innerText = "";
    return true;
  }
}
// 비밀번호 확인
function testPassword() {
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
pw_check.addEventListener("blur", () => testPassword())


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
const stu_num = document.getElementById("input_student-number");
stu_num.addEventListener("blur", () => testStudentNumber(stu_num.value))


// 휴대전화번호 자동 수정
function addHyphen() {

}
const phone_num = document.getElementById("input_phone-number");


// 취소 버튼
const cancel_btn = document.getElementById("cancel-btn");
cancel_btn.addEventListener("click", () => {
  console.log("btn")
  const cancel = window.confirm("취소 버튼을 눌렀습니다. 로그인 화면으로 돌아가시겠습니까?");
  if(cancel)
    window.location.href = "login.html";
});
