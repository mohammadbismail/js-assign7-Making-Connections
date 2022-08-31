var tod = document.querySelector("#todd");
var phil = document.querySelector("#phil");
var mismail = document.getElementById("ismail");
var clicked = [1, 2]; //index 0,1 for tod and phil
var badge = document.querySelector(".vol");
var badge2 = document.querySelector(".conn");
var count = 500;
var count2 = 2;
console.log(tod, phil, badge, clicked);
function remove(i) {
  if (clicked[i] == 1) {
    tod.remove();
    count++;
    count2--;
    badge.innerHTML = count; ///"<h1>hi</h1>"
    badge2.innerHTML = count2;
  } else if (clicked[i] == 2) {
    phil.remove();
    count++;
    count2--;
    badge.innerHTML = count;
    badge2.innerText = count2;
  }
}
console.log(mismail);
function changeName() {
  mismail.innerText = "Mohammed Ismail";
}
