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
        id: "Amazing Spider-Man, The",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Amazing Spider-Man, The",
        title: "Amazing Spider-Man, The (USA) (En,Fr,Es).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Amazing Spider-Man 2, The",
        imgSrc: "assets/img/another.jpg",
        altText: "Amazing Spider-Man 2, The",
        title: "Amazing Spider-Man 2, The (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga        

    },       
    {
        id: "Angry Birds Trilogy",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Angry Birds Trilogy",
        title: "Angry Birds Trilogy (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KK" // Segundo enlace de descarga

    },       
    {
        id: "Animal Crossing - New Leaf",
        imgSrc: "assets/img/another.jpg",
        altText: "Animal Crossing - New Leaf",
        title: "Animal Crossing - New Leaf (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Asphalt 3D",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Asphalt 3D",
        title: "Asphalt 3D (USA) (En,Fr,Es).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Batman - Arkham Origins Blackgate",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Batman - Arkham Origins Blackgate",
        title: "Batman - Arkham Origins Blackgate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Captain America - Super Soldier",
        imgSrc: "assets/img/another.jpg",
        altText: "Captain America - Super Soldier",
        title: "Captain America - Super Soldier (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Cars 2",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Cars 2",
        title: "Cars 2 (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Detective Pikachu",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Detective Pikachu",
        title: "Detective Pikachu (Europe) (En,Ja,Fr,De,Es,It,Zh).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

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
