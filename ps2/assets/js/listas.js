// Lista de juegos
const juegos = [   
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
        id: "Chash Twinsanity",
        imgSrc: "assets/img/chashtwi.jpg",
        altText: "Chash Twinsanity",
        title: "Chash Twinsanity.chd",
        downloadLink2: "https://nephobox.com/s/1anZ6L3XaX9SOwUGYgfG6hA" // Segundo enlace de descarga
        
    },       
    {
        id: "Crash Bandicoot - The Wrath of Cortex",
        imgSrc: "assets/img/chashwrath.jpg",
        altText: "Crash Bandicoot - The Wrath of Cortex",
        title: "Crash Bandicoot - The Wrath of Cortex.chd",
        downloadLink2: "https://nephobox.com/s/12KYfNfU7nB2yEkwb5T2EiA" // Segundo enlace de descarga

    },       
    {
        id: "Crash Nitro Kart",
        imgSrc: "assets/img/chashkart.jpg",
        altText: "Crash Nitro Kart",
        title: "Crash Nitro Kart.chd",
        downloadLink2: "https://nephobox.com/s/1joPVSefIVuP6RykNlwG7Ww" // Segundo enlace de descarga

    },       
    {
        id: "Crash of the Titans",
        imgSrc: "assets/img/chashtitans.jpg",
        altText: "Crash of the Titans",
        title: "Crash of the Titans.chd",
        downloadLink2: "https://nephobox.com/s/1M9Zq3s9geRP4LiWjGvtjAg" // Segundo enlace de descarga
        
    },       
    {
        id: "Crash Tag Team Racing",
        imgSrc: "assets/img/chashracing.jpg",
        altText: "Crash Tag Team Racing",
        title: "Crash Tag Team Racing.chd",
        downloadLink2: "https://nephobox.com/s/1qA4Nb3DhBoIWc95_3APCIQ" // Segundo enlace de descarga

    },       
    {
        id: "Devil May Cry 3 - Dante's Awakening",
        imgSrc: "assets/img/devil3.jpg",
        altText: "Devil May Cry 3 - Dante's Awakening",
        title: "Devil May Cry 3 - Dante's Awakening (Special Edition).chd",
        downloadLink2: "https://nephobox.com/s/1K0tnp030rNHZb9QFsYtm7A" // Segundo enlace de descarga

    },       
    {
        id: "Disney-Pixar Cars",
        imgSrc: "assets/img/cars.jpg",
        altText: "Disney-Pixar Cars",
        title: "Disney-Pixar Cars (USA).chd",
        downloadLink2: "https://nephobox.com/s/1ZRALXss4E35C6P_9xNEEOg" // Segundo enlace de descarga

    },       
    {
        id: "Downhill Domination",
        imgSrc: "assets/img/downhill.jpg",
        altText: "Downhill Domination",
        title: "Downhill Domination.chd",
        downloadLink2: "https://nephobox.com/s/1oN8V8kj8nVDnGV9aA-DtcQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai",
        imgSrc: "assets/img/budokai.jpg",
        altText: "Dragon Ball Z - Budokai.chd",
        title: "Dragon Ball Z - Budokai.chd",
        downloadLink2: "https://nephobox.com/s/1_Izr6wdT5IkA_OGqy-hxOA" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Budokai 2",
        imgSrc: "assets/img/budokai2.jpg",
        altText: "Dragon Ball Z - Budokai 2",
        title: "Dragon Ball Z - Budokai 2.chd",
        downloadLink2: "https://nephobox.com/s/1NoDUp8Hdyoj87Vp68yAuBg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai 3",
        imgSrc: "assets/img/budokai3.jpg",
        altText: "Dragon Ball Z - Budokai 3",
        title: "Dragon Ball Z - Budokai 3.chd",
        downloadLink2: "https://nephobox.com/s/1dJYGo82QKYbbfNK2YqnfFg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi",
        imgSrc: "assets/img/tenkaichi.jpg",
        altText: "Dragon Ball Z - Budokai Tenkaichi",
        title: "Dragon Ball Z - Budokai Tenkaichi (USA).chd",
        downloadLink2: "https://nephobox.com/s/1UftdkP4Ecd3zS2wuw2PG_Q" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi 2",
        imgSrc: "assets/img/tenkaichi2.jpg",
        altText: "Dragon Ball Z - Budokai Tenkaichi 2",
        title: "Dragon Ball Z - Budokai Tenkaichi 2.chd",
        downloadLink2: "https://nephobox.com/s/1LeMIfkf_NR0_2CuChEsTmg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7",
        imgSrc: "assets/img/tenkaichi3canonv7.jpg",
        altText: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7",
        title: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7.chd",
        downloadLink2: "https://nephobox.com/s/1LVLT9GwQ1NOPM7_9XG5GlQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Infinite World",
        imgSrc: "assets/img/dbinfinite.jpg",
        altText: "Dragon Ball Z - Infinite World",
        title: "Dragon Ball Z - Infinite World.chd",
        downloadLink2: "https://nephobox.com/s/1GzzPJ0lJfFMsGJLro9qVsg" // Segundo enlace de descarga

    },       
    {
        id: "Driv3r",
        imgSrc: "assets/img/driv3r.jpg",
        altText: "Driv3r",
        title: "Driv3r.chd",
        downloadLink2: "https://nephobox.com/s/1kGGN-LGIZrLBL5DFnv6gXA" // Segundo enlace de descarga

    },       
    {
        id: "eFootball 2025",
        imgSrc: "assets/img/football25.jpg",
        altText: "eFootball 2025",
        title: "eFootball 2025 (MOD).chd",
        downloadLink2: "https://nephobox.com/s/1ILM1CrYbILLTb6oj_ix2yg" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 14",
        imgSrc: "assets/img/fifa14.jpg",
        altText: "FIFA 14",
        title: "FIFA 14 (Europe) (EnEsPtPl).chd",
        downloadLink2: "https://nephobox.com/s/14ggqoK6U5P3bVvhnZcgCAg" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
