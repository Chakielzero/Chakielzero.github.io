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
        id: "Disney Epic Mickey - Power of Illusion",
        imgSrc: "assets/img/another.jpg",
        altText: "Disney Epic Mickey - Power of Illusion",
        title: "Disney Epic Mickey - Power of Illusion (USA) (En,Fr,Es,Pt).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Disney Planes",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Disney Planes",
        title: "Disney Planes (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Kong Country Returns 3D",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Donkey Kong Country Returns 3D",
        title: "Donkey Kong Country Returns 3D (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Fusions",
        imgSrc: "assets/img/another.jpg",
        altText: "Dragon Ball Fusions",
        title: "Dragon Ball Fusions (USA).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Extreme Butoden",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Dragon Ball Z - Extreme Butoden",
        title: "Dragon Ball Z - Extreme Butoden.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Quest VIII - Journey of the Cursed King",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Dragon Quest VIII - Journey of the Cursed King",
        title: "Dragon Quest VIII - Journey of the Cursed King (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Dream Trigger 3D",
        imgSrc: "assets/img/another.jpg",
        altText: "Dream Trigger 3D",
        title: "Dream Trigger 3D (Europe) (En,Fr,Es).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Driver - Renegade 3D",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Driver - Renegade 3D",
        title: "Driver - Renegade 3D (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "F1 2011",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "F1 2011",
        title: "F1 2011 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Farming Simulator 18",
        imgSrc: "assets/img/another.jpg",
        altText: "Farming Simulator 18",
        title: "Farming Simulator 18 (Europe) (En,Fr,De,Es,It,Pt,Pl,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Fast & Furious - Showdown",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Fast & Furious - Showdown",
        title: "Fast & Furious - Showdown (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "FIFA Soccer 12",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "FIFA Soccer 12.3ds",
        title: "FIFA Soccer 12 (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA Soccer 13",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "FIFA Soccer 13",
        title: "FIFA Soccer 13 (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 14 - Legacy Edition",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "FIFA 14 - Legacy Edition",
        title: "FIFA 14 - Legacy Edition (Europe) (De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 15 - Legacy Edition",
        imgSrc: "assets/img/another.jpg",
        altText: "FIFA 15 - Legacy Edition",
        title: "FIFA 15 - Legacy Edition (Europe) (De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Fire Emblem - Awakening",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Fire Emblem - Awakening",
        title: "Fire Emblem - Awakening (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem Echoes - Shadows of Valentia",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Fire Emblem Echoes - Shadows of Valentia",
        title: "Fire Emblem Echoes - Shadows of Valentia (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem Fates - Limited Edition",
        imgSrc: "assets/img/another.jpg",
        altText: "Fire Emblem Fates - Limited Edition",
        title: "Fire Emblem Fates - Limited Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Gravity Falls - Legend of the Gnome Gemulets",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Gravity Falls - Legend of the Gnome Gemulets",
        title: "Gravity Falls - Legend of the Gnome Gemulets (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Green Lantern - Rise of the Manhunters",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Green Lantern - Rise of the Manhunters",
        title: "Green Lantern - Rise of the Manhunters (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Hey! Pikmin",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Hey! Pikmin",
        title: "Hey! Pikmin (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Hot Wheels - World's Best Driver",
        imgSrc: "assets/img/another.jpg",
        altText: "Hot Wheels - World's Best Driver",
        title: "Hot Wheels - World's Best Driver (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Hyrule Warriors Legends",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Hyrule Warriors Legends",
        title: "Hyrule Warriors Legends (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Kid Icarus - Uprising.3ds",
        imgSrc: "assets/img/another.jpg",
        altText: "Kid Icarus - Uprising.3ds",
        title: "Kid Icarus - Uprising.3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        

    },       
    {
        id: "Kingdom Hearts 3D - Dream Drop Distance",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Kingdom Hearts 3D - Dream Drop Distance",
        title: "Kingdom Hearts 3D - Dream Drop Distance (USA) (En,Fr).3ds",
        downloadLink2: "KK" // Segundo enlace de descarga

    },       
    {
        id: "Kirby - Planet Robobot",
        imgSrc: "assets/img/another.jpg",
        altText: "Kirby - Planet Robobot",
        title: "Kirby - Planet Robobot (Europe).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Kirby - Triple Deluxe",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Kirby - Triple Deluxe",
        title: "Kirby - Triple Deluxe (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Kirby Battle Royale",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Kirby Battle Royale",
        title: "Kirby Battle Royale (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Kirby's Extra Epic Yarn",
        imgSrc: "assets/img/another.jpg",
        altText: "Kirby's Extra Epic Yarn",
        title: "Kirby's Extra Epic Yarn (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Kung Fu Panda - Showdown of Legendary Legends",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Kung Fu Panda - Showdown of Legendary Legends",
        title: "Kung Fu Panda - Showdown of Legendary Legends (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - A Link Between Worlds",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Legend of Zelda, The - A Link Between Worlds",
        title: "Legend of Zelda, The - A Link Between Worlds (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Tri Force Heroes",
        imgSrc: "assets/img/another.jpg",
        altText: "Legend of Zelda, The - Tri Force Heroes",
        title: "Legend of Zelda, The - Tri Force Heroes (USA) (En,Fr,Es).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Batman 3 - Beyond Gotham",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "LEGO Batman 3 - Beyond Gotham",
        title: "LEGO Batman 3 - Beyond Gotham (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO City Undercover - The Chase Begins",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "LEGO City Undercover - The Chase Begins",
        title: "LEGO City Undercover - The Chase Begins (Europe) (En,Fr,De,Es,It,Nl,Pt,Da,Ru).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Jurassic World.3ds",
        imgSrc: "assets/img/another.jpg",
        altText: "LEGO Jurassic World.3ds",
        title: "LEGO Jurassic World (Spain).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Legends of Chima - Laval's Journey",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "LEGO Legends of Chima - Laval's Journey",
        title: "LEGO Legends of Chima - Laval's Journey (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Marvel Super Heroes - Universe in Peril",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "LEGO Marvel Super Heroes - Universe in Peril",
        title: "LEGO Marvel Super Heroes - Universe in Peril (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Movie Videogame, The",
        imgSrc: "assets/img/another.jpg",
        altText: "LEGO Movie Videogame, The",
        title: "LEGO Movie Videogame, The (Europe) (En,Fr,Es,It,Nl,Da).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Ninjago - Nindroids.3ds",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "LEGO Ninjago - Nindroids.3ds",
        title: "LEGO Ninjago - Nindroids (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Ninjago - Shadow of Ronin.3ds",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "LEGO Ninjago - Shadow of Ronin.3ds",
        title: "LEGO Ninjago - Shadow of Ronin (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Pirates of the Caribbean - The Video Game.3ds",
        imgSrc: "assets/img/another.jpg",
        altText: "LEGO Pirates of the Caribbean - The Video Game",
        title: "LEGO Pirates of the Caribbean - The Video Game (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Star Wars - The Force Awakens",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "LEGO Star Wars - The Force Awakens",
        title: "LEGO Star Wars - The Force Awakens (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Star Wars III - The Clone Wars",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "LEGO Star Wars III - The Clone Wars",
        title: "LEGO Star Wars III - The Clone Wars (Europe) (En,Fr,De,Es,It,Da).3ds",
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
