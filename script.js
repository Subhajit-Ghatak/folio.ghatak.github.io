/*Progress bar*/
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

/*Theme switcher*/
const themeSwitch = document.getElementById('themeSwitch');
const scroll = document.getElementById('myBar');

const body = document.body;
const currentTheme = body.getAttribute('data-bs-theme');

themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        body.setAttribute('data-bs-theme', 'dark');
        document.getElementById("myBar").style.background = "#0dcaf0";
    } else {
        body.setAttribute('data-bs-theme', 'light');
        document.getElementById("myBar").style.background = "#302e4d";
    }
});

if (currentTheme === 'dark') {
  themeSwitch.checked = true;
}

/*Type Writer*/
new Typewriter('#typewriter', {
  strings: ["code,", "make videos,", "explore,", "hustle."],
  autoStart: true,   
  loop: true,         
});

/*Switching tabs in about section*/
var tab = new bootstrap.Tab(document.getElementById('myTab'));
tab.show(document.querySelector('.nav-link.active'));
document.getElementById("bio-tab").click();
var tabs = document.querySelectorAll('.nav-link');
tabs.forEach(function(tab) {
  tab.addEventListener('click', function(event) {
    event.preventDefault();
    new bootstrap.Tab(document.getElementById('myTabContent')).show(this.getAttribute('href'));
  });
});
document.getElementById("bio-tab").click();

/*showing tooltips*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
