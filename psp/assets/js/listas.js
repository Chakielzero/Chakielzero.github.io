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
        id: "DBZTTT BT3 BY GOKU TTT MODS",
        imgSrc: "assets/img/bt3.jpg",
        altText: "DBZTTT BT3 BY GOKU TTT MODS",
        title: "DBZTTT BT3 BY GOKU TTT MODS.iso",
        downloadLink2: "https://nephobox.com/s/1eX2msHPEZ6eh6jVXrb9Fow" // Segundo enlace de descarga

    },       
    {
        id: "DBZTTT Kakarot",
        imgSrc: "assets/img/kakarot.jpg",
        altText: "DBZTTT Kakarot",
        title: "DBZTTT Kakarot.iso",
        downloadLink2: "https://nephobox.com/s/1Xk_8xoMXyc5fsEhmC6NHGQ" // Segundo enlace de descarga

    },       
    {
        id: "DBZTTT StarxXx",
        imgSrc: "assets/img/starxx.jpg",
        altText: "DBZTTT StarxXx",
        title: "DBZTTT StarxXx.iso",
        downloadLink2: "https://nephobox.com/s/1a-LxmDYUNxug668kOjvRLA" // Segundo enlace de descarga

    },       
    {
        id: "DBZTTT TAG_VS_478",
        imgSrc: "assets/img/tagvs.jpg",
        altText: "DBZTTT TAG_VS_478",
        title: "DBZTTT TAG_VS_478.zip",
        downloadLink2: "https://nephobox.com/s/1ATP4rBB_STMwdLCceoVwyA" // Segundo enlace de descarga

    },       
    {
        id: "DBZTTT TLOT V3",
        imgSrc: "assets/img/tlot.jpg",
        altText: "DBZTTT TLOT V3",
        title: "DBZTTT TLOT V3",
        downloadLink2: "https://nephobox.com/s/18Q55eevHQTCTKz7nw5Q_bQ" // Segundo enlace de descarga

    },       
    {
        id: "DBZTTT2Beta1",
        imgSrc: "assets/img/tt2.jpg",
        altText: "DBZTTT2Beta1",
        title: "DBZTTT2Beta1.iso",
        downloadLink2: "https://nephobox.com/s/1Pne8kFO7TatW5YVypWxk-Q" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon ball shin budokai 6",
        imgSrc: "assets/img/shin6.jpg",
        altText: "Dragon ball shin budokai 6",
        title: "Dragon ball shin budokai 6.iso",
        downloadLink2: "https://nephobox.com/s/1tol4aR-X8ohgkRCdP8l8bA" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Shin Budokai 2",
        imgSrc: "assets/img/shin2.jpg",
        altText: "Dragon Ball Z - Shin Budokai 2",
        title: "Dragon Ball Z - Shin Budokai 2 (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://nephobox.com/s/1PCaEqC2RAYM1MhkoIDwU-Q" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Tenkaichi Tag Team",
        imgSrc: "assets/img/dbzttt.jpg",
        altText: "Dragon Ball Z - Tenkaichi Tag Team",
        title: "Dragon Ball Z - Tenkaichi Tag Team (USA) (En,Fr,Es).iso",
        downloadLink2: "https://nephobox.com/s/1ejyRQ4OYyfFiP4dPYr_Tlw" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 14",
        imgSrc: "assets/img/fifa14.jpg",
        altText: "FIFA 14",
        title: "FIFA 14.iso",
        downloadLink2: "https://nephobox.com/s/1iryBDal8M8XJ7IVacT_fjg" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy VII",
        imgSrc: "assets/img/ff7.jpg",
        altText: "Final Fantasy VII.cso",
        title: "Final Fantasy VII.cso",
        downloadLink2: "https://nephobox.com/s/1Xk_8xoMXyc5fsEhmC6NHGQ" // Segundo enlace de descarga

    },       
    {
        id: "FlatOut HeadOn",
        imgSrc: "assets/img/flatout.jpg",
        altText: "FlatOut HeadOn",
        title: "FlatOut HeadOn.cso",
        downloadLink2: "https://nephobox.com/s/1h_m_du-q9rbWCbOalS-X8g" // Segundo enlace de descarga

    },       
    {
        id: "Ghost Recon Predator",
        imgSrc: "assets/img/ghost.jpg",
        altText: "Ghost Recon Predator",
        title: "Ghost Recon Predator.cso",
        downloadLink2: "https://nephobox.com/s/1WpgxjdoZSU0DQAg-Be-g2w" // Segundo enlace de descarga

    },       
    {
        id: "God of War - Chains of Olympus",
        imgSrc: "assets/img/gowcoo.jpg",
        altText: "God of War - Chains of Olympus",
        title: "God of War - Chains of Olympus (Europe, Australia) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://nephobox.com/s/1vVJJ9XOb3FwsehOd21C-zQ" // Segundo enlace de descarga

    },       
    {
        id: "God of War - Ghost of Sparta",
        imgSrc: "assets/img/gowgos.jpg",
        altText: "Chash Twinsanity",
        title: "God of War - Ghost of Sparta (USA).iso",
        downloadLink2: "https://nephobox.com/s/1cUOk_7rKKAxI6h3KSZglDQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Grand Theft Auto - Chinatown Wars",
        imgSrc: "assets/img/gtacw.jpg",
        altText: "Grand Theft Auto - Chinatown Wars",
        title: "Grand Theft Auto - Chinatown Wars (USA).chd",
        downloadLink2: "https://nephobox.com/s/1skaSxlMCFcuRzH9jVUh3Kw" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto - Liberty City Stories",
        imgSrc: "assets/img/gtalcs.jpg",
        altText: "Grand Theft Auto - Liberty City Stories",
        title: "Grand Theft Auto - Liberty City Stories (Europe).iso",
        downloadLink2: "https://nephobox.com/s/1QwE0VqnTPFSNu76tAEVcpw" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto - Vice City Stories",
        imgSrc: "assets/img/gtavcs.jpg",
        altText: "Crash of the Titans",
        title: "Grand Theft Auto - Vice City Stories (Europe).iso",
        downloadLink2: "https://nephobox.com/s/14kHeIV_qMdZw0D9wyxPxjw" // Segundo enlace de descarga
        
    },       
    {
        id: "Kingdom Hearts Birth by Sleep Final Mix",
        imgSrc: "assets/img/kh.jpg",
        altText: "Kingdom Hearts Birth by Sleep Final Mix",
        title: "Kingdom Hearts Birth by Sleep Final Mix.cso",
        downloadLink2: "https://nephobox.com/s/1PnXiZn7qFH8CLTSe8FWLiw" // Segundo enlace de descarga

    },       
    {
        id: "Lara Croft Tomb raider legend",
        imgSrc: "assets/img/tom.jpg",
        altText: "Lara Croft Tomb raider legend",
        title: "Lara Croft Tomb raider legend.cso",
        downloadLink2: "https://nephobox.com/s/1bjGsiG335DuR4q_U8Dl-3w" // Segundo enlace de descarga

    },       
    {
        id: "Midnight Club LA Remix",
        imgSrc: "assets/img/mc.jpg",
        altText: "Midnight Club LA Remix",
        title: "Midnight Club LA Remix.cso",
        downloadLink2: "https://nephobox.com/s/15YQoif4en76Gkd1sD9Q_vg" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid: Peace Walker",
        imgSrc: "assets/img/mgs.jpg",
        altText: "Metal Gear Solid: Peace Walker",
        title: "Metal Gear Solid: Peace Walker.iso",
        downloadLink2: "https://nephobox.com/s/1TQrtJ28mY5_1fW6kywOZVA" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kommbat Unchainex",
        imgSrc: "assets/img/mku.jpg",
        altText: "Mortal Kommbat Unchainex",
        title: "Mortal Kommbat Unchainex.cso",
        downloadLink2: "https://nephobox.com/s/1VwOEXLSvmjDHEvYqgV4v-A" // Segundo enlace de descarga
        
    },       
    {
        id: "NFS Underground Rivals",
        imgSrc: "assets/img/nfsur.jpg",
        altText: "NFS Underground Rivals",
        title: "NFS Underground Rivals.cso",
        downloadLink2: "https://nephobox.com/s/1kiV4gJXx7ha9HPmgCL3FYg" // Segundo enlace de descarga

    },       
    {
        id: "PES 2014",
        imgSrc: "assets/img/pes14.jpg",
        altText: "PES 2014",
        title: "PES 2014.cso",
        downloadLink2: "https://nephobox.com/s/1rDiRuiuqtHRXAAKvhJjlYw" // Segundo enlace de descarga

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
