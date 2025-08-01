// Lista de juegos
const juegos = [
    {
        id: "Alan Wake Remastered",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/alan.webp",
        altText: "Alan Wake Remastered",
        title: "Alan Wake Remastered",
        downloadLink2: "https://terabox.com/s/1h8SLVzumLNkQBFU-yEyIgA" // Segundo enlace de descarga

    },       
    {
        id: "Bloodborne",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/blood.webp",
        altText: "Bloodborne",
        title: "Bloodborne.pkg",
        downloadLink2: "https://terabox.com/s/1FSZm0g4pbnwIMamQOLy1Ig" // Segundo enlace de descarga

    },       
    {
        id: "Death Strandig",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/death.webp",
        altText: "Death Strandig",
        title: "Death Strandig",
        downloadLink2: "https://terabox.com/s/1XMq3sknaUQi7ToEv338wow" // Segundo enlace de descarga

    },       
    {
        id: "Elden Ring Shadow of The Erdtree",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/elden.webp",
        altText: "Elden Ring Shadow of The Erdtree",
        title: "Elden Ring Shadow of The Erdtree",
        downloadLink2: "https://terabox.com/s/1_gxpeI3NTZA2BAfej4HznQ" // Segundo enlace de descarga

    },       
    {
        id: "Ghost of Tsushina Director´s Cut",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/ghost.webp",
        altText: "Ghost of Tsushina Director´s Cut",
        title: "Ghost of Tsushina Director´s Cut",
        downloadLink2: "https://terabox.com/s/1fg_7KxlJUa0o-nxB97wPww" // Segundo enlace de descarga

    },       
    {
        id: "God of War Deluxe Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/gow.webp",
        altText: "God of War Deluxe Edition",
        title: "God of War Deluxe Edition",
        downloadLink2: "https://terabox.com/s/1pzkFfr8pf4Fe0nm8HXUQVA" // Segundo enlace de descarga

    },       
    {
        id: "God of War Ragnarok + Valhalla",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/gowragnarok.webp",
        altText: "God of War Ragnarok + Valhalla",
        title: "God of War Ragnarok + Valhalla",
        downloadLink2: "https://terabox.com/s/1RzKMYjRKOUZpIOk7Zom45A" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/gtav.webp",
        altText: "Grand Theft Auto 5",
        title: "Grand Theft Auto 5",
        downloadLink2: "https://terabox.com/s/1lo1OiA6U5ymMVMYvA7VXGw" // Segundo enlace de descarga

    },       
    {
        id: "Maid of Sker",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/maid.webp",
        altText: "Maid of Sker",
        title: "Maid of Sker",
        downloadLink2: "https://terabox.com/s/1YEWnJh0xysdVrH213lOWhQ" // Segundo enlace de descarga

    },       
    {
        id: "Metro Exodus Gold Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/metro.webp",
        altText: "Metro Exodus Gold Edition",
        title: "Metro Exodus Gold Edition",
        downloadLink2: "https://terabox.com/s/1vSj1FBBqIgK4qvlRvH_mVw" // Segundo enlace de descarga

    },       
    {
        id: "Rage 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/rage2.webp",
        altText: "Rage 2",
        title: "Rage 2",
        downloadLink2: "https://terabox.com/s/1ELxzZi7Dy0z_t41crBEbbA" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet Clank",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/ratchet.webp",
        altText: "Ratchet Clank",
        title: "Ratchet Clank",
        downloadLink2: "https://terabox.com/s/1Cxar7YnuYN7_zyG6CQDjMA" // Segundo enlace de descarga

    },       
    {
        id: "Red Dead Redemption 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/rd2.webp",
        altText: "Red Dead Redemption 2",
        title: "Red Dead Redemption 2",
        downloadLink2: "https://terabox.com/s/1kQzcYDyMk2AyCOiU5ezyKw" // Segundo enlace de descarga

    },       
    {
        id: "Red Dead Redemption",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/rd.webp",
        altText: "Red Dead Redemption",
        title: "Red Dead Redemption",
        downloadLink2: "https://terabox.com/s/1277oEyayCj9ocnwtMr4HZQ" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 2 Deluxe Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/re2.webp",
        altText: "Resident Evil 2 Deluxe Edition",
        title: "Resident Evil 2 Deluxe Edition",
        downloadLink2: "https://terabox.com/s/1UjhgBiTXNKBWdEfs5jMjVg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/re3.webp",
        altText: "Resident Evil 3",
        title: "Resident Evil 3",
        downloadLink2: "https://terabox.com/s/18tkkL5THb0THk6aA30RoEg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil Village",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/revillage.webp",
        altText: "Resident Evil Village",
        title: "Resident Evil Village",
        downloadLink2: "https://terabox.com/s/1VSkYkiOnmcrhgAft33jmdQ" // Segundo enlace de descarga

    },       
    {
        id: "Sifu",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/sifu.webp",
        altText: "Sifu",
        title: "Sifu",
        downloadLink2: "https://terabox.com/s/1nm1novEZhz2cU9jfDjDYBg" // Segundo enlace de descarga

    },
    {
        id: "Spiderman Miles Morales",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/spidermanmiles.webp",
        altText: "Spiderman Miles Morales",
        title: "Spiderman Miles Morales",
        downloadLink2: "https://terabox.com/s/1zaP_wkRbaj7Plzu51f4rwA" // Segundo enlace de descarga

    },       
    {
        id: "The Last Of Us Remastered",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/thelast.webp",
        altText: "The Last Of Us Remastered",
        title: "The Last Of Us Remastered",
        downloadLink2: "https://terabox.com/s/1w7CoYpCbEZ2eAiPz1sHBkw" // Segundo enlace de descarga

    },       
    {
        id: "The Last Of Us Part II",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps4/thelast2.webp",
        altText: "The Last Of Us Part II",
        title: "The Last Of Us Part II",
        downloadLink2: "https://terabox.com/s/13NYw8vs3x_Ocuzdr9eESTQ" // Segundo enlace de descarga
    },
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
