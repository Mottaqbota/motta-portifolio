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
    var btnMenu = document.getElementById('btnMenu');
    
    linkNavs.forEach(function(linkNav) {
        linkNav.addEventListener("click", function() {
            this.classList.add("link-ativo");
            navMenu.classList.remove('nav-ativo');
            linkNavs.forEach(function(otherLinkNav) {
                if (otherLinkNav !== linkNav) {
                    otherLinkNav.classList.remove("link-ativo");
                    btnMenu.name = "menu";
                }
            });
        });
    }); 
});


function toggleNav(){
    const btnMenu = document.getElementById('btnMenu');
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle('nav-ativo');
    if (navMenu.classList.contains("nav-ativo")) {
        btnMenu.name = "close";
    } else if (!navMenu.classList.contains("nav-ativo")){
        btnMenu.name = "menu";
    }
}

const arrayFigma = [
    {
        title: 'Loja de Relógios',
        descText: "Loja de relógios feita para um trabalho do Colégio",
        imgSrc: 'previews/preview-figma-project.gif',
        linkFigma: 'https://www.figma.com/file/YsvMElnwMLHfgIMVTVZRaB/Projeto-Principal?type=design&node-id=0%3A1&mode=design&t=TdSYKmORivawM729-1',
    },
    {
        title: 'Projeto Spotify',
        descText: "Réplica funcional do Spotify",
        imgSrc: 'previews/preview-figma-spotify.png',
        linkFigma: 'https://www.figma.com/proto/gAxt0YUhjB7zI70drPVoxu/Projeto-Spotify?type=design&node-id=33-276&t=shr9bPgUxQpCVB11-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=33%3A276&show-proto-sidebar=1&mode=design',
    },
    {
        title: 'Inventário Academy - Fivem',
        descText: "Interface de Inventário",
        imgSrc: 'previews/preview-figma-inventory-motta.png',
        linkFigma: 'https://www.figma.com/file/YsvMElnwMLHfgIMVTVZRaB/Projeto-Principal?type=design&node-id=0%3A1&mode=design&t=TdSYKmORivawM729-1',
    },
    {
        title: 'Mod Menu (Funcional)',
        descText: "Interface para Mod Menu",
        imgSrc: 'previews/preview-figma-mod-menu.png',
        linkFigma: 'https://www.figma.com/proto/BRuNuXFCgVcEaY2OkNnORQ/Wave-Menu?node-id=1-8&starting-point-node-id=1%3A8&mode=design&t=Vjhh7XYgX5iMvFM9-1',
    },
    {
        title: 'Landing Page',
        descText: "Landing Page para venda de um Notebook",
        imgSrc: 'previews/preview-figma-landing-page.png',
        linkFigma: 'https://www.figma.com/proto/wNDbjQBLAY8lWpEiyYyqiF/Untitled?node-id=2-2&starting-point-node-id=2%3A2&scaling=scale-down-width&mode=design&t=l9oQ4jhqX9mk484d-1',
    },
]

createFigmaCards();
function createFigmaCards() {
    const containerFigma = document.querySelector('.container-figma');
    arrayFigma.forEach((item) => {
        const card = document.createElement('div');
        const title = document.createElement('h1');
        const desc = document.createElement('p');
        const img = document.createElement('img');
        const button = document.createElement('a');
    
        card.className = 'card-projeto';
        desc.className = 'text-projeto';
        img.className = 'preview-vid';
        button.className = 'link-projetos';
    
        title.innerText = item.title;
        desc.innerText = item.descText;
        img.src = item.imgSrc;
        button.innerText = 'Visualizar projeto';
        button.href = item.linkFigma;
    
        card.append(img, title, desc, button);
        containerFigma.appendChild(card);
    });
}
  
  
