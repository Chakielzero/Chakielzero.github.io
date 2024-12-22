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
        id: "Bayonetta Origins: Cereza and the Lost Demon",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Bayonetta Origins: Cereza and the Lost Demon",
        title: "Bayonetta Origins: Cereza and the Lost Demon.XCI",
        downloadLink2: "https://cuty.io/JwP2z53xS5ni" // Segundo enlace de descarga
        
    },       
    {
        id: "Metal Gear Solid 2 - Sons of Liberty",
        imgSrc: "assets/img/mg2.jpg",
        altText: "Metal Gear Solid 2 - Sons of Liberty",
        title: "Metal Gear Solid 2 - Sons of Liberty (USA).chd",
        downloadLink2: "https://nephobox.com/s/1ziF93iyOT1ouiPYQnfKIng" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid 3 SE",
        imgSrc: "assets/img/mg3.jpg",
        altText: "Metal Gear Solid 3 SE",
        title: "Metal Gear Solid 3 Snake Eater.chd",
        downloadLink2: "https://nephobox.com/s/1wTPNSJU1NqaXUM8rmgFGlQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Metal Slug 3",
        imgSrc: "assets/img/metalslug3.jpg",
        altText: "Metal Slug 3",
        title: "Metal Slug 3 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/1LrZQo3z0Sajr_yQKp3QH8A" // Segundo enlace de descarga

    },       
    {
        id: "Midnight Club 3 - DUB Edition",
        imgSrc: "assets/img/mc3.jpg",
        altText: "Midnight Club 3 - DUB Edition",
        title: "Midnight Club 3 - DUB Edition.chd",
        downloadLink2: "https://nephobox.com/s/16QJQnHPeVySEwj9_ET-VBA" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat Armageddon",
        imgSrc: "assets/img/mk.jpg",
        altText: "Mortal Kombat Armageddon",
        title: "Mortal Kombat Armageddon.chd",
        downloadLink2: "https://nephobox.com/s/1IiEOcnDgJaq6jw-ID6gONg" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Shippuden - Ultimate Ninja 5",
        imgSrc: "assets/img/naruto5.jpg",
        altText: "Naruto Shippuden - Ultimate Ninja 5",
        title: "Naruto Shippuden - Ultimate Ninja 5 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/1zH-dlkH-jgz6O534cqSfeg" // Segundo enlace de descarga
        
    },       
    {
        id: "Need for Speed - Hot Pursuit 2",
        imgSrc: "assets/img/nfshot2.jpg",
        altText: "Need for Speed - Hot Pursuit 2",
        title: "Need for Speed - Hot Pursuit 2 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1KZ_IzsbyVtCmWefNxWczzQ" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed Most Wanted",
        imgSrc: "assets/img/nfsmost.jpg",
        altText: "Need for Speed Most Wanted",
        title: "Need for Speed Most Wanted.chd",
        downloadLink2: "https://nephobox.com/s/1JTdOyUShlmRUqskZxrQk5g" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - ProStreet",
        imgSrc: "assets/img/nfspro.jpg",
        altText: "Need for Speed - ProStreet",
        title: "Need for Speed - ProStreet (USA).chd",
        downloadLink2: "https://nephobox.com/s/1Xo6m7wa-HuxwBiviUhSF0Q" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - Underground 2",
        imgSrc: "assets/img/nfsunder2.jpg",
        altText: "Need for Speed - Underground",
        title: "Need for Speed - Underground 2 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1-tC_BlK8qcvtmAtjKC7bYg" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 3",
        imgSrc: "assets/img/pes3.jpg",
        altText: "Pro Evolution Soccer 3",
        title: "Pro Evolution Soccer 3 (Europe) (En,Fr,De,Es).chd",
        downloadLink2: "https://nephobox.com/s/1V6YFd3czz7JnbNuIei4z8A" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 6",
        imgSrc: "assets/img/pes6.jpg",
        altText: "Pro Evolution Soccer 6",
        title: "Pro Evolution Soccer 6 (Spain).chd",
        downloadLink2: "https://nephobox.com/s/1d8z9tuMneLdOiNtEfHbCfw" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank",
        imgSrc: "assets/img/ratchet.jpg",
        altText: "Ratchet & Clank",
        title: "Ratchet & Clank.chd",
        downloadLink2: "https://nephobox.com/s/1_R1cPPPlOx3MnAlPAv3UpA" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank 2",
        imgSrc: "assets/img/ratchet2.jpg",
        altText: "Ratchet & Clank 2",
        title: "Ratchet & Clank 2.chd",
        downloadLink2: "https://nephobox.com/s/1Qk7DrvIz1nwUlbUi3ur7Gw" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank 3 Up YA",
        imgSrc: "assets/img/ratchet3.jpg",
        altText: "Ratchet & Clank 3 Up YA",
        title: "Ratchet & Clank 3 Up YA.chd",
        downloadLink2: "https://nephobox.com/s/1ckPwNxc_mT13TiR1F_VMoA" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 4",
        imgSrc: "assets/img/re4.jpg",
        altText: "Resident Evil 4",
        title: "Resident Evil 4 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/12edXojbHcOzXmEUVVK9eFA" // Segundo enlace de descarga
        
    },       
    {
        id: "Shadow of the Colossus",
        imgSrc: "assets/img/shadowcolussus.jpg",
        altText: "Shadow of the Colossus",
        title: "Shadow of the Colossus.chd",
        downloadLink2: "https://nephobox.com/s/1yLwNQhDgv-hhhsZlafS8KQ" // Segundo enlace de descarga

    },       
    {
        id: "Shadow The Hedgehog",
        imgSrc: "assets/img/shadow.jpg",
        altText: "Shadow The Hedgehog",
        title: "Shadow The Hedgehog.chd",
        downloadLink2: "https://nephobox.com/s/1jgIM--hxBmaIExLk4RMDmg" // Segundo enlace de descarga

    },       
    {
        id: "Sly Cooper and the Thievius Raccoonus",
        imgSrc: "assets/img/sly.jpg",
        altText: "Sly Cooper and the Thievius Raccoonus",
        title: "Sly Cooper and the Thievius Raccoonus (USA).chd",
        downloadLink2: "https://nephobox.com/s/1rI6wfNQcVJTQZ5bc_jLCAA" // Segundo enlace de descarga

    },       
    {
        id: "Sly 2 - Band of Thieves",
        imgSrc: "assets/img/sly2.jpg",
        altText: "Sly 2 - Band of Thieves",
        title: "Sly 2 - Band of Thieves (USA).chd",
        downloadLink2: "https://nephobox.com/s/1GpEMh_Kq616WITOjeTS_kg" // Segundo enlace de descarga

    },       
    {
        id: "Sly 3 - Honor Among Thieves",
        imgSrc: "assets/img/sly3.jpg",
        altText: "Sly 3 - Honor Among Thieves",
        title: "Sly 3 - Honor Among Thieves (USA).chd",
        downloadLink2: "https://nephobox.com/s/121OYNowr56SOj7M9mB-JhA" // Segundo enlace de descarga

    },       
    {
        id: "Silent Hill 2",
        imgSrc: "assets/img/silenthill2.jpg",
        altText: "Silent Hill 2",
        title: "Silent Hill 2.chd",
        downloadLink2: "https://nephobox.com/s/12a0zvEgUD1gA2RjUFL2H4A" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Heroes",
        imgSrc: "assets/img/sonicheroes.jpg",
        altText: "Sonic Heroes",
        title: "Sonic Heroes.chd",
        downloadLink2: "https://nephobox.com/s/1k5192QlyfUPWYfhWXEjvVQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Unleashed",
        imgSrc: "assets/img/sonicunleashed.jpg",
        altText: "Sonic Unleashed",
        title: "Sonic Unleashed (USA).chd",
        downloadLink2: "https://nephobox.com/s/1FRFVJ0YIZPn__nTcdPe9MA" // Segundo enlace de descarga

    },       
    {
        id: "Simpsons Hit Run",
        imgSrc: "assets/img/simpsons.jpg",
        altText: "Simpsons Hit Run",
        title: "Simpsons Hit Run.chd",
        downloadLink2: "JJJ" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 3",
        imgSrc: "assets/img/spiderman3.jpg",
        altText: "Spider-Man 3",
        title: "Spider-Man 3.chd",
        downloadLink2: "https://nephobox.com/s/1O0tAkWS9jtTv3rDwLfqmmw" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 2",
        imgSrc: "assets/img/spiderman2.jpg",
        altText: "Spider-Man 2",
        title: "Spider-Man 2.chd",
        downloadLink2: "https://nephobox.com/s/1ljjxQQYeP5TxiRy8pFo_gw" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man",
        imgSrc: "assets/img/spiderman.jpg",
        altText: "Spider-Man",
        title: "Spider-Man.chd",
        downloadLink2: "https://nephobox.com/s/1LaD-zrets1HVMrQTB2HZ8g" // Segundo enlace de descarga
        
    },       
    {
        id: "Super Dragon Ball Z",
        imgSrc: "assets/img/superdb.jpg",
        altText: "Super Dragon Ball Z",
        title: "Super Dragon Ball Z (USA).chd",
        downloadLink2: "https://nephobox.com/s/17yGeaI2ZovmQHGYdyNa9vg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 64",
        imgSrc: "assets/img/sm64.jpg",
        altText: "Super Mario 64",
        title: "Super Mario 64.iso",
        downloadLink2: "https://nephobox.com/s/1LzU4OJbjj2dPUcDy6JaIEw" // Segundo enlace de descarga

    },       
    {
        id: "Tekken 5",
        imgSrc: "assets/img/tekken5.jpg",
        altText: "Tekken 5",
        title: "Tekken 5.chd",
        downloadLink2: "https://nephobox.com/s/1rfgl8bxo6v7gzMxzqBwXxg" // Segundo enlace de descarga

    },       
    {
        id: "Tony Hawks Pro Skater 3",
        imgSrc: "assets/img/proskater3.jpg",
        altText: "Tony Hawks Pro Skater 3",
        title: "Tony Hawks Pro Skater 3.chd",
        downloadLink2: "https://nephobox.com/s/13xToM2YpR6YLhRokmSJ3kg" // Segundo enlace de descarga

    },       
    {
        id: "Tony Hawks Pro Skater 4",
        imgSrc: "assets/img/proskater4.jpg",
        altText: "Tony Hawks Pro Skater 4",
        title: "Tony Hawks Pro Skater 4.chd",
        downloadLink2: "https://nephobox.com/s/1d6KqvXpdMkfEQQ7_szmzYQ" // Segundo enlace de descarga

    },       
    {
        id: "X-Men Legends",
        imgSrc: "assets/img/xmen.jpg",
        altText: "X-Men Legends",
        title: "X-Men Legends.chd",
        downloadLink2: "https://nephobox.com/s/1RaeV9qk0hWMfHO1OuFXuCg" // Segundo enlace de descarga

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
