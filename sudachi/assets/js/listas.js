// Lista de juegos
const juegos = [
    {
        id: "3rdbirtday",
        imgSrc: "assets/img/3rd.jpg",
        altText: "3rdbirtday",
        title: "3rdbirtday.cso",
        downloadLink2: "https://nephobox.com/s/1ZKJ7N0rNTA68toQfJQMS6w" // Segundo enlace de descarga

    },       
    {
        id: "Ben 10 - Protector of Earth",
        imgSrc: "assets/img/ben10.jpg",
        altText: "Ben 10 - Protector of Earth",
        title: "Ben 10 - Protector of Earth.iso",
        downloadLink2: "https://nephobox.com/s/1nLVW9iBaX8nfLYX5HCMLjg" // Segundo enlace de descarga

    },       
    {
        id: "Burnout Legends",
        imgSrc: "assets/img/burnout.jpg",
        altText: "Burnout Legends",
        title: "Burnout Legends.iso",
        downloadLink2: "https://nephobox.com/s/1baGLDXJ0lLOl5vFPZ3Re4w" // Segundo enlace de descarga

    },       
    {
        id: "Cars",
        imgSrc: "assets/img/ben10.jpg",
        altText: "Ben 10 Protector Of Earth"",
        title: "Cars (Spain).iso",
        downloadLink2: "https://nephobox.com/s/1aBD6Ts6lJgsQ6RgoYtGgwg" // Segundo enlace de descarga

    },       
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
