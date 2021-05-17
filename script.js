// LOAD

let loading = document.getElementById('lds-ring');
window.addEventListener('load',function () {
    loading.style.display = "none"
})


window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  var navHome = document.getElementById("navHome");
  var navContact = document.getElementById("navContact");
  var navAbout = document.getElementById("navAbout");
  var navLearn = document.getElementById("navLearn");
  navHome.classList.toggle(
    "active",
    window.scrollY >= 0 && window.scrollY < 381
  );
  navContact.classList.toggle(
    "active",
    window.scrollY > 382 && window.scrollY < 1275
  );
  navAbout.classList.toggle(
    "active",
    window.scrollY > 1276 && window.scrollY < 2213
  );
  navLearn.classList.toggle("active", window.scrollY > 2214);
});


var navPhone = document.getElementById("ULphone");
function showNavPhone() {
  navPhone.classList.toggle("show");
  document.body.classList.toggle("NoScrol");
  document.getElementById('humberger').classList.toggle('close')
}

function displayMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("left0");
  if (menu.classList.contains("left0")) {
    document.getElementById("settingsIcon").className = "fas fa-angle-left";
  } else {
    document.getElementById("settingsIcon").className = "fas fa-angle-right";
  }
}

// LANGUAGE CHANGE
/*
var arabicBtn = document.getElementById('arabic')
var englishBtn = document.getElementById('english')

arabicBtn.addEventListener('click',function changeLanguage() {
  var section1 =  document.querySelectorAll('section1')
})

englishBtn.addEventListener('click',function changeLanguage() {
  var section1 =  document.querySelectorAll('section1')
  section1[0].innerHTML = "english"
})
*/
