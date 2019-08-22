document.title = "Lucero | Portfolio";

window.addEventListener("scroll", () => {
    if(window.scrollY > window.innerHeight){
        document.getElementById("navBar").style.background = 'red';
    }
})