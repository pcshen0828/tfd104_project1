
let names = JSON.parse(localStorage.getItem("names"));
if(names){
  let insert_name = names[0].name;
  let user_name = document.getElementById("user_name");
  user_name.innerText = insert_name;
}