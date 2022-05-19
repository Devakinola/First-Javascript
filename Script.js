var Members = document.getElementById("Members");
var Add = document.getElementById("Add");
// var Delete = document.getElementsByClassName("comot");
var ul = document.querySelector("ul");

function inputLength() {
  return Members.value.length;
}

function createNewList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(Members.value));
  li.addEventListener("click", function toggleDone() {
    li.classList.toggle("Done");
  });
  ul.appendChild(li);

  Members.value = "";

  var remove = document.createElement("button");
  remove.appendChild(document.createTextNode("delete member"));
  li.appendChild(remove);

  remove.classList.add("Box");

  remove.addEventListener("click", function () {
    li.remove();
  });
}

Add.addEventListener("click", function () {
  if (inputLength() > 0) {
    createNewList();
  } else {
    alert("You gotta write something");
  }
});

Members.addEventListener("keypress", function () {
  if (inputLength() > 0 && event.keyCode === 13) {
    createNewList();
  }
});

document.querySelector("h1").classList.add("Heading");
document.querySelector("h2").classList.add("Sub");
Members.classList.add("Box");
Add.classList.add("Box");
