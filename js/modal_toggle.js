//nav登入按鈕
let btn_login = document.getElementsByClassName("btn_modal_login")[0];

//nav註冊按鈕
let btn_signup = document.getElementsByClassName("btn_modal_signup")[0];

//登入前往註冊按鈕
let btn_toggle_signup = document.getElementsByClassName("btn_open_signup")[0];
//註冊前往登入按鈕
let btn_toggle_login = document.getElementsByClassName("btn_open_login")[0];

//關閉登入彈窗按鈕
let btn_login_close = document.getElementsByClassName("btn_modal_login_close")[0];
//關閉註冊彈窗按鈕
let btn_signup_close = document.getElementsByClassName("btn_modal_signup_close")[0];

//登入彈窗切換註冊彈窗事件
btn_toggle_signup.addEventListener("click", function(){
  btn_login_close.click();
  btn_signup.click();
})

//註冊彈窗切換登入彈窗事件
btn_toggle_login.addEventListener("click", function(){
  btn_signup_close.click();
  btn_login.click();
})