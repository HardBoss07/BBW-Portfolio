// Updated script.js

const translations = {
    de: {
        title: "Mein Portfolio",
        projectsTitle: "Meine Projekte",
        home: "Home",
        myOwnProjects: "Meine eigenen Projekte",
        bbwProjects: "Meine BBW Projekte",
        calcTitle: "Java Taschenrechner",
        calcLink: "Mehr erfahren",
        tdlTitle: "To Do List Applikation",
        tdlLink: "Mehr erfahren",
        tictactoeTitle: "Assembly Tic Tac Toe",
        tictactoeLink: "Mehr erfahren",
        asmTitle: "Assembly Tutorial",
        asmLink: "Mehr erfahren",
        hamsterTitle: "Hamster-Simulator",
        hamsterLink: "Mehr erfahren",
        jokemonTitle: "Jokemon Projekt",
        jokemonLink: "Mehr erfahren",
        footer: "&copy; 2024 - Matteo Bosshard"
    },
    en: {
        title: "My Portfolio",
        projectsTitle: "My Projects",
        home: "Home",
        myOwnProjects: "My Own Projects",
        bbwProjects: "My BBW Projects",
        calcTitle: "Java Calculator",
        calcLink: "Learn More",
        tdlTitle: "To Do List Application",
        tdlLink: "Learn More",
        tictactoeTitle: "Assembly Tic Tac Toe",
        tictactoeLink: "Learn More",
        asmTitle: "Assembly Tutorial",
        asmLink: "Learn More",
        hamsterTitle: "Hamster Simulator",
        hamsterLink: "Learn More",
        jokemonTitle: "Jokemon Project",
        jokemonLink: "Learn More",
        footer: "&copy; 2024 - Matteo Bosshard"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    const t = translations[lang];

    // Update common elements
    document.title = t.title;
    const projectsTitle = document.getElementById("projects-title");
    if (projectsTitle) projectsTitle.textContent = t.projectsTitle;

    const homeLink = document.getElementById("home-link");
    if (homeLink) homeLink.textContent = t.home;

    // Update project section titles
    const myOwnProjectsTitle = document.getElementById("my-own-projects-title");
    if (myOwnProjectsTitle) myOwnProjectsTitle.textContent = t.myOwnProjects;

    const bbwProjectsTitle = document.getElementById("bbw-projects-title");
    if (bbwProjectsTitle) bbwProjectsTitle.textContent = t.bbwProjects;

    // Update project cards
    const projectIds = ["calc", "tdl", "tictactoe", "asm", "hamster", "jokemon"];
    projectIds.forEach(id => {
        const titleElem = document.getElementById(`${id}-title`);
        const linkElem = document.getElementById(`${id}-link`);
        if (titleElem) titleElem.textContent = t[`${id}Title`];
        if (linkElem) linkElem.textContent = t[`${id}Link`];
    });

    // Update footer
    const footer = document.getElementById("footer");
    if (footer) footer.innerHTML = t.footer;
}

// Event listener for the language selector
document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");
    if (languageSelector) {
        languageSelector.addEventListener("change", (event) => {
            changeLanguage(event.target.value);
        });
    }
});
