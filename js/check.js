let btn = document.getElementsByClassName("btn_next")[0];

btn.addEventListener("click", function(){

  let text_name = document.getElementsByClassName("test_name")[0];
  let input_name = text_name.value.trim();
  let user_name = {
    "name": input_name,
  };

  let names = JSON.parse(localStorage.getItem("names"));
  if(names){
    names.unshift(user_name);
  }else{
    names = [user_name];
  }
  localStorage.setItem("names", JSON.stringify(names));
  
})