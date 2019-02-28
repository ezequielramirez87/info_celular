window.sr= ScrollReveal();
sr.reveal(".navbar",{
    duration:2000,
    origin:"bottom",
}); 
sr.reveal(".header-container-left",{
    duration:2000,
    origin:"top",
    distance:"300px"
}); 
sr.reveal(".header-container-right",{
    duration:2000,
    origin:"rigth",
    distance:"300px"
}); 
sr.reveal(".header-btn",{
    duration:2000,
    origin:"buttom",
    delay:1000,
});
sr.reveal("#tetimonial",{
    duration:2000,
    origin:"left",
    distance:"300px",
});

//Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});