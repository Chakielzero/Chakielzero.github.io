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
        id: "7 Sins",
        imgSrc: "assets/img/7sins.jpg",
        altText: "7 Sins",
        title: "7 Sins.chd",
        downloadLink2: "https://nephobox.com/s/1Siq1BDOHc-9be2wAyoSh0A" // Segundo enlace de descarga

    },       
    {
        id: "Bakugan - Battle Brawlers",
        imgSrc: "assets/img/bakugan.jpg",
        altText: "Bakugan - Battle Brawlers",
        title: "Bakugan - Battle Brawlers.chd",
        downloadLink2: "https://nephobox.com/s/1INCifZ6DVscHYKvFkG245A" // Segundo enlace de descarga

    },       
    {
        id: "Batman Begins",
        imgSrc: "assets/img/batmanbegins.jpg",
        altText: "Batman Begins",
        title: "Batman Begins.chd",
        downloadLink2: "https://nephobox.com/s/1Hn2d2Fu0uPTZbSKncNZCog" // Segundo enlace de descarga

    },       
    {
        id: "Ben 10 Protector Of Earth",
        imgSrc: "assets/img/ben10.jpg",
        altText: "Ben 10 Protector Of Earth"",
        title: "Ben 10 Protector Of Earth".chd",
        downloadLink2: "https://nephobox.com/s/1fsuyY1iCMo9AON59FJE10Q" // Segundo enlace de descarga
        
    },       
    {
        id: "Black",
        imgSrc: "assets/img/black.jpg",
        altText: "Black",
        title: "Black (Europe) (EnFrDeEsIt).chd",
        downloadLink2: "https://nephobox.com/s/1xmDWK_gqx_RgPgv1IeYqog" // Segundo enlace de descarga

    },       
    {
        id: "Bloody Roar 3",
        imgSrc: "assets/img/bloo3.jpg",
        altText: "Bloody Roar 3",
        title: "Bloody Roar 3 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1YkeoN2jc8DtFod-swmfnMw" // Segundo enlace de descarga

    },       
    {
        id: "Bloody Roar 4",
        imgSrc: "assets/img/bloo4.jpg",
        altText: "Bloody Roar 4",
        title: "Bloody Roar 4 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1cINzGhgpsmIzig-8JlI_zQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Burnout 3 Takedown",
        imgSrc: "assets/img/burnout3.jpg",
        altText: "Burnout 3 Takedown",
        title: "Burnout 3 Takedown.chd",
        downloadLink2: "https://nephobox.com/s/1Y_dK7d5f5MSV6eshxEqS6Q" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Finest Hour",
        imgSrc: "assets/img/cod.jpg",
        altText: "Call of Duty - Finest Hour",
        title: "Call of Duty - Finest Hour (USA).chd",
        downloadLink2: "https://nephobox.com/s/1S9wlZVPJPYEEbLbBGHdr-w" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 2 - Big Red One",
        imgSrc: "assets/img/cod2.jpg",
        altText: "Call of Duty 2 - Big Red One",
        title: "Call of Duty 2 - Big Red One (USA).chd",
        downloadLink2: "https://nephobox.com/s/1Ac6ya7D_zRoSenbXJUybwg" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 3",
        imgSrc: "assets/img/cod3.jpg",
        altText: "Call of Duty 3",
        title: "Call of Duty 3 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1yOEmZw-V4VVrX4PZR4PAGw" // Segundo enlace de descarga

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
