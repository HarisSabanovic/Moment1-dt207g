let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");


//eventlyssnare
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    let navEl = document.getElementById("nav-menu");

    let style = window.getComputedStyle(navEl);

    if(navEl.style.display === "none") {
        navEl.style.display = "block";
    } else {
        navEl.style.display = "none";
    }

}