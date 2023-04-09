var typed = new Typed('#typing-1', {
    strings: ['Student', 'Coder', 'Developer'],
    typeSpeed: 40,
    backspeed: 40,
    loop: true,
});

var menubtns = document.getElementsByClassName("menu-btn");
const addclass = () => {
    for (const menubtn of menubtns) {
        menubtn.classList.remove("active");
    }

    event.currentTarget.classList.add("active");
}

var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tab-content");
const opentab = (tabname) => {
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById('sidemenu');

const openmenu = () => {
    sidemenu.style.left = "0vw";
    document.getElementById('none').style.left = "110vw";
}

const closemenu = () => {
    sidemenu.style.left = "-100vw"
    document.getElementById('none').style.left = "90vw";
}
