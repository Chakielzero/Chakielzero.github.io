// Lista de juegos
const juegos = [
    {
        id: "Animal Crossing New Horizons",
        imgSrc: "assets/img/animalcrosing.jpg",
        altText: "Animal Crossing New Horizons",
        title: "Animal Crossing New Horizons+ UPDATE+ 3DLC.XCI",
        downloadLink2: "https://cuty.io/uFw3" // Segundo enlace de descarga
    },       
    {
        id: "Another Code Recollection",
        imgSrc: "assets/img/another.jpg",
        altText: "Another Code Recollection",
        title: "Another Code Recollection.XCI",
        downloadLink2: "https://cuty.io/p0DPkLamO" // Segundo enlace de descarga
        
    },       
    {
        id: "Bayonetta 3",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Bayonetta 3",
        title: "Bayonetta 3.XCI",
        downloadLink2: "https://cuty.io/Ut2KmTbW" // Segundo enlace de descarga

    },       
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
        id: "Crash of the Titans",
        imgSrc: "assets/img/crash.jpg",
        altText: "Crash of the Titans",
        title: "Crash of the Titans (USA).chd",
        downloadLink2: "https://nephobox.com/s/1lUWFpFXoCJSKVgiK8Emq8A" // Segundo enlace de descarga

    },       
    {
        id: "Dbzttt bt3 by Goku ttt Mods",
        imgSrc: "assets/img/bt3.jpg",
        altText: "Dbzttt bt3 by Goku ttt Mods",
        title: "Dbzttt bt3 by Goku ttt Mods.iso",
        downloadLink2: "https://nephobox.com/s/1eX2msHPEZ6eh6jVXrb9Fow" // Segundo enlace de descarga

    },       
    {
        id: "Bayonetta Origins: Cereza and the Lost Demon",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Bayonetta Origins: Cereza and the Lost Demon",
        title: "Bayonetta Origins: Cereza and the Lost Demon.XCI",
        downloadLink2: "https://cuty.io/JwP2z53xS5ni" // Segundo enlace de descarga

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

