// Lista de juegos
const juegos = [
   {
        id: "Angry Birds Space",
        imgSrc: "assets/img/angryspace.jpg",
        altText: "Angry Birds Space",
        title: "Angry Birds Space Mod.apk",
        downloadLink2: "https://terabox.com/s/1S1NXrxv1bYMR61485_h6Zw" // Segundo enlace de descarga
    },       
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
        downloadLink2: "https://terabox.com/s/1e4rcQ_DRrVmHc4lzlPTb6g" // Segundo enlace de descarga

    },       
    {
        id: "Dead Cells",
        imgSrc: "assets/img/dead.jpg",
        altText: "Dead Cells",
        title: "Dead Cells 3.3.15.apk",
        downloadLink2: "https://nephobox.com/s/1-bxMqm7W4bp3riOfJNPBlQ" // Segundo enlace de descarga

    },       
    {
        id: "Dead Space Mobile",
        imgSrc: "assets/img/deadspace.jpg",
        altText: "Dead Space Mobile",
        title: "Dead Space Mobile.apk (Android 15)",
        downloadLink2: "https://terabox.com/s/1E60rfi3Ds_npKiyxyI1NnQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Figther Z Mobile",
        imgSrc: "assets/img/figtherz.jpg",
        altText: "Dragon Ball Figther Z Mobile",
        title: "Dragon Ball Figther Z Mobile.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1FL6vRTu4KrBHHC-Badqdyw" // Segundo enlace de descarga

    },       
    {
        id: "Dream League Soccer 19",
        imgSrc: "assets/img/dls19.jpg",
        altText: "Dream League Soccer 19",
        title: "Dream League Soccer 19.apk (Android 15)",
        downloadLink2: "https://terabox.com/s/1f8PxcNOATKgmdSNewP0QNQ" // Segundo enlace de descarga

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
        id: "Formula Cartoon All-Stars Mod Money",
        imgSrc: "assets/img/allstars.jpg",
        altText: "Formula Cartoon All-Stars Mod Money",
        title: "Formula Cartoon All-Stars Mod Money.apk",
        downloadLink2: "https://terabox.com/s/1XFfqo0fLC_JTh5s0h2NHSQ" // Segundo enlace de descarga

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
        id: "Luigi´s Mansion 2D",
        imgSrc: "assets/img/luigi.jpg",
        altText: "Luigi´s Mansion 2D",
        title: "Luigi´s Mansion 2D.apk (Fangame) ",
        downloadLink2: "https://terabox.com/s/1_8Is8GIcLLFusFfD8o0H_g" // Segundo enlace de descarga

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
        title: "Need For Speed Most Wanted 2012.apk +obb (Android 14)",
        downloadLink2: "https://nephobox.com/s/1dCoBhsHYkLzjro6CcS4-vA" // Segundo enlace de descarga

    },       
    {
        id: "N.O.V.A 3",
        imgSrc: "assets/img/nova3.jpg",
        altText: "N.O.V.A 3",
        title: "N.O.V.A 3.apk (Android 14)",
        downloadLink2: "https://terabox.com/s/1fe7Y-nA2ReKHMEbc5aqr3g" // Segundo enlace de descarga

    },       
    {
        id: "Pizza Tower Atesquik",
        imgSrc: "assets/img/pizzatower.jpg",
        altText: "Pizza Tower Atesquik",
        title: "Pizza Tower Atesquik.apk",
        downloadLink2: "https://terabox.com/s/1RAEysNkbxhGp0bqKzACMqw" // Segundo enlace de descarga

    },       
    {
        id: "Poppy Playtime Chapter 3",
        imgSrc: "assets/img/poppy3.jpg",
        altText: "Poppy Playtime Chapter 3",
        title: "Poppy Playtime Chapter 3.apk",
        downloadLink2: "https://nephobox.com/s/1tauoHixENBA8nx_SbajafQ" // Segundo enlace de descarga

    },       
    {
        id: "Power Warriors v18.2",
        imgSrc: "assets/img/power.jpg",
        altText: "Power Warriors v18.2",
        title: "Power Warriors v18.2.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1rknbauHV_VQmdKgpkymbKQ" // Segundo enlace de descarga

    },       
    {
        id: "Pvz Fusion",
        imgSrc: "assets/img/pvzfusion.jpg",
        altText: "pvzfusion",
        title: "Pvz Fusion 2.1.6.apk (Fangame)",
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
        id: "Saiyan Tournament God Warriors Dragon Z",
        imgSrc: "assets/img/saiyan.jpg",
        altText: "Saiyan Tournament God Warriors Dragon Z",
        title: "Saiyan Tournament God Warriors Dragon Z.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1tnAL2LRLOujRsI6rJzmT3g" // Segundo enlace de descarga

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
        title: "Sonic 2 Absolute (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1M3oIqqfq3uPQXywdocdYGw" // Segundo enlace de descarga
        

    },       
    {
        id: "Sonic Maps",
        imgSrc: "assets/img/SONIC2.jpg",
        altText: "Sonic Maps",
        title: "Sonic Maps (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1BEYNbOAUsTUwkD9C10fLgQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic P-06",
        imgSrc: "assets/img/SONIC3.jpg",
        altText: "Sonic P-06",
        title: "Sonic P-06 (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/15NGbUygkq-5lIl1-lG_xEA" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic 3 A.I.R",
        imgSrc: "assets/img/SONIC4.jpg",
        altText: "Sonic 3 A.I.R",
        title: "Sonic 3 A.I.R (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1jRjSPB4hLOmNhN2lx1nlFQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic GT",
        imgSrc: "assets/img/SONIC5.jpg",
        altText: "Sonic GT",
        title: "Sonic GT (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1IMgtJLvkkScau9VWc71FaA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Momentum",
        imgSrc: "assets/img/SONIC6.jpg",
        altText: "Sonic Momentum",
        title: "Sonic Momentum (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1-UJx84DfQKYN-t-XD_umEg" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Moon",
        imgSrc: "assets/img/SONIC7.jpg",
        altText: "Sonic Moon",
        title: "Sonic Moon (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1redua24OtZ06emahgiTnpA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic SMS Remake 2",
        imgSrc: "assets/img/SONIC8.jpg",
        altText: "Sonic SMS Remake 2",
        title: "Sonic SMS Remake 2 (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1p9FgH9CW7MWUdfYnMjnRKg" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Triple Trouble 16 bit",
        imgSrc: "assets/img/SONIC9.jpg",
        altText: "Sonic Triple Trouble 16 bit",
        title: "Sonic Triple Trouble 16 bit (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1La6s0Nj5FLUI5OgEYo33QA" // Segundo enlace de descarga
        
    },       
    {
        id: "SONIC UNLEASHED",
        imgSrc: "assets/img/SONIC10.jpg",
        altText: "SONIC UNLEASHED",
        title: "SONIC UNLEASHED (Fangame).apk",
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
        id: "Super Mario 2 HD",
        imgSrc: "assets/img/mario.jpg",
        altText: "Super Mario 2 HD",
        title: "Super Mario 2 HD.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/18pipkjMIMMsi9lz49Vk0KQ" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 4 Jugadores Legacy",
        imgSrc: "assets/img/sm4legacy.jpg",
        altText: "Super Mario 4 Jugadores Legacy",
        title: "Super Mario 4 Jugadores Legacy 2.0.5 (Fangame).apk",
        downloadLink2: "https://terabox.com/s/1t8hxAFMDoY_wfbKDN2ucxA" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 4 Jugadores Online Battle",
        imgSrc: "assets/img/sm4jugadores.jpg",
        altText: "Super Mario 4 Jugadores Online Battle",
        title: "Super Mario 4 Jugadores Online Battle 2.0.1 (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1HyvX_XA80-GE1ET8oweBKQ" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Bros Remake A Plumber Journey",
        imgSrc: "assets/img/marioremake.jpg",
        altText: "Super Mario Bros Remake A Plumber Journey",
        title: "Super Mario Bros Remake A Plumber Journey.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1D5lXlx6JNGNoUjBvG7IN1g" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Maker World Engine",
        imgSrc: "assets/img/mariomakerengine.jpg",
        altText: "Super Mario Maker World Engine",
        title: "Super Mario Maker World Engine 3.4.4.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1Fqo5GK7LuxX7AJ2uo59bFg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario World 2D Deluxe",
        imgSrc: "assets/img/mario2dworld.jpg",
        altText: "Super Mario World 2D Deluxe",
        title: "Super Mario World 2D Deluxe.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/19driGK0q3Lz85WjRDr6L-A" // Segundo enlace de descarga

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

    },       
    {
        id: "The Dark Knight Rises",
        imgSrc: "assets/img/batman.jpg",
        altText: "The Dark Knight Rises",
        title: "The Dark Knight Rises.apk",
        downloadLink2: "https://terabox.com/s/15kBDEtu1Wyi55fixrJjcGQ" // Segundo enlace de descarga

    },       
    {
        id: "The Final Power Level Warrior",
        imgSrc: "assets/img/finalpower.jpg",
        altText: "The Final Power Level Warrior",
        title: "The Final Power Level Warrior.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1B0tO8_kefXa3Hyn6s2akcw" // Segundo enlace de descarga

    },       
    {
        id: "Ultimate Thunder BAFA alpha",
        imgSrc: "assets/img/bafa.jpg",
        altText: "Ultimate Thunder BAFA alpha 2.3",
        title: "Ultimate Thunder BAFA alpha 2.3.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1P7JFk-TT1NwvOsB6EG6qXQ" // Segundo enlace de descarga

    },       
    {
        id: "Z LEGENDS 3",
        imgSrc: "assets/img/zlegends3.jpg",
        altText: "Z LEGENDS 3",
        title: "Z LEGENDS 3 v.2.2.4.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1bHQKWkq51ryJNBZLrCJ4Mw" // Segundo enlace de descarga

    },       
    {
        id: "Zenkai Awakening-BETA2",
        imgSrc: "assets/img/zenkai.jpg",
        altText: "Zenkai Awakening-BETA2",
        title: "Zenkai Awakening-BETA2.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1npSOkKLxzKpMeOvpq4FSJw" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
