/*Theme switching for bg and progress bar*/
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

const themeSwitch = document.getElementById('themeSwitch');
const scroll = document.getElementById('myBar');

const body = document.body;
const currentTheme = body.getAttribute('data-bs-theme');

themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        body.setAttribute('data-bs-theme', 'dark');
        document.getElementById("myBar").style.background = "#f2f2fc";
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

/*Switching Tabs*/
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();