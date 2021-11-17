$(function(){

  $("#go_top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 450)  {          /* 要滑動到選單的距離 */
      $('.dropdowns').addClass('navFixed');   /* 幫選單加上固定效果 */
    } else {
      $('.dropdowns').removeClass('navFixed'); /* 移除選單固定效果 */
    }
  }); 
  
  // hamburger icon 的切換
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
  });
  
  // 點擊漢堡按鈕，導覽列縮放
  $("button.hamburger").on("click", function(){
    $("nav.nav, div.login_signup_block").fadeToggle();
  });
  
  
  // 開啟 登入 Modal彈跳視窗
  $("button.btn_modal_login").on("click", function(){
    $("div.login_overlay").fadeIn();
  });
  
  // 關閉 登入 Modal彈跳視窗
  $("button.btn_modal_login_close").on("click", function(){
    $("div.login_overlay").fadeOut();
  });

  // 開啟 註冊 Modal彈跳視窗
  $("button.btn_modal_signup").on("click", function(){
    $("div.signup_overlay").fadeIn();
  });
  
  // 關閉 註冊 Modal彈跳視窗
  $("button.btn_modal_signup_close").on("click", function(){
    $("div.signup_overlay").fadeOut();
  });

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

});

let btn_solution = document.getElementsByClassName("triangle")[0];
btn_solution.addEventListener("click", function(){
  let solution = document.getElementsByClassName("solution_list")[0];
  solution.classList.toggle("-open");
})

