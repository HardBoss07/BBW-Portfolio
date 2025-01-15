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
        assemblyTitle: "Assembly Tutorial",
        assemblyHeader: "Assembly Tutorial",
        aboutAssemblyTitle: "Über das Assembly Tutorial",
        aboutAssemblyText: "Dieses Projekt habe ich mehr als Spass gestartet. Jedoch habe ich doch ein Ziel. Mein Ziel mit Assembly ist es, ein genaues Verständnis von den tief liegenden Operationen von einem Programm und genauer Memory-Allocation innerhalb der CPU zu lernen. Ich nutze den emu8086 Emulator und fokussiere mich zunächst auf die MSDOS-Assembly Programmierung.",
        helloWorldTitle: "Hello World in Assembly",
        helloWorldText: "Hier habe ich ein kleines Programm geschrieben, das \"Hello World\" in der Console ausgibt:",
        addNumbersTitle: "2 Zahlen addieren",
        addNumbersText: "Hier habe ich ein Programm, das den Nutzer nach 2 Zahlen fragt und diese danach addiert. Dies ist nur ein Teil des Source Codes, den Rest kann man auf dem GitHub Repository finden:",
        ticTacToeTitle: "Assembly Tic Tac Toe",
        ticTacToeHeader: "Assembly Tic Tac Toe",
        backToProjectsLink: "Zurück zu Projekte",
        aboutTicTacToeTitle: "Über Assembly Tic Tac Toe",
        aboutTicTacToeText: "Um meine Assembly Künste zu verbessern, habe ich mir als Ziel gesetzt Tic Tac Toe in Assembly zu schreiben. Ich nutze den emu8086 Emulator um meinen Assembly Code zu testen. Dieses Projekt hat mir sehr geholfen, mit mit der internen Struktur einer CPU tiefer zu beschäftigen. Ich habe gelernt, wie man Methoden und Loops in Assembly nutzt, wie man besser User-Inputs verarbeitet und Error-Handling in Assembly.",
        resultsTitle: "Meine Ergebnisse:",
        githubRepoLink: "⇱ Github Repository",
        videoDemoTitle: "Video Demonstration",
        videoDemoText: "Hier ist eine Video Demonstration von einer Runde Tic Tac Toe:",
        initTitle: "Initialisierung",
        initText: "Hier ist meine INIT Methode. Diese Methode setzt Variabeln, sodass das Spiel schlussendlich fehlerfrei starten kann:",
        checkTitle: "Regeln überprüfen",
        checkText: "Hier ist ein Ausschnitt meiner CHECK Methode. Diese Methode überprüft alle 8 Kombinationen, die zu einem Sieg führen:",
        invalidInputTitle: "Umgehen mit invaliden Inputs",
        invalidInputText: "Hier ist meine TAKEN Methode. Diese Methode überprüft ob ein Input eines Spielers valid ist und wenn dies nicht der Fall ist, überschreibt die Methode den Input mit einer leeren Zeile:",
        hamsterHeader: "Hamster-Simulator",
        aboutHamsterTitle: "Über den Hamster-Simulator:",
        aboutHamsterText: "Der Hamster-Simulator ist ein Programm, der einem hilft die Struktur eines Programmes zu erlernen. Der Hamster-Simulator erlaubt dir einen Hamster mit vorbestimmten Befehle in Kombination von Kontrollstrukturen zu steuern. Den Hamster kann man mit Projektablaufplänen, Struktogramme oder Java bedienen.",
        papTitle: "Projektablaufplan",
        papText: "Hier ist ein Projektablaufplan zu der Aufgabe 11.2.3. Hier musste der Hamster solange Körner vom Startfeld bis ans Ende der Umgebung transportieren:",
        struktogrammTitle: "Struktogramm",
        struktogrammText: "Das Ist ein Struktogramm zu der Aufgabe 12.5.4. Hier muss der Hamster Alle Körner auf seinem Weg aufnehmen und wenn der Hamster am Ende vor einer Wand steht, soll er umdrehen und zu seinem Startpunkt zurückkehren:",
        javaTitle: "Java",
        javaText: "Hier ist ein Java Skript zur Aufgabe 16.4.2. Hier muss der Hamster Körner von seinem Startfeld zur ersten Wand laufen, das Korn abgeben und dann zurück zum Startfeld gehen. Danach soll der Hamster es wiederholen, aber er soll das nächste Korn nicht auf demselben Feld abgeben, sondern auf dem nächsten Feld, wo kein Korn bereits liegt:",
        calculatorTitle: "Java Taschenrechner",
        calculatorHeader: "Java Taschenrechner",
        aboutCalculatorTitle: "Über den Java Taschenrechner",
        aboutCalculatorText: "In diesem Projekt habe ich mich mit Desktop Applikationsentwicklung beschäftigt. Ich habe das JavaFX Framework in Kombination von klassischem Java 23 genutzt. Ich habe davor noch keine Erfahrung mit Desktop Development in Java gehabt. Dieses Projekt hat mir ebenfalls stark bei dem Ausbau meiner CSS-Fähigkeiten geholfen.",
        helloClassTitle: "HelloApplication Java-Klasse",
        helloClassText: "Hier ist ein Ausschnitt von meiner HelloApplication Klasse. Diese Klasse legt die grundlegende Elemente und das Layout des Taschenrechners fest. Die restliche Klasse ist auf dem GitHub Repository vorhanden:",
        calculatorClassTitle: "Calculator Java-Klasse",
        calculatorClassText: "Hier ist ein Ausschnitt von meiner Calculator Klasse. Diese Klasse verarbeitet die gesamte Logik bezüglich der Berechnungen. Die restliche Klasse ist auf dem GitHub Repository vorhanden:",
        moreInfoText: "Für weitere Informationen und dem gesamten Source-Code besuche mein GitHub Repository!",
        downloadLink: "⇱ Zum Download",
        projectTitle: "Jokemon Projekt",
        projectHeader: "Jokemon Projekt",
        aboutProjectTitle: "Über das Jokemon Projekt:",
        aboutProjectText: "Das Jokemon Projekt ist zusammengefasst eine vereinfachte Kopie von dem Spiel Pokemon. Ich habe eine Grundlage von meinem Lehrer bekommen. In dieser Grundlage gab es eine Basis für Attacken und den Jokemons. Ich habe diese Grundlage deutlich erweitert.",
        environmentTitle: "2D-Umgebung",
        environmentText: "Ich habe eine 2 dimensionale Umgebung hinzugefügt...",
        objectsTitle: "Interagierbare Objekte",
        objectsText: "Es gibt feindliche NPCs, wilde Jokemons und Gebäude...",
        mapsTitle: "Auswahl von unterschiedlichen Karten",
        mapsText: "Am Anfang des Spiels kann man zwischen 5 verschiedenen Karten auswählen...",
        evolutionTitle: "Jokemons weiterentwickeln",
        evolutionText: "Im Verlauf des Spiels levelt man seine eigenen Jokemons durch Kämpfe auf...",
        savegameTitle: "Speichern des Spielstandes",
        savegameText: "Ich habe ein System entwickelt, das einem ermöglicht, seinen Spielstand zu speichern...",
        mapScreenshotTitle: "50 x 50 2D-Karte",
        mapScreenshotText: "Hier habe ich ein Screenshot von der Karte 4 gemacht...",
        gamestateClassTitle: "GameState Java-Klasse",
        gamestateClassText: "Hier habe ich einen Ausschnitt von meiner GameState Klasse...",
        buildingClassTitle: "Building Java-Klasse",
        buildingClassText: "Die Building Java-Klasse ist eine abstrakte Klasse...",
        helloapplicationTitle: "HelloApplication Java-Klasse",
        helloapplicationText: "Hier ist ein Ausschnitt von von meiner HelloApplication Klasse...",
        savesystemTitle: "SaveSystem Java-Klasse",
        savesystemText: "Hier ist ein Ausschnitt von von meiner SaveSystem Klasse...",
        todolistTitle: "ToDoList Java-Klasse",
        todolistText: "Hier ist ein Auschnitt meiner ToDoList Klasse...",
        jsonFileTitle: ".JSON-Datei",
        jsonFileText: "Hier ist eine Beispiel .JSON-Datei, die nach dem Speichern lokal gespeichert wird...",
        footer: "&copy; 2025 - Matteo Bosshard"
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
        assemblyTitle: "Assembly Tutorial",
        assemblyHeader: "Assembly Tutorial",
        aboutAssemblyTitle: "About the Assembly Tutorial",
        aboutAssemblyText: "I started this project mainly for fun. However, I do have a goal. My goal with Assembly is to gain a precise understanding of the low-level operations of a program and specifically memory allocation within the CPU. I use the emu8086 emulator and focus primarily on MSDOS-Assembly programming.",
        helloWorldTitle: "Hello World in Assembly",
        helloWorldText: "Here, I wrote a small program that outputs \"Hello World\" in the console:",
        addNumbersTitle: "Add Two Numbers",
        addNumbersText: "Here, I created a program that asks the user for two numbers and then adds them together. This is only a portion of the source code; the rest can be found in the GitHub repository:",
        ticTacToeTitle: "Assembly Tic Tac Toe",
        ticTacToeHeader: "Assembly Tic Tac Toe",
        backToProjectsLink: "Back to Projects",
        aboutTicTacToeTitle: "About Assembly Tic Tac Toe",
        aboutTicTacToeText: "To improve my Assembly skills, I set myself the goal of writing Tic Tac Toe in Assembly. I use the emu8086 emulator to test my Assembly code. This project helped me dive deeper into the internal structure of a CPU. I learned how to use methods and loops in Assembly, handle user inputs more effectively, and perform error handling in Assembly.",
        resultsTitle: "My Results:",
        githubRepoLink: "⇱ Github Repository",
        videoDemoTitle: "Video Demonstration",
        videoDemoText: "Here is a video demonstration of a round of Tic Tac Toe:",
        initTitle: "Initialization",
        initText: "Here is my INIT method. This method sets variables so that the game can start without errors:",
        checkTitle: "Checking Rules",
        checkText: "Here is an excerpt of my CHECK method. This method checks all 8 combinations that lead to a win:",
        invalidInputTitle: "Handling Invalid Inputs",
        invalidInputText: "Here is my TAKEN method. This method checks if a player's input is valid, and if not, it overwrites the input with an empty line:",
        moreInfoText: "For more information and the complete source code, visit my GitHub repository!",
        hamsterHeader: "Hamster Simulator",
        aboutHamsterTitle: "About the Hamster Simulator:",
        aboutHamsterText: "The Hamster Simulator is a program designed to help users learn the structure of a program. The Hamster Simulator allows you to control a hamster using predefined commands combined with control structures. The hamster can be controlled using flowcharts, structured charts, or Java.",
        papTitle: "Flowchart",
        papText: "Here is a flowchart for task 11.2.3. The hamster had to transport grains from the starting field to the end of the environment:",
        struktogrammTitle: "Structured Chart",
        struktogrammText: "This is a structured chart for task 12.5.4. The hamster has to pick up all grains on its path, and if it stands in front of a wall at the end, it should turn around and return to its starting point:",
        javaTitle: "Java",
        javaText: "Here is a Java script for task 16.4.2. The hamster has to carry grains from its starting field to the first wall, drop the grain, and then return to the starting field. Then the hamster should repeat the process, but it must not drop the next grain on the same field; it should find the next empty field:",
        calculatorTitle: "Java Calculator",
        calculatorHeader: "Java Calculator",
        aboutCalculatorTitle: "About the Java Calculator",
        aboutCalculatorText: "In this project, I worked on desktop application development. I used the JavaFX framework in combination with classic Java 23. I had no prior experience with desktop development in Java. This project also significantly improved my CSS skills.",
        helloClassTitle: "HelloApplication Java Class",
        helloClassText: "Here is an excerpt from my HelloApplication class. This class defines the basic elements and layout of the calculator. The rest of the class is available on the GitHub repository:",
        calculatorClassTitle: "Calculator Java Class",
        calculatorClassText: "Here is an excerpt from my Calculator class. This class processes all the logic related to the calculations. The rest of the class is available on the GitHub repository:",
        downloadLink: "⇱ Download",
        projectTitle: "Jokemon Project",
        projectHeader: "Jokemon Project",
        aboutProjectTitle: "About the Jokemon Project:",
        aboutProjectText: "The Jokemon Project is essentially a simplified copy of the game Pokémon...",
        environmentTitle: "2D Environment",
        environmentText: "I added a two-dimensional environment...",
        objectsTitle: "Interactable Objects",
        objectsText: "There are hostile NPCs, wild Jokemons, and buildings...",
        mapsTitle: "Selection of Different Maps",
        mapsText: "At the beginning of the game, you can choose from 5 different maps...",
        evolutionTitle: "Evolving Jokemons",
        evolutionText: "Throughout the game, you level up your Jokemons through battles...",
        savegameTitle: "Saving Game Progress",
        savegameText: "I developed a system that allows you to save your game progress...",
        mapScreenshotTitle: "50 x 50 2D Map",
        mapScreenshotText: "Here is a screenshot of Map 4...",
        gamestateClassTitle: "GameState Java Class",
        gamestateClassText: "Here is an excerpt from my GameState class...",
        buildingClassTitle: "Building Java Class",
        buildingClassText: "The Building Java Class is an abstract class...",
        helloapplicationTitle: "HelloApplication Java Class",
        helloapplicationText: "Here is an excerpt from my HelloApplication class...",
        savesystemTitle: "SaveSystem Java Class",
        savesystemText: "Here is an excerpt from my SaveSystem class...",
        todolistTitle: "ToDoList Java Class",
        todolistText: "Here is an excerpt from my ToDoList class...",
        jsonFileTitle: ".JSON File",
        jsonFileText: "Here is an example .JSON file that gets saved locally...",
        footer: "&copy; 2025 - Matteo Bosshard"
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

    document.documentElement.lang = lang;

    // Update Assembly Tutorial Page Elements
    const assemblyTitle = document.getElementById("assembly-title");
    const assemblyHeader = document.getElementById("assembly-header");
    const backToProjectsLink = document.getElementById("back-to-projects-link");
    const aboutAssemblyTitle = document.getElementById("about-assembly-title");
    const aboutAssemblyText = document.getElementById("about-assembly-text");
    const resultsTitle = document.getElementById("results-title");
    const githubRepoLink = document.getElementById("github-repo-link");
    const helloWorldTitle = document.getElementById("hello-world-title");
    const helloWorldText = document.getElementById("hello-world-text");
    const addNumbersTitle = document.getElementById("add-numbers-title");
    const addNumbersText = document.getElementById("add-numbers-text");
    const moreInfoText = document.getElementById("more-info-text");

    if (assemblyTitle) assemblyTitle.textContent = t.assemblyTitle;
    if (assemblyHeader) assemblyHeader.textContent = t.assemblyHeader;
    if (backToProjectsLink) backToProjectsLink.textContent = t.backToProjectsLink;
    if (aboutAssemblyTitle) aboutAssemblyTitle.textContent = t.aboutAssemblyTitle;
    if (aboutAssemblyText) aboutAssemblyText.textContent = t.aboutAssemblyText;
    if (resultsTitle) resultsTitle.textContent = t.resultsTitle;
    if (githubRepoLink) githubRepoLink.textContent = t.githubRepoLink;
    if (helloWorldTitle) helloWorldTitle.textContent = t.helloWorldTitle;
    if (helloWorldText) helloWorldText.textContent = t.helloWorldText;
    if (addNumbersTitle) addNumbersTitle.textContent = t.addNumbersTitle;
    if (addNumbersText) addNumbersText.textContent = t.addNumbersText;
    if (moreInfoText) moreInfoText.textContent = t.moreInfoText;
    if (footer) footer.innerHTML = t.footer;

    const ticTacToeTitle = document.getElementById("tic-tac-toe-title");
    const ticTacToeHeader = document.getElementById("tic-tac-toe-header");
    const aboutTicTacToeTitle = document.getElementById("about-tic-tac-toe-title");
    const aboutTicTacToeText = document.getElementById("about-tic-tac-toe-text");
    const videoDemoTitle = document.getElementById("video-demo-title");
    const videoDemoText = document.getElementById("video-demo-text");
    const initTitle = document.getElementById("init-title");
    const initText = document.getElementById("init-text");
    const checkTitle = document.getElementById("check-title");
    const checkText = document.getElementById("check-text");
    const invalidInputTitle = document.getElementById("invalid-input-title");
    const invalidInputText = document.getElementById("invalid-input-text");

    if (ticTacToeTitle) ticTacToeTitle.textContent = t.ticTacToeTitle;
    if (ticTacToeHeader) ticTacToeHeader.textContent = t.ticTacToeHeader;
    if (backToProjectsLink) backToProjectsLink.textContent = t.backToProjectsLink;
    if (aboutTicTacToeTitle) aboutTicTacToeTitle.textContent = t.aboutTicTacToeTitle;
    if (aboutTicTacToeText) aboutTicTacToeText.textContent = t.aboutTicTacToeText;
    if (resultsTitle) resultsTitle.textContent = t.resultsTitle;
    if (githubRepoLink) githubRepoLink.textContent = t.githubRepoLink;
    if (videoDemoTitle) videoDemoTitle.textContent = t.videoDemoTitle;
    if (videoDemoText) videoDemoText.textContent = t.videoDemoText;
    if (initTitle) initTitle.textContent = t.initTitle;
    if (initText) initText.textContent = t.initText;
    if (checkTitle) checkTitle.textContent = t.checkTitle;
    if (checkText) checkText.textContent = t.checkText;
    if (invalidInputTitle) invalidInputTitle.textContent = t.invalidInputTitle;
    if (invalidInputText) invalidInputText.textContent = t.invalidInputText;
    if (moreInfoText) moreInfoText.textContent = t.moreInfoText;

    const hamsterTitle = document.getElementById("hamster-title");
    const hamsterHeader = document.getElementById("hamster-header");
    const aboutHamsterTitle = document.getElementById("about-hamster-title");
    const aboutHamsterText = document.getElementById("about-hamster-text");
    const papTitle = document.getElementById("pap-title");
    const papText = document.getElementById("pap-text");
    const struktogrammTitle = document.getElementById("struktogramm-title");
    const struktogrammText = document.getElementById("struktogramm-text");
    const javaTitle = document.getElementById("java-title");
    const javaText = document.getElementById("java-text");

    if (hamsterTitle) hamsterTitle.textContent = t.hamsterTitle;
    if (hamsterHeader) hamsterHeader.textContent = t.hamsterHeader;
    if (backToProjectsLink) backToProjectsLink.textContent = t.backToProjectsLink;
    if (aboutHamsterTitle) aboutHamsterTitle.textContent = t.aboutHamsterTitle;
    if (aboutHamsterText) aboutHamsterText.textContent = t.aboutHamsterText;
    if (resultsTitle) resultsTitle.textContent = t.resultsTitle;
    if (papTitle) papTitle.textContent = t.papTitle;
    if (papText) papText.textContent = t.papText;
    if (struktogrammTitle) struktogrammTitle.textContent = t.struktogrammTitle;
    if (struktogrammText) struktogrammText.textContent = t.struktogrammText;
    if (javaTitle) javaTitle.textContent = t.javaTitle;
    if (javaText) javaText.textContent = t.javaText;
    if (footer) footer.innerHTML = t.footer;

    const calculatorTitle = document.getElementById("calculator-title");
    const calculatorHeader = document.getElementById("calculator-header");
    const aboutCalculatorTitle = document.getElementById("about-calculator-title");
    const aboutCalculatorText = document.getElementById("about-calculator-text");
    const helloClassTitle = document.getElementById("hello-class-title");
    const helloClassText = document.getElementById("hello-class-text");
    const calculatorClassTitle = document.getElementById("calculator-class-title");
    const calculatorClassText = document.getElementById("calculator-class-text");
    const downloadLink = document.getElementById("download-link");

    if (calculatorTitle) calculatorTitle.textContent = t.calculatorTitle;
    if (calculatorHeader) calculatorHeader.textContent = t.calculatorHeader;
    if (backToProjectsLink) backToProjectsLink.textContent = t.backToProjectsLink;
    if (aboutCalculatorTitle) aboutCalculatorTitle.textContent = t.aboutCalculatorTitle;
    if (aboutCalculatorText) aboutCalculatorText.textContent = t.aboutCalculatorText;
    if (resultsTitle) resultsTitle.textContent = t.resultsTitle;
    if (githubRepoLink) githubRepoLink.textContent = t.githubRepoLink;
    if (videoDemoTitle) videoDemoTitle.textContent = t.videoDemoTitle;
    if (videoDemoText) videoDemoText.textContent = t.videoDemoText;
    if (helloClassTitle) helloClassTitle.textContent = t.helloClassTitle;
    if (helloClassText) helloClassText.textContent = t.helloClassText;
    if (calculatorClassTitle) calculatorClassTitle.textContent = t.calculatorClassTitle;
    if (calculatorClassText) calculatorClassText.textContent = t.calculatorClassText;
    if (moreInfoText) moreInfoText.textContent = t.moreInfoText;
    if (downloadLink) downloadLink.textContent = t.downloadLink;
    if (footer) footer.innerHTML = t.footer;

    document.getElementById("project-title").textContent = t.projectTitle;
    document.getElementById("project-header").textContent = t.projectHeader;
    document.getElementById("back-to-projects-link").textContent = t.backToProjectsLink;
    document.getElementById("about-project-title").textContent = t.aboutProjectTitle;
    document.getElementById("about-project-text").textContent = t.aboutProjectText;
    document.getElementById("environment-title").textContent = t.environmentTitle;
    document.getElementById("environment-text").textContent = t.environmentText;
    document.getElementById("objects-title").textContent = t.objectsTitle;
    document.getElementById("objects-text").textContent = t.objectsText;
    document.getElementById("maps-title").textContent = t.mapsTitle;
    document.getElementById("maps-text").textContent = t.mapsText;
    document.getElementById("evolution-title").textContent = t.evolutionTitle;
    document.getElementById("evolution-text").textContent = t.evolutionText;
    document.getElementById("savegame-title").textContent = t.savegameTitle;
    document.getElementById("savegame-text").textContent = t.savegameText;
    document.getElementById("results-title").textContent = t.resultsTitle;
    document.getElementById("github-repo-link").textContent = t.githubRepoLink;
    document.getElementById("map-screenshot-title").textContent = t.mapScreenshotTitle;
    document.getElementById("map-screenshot-text").textContent = t.mapScreenshotText;
    document.getElementById("gamestate-class-title").textContent = t.gamestateClassTitle;
    document.getElementById("gamestate-class-text").textContent = t.gamestateClassText;
    document.getElementById("building-class-title").textContent = t.buildingClassTitle;
    document.getElementById("building-class-text").textContent = t.buildingClassText;
    document.getElementById("footer").textContent = t.footer;

    document.getElementById("project-header").textContent = t.projectHeader;
    document.getElementById("back-to-projects-link").textContent = t.backToProjectsLink;
    document.getElementById("about-project-title").textContent = t.aboutProjectTitle;
    document.getElementById("about-project-text").textContent = t.aboutProjectText;
    document.getElementById("results-title").textContent = t.resultsTitle;
    document.getElementById("github-repo-link").textContent = t.githubRepoLink;
    document.getElementById("video-demo-title").textContent = t.videoDemoTitle;
    document.getElementById("video-demo-text").textContent = t.videoDemoText;
    document.getElementById("helloapplication-title").textContent = t.helloapplicationTitle;
    document.getElementById("helloapplication-text").textContent = t.helloapplicationText;
    document.getElementById("savesystem-title").textContent = t.savesystemTitle;
    document.getElementById("savesystem-text").textContent = t.savesystemText;
    document.getElementById("todolist-title").textContent = t.todolistTitle;
    document.getElementById("todolist-text").textContent = t.todolistText;
    document.getElementById("json-file-title").textContent = t.jsonFileTitle;
    document.getElementById("json-file-text").textContent = t.jsonFileText;
    document.getElementById("more-info-text").textContent = t.moreInfoText;
    document.getElementById("download-link").textContent = t.downloadLink;
    document.getElementById("footer").textContent = t.footer;
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
