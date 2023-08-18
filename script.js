document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new TypeIt("#text-write", {
            speed: 100,
            loop: true
        })
        .type("su eou", {delay: 400})
        .move(-5, {speed: 1500})
        .delete(1)
        .type("E")
        .move(3,{speed: 1500})
        .delete(1)
        .type("s")
        .move(null, { to: "END" })
        .type(" Desenvolvedor Front-End!", {delay: 1600}).delete(24)
        .type("Designer ", {delay: 200} )
        .type("UI/UX!", {delay: 1600}).delete(22)
        .type("E Posso ser seu Desenvolvedor!", {delay: 2000}).delete(40)
        // .type("E Posso ser seu Programador!", {delay: 2000}).delete(28)
        .go()
    }, 2000)
})

function copyText() {
    const notifyDiscord = document.getElementById('name-discord');
    const nameDiscord = "mottaqbota";
    navigator.clipboard.writeText(nameDiscord);
    notifyDiscord.style.display = "flex";
    setTimeout(() => {
        notifyDiscord.style.display = "none";
    }, 4000)
}

document.addEventListener("DOMContentLoaded", function() {
    var linkNavs = document.querySelectorAll(".link-nav");
    var navMenu = document.querySelector('nav');
    
    linkNavs.forEach(function(linkNav) {
        linkNav.addEventListener("click", function() {
            this.classList.add("link-ativo");
            navMenu.classList.remove('nav-ativo');
            linkNavs.forEach(function(otherLinkNav) {
                if (otherLinkNav !== linkNav) {
                    otherLinkNav.classList.remove("link-ativo");
                }
            });
        });
    });
});


function toggleNav(){
    const navMenu = document.querySelector('nav');
    const btnMenu = document.getElementById('btnMenu');
    navMenu.classList.toggle('nav-ativo');
    if (navMenu.classList.contains("nav-ativo")) {
        btnMenu.name = "close";
    } else {
        btnMenu.name = "menu";
    }
}


  
  
  
  