let slogan = document.getElementsByClassName("index_first_banner_slogan")[0];
let type_slogan = '夢想，從 set up 開始'.split('');
let index = 0;
function typing(index){
  if(index < type_slogan.length){
    slogan.innerHTML += type_slogan[index];
    setTimeout(typing.bind(this), 200, ++index);
  }
}
document.addEventListener("DOMContentLoaded", function(){
  typing(index);
})
