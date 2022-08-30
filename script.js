var tod = document.querySelector("#todd");
var phil = document.querySelector("#phil");
var mismail = document.getElementById("ismail");
var clicked = [1, 2]; //index 0,1 for tod and phil
var badge = document.querySelector(".badge");
var count = 500;
console.log(tod, phil, badge, clicked);
function remove(i) {
  if (clicked[i] == 1) {
    tod.remove();
    count--;
    badge.innerHTML = count;
  } else if (clicked[i] == 2) {
    phil.remove();
    count--;
    badge.innerHTML = count;
  }
}
console.log(mismail);
function changeName() {
  mismail.innerText = "Mohammed Ismail";
}
