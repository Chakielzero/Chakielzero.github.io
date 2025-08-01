// Lista de juegos
const juegos = [
    {
        id: "7 Sins",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/7sins.webp",
        altText: "7 Sins",
        title: "7 Sins.chd",
        downloadLink2: "https://nephobox.com/s/1Siq1BDOHc-9be2wAyoSh0A" // Segundo enlace de descarga
    },       
    {
        id: "Bakugan - Battle Brawlers",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/bakugan.webp",
        altText: "Bakugan - Battle Brawlers",
        title: "Bakugan - Battle Brawlers.chd",
        downloadLink2: "https://nephobox.com/s/1INCifZ6DVscHYKvFkG245A" // Segundo enlace de descarga
        
    },       
    {
        id: "Batman Begins",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/batmanbegins.webp",
        altText: "Batman Begins",
        title: "Batman Begins.chd",
        downloadLink2: "https://nephobox.com/s/1Hn2d2Fu0uPTZbSKncNZCog" // Segundo enlace de descarga

    },       
    {
        id: "Ben 10 Protector Of Earth",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/ben10.webp",
        altText: "Ben 10 Protector Of Earth",
        title: "Ben 10 Protector Of Earth.chd",
        downloadLink2: "https://nephobox.com/s/1fsuyY1iCMo9AON59FJE10Q" // Segundo enlace de descarga

    },       
    {
        id: "Black",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/black.webp",
        altText: "Black",
        title: "Black (Europe) (EnFrDeEsIt).chd",
        downloadLink2: "https://nephobox.com/s/1xmDWK_gqx_RgPgv1IeYqog" // Segundo enlace de descarga

    },       
    {
        id: "Bloody Roar 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/bloo3.webp",
        altText: "Bloody Roar 3",
        title: "Bloody Roar 3 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1YkeoN2jc8DtFod-swmfnMw" // Segundo enlace de descarga

    },       
    {
        id: "Bloody Roar 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/bloo4.webp",
        altText: "Bloody Roar 4",
        title: "Bloody Roar 4 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1cINzGhgpsmIzig-8JlI_zQ" // Segundo enlace de descarga

    },       
    {
        id: "Burnout 3 Takedown",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/burnout3.webp",
        altText: "Burnout 3 Takedown",
        title: "Burnout 3 Takedown.chd",
        downloadLink2: "https://nephobox.com/s/1Y_dK7d5f5MSV6eshxEqS6Q" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Finest Hour",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/cod.webp",
        altText: "Call of Duty - Finest Hour",
        title: "Call of Duty - Finest Hour (USA).chd",
        downloadLink2: "https://nephobox.com/s/1S9wlZVPJPYEEbLbBGHdr-w" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 2 - Big Red One",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/cod2.webp",
        altText: "Call of Duty 2 - Big Red One",
        title: "Call of Duty 2 - Big Red One (USA).chd",
        downloadLink2: "https://nephobox.com/s/1Ac6ya7D_zRoSenbXJUybwg" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/cod3.webp",
        altText: "Call of Duty 3",
        title: "Call of Duty 3 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1yOEmZw-V4VVrX4PZR4PAGw" // Segundo enlace de descarga

    },       
    {
        id: "Chash Twinsanity",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/chashtwi.webp",
        altText: "Chash Twinsanity",
        title: "Chash Twinsanity.chd",
        downloadLink2: "https://nephobox.com/s/1anZ6L3XaX9SOwUGYgfG6hA" // Segundo enlace de descarga
        
    },       
    {
        id: "Crash Bandicoot - The Wrath of Cortex",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/chashwrath.webp",
        altText: "Crash Bandicoot - The Wrath of Cortex",
        title: "Crash Bandicoot - The Wrath of Cortex.chd",
        downloadLink2: "https://nephobox.com/s/12KYfNfU7nB2yEkwb5T2EiA" // Segundo enlace de descarga

    },       
    {
        id: "Crash Nitro Kart",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/chashkart.webp",
        altText: "Crash Nitro Kart",
        title: "Crash Nitro Kart.chd",
        downloadLink2: "https://nephobox.com/s/1joPVSefIVuP6RykNlwG7Ww" // Segundo enlace de descarga

    },       
    {
        id: "Crash of the Titans",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/chashtitans.webp",
        altText: "Crash of the Titans",
        title: "Crash of the Titans.chd",
        downloadLink2: "https://nephobox.com/s/1M9Zq3s9geRP4LiWjGvtjAg" // Segundo enlace de descarga
        
    },       
    {
        id: "Crash Tag Team Racing",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/chashracing.webp",
        altText: "Crash Tag Team Racing",
        title: "Crash Tag Team Racing.chd",
        downloadLink2: "https://nephobox.com/s/1qA4Nb3DhBoIWc95_3APCIQ" // Segundo enlace de descarga

    },       
    {
        id: "Devil May Cry 3 - Dante's Awakening",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/devil3.webp",
        altText: "Devil May Cry 3 - Dante's Awakening",
        title: "Devil May Cry 3 - Dante's Awakening (Special Edition).chd",
        downloadLink2: "https://nephobox.com/s/1K0tnp030rNHZb9QFsYtm7A" // Segundo enlace de descarga

    },       
    {
        id: "Disney-Pixar Cars",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/cars.webp",
        altText: "Disney-Pixar Cars",
        title: "Disney-Pixar Cars (USA).chd",
        downloadLink2: "https://nephobox.com/s/1ZRALXss4E35C6P_9xNEEOg" // Segundo enlace de descarga

    },       
    {
        id: "Downhill Domination",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/downhill.webp",
        altText: "Downhill Domination",
        title: "Downhill Domination.chd",
        downloadLink2: "https://nephobox.com/s/1oN8V8kj8nVDnGV9aA-DtcQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/budokai.webp",
        altText: "Dragon Ball Z - Budokai.chd",
        title: "Dragon Ball Z - Budokai.chd",
        downloadLink2: "https://nephobox.com/s/1_Izr6wdT5IkA_OGqy-hxOA" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Budokai 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/budokai2.webp",
        altText: "Dragon Ball Z - Budokai 2",
        title: "Dragon Ball Z - Budokai 2.chd",
        downloadLink2: "https://nephobox.com/s/1NoDUp8Hdyoj87Vp68yAuBg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/budokai3.webp",
        altText: "Dragon Ball Z - Budokai 3",
        title: "Dragon Ball Z - Budokai 3.chd",
        downloadLink2: "https://nephobox.com/s/1dJYGo82QKYbbfNK2YqnfFg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/tenkaichi.webp",
        altText: "Dragon Ball Z - Budokai Tenkaichi",
        title: "Dragon Ball Z - Budokai Tenkaichi (USA).chd",
        downloadLink2: "https://nephobox.com/s/1UftdkP4Ecd3zS2wuw2PG_Q" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/tenkaichi2.webp",
        altText: "Dragon Ball Z - Budokai Tenkaichi 2",
        title: "Dragon Ball Z - Budokai Tenkaichi 2.chd",
        downloadLink2: "https://nephobox.com/s/1LeMIfkf_NR0_2CuChEsTmg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/tenkaichi3canonv7.webp",
        altText: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7",
        title: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7.chd",
        downloadLink2: "https://nephobox.com/s/1LVLT9GwQ1NOPM7_9XG5GlQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Infinite World",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/dbinfinite.webp",
        altText: "Dragon Ball Z - Infinite World",
        title: "Dragon Ball Z - Infinite World.chd",
        downloadLink2: "https://nephobox.com/s/1GzzPJ0lJfFMsGJLro9qVsg" // Segundo enlace de descarga

    },       
    {
        id: "Driv3r",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/driv3r.webp",
        altText: "Driv3r",
        title: "Driv3r.chd",
        downloadLink2: "https://nephobox.com/s/1kGGN-LGIZrLBL5DFnv6gXA" // Segundo enlace de descarga

    },       
    {
        id: "eFootball 2025",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/football25.webp",
        altText: "eFootball 2025",
        title: "eFootball 2025 (MOD).chd",
        downloadLink2: "https://nephobox.com/s/1ILM1CrYbILLTb6oj_ix2yg" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 14",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/fifa14.webp",
        altText: "FIFA 14",
        title: "FIFA 14 (Europe) (EnEsPtPl).chd",
        downloadLink2: "https://nephobox.com/s/14ggqoK6U5P3bVvhnZcgCAg" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy X",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/ffx.webp",
        altText: "Final Fantasy X",
        title: "Final Fantasy X .chd",
        downloadLink2: "https://nephobox.com/s/1idjbu9JVX8LOfqI58gXl7w" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy X-2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/ffx2.webp",
        altText: "Final Fantasy X",
        title: "Final Fantasy X-2.chd",
        downloadLink2: "https://nephobox.com/s/1l67fImTJ8GEcz907oFf2ig" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy XII",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/ffxii.webp",
        altText: "Final Fantasy XII",
        title: "Final Fantasy XII (USA).chd",
        downloadLink2: "https://nephobox.com/s/1g3fC1S6rQWzJViMehl4-_g" // Segundo enlace de descarga

    },       
    {
        id: "Fatal Frame III - The Tormented",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/fatal3.webp",
        altText: "Fatal Frame III - The Tormented",
        title: "Fatal Frame III - The Tormented (USA).chd",
        downloadLink2: "https://nephobox.com/s/1zyt4CTBRxBfG1myhWaOS1w" // Segundo enlace de descarga

    },       
    {
        id: "Ghost Rider",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/ghostrider.webp",
        altText: "Ghost Rider",
        title: "Ghost Rider.chd",
        downloadLink2: "https://nephobox.com/s/1YA8ScdP7-3p1E6JOw3s0eQ" // Segundo enlace de descarga

    },       
    {
        id: "God of War II",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gow2.webp",
        altText: "God of War II",
        title: "God of War II .chd",
        downloadLink2: "https://nephobox.com/s/1WyJeI1O7CVthJhyfiVjP4Q" // Segundo enlace de descarga

    },       
    {
        id: "God of War",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gow.webp",
        altText: "God of War",
        title: "God of War.chd",
        downloadLink2: "https://nephobox.com/s/1mbBFTi3slfhUdvpxkGR_6w" // Segundo enlace de descarga
        
    },       
    {
        id: "Grand Theft Auto - Liberty City Stories",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gtastories.webp",
        altText: "Grand Theft Auto - Liberty City Stories",
        title: "Grand Theft Auto - Liberty City Stories .chd",
        downloadLink2: "https://nephobox.com/s/1U33QImkIY0dViQC-vMrsXg" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto V",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gtav.webp",
        altText: "Grand Theft Auto V",
        title: "Grand Theft Auto V (MOD).chd",
        downloadLink2: "https://nephobox.com/s/183Glfn3IIGyicWZX2gBi5Q" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto III",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gta3.webp",
        altText: "Grand Theft Auto III",
        title: "Grand Theft Auto III (USA).chd",
        downloadLink2: "https://nephobox.com/s/1LJLF99cf_LqhX_Q44x-dpg" // Segundo enlace de descarga
        
    },       
    {
        id: "Grand Theft Auto San Andreas",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gtasa.webp",
        altText: "Grand Theft Auto San Andreas",
        title: "Grand Theft Auto San Andreas.chd",
        downloadLink2: "https://nephobox.com/s/1zSyif_gRdkqzrGxTSdfv_w" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto Vice City",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gtavc.webp",
        altText: "Grand Theft Auto Vice City",
        title: "Grand Theft Auto Vice City.chd",
        downloadLink2: "https://nephobox.com/s/1UObxjmPyG1VZCwol13xj4A" // Segundo enlace de descarga

    },       
    {
        id: "Gran Turismo 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gran3.webp",
        altText: "Gran Turismo 3",
        title: "Gran Turismo 3.chd",
        downloadLink2: "https://nephobox.com/s/1Dm1kwiBFWO6TZmGUrrAj_g" // Segundo enlace de descarga

    },       
    {
        id: "Gran Turismo 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/gran4.webp",
        altText: "Gran Turismo 4",
        title: "Gran Turismo 4.chd",
        downloadLink2: "https://nephobox.com/s/1H-WnhKK0Ztp1p8UMMhgHKA" // Segundo enlace de descarga

    },       
    {
        id: "Hitman - Blood Money",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/hitmanblood.webp",
        altText: "Hitman - Blood Money",
        title: "Hitman - Blood Money.chd",
        downloadLink2: "https://nephobox.com/s/1SsyDKTdphiU-K_hFRFjfvQ" // Segundo enlace de descarga

    },       
    {
        id: "Hitman - Contracts",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/hitmancontracts.webp",
        altText: "Hitman - Contracts",
        title: "Hitman - Contracts.chd",
        downloadLink2: "https://nephobox.com/s/1k3Tevl2G4PNcP4oaIUKJPA" // Segundo enlace de descarga

    },       
    {
        id: "Hitman 2 Silent Assasin",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/hitman2.webp",
        altText: "Hitman 2 Silent Assasin",
        title: "Hitman 2 Silent Assasin.chd",
        downloadLink2: "https://nephobox.com/s/1PX6rduCymnx3_8ai6k9aLw" // Segundo enlace de descarga

    },       
    {
        id: "Jak and Daxter - The Precursor Legacy",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/jax.webp",
        altText: "Jak and Daxter - The Precursor Legacy",
        title: "Jak and Daxter - The Precursor Legacy (USA) (EnFrDeEsIt).chd",
        downloadLink2: "https://nephobox.com/s/15JU_CL30AUagvSStFspXSg" // Segundo enlace de descarga

    },       
    {
        id: "Jak and Daxter Complete Trilogy",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/jaxtrilogy.webp",
        altText: "Jak and Daxter Complete Trilogy",
        title: "Jak and Daxter Complete Trilogy.chd",
        downloadLink2: "https://nephobox.com/s/1wsUTnPBk05Ei63BlSdhOEw" // Segundo enlace de descarga

    },       
    {
        id: "Los Increibles",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/increibles.webp",
        altText: "Los Increibles",
        title: "Los Increibles.chd",
        downloadLink2: "https://nephobox.com/s/1_3szyb8n4slawXW58B6BLQ" // Segundo enlace de descarga

    },       
    {
        id: "Manhunt",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/manhunt.webp",
        altText: "Manhunt",
        title: "Manhunt.chd",
        downloadLink2: "https://nephobox.com/s/1U-RDf5fOh5uP09jKWKHhIA" // Segundo enlace de descarga

    },       
    {
        id: "Manhunt 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/manhunt2.webp",
        altText: "Manhunt 2",
        title: "Manhunt 2.chd",
        downloadLink2: "https://nephobox.com/s/1HqByNXnnvc05rjubQ8OMnQ" // Segundo enlace de descarga

    },       
    {
        id: "Marvel - Ultimate Alliance 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/spidermanalliance2.webp",
        altText: "Marvel - Ultimate Alliance 2",
        title: "Marvel - Ultimate Alliance 2.chd",
        downloadLink2: "https://nephobox.com/s/1zOP50VxruRX_m1xwNvHZvQ" // Segundo enlace de descarga

    },       
    {
        id: "Marvel - Ultimate Alliance",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/spidermanalliance.webp",
        altText: "Marvel - Ultimate Alliance",
        title: "Marvel - Ultimate Alliance.chd",
        downloadLink2: "https://nephobox.com/s/17025amVz2GK73mrE-ep2rQ" // Segundo enlace de descarga

    },       
    {
        id: "Max Payne",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/max.webp",
        altText: "Max Payne",
        title: "Max Payne.chd",
        downloadLink2: "https://nephobox.com/s/1qXf7mnnqA7M4h5OZ3TuTxQ" // Segundo enlace de descarga

    },       
    {
        id: "Max Payne 2 - The Fall of Max Payne",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/max2.webp",
        altText: "Max Payne 2 - The Fall of Max Payne",
        title: "Max Payne 2 - The Fall of Max Payne (USA).chd",
        downloadLink2: "https://nephobox.com/s/1sz1kKtwtEm1JOkrs9bgx-w" // Segundo enlace de descarga

    },       
    {
        id: "Medal of Honor - European Assault",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/medaleuro.webp",
        altText: "Medal of Honor - European Assault",
        title: "Medal of Honor - European Assault.chd",
        downloadLink2: "https://nephobox.com/s/1p_1uwMT6meEN1M1x7Iv2WA" // Segundo enlace de descarga

    },       
    {
        id: "Mega Man X8",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/megamanx8.webp",
        altText: "Mega Man X8",
        title: "Mega Man X8 (U)(Undub).chd",
        downloadLink2: "https://nephobox.com/s/1JaMd2dS-podkUflDXpWjXQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Metal Gear Solid 2 - Sons of Liberty",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/mg2.webp",
        altText: "Metal Gear Solid 2 - Sons of Liberty",
        title: "Metal Gear Solid 2 - Sons of Liberty (USA).chd",
        downloadLink2: "https://nephobox.com/s/1ziF93iyOT1ouiPYQnfKIng" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid 3 SE",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/mg3.webp",
        altText: "Metal Gear Solid 3 SE",
        title: "Metal Gear Solid 3 Snake Eater.chd",
        downloadLink2: "https://nephobox.com/s/1wTPNSJU1NqaXUM8rmgFGlQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Metal Slug 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/metalslug3.webp",
        altText: "Metal Slug 3",
        title: "Metal Slug 3 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/1LrZQo3z0Sajr_yQKp3QH8A" // Segundo enlace de descarga

    },       
    {
        id: "Midnight Club 3 - DUB Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/mc3.webp",
        altText: "Midnight Club 3 - DUB Edition",
        title: "Midnight Club 3 - DUB Edition.chd",
        downloadLink2: "https://nephobox.com/s/16QJQnHPeVySEwj9_ET-VBA" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat Armageddon",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/mk.webp",
        altText: "Mortal Kombat Armageddon",
        title: "Mortal Kombat Armageddon.chd",
        downloadLink2: "https://nephobox.com/s/1IiEOcnDgJaq6jw-ID6gONg" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Shippuden - Ultimate Ninja 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/naruto5.webp",
        altText: "Naruto Shippuden - Ultimate Ninja 5",
        title: "Naruto Shippuden - Ultimate Ninja 5 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/1zH-dlkH-jgz6O534cqSfeg" // Segundo enlace de descarga
        
    },       
    {
        id: "Need for Speed - Hot Pursuit 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/nfshot2.webp",
        altText: "Need for Speed - Hot Pursuit 2",
        title: "Need for Speed - Hot Pursuit 2 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1KZ_IzsbyVtCmWefNxWczzQ" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed Most Wanted",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/nfsmost.webp",
        altText: "Need for Speed Most Wanted",
        title: "Need for Speed Most Wanted.chd",
        downloadLink2: "https://nephobox.com/s/1JTdOyUShlmRUqskZxrQk5g" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - ProStreet",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/nfspro.webp",
        altText: "Need for Speed - ProStreet",
        title: "Need for Speed - ProStreet (USA).chd",
        downloadLink2: "https://nephobox.com/s/1Xo6m7wa-HuxwBiviUhSF0Q" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/pes3.webp",
        altText: "Pro Evolution Soccer 3",
        title: "Pro Evolution Soccer 3 (Europe) (En,Fr,De,Es).chd",
        downloadLink2: "https://nephobox.com/s/1V6YFd3czz7JnbNuIei4z8A" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 6",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/pes6.webp",
        altText: "Pro Evolution Soccer 6",
        title: "Pro Evolution Soccer 6 (Spain).chd",
        downloadLink2: "https://nephobox.com/s/1d8z9tuMneLdOiNtEfHbCfw" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/ratchet.webp",
        altText: "Ratchet & Clank",
        title: "Ratchet & Clank.chd",
        downloadLink2: "https://nephobox.com/s/1_R1cPPPlOx3MnAlPAv3UpA" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/ratchet2.webp",
        altText: "Ratchet & Clank 2",
        title: "Ratchet & Clank 2.chd",
        downloadLink2: "https://nephobox.com/s/1Qk7DrvIz1nwUlbUi3ur7Gw" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank 3 Up YA",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/ratchet3.webp",
        altText: "Ratchet & Clank 3 Up YA",
        title: "Ratchet & Clank 3 Up YA.chd",
        downloadLink2: "https://nephobox.com/s/1ckPwNxc_mT13TiR1F_VMoA" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/re4.webp",
        altText: "Resident Evil 4",
        title: "Resident Evil 4 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/12edXojbHcOzXmEUVVK9eFA" // Segundo enlace de descarga
        
    },       
    {
        id: "Shadow of the Colossus",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/shadowcolussus.webp",
        altText: "Shadow of the Colossus",
        title: "Shadow of the Colossus.chd",
        downloadLink2: "https://nephobox.com/s/1yLwNQhDgv-hhhsZlafS8KQ" // Segundo enlace de descarga

    },       
    {
        id: "Shadow The Hedgehog",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/shadow.webp",
        altText: "Shadow The Hedgehog",
        title: "Shadow The Hedgehog.chd",
        downloadLink2: "https://nephobox.com/s/1jgIM--hxBmaIExLk4RMDmg" // Segundo enlace de descarga

    },       
    {
        id: "Sly Cooper and the Thievius Raccoonus",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/sly.webp",
        altText: "Sly Cooper and the Thievius Raccoonus",
        title: "Sly Cooper and the Thievius Raccoonus (USA).chd",
        downloadLink2: "https://nephobox.com/s/1rI6wfNQcVJTQZ5bc_jLCAA" // Segundo enlace de descarga

    },       
    {
        id: "Sly 2 - Band of Thieves",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/sly2.webp",
        altText: "Sly 2 - Band of Thieves",
        title: "Sly 2 - Band of Thieves (USA).chd",
        downloadLink2: "https://nephobox.com/s/1GpEMh_Kq616WITOjeTS_kg" // Segundo enlace de descarga

    },       
    {
        id: "Sly 3 - Honor Among Thieves",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/sly3.webp",
        altText: "Sly 3 - Honor Among Thieves",
        title: "Sly 3 - Honor Among Thieves (USA).chd",
        downloadLink2: "https://nephobox.com/s/121OYNowr56SOj7M9mB-JhA" // Segundo enlace de descarga

    },       
    {
        id: "Silent Hill 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/silenthill2.webp",
        altText: "Silent Hill 2",
        title: "Silent Hill 2.chd",
        downloadLink2: "https://nephobox.com/s/12a0zvEgUD1gA2RjUFL2H4A" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Heroes",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/sonicheroes.webp",
        altText: "Sonic Heroes",
        title: "Sonic Heroes.chd",
        downloadLink2: "https://nephobox.com/s/1k5192QlyfUPWYfhWXEjvVQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Unleashed",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/sonicunleashed.webp",
        altText: "Sonic Unleashed",
        title: "Sonic Unleashed (USA).chd",
        downloadLink2: "https://nephobox.com/s/1FRFVJ0YIZPn__nTcdPe9MA" // Segundo enlace de descarga

    },       
    {
        id: "Simpsons Hit Run",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/simpsons.webp",
        altText: "Simpsons Hit Run",
        title: "Simpsons Hit Run.chd",
        downloadLink2: "JJJ" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/spiderman3.webp",
        altText: "Spider-Man 3",
        title: "Spider-Man 3.chd",
        downloadLink2: "https://nephobox.com/s/1O0tAkWS9jtTv3rDwLfqmmw" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/spiderman2.webp",
        altText: "Spider-Man 2",
        title: "Spider-Man 2.chd",
        downloadLink2: "https://nephobox.com/s/1ljjxQQYeP5TxiRy8pFo_gw" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/spiderman.webp",
        altText: "Spider-Man",
        title: "Spider-Man.chd",
        downloadLink2: "https://nephobox.com/s/1LaD-zrets1HVMrQTB2HZ8g" // Segundo enlace de descarga
        
    },       
    {
        id: "Super Dragon Ball Z",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/superdb.webp",
        altText: "Super Dragon Ball Z",
        title: "Super Dragon Ball Z (USA).chd",
        downloadLink2: "https://nephobox.com/s/17yGeaI2ZovmQHGYdyNa9vg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 64",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/sm64.webp",
        altText: "Super Mario 64",
        title: "Super Mario 64.iso",
        downloadLink2: "https://nephobox.com/s/1LzU4OJbjj2dPUcDy6JaIEw" // Segundo enlace de descarga

    },       
    {
        id: "Tekken 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/tekken5.webp",
        altText: "Tekken 5",
        title: "Tekken 5.chd",
        downloadLink2: "https://nephobox.com/s/1rfgl8bxo6v7gzMxzqBwXxg" // Segundo enlace de descarga

    },       
    {
        id: "Tony Hawks Pro Skater 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/proskater3.webp",
        altText: "Tony Hawks Pro Skater 4",
        title: "Tony Hawks Pro Skater 3.chd",
        downloadLink2: "https://nephobox.com/s/1d6KqvXpdMkfEQQ7_szmzYQ" // Segundo enlace de descarga

    },       
    {
        id: "Tony Hawks Pro Skater 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/proskater4.webp",
        altText: "Tony Hawks Pro Skater 4",
        title: "Tony Hawks Pro Skater 4.chd",
        downloadLink2: "https://nephobox.com/s/1d6KqvXpdMkfEQQ7_szmzYQ" // Segundo enlace de descarga

    },       
    {
        id: "X-Men Legends",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps2/xmen.webp",
        altText: "X-Men Legends",
        title: "X-Men Legends.chd",
        downloadLink2: "https://nephobox.com/s/1RaeV9qk0hWMfHO1OuFXuCg" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
