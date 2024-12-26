// Lista de juegos
const juegos = [
    {
        id: "Alan Wake",
        imgSrc: "assets/img/alan.jpg",
        altText: "Alan Wake",
        title: "Alan Wake",
        downloadLink2: "https://nephobox.com/s/1LzsELFiNmRtTZ0myNT_1nw" // Segundo enlace de descarga

    },       
    {
        id: "Assassin's Creed Rogue",
        imgSrc: "assets/img/assarogue.jpg",
        altText: "Assassin's Creed Rogue",
        title: "Assassin's Creed Rogue",
        downloadLink2: "https://nephobox.com/s/1coxcL_SUb2hr-PSRsFdDHQ" // Segundo enlace de descarga

    },       
    {
        id: "Dead Space 2",
        imgSrc: "assets/img/dead2.jpg",
        altText: "Dead Space 2",
        title: "Dead Space 2",
        downloadLink2: "fff" // Segundo enlace de descarga

    },       
    {
        id: "Deadpool",
        imgSrc: "assets/img/deadpool.jpg",
        altText: "Deadpool",
        title: "Deadpool",
        downloadLink2: "https://nephobox.com/s/1oocuHjwXYIKawY8G0mrQWQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Devil May Cry 4 Special Edition",
        imgSrc: "assets/img/dmc4.jpg",
        altText: "Devil May Cry 4 Special Edition",
        title: "Devil May Cry 4 Special Edition",
        downloadLink2: "https://nephobox.com/s/1bP52rEUEdSo_dLeO11Da6Q" // Segundo enlace de descarga

    },       
    {
        id: "Devil May Cry 5",
        imgSrc: "assets/img/dmc5.jpg",
        altText: "Devil May Cry 5",
        title: "Devil May Cry 5",
        downloadLink2: "https://nephobox.com/s/1m2k1spoYZX5Co3xiQDYicA" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Sparking Zero",
        imgSrc: "assets/img/dbzero.jpg",
        altText: "Dragon Ball Sparking Zero",
        title: "Dragon Ball Sparking Zero",
        downloadLink2: "https://nephobox.com/s/1HjdaQJHAj50HieQZYWXVmw" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z Kakarot",
        imgSrc: "assets/img/dbkakarot.jpg",
        altText: "Dragon Ball Z Kakarot",
        title: "Dragon Ball Z Kakarot",
        downloadLink2: "https://nephobox.com/s/1xtfwvyr8KXlLIvokxQyX9A" // Segundo enlace de descarga

    },       
    {
        id: "Far Cry 3",
        imgSrc: "assets/img/farcry3.jpg",
        altText: "Far Cry 3",
        title: "Far Cry 3",
        downloadLink2: "https://nephobox.com/s/1IfllUSbc9QaqugwqPmTzcQ" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto V",
        imgSrc: "assets/img/gtav.jpg",
        altText: "Grand Theft Auto V",
        title: "Grand Theft Auto V",
        downloadLink2: "https://nephobox.com/s/1l6fF6rbNHiI4O56cOgFBAA" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto IV",
        imgSrc: "assets/img/gtaiv.jpg",
        altText: "Grand Theft Auto IV",
        title: "Grand Theft Auto IV",
        downloadLink2: "https://nephobox.com/s/1f1khERQaToGYmQAYCzXmHw" // Segundo enlace de descarga

    },       
    {
        id: "Hollow Knight Godmaster",
        imgSrc: "assets/img/hollow.jpg",
        altText: "Hollow Knight Godmaster",
        title: "Hollow Knight Godmaster",
        downloadLink2: "https://nephobox.com/s/1sO8HCf33lsuV0jOSUuTW1A" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Rising Revengeance",
        imgSrc: "assets/img/mgr.jpg",
        altText: "Metal Gear Rising Revengeance",
        title: "Metal Gear Rising Revengeance",
        downloadLink2: "https://nephobox.com/s/1lnU-vLowBjDU6CSTjk0bSQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Need for Speed Most Wanted 2005",
        imgSrc: "assets/img/nfsmost.jpg",
        altText: "Need for Speed Most Wanted 2005",
        title: "Need for Speed Most Wanted 2005",
        downloadLink2: "https://nephobox.com/s/1DSd2d8rlsaufJiBrbzp0UA" // Segundo enlace de descarga

    },       
    {
        id: "Need For Speed Rivals",
        imgSrc: "assets/img/nfsrivals.jpg",
        altText: "Need For Speed Rivals",
        title: "Need For Speed Rivals",
        downloadLink2: "hP6RykNlwG7Ww" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed Underground 2",
        imgSrc: "assets/img/nfsun2.jpg",
        altText: "Need for Speed Underground 2",
        title: "Need for Speed Underground 2",
        downloadLink2: "https://nephobox.com/s/1seFaeszjpcr0djA2NLLQ1Q" // Segundo enlace de descarga
        
    },       
    {
        id: "Ori and the Blind Forest Definitive Edition",
        imgSrc: "assets/img/ori.jpg",
        altText: "Ori and the Blind Forest Definitive Edition",
        title: "Ori and the Blind Forest Definitive Edition",
        downloadLink2: "https://nephobox.com/s/15Z17dmjCpBjDE4R2Bb-jxQ" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 3 Remake",
        imgSrc: "assets/img/re3remake",
        altText: "Resident Evil 3 Remake",
        title: "Resident Evil 3 Remake",
        downloadLink2: "https://nephobox.com/s/1GA49eLcDwypnwXG-KCEVOw" // Segundo enlace de descarga

    },       
    {
        id: "Red Dead Redemption",
        imgSrc: "assets/img/rdr.jpg",
        altText: "Red Dead Redemption",
        title: "Red Dead Redemption",
        downloadLink2: "https://nephobox.com/s/1EqnjQsji0gBa1_t2GXrMbA" // Segundo enlace de descarga

    },       
    {
        id: "Saints Row: The Third",
        imgSrc: "assets/img/saints.jpg",
        altText: "Saints Row: The Third",
        title: "Saints Row: The Third",
        downloadLink2: "https://nephobox.com/s/1l-tMy48d67WNkHqFx06UFw" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man Web of Shadows",
        imgSrc: "assets/img/spidermanweb.jpg",
        altText: "Spider-Man Web of Shadows",
        title: "Spider-Man Web of Shadows",
        downloadLink2: "https://nephobox.com/s/16ZYKeEhegzOrH-2CVlZZGQ" // Segundo enlace de descarga

    },       
    {
        id: "Stray",
        imgSrc: "assets/img/stray.jpg",
        altText: "Stray",
        title: "Stray",
        downloadLink2: "hhhxOA" // Segundo enlace de descarga

    },       
    {
        id: "The Amazing Spider Man 2",
        imgSrc: "assets/img/thespiderman2.jpg",
        altText: "The Amazing Spider Man 2",
        title: "The Amazing Spider Man 2",
        downloadLink2: "https://nephobox.com/s/1O3KWhVAeTDP0O8r7fSSwdQ" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
