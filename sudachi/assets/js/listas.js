// Lista de juegos
const juegos = [      
    {
        id: "Cadence of Hyrule Crypt",
        imgSrc: "assets/img/cadenceofhyrule.jpg",
        altText: "Cadence of Hyrule Crypt",
        title: "Cadence of Hyrule Crypt.XCI",
        downloadLink2: "https://cuty.io/IsJl6odZ" // Segundo enlace de descarga

    },       
    {
        id: "CUPHEAD",
        imgSrc: "assets/img/cuphead.jpg",
        altText: "CUPHEAD",
        title: "CUPHEAD.XCI",
        downloadLink2: "https://cuty.io/pLGzC4" // Segundo enlace de descarga

    },       
    {
        id: "Dark Souls Remastered",
        imgSrc: "assets/img/darksoulsremastered.jpg",
        altText: "Dark Souls Remastered",
        title: "Dark Souls Remastered.NSP",
        downloadLink2: "https://cuty.io/IC0p5A" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
