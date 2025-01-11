// Lista de juegos
const juegos = [
    {
        id: "Bendy And The Ink Machine",
        imgSrc: "assets/img/bendy.jpg",
        altText: "Bendy And The Ink Machine",
        title: "Bendy And The Ink Machine.apk",
        downloadLink2: "https://nephobox.com/s/17CrcAN1wa601iKhTv9iscw" // Segundo enlace de descarga

    },       
    {
        id: "Blasphemous",
        imgSrc: "assets/img/blas.jpg",
        altText: "Blasphemous",
        title: "Blasphemous.apk",
        downloadLink2: "https://nephobox.com/s/1n4bUi_Y_BRe6MOU1Ae1Q5Q" // Segundo enlace de descarga

    },       
    {
        id: "Bully",
        imgSrc: "assets/img/bully.jpg",
        altText: "Bully",
        title: "Bully.apk +obb",
        downloadLink2: "https://nephobox.com/s/1bcL-bP6SuPzcnMFuMMkCmA" // Segundo enlace de descarga

    },       
    {
        id: "Cuphead Mobile",
        imgSrc: "assets/img/cuphead.jpg",
        altText: "Cuphead",
        title: "Cuphead Mobile.apk",
        downloadLink2: "https://nephobox.com/s/1_MN4aGCsfnjs8rKLn8UUqA" // Segundo enlace de descarga

    },       
    {
        id: "Dead Cells",
        imgSrc: "assets/img/dead.jpg",
        altText: "Dead Cells",
        title: "Dead Cells 3.3.15.apk",
        downloadLink2: "https://nephobox.com/s/1-bxMqm7W4bp3riOfJNPBlQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Quest Builders",
        imgSrc: "assets/img/dragon.jpg",
        altText: "Dragon Quest Builders",
        title: "Dragon Quest Builders.apk",
        downloadLink2: "https://nephobox.com/s/1vDKAshRAHXzQBS2NysW4HQ" // Segundo enlace de descarga

    },       
    {
        id: "DUCK TALES REMASTERED",
        imgSrc: "assets/img/duck.jpg",
        altText: "DUCK TALES REMASTERED",
        title: "DUCK TALES REMASTERED.apk",
        downloadLink2: "https://nephobox.com/s/1-yHo4gVNS3zRnA0Hpy6Ebw" // Segundo enlace de descarga

    },       
    {
        id: "Half Life 2",
        imgSrc: "assets/img/hl2.jpg",
        altText: "Half Life 2",
        title: "Half Life 2",
        downloadLink2: "https://nephobox.com/s/1HgpII-mH0VnUrysJNDiwPw" // Segundo enlace de descarga
        
    },       
    {
        id: "Hollow Knight",
        imgSrc: "assets/img/hollow.jpg",
        altText: "Hollow Knight",
        title: "Hollow Knight.apk",
        downloadLink2: "https://nephobox.com/s/1i8OfZYyVgJDa0mlPT6dbFA" // Segundo enlace de descarga

    },       
    {
        id: "Human Fall Flat",
        imgSrc: "assets/img/human.jpg",
        altText: "Human Fall Flat",
        title: "Human Fall Flat 2.1.0.apk",
        downloadLink2: "https://nephobox.com/s/1BYLixVSVgWunAuPolyANXA" // Segundo enlace de descarga

    },       
    {
        id: "Katana ZERO NETFLIX",
        imgSrc: "assets/img/kz.jpg",
        altText: "Katana ZERO",
        title: "Katana ZERO NETFLIX.apk",
        downloadLink2: "https://nephobox.com/s/1ahbLE4F6bkJOtYl9RW8SGw" // Segundo enlace de descarga

    },       
    {
        id: "Little Nightmares",
        imgSrc: "assets/img/litle.jpg",
        altText: "Little Nightmares",
        title: "Little Nightmares.apk",
        downloadLink2: "https://nephobox.com/s/1JTGAzJbpaOaDWy6-dEaAAA" // Segundo enlace de descarga

    },       
    {
        id: "Max Payne Mobile",
        imgSrc: "assets/img/max.jpg",
        altText: "Max Payne Mobile",
        title: "Max Payne Mobile Installer.apk",
        downloadLink2: "https://nephobox.com/s/13Bhus5P9sHTUzftqx9mWZg" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft pe",
        imgSrc: "assets/img/minecraft.jpg",
        altText: "Minecraft PE",
        title: "Minecraft PE 1.21.51.apk",
        downloadLink2: "https://nephobox.com/s/1tpPKcegk2UhRNWB8MHRLow" // Segundo enlace de descarga

    },       
    {
        id: "NARUTO ULTIMATE NINJA STORM MOBILE",
        imgSrc: "assets/img/naruto.jpg",
        altText: "NARUTO ULTIMATE NINJA STORM MOBILE",
        title: "NARUTO ULTIMATE NINJA STORM MOBILE.apk",
        downloadLink2: "https://nephobox.com/s/1SmZO5oIhEQYNuehaaOj0mQ" // Segundo enlace de descarga

    },       
    {
        id: "Need For Speed Most Wanted 2012",
        imgSrc: "assets/img/nfsmost.jpg",
        altText: "Need For Speed Most Wanted 2012",
        title: "Need For Speed Most Wanted 2012.apk +obb",
        downloadLink2: "https://nephobox.com/s/1dCoBhsHYkLzjro6CcS4-vA" // Segundo enlace de descarga

    },       
    {
        id: "Poppy Playtime Chapter 3",
        imgSrc: "assets/img/poppy3.jpg",
        altText: "Poppy Playtime Chapter 3",
        title: "Poppy Playtime Chapter 3.apk",
        downloadLink2: "https://nephobox.com/s/1tauoHixENBA8nx_SbajafQ" // Segundo enlace de descarga

    },       
    {
        id: "Pvz Fusion",
        imgSrc: "assets/img/pvzfusion.jpg",
        altText: "pvzfusion",
        title: "Pvz Fusion 2.1.6.apk",
        downloadLink2: "https://nephobox.com/s/1QMqt3w3y1Dv7C6RpsQ3G1w" // Segundo enlace de descarga

    },       
    {
        id: "Rain World",
        imgSrc: "assets/img/rain.jpg",
        altText: "Rain World",
        title: "Rain World.apk",
        downloadLink2: "https://nephobox.com/s/1j7tDPHOSnHyqDja-dDMWTg" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Mania Plus",
        imgSrc: "assets/img/sonicmania.jpg",
        altText: "Sonic Mania Plus",
        title: "Sonic Mania Plus.apk",
        downloadLink2: "https://nephobox.com/s/12xeBbE8jNMV3B-xM8-LISg" // Segundo enlace de descarga

    },       
    {
        id: "Sonic 2 Absolute",
        imgSrc: "assets/img/SONIC1.jpg",
        altText: "Sonic 2 Absolute",
        title: "Sonic 2 Absolute.apk",
        downloadLink2: "https://nephobox.com/s/1M3oIqqfq3uPQXywdocdYGw" // Segundo enlace de descarga
        

    },       
    {
        id: "Sonic Maps",
        imgSrc: "assets/img/SONIC2.jpg",
        altText: "Sonic Maps",
        title: "Sonic Maps.apk",
        downloadLink2: "https://nephobox.com/s/1BEYNbOAUsTUwkD9C10fLgQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic P-06",
        imgSrc: "assets/img/SONIC3.jpg",
        altText: "Sonic P-06",
        title: "Sonic P-06.apk",
        downloadLink2: "https://nephobox.com/s/15NGbUygkq-5lIl1-lG_xEA" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic 3 A.I.R",
        imgSrc: "assets/img/SONIC4.jpg",
        altText: "Sonic 3 A.I.R",
        title: "Sonic 3 A.I.R.apk",
        downloadLink2: "https://nephobox.com/s/1jRjSPB4hLOmNhN2lx1nlFQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic GT",
        imgSrc: "assets/img/SONIC5.jpg",
        altText: "Sonic GT",
        title: "Sonic GT.apk",
        downloadLink2: "https://nephobox.com/s/1IMgtJLvkkScau9VWc71FaA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Momentum",
        imgSrc: "assets/img/SONIC6.jpg",
        altText: "Sonic Momentum",
        title: "Sonic Momentum.apk",
        downloadLink2: "https://nephobox.com/s/1-UJx84DfQKYN-t-XD_umEg" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Moon",
        imgSrc: "assets/img/SONIC7.jpg",
        altText: "Sonic Moon",
        title: "Sonic Moon.apk",
        downloadLink2: "https://nephobox.com/s/1redua24OtZ06emahgiTnpA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic SMS Remake 2",
        imgSrc: "assets/img/SONIC8.jpg",
        altText: "Sonic SMS Remake 2",
        title: "Sonic SMS Remake 2.apk",
        downloadLink2: "https://nephobox.com/s/1p9FgH9CW7MWUdfYnMjnRKg" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Triple Trouble 16 bit",
        imgSrc: "assets/img/SONIC9.jpg",
        altText: "Sonic Triple Trouble 16 bit",
        title: "Sonic Triple Trouble 16 bit.apk",
        downloadLink2: "https://nephobox.com/s/1La6s0Nj5FLUI5OgEYo33QA" // Segundo enlace de descarga
        
    },       
    {
        id: "SONIC UNLEASHED",
        imgSrc: "assets/img/SONIC10.jpg",
        altText: "SONIC UNLEASHED",
        title: "SONIC UNLEASHED.apk",
        downloadLink2: "https://nephobox.com/s/1LuLOKdvJHTwuRTjIOZ6OGQ" // Segundo enlace de descarga

    },       
    {
        id: "Stardew Valley",
        imgSrc: "assets/img/stardew.jpg",
        altText: "Stardew Valley",
        title: "Stardew Valley.apk",
        downloadLink2: "https://nephobox.com/s/1HvpBqh4r0yyUsWo_5WptfA" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 4 Jugadores Legacy",
        imgSrc: "assets/img/sm4legacy.jpg",
        altText: "Super Mario 4 Jugadores Legacy",
        title: "Super Mario 4 Jugadores Legacy 2.0.1.apk",
        downloadLink2: "https://nephobox.com/s/1eWlkexssnaubLWl49zHk9w" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 4 Jugadores Online Battle",
        imgSrc: "assets/img/sm4jugadores.jpg",
        altText: "Super Mario 4 Jugadores Online Battle",
        title: "Super Mario 4 Jugadores Online Battle 2.0.1.apk",
        downloadLink2: "https://nephobox.com/s/1HyvX_XA80-GE1ET8oweBKQ" // Segundo enlace de descarga

    },       
    {
        id: "Streets of Rage 4",
        imgSrc: "assets/img/streets4.jpg",
        altText: "Streets of Rage 4",
        title: "Streets of Rage 4.apk",
        downloadLink2: "https://nephobox.com/s/1e11lwbnjTUoNeq3I9eqmdA" // Segundo enlace de descarga

    },       
    {
        id: "Super Meat Boy Forever",
        imgSrc: "assets/img/superboy.jpg",
        altText: "Super Meat Boy Forever",
        title: "Super Meat Boy Forever.apk",
        downloadLink2: "https://nephobox.com/s/1io-UTzUM_Gpq7PFHm6rZTA" // Segundo enlace de descarga

    },       
    {
        id: "Terraria",
        imgSrc: "assets/img/terraria.jpg",
        altText: "Terraria",
        title: "Terraria.apk",
        downloadLink2: "https://nephobox.com/s/1jwgGjZW4kkOG3sUvwkCxkQ" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
