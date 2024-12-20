// Lista de juegos
const juegos = [
    {
        id: "Adventure Time - The Secret of the Nameless Kingdom",
        imgSrc: "assets/img/aventure.jpg",
        altText: "Adventure Time - The Secret of the Nameless Kingdom",
        title: "Adventure Time - The Secret of the Nameless Kingdom (Europe) (En).3ds",
        downloadLink2: "https://cuty.io/uFw3" // Segundo enlace de descarga
    },       
    {
        id: "Amazing Spider-Man, The",
        imgSrc: "assets/img/spiderman.jpg",
        altText: "Amazing Spider-Man, The",
        title: "Amazing Spider-Man, The (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://cuty.io/p0DPkLamO" // Segundo enlace de descarga

    },       
    {
        id: "Amazing Spider-Man 2, The",
        imgSrc: "assets/img/spiderman2.jpg",
        altText: "Amazing Spider-Man 2, The",
        title: "Amazing Spider-Man 2, The (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga        

    },       
    {
        id: "Angry Birds Trilogy",
        imgSrc: "assets/img/angry.jpg",
        altText: "Angry Birds Trilogy",
        title: "Angry Birds Trilogy (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KK" // Segundo enlace de descarga

    },       
    {
        id: "Animal Crossing - New Leaf",
        imgSrc: "assets/img/animal.jpg",
        altText: "Animal Crossing - New Leaf",
        title: "Animal Crossing - New Leaf (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Asphalt 3D",
        imgSrc: "assets/img/asphalt.jpg",
        altText: "Asphalt 3D",
        title: "Asphalt 3D (USA) (En,Fr,Es).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Batman - Arkham Origins Blackgate",
        imgSrc: "assets/img/batman.jpg",
        altText: "Batman - Arkham Origins Blackgate",
        title: "Batman - Arkham Origins Blackgate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Captain America - Super Soldier",
        imgSrc: "assets/img/capitan.jpg",
        altText: "Captain America - Super Soldier",
        title: "Captain America - Super Soldier (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Cars 2",
        imgSrc: "assets/img/cars2.jpg",
        altText: "Cars 2",
        title: "Cars 2 (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Detective Pikachu",
        imgSrc: "assets/img/detective.jpg",
        altText: "Detective Pikachu",
        title: "Detective Pikachu (Europe) (En,Ja,Fr,De,Es,It,Zh).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Disney Epic Mickey - Power of Illusion",
        imgSrc: "assets/img/epicmickey.jpg",
        altText: "Disney Epic Mickey - Power of Illusion",
        title: "Disney Epic Mickey - Power of Illusion (USA) (En,Fr,Es,Pt).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Disney Planes",
        imgSrc: "assets/img/planes.jpg",
        altText: "Disney Planes",
        title: "Disney Planes (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Kong Country Returns 3D",
        imgSrc: "assets/img/donkey.jpg",
        altText: "Donkey Kong Country Returns 3D",
        title: "Donkey Kong Country Returns 3D (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Fusions",
        imgSrc: "assets/img/dbfusions.jpg",
        altText: "Dragon Ball Fusions",
        title: "Dragon Ball Fusions (USA).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Extreme Butoden",
        imgSrc: "assets/img/dbextreme.jpg",
        altText: "Dragon Ball Z - Extreme Butoden",
        title: "Dragon Ball Z - Extreme Butoden.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Quest VIII - Journey of the Cursed King",
        imgSrc: "assets/img/dragonquest.jpg",
        altText: "Dragon Quest VIII - Journey of the Cursed King",
        title: "Dragon Quest VIII - Journey of the Cursed King (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Dream Trigger 3D",
        imgSrc: "assets/img/dreamteam.jpg",
        altText: "Dream Trigger 3D",
        title: "Dream Trigger 3D (Europe) (En,Fr,Es).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Driver - Renegade 3D",
        imgSrc: "assets/img/driver.jpg",
        altText: "Driver - Renegade 3D",
        title: "Driver - Renegade 3D (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "F1 2011",
        imgSrc: "assets/img/f1.jpg",
        altText: "F1 2011",
        title: "F1 2011 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Farming Simulator 18",
        imgSrc: "assets/img/farming.jpg",
        altText: "Farming Simulator 18",
        title: "Farming Simulator 18 (Europe) (En,Fr,De,Es,It,Pt,Pl,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Fast & Furious - Showdown",
        imgSrc: "assets/img/fastyfurius.jpg",
        altText: "Fast & Furious - Showdown",
        title: "Fast & Furious - Showdown (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "FIFA Soccer 12",
        imgSrc: "assets/img/fifa12.jpg",
        altText: "FIFA Soccer 12.3ds",
        title: "FIFA Soccer 12 (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA Soccer 13",
        imgSrc: "assets/img/fifa13.jpg",
        altText: "FIFA Soccer 13",
        title: "FIFA Soccer 13 (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 14 - Legacy Edition",
        imgSrc: "assets/img/fifa14.jpg",
        altText: "FIFA 14 - Legacy Edition",
        title: "FIFA 14 - Legacy Edition (Europe) (De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 15 - Legacy Edition",
        imgSrc: "assets/img/fifa15.jpg",
        altText: "FIFA 15 - Legacy Edition",
        title: "FIFA 15 - Legacy Edition (Europe) (De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Fire Emblem - Awakening",
        imgSrc: "assets/img/fireawa.jpg",
        altText: "Fire Emblem - Awakening",
        title: "Fire Emblem - Awakening (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem Echoes - Shadows of Valentia",
        imgSrc: "assets/img/fireechoes.jpg",
        altText: "Fire Emblem Echoes - Shadows of Valentia",
        title: "Fire Emblem Echoes - Shadows of Valentia (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem Fates - Limited Edition",
        imgSrc: "assets/img/firelimited.jpg",
        altText: "Fire Emblem Fates - Limited Edition",
        title: "Fire Emblem Fates - Limited Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Gravity Falls - Legend of the Gnome Gemulets",
        imgSrc: "assets/img/gravity.jpg",
        altText: "Gravity Falls - Legend of the Gnome Gemulets",
        title: "Gravity Falls - Legend of the Gnome Gemulets (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Green Lantern - Rise of the Manhunters",
        imgSrc: "assets/img/green.jpg",
        altText: "Green Lantern - Rise of the Manhunters",
        title: "Green Lantern - Rise of the Manhunters (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Hey! Pikmin",
        imgSrc: "assets/img/heypikmin.jpg",
        altText: "Hey! Pikmin",
        title: "Hey! Pikmin (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Hot Wheels - World's Best Driver",
        imgSrc: "assets/img/hot.jpg",
        altText: "Hot Wheels - World's Best Driver",
        title: "Hot Wheels - World's Best Driver (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Hyrule Warriors Legends",
        imgSrc: "assets/img/hyrule.jpg",
        altText: "Hyrule Warriors Legends",
        title: "Hyrule Warriors Legends (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Kid Icarus - Uprising.3ds",
        imgSrc: "assets/img/kidicarus.jpg",
        altText: "Kid Icarus - Uprising.3ds",
        title: "Kid Icarus - Uprising.3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        

    },       
    {
        id: "Kingdom Hearts 3D - Dream Drop Distance",
        imgSrc: "assets/img/kingdoms.jpg",
        altText: "Kingdom Hearts 3D - Dream Drop Distance",
        title: "Kingdom Hearts 3D - Dream Drop Distance (USA) (En,Fr).3ds",
        downloadLink2: "KK" // Segundo enlace de descarga

    },       
    {
        id: "Kirby - Planet Robobot",
        imgSrc: "assets/img/kirbyrobobot.jpg",
        altText: "Kirby - Planet Robobot",
        title: "Kirby - Planet Robobot (Europe).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Kirby - Triple Deluxe",
        imgSrc: "assets/img/kirbytriple.jpg",
        altText: "Kirby - Triple Deluxe",
        title: "Kirby - Triple Deluxe (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Kirby Battle Royale",
        imgSrc: "assets/img/kirbybattle.jpg",
        altText: "Kirby Battle Royale",
        title: "Kirby Battle Royale (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Kirby's Extra Epic Yarn",
        imgSrc: "assets/img/kirbyepic.jpg",
        altText: "Kirby's Extra Epic Yarn",
        title: "Kirby's Extra Epic Yarn (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Kung Fu Panda - Showdown of Legendary Legends",
        imgSrc: "assets/img/kunfupanda.jpg",
        altText: "Kung Fu Panda - Showdown of Legendary Legends",
        title: "Kung Fu Panda - Showdown of Legendary Legends (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - A Link Between Worlds",
        imgSrc: "assets/img/zeldalinkbetween.jpg",
        altText: "Legend of Zelda, The - A Link Between Worlds",
        title: "Legend of Zelda, The - A Link Between Worlds (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Tri Force Heroes",
        imgSrc: "assets/img/zeldatriforce.jpg",
        altText: "Legend of Zelda, The - Tri Force Heroes",
        title: "Legend of Zelda, The - Tri Force Heroes (USA) (En,Fr,Es).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Batman 3 - Beyond Gotham",
        imgSrc: "assets/img/legobatman3.jpg",
        altText: "LEGO Batman 3 - Beyond Gotham",
        title: "LEGO Batman 3 - Beyond Gotham (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO City Undercover - The Chase Begins",
        imgSrc: "assets/img/legocity.jpg",
        altText: "LEGO City Undercover - The Chase Begins",
        title: "LEGO City Undercover - The Chase Begins (Europe) (En,Fr,De,Es,It,Nl,Pt,Da,Ru).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Jurassic World.3ds",
        imgSrc: "assets/img/legojurassic.jpg",
        altText: "LEGO Jurassic World.3ds",
        title: "LEGO Jurassic World (Spain).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Legends of Chima - Laval's Journey",
        imgSrc: "assets/img/legochima.jpg",
        altText: "LEGO Legends of Chima - Laval's Journey",
        title: "LEGO Legends of Chima - Laval's Journey (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Marvel Super Heroes - Universe in Peril",
        imgSrc: "assets/img/legomarvel.jpg",
        altText: "LEGO Marvel Super Heroes - Universe in Peril",
        title: "LEGO Marvel Super Heroes - Universe in Peril (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Movie Videogame, The",
        imgSrc: "assets/img/legomovie.jpg",
        altText: "LEGO Movie Videogame, The",
        title: "LEGO Movie Videogame, The (Europe) (En,Fr,Es,It,Nl,Da).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Ninjago - Nindroids.3ds",
        imgSrc: "assets/img/legoninjago.jpg",
        altText: "LEGO Ninjago - Nindroids.3ds",
        title: "LEGO Ninjago - Nindroids (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Ninjago - Shadow of Ronin.3ds",
        imgSrc: "assets/img/legoninjagoshadow.jpg",
        altText: "LEGO Ninjago - Shadow of Ronin.3ds",
        title: "LEGO Ninjago - Shadow of Ronin (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Pirates of the Caribbean - The Video Game.3ds",
        imgSrc: "assets/img/legopirates.jpg",
        altText: "LEGO Pirates of the Caribbean - The Video Game",
        title: "LEGO Pirates of the Caribbean - The Video Game (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Star Wars - The Force Awakens",
        imgSrc: "assets/img/legostarwars3.jpg",
        altText: "LEGO Star Wars - The Force Awakens",
        title: "LEGO Star Wars - The Force Awakens (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Star Wars III - The Clone Wars",
        imgSrc: "assets/img/legostarwarsawa.jpg",
        altText: "LEGO Star Wars III - The Clone Wars",
        title: "LEGO Star Wars III - The Clone Wars (Europe) (En,Fr,De,Es,It,Da).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Luigi's Mansion - Dark Moon",
        imgSrc: "assets/img/luigismansion2.jpg",
        altText: "Luigi's Mansion - Dark Moon",
        title: "Luigi's Mansion - Dark Moon (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey",
        imgSrc: "assets/img/maroyluigi.jpg",
        altText: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey",
        title: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Luigi - Dream Team Bros",
        imgSrc: "assets/img/marioyluigi2.jpg",
        altText: "Mario & Luigi - Dream Team Bros",
        title: "Mario & Luigi - Dream Team Bros. (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Mario & Luigi - Paper Jam Bros",
        imgSrc: "assets/img/marioyluigi3.jpg",
        altText: "Mario & Luigi - Paper Jam Bros",
        title: "Mario & Luigi - Paper Jam Bros. (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Sonic at the London 2012 Olympic Games",
        imgSrc: "assets/img/marioysonic.jpg",
        altText: "Mario & Sonic at the London 2012 Olympic Games",
        title: "Mario & Sonic at the London 2012 Olympic Games (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mario and Donkey Kong - Minis on the Move",
        imgSrc: "assets/img/marioydonkey.jpg",
        altText: "Mario and Donkey Kong - Minis on the Move",
        title: "Mario and Donkey Kong - Minis on the Move (Europe) (En,Fr,De,Es,It) (eShop).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Mario Kart 7.3ds",
        imgSrc: "assets/img/mariokart7.jpg",
        altText: "Mario Kart 7.3ds",
        title: "Mario Kart 7.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Mario Party - Island Tour",
        imgSrc: "assets/img/marioparty.jpg",
        altText: "Mario Party - Island Tour",
        title: "Mario Party - Island Tour (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mario Tennis Open",
        imgSrc: "assets/img/mariotennis.jpg",
        altText: "Mario Tennis Open",
        title: "Mario Tennis Open (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mega Man Legacy Collection.3ds",
        imgSrc: "assets/img/megaman.jpg",
        altText: "Mega Man Legacy Collection.3ds",
        title: "Mega Man Legacy Collection (USA).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid 3D - Snake Eater",
        imgSrc: "assets/img/metalgear3d.jpg",
        altText: "Metal Gear Solid 3D - Snake Eater",
        title: "Metal Gear Solid 3D - Snake Eater (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Metroid - Samus Returns",
        imgSrc: "assets/img/metroidsamus.jpg",
        altText: "Metroid - Samus Returns",
        title: "Metroid - Samus Returns (USA) (En,Fr,Es).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Prime - Federation Force",
        imgSrc: "assets/img/metroidprime.jpg",
        altText: "Metroid Prime - Federation Force",
        title: "Metroid Prime - Federation Force (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft - New Nintendo 3DS Edition",
        imgSrc: "assets/img/minecraft.jpg",
        altText: "Minecraft - New Nintendo 3DS Edition",
        title: "Minecraft - New Nintendo 3DS Edition (USA).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Monster Hunter 4 Ultimate",
        imgSrc: "assets/img/monsterhunter4.jpg",
        altText: "Monster Hunter 4 Ultimate",
        title: "Monster Hunter 4 Ultimate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Powerful Shippuden",
        imgSrc: "assets/img/narutopower.jpg",
        altText: "Naruto Powerful Shippuden",
        title: "Naruto Powerful Shippuden (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Shippuden 3D - The New Era",
        imgSrc: "assets/img/naruto3d.jpg",
        altText: "Naruto Shippuden 3D - The New Era",
        title: "Naruto Shippuden 3D - The New Era (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "NASCAR Unleashed.3ds",
        imgSrc: "assets/img/nascar.jpg",
        altText: "NASCAR Unleashed.3ds",
        title: "NASCAR Unleashed (USA).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - The Run",
        imgSrc: "assets/img/nfstherun.jpg",
        altText: "Need for Speed - The Run",
        title: "Need for Speed - The Run (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "New Super Mario Bros. 2",
        imgSrc: "assets/img/newsupermario2.jpg",
        altText: "New Super Mario Bros. 2",
        title: "New Super Mario Bros. 2 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "One Piece - Unlimited Cruise SP",
        imgSrc: "assets/img/opsp.jpg",
        altText: "One Piece - Unlimited Cruise SP",
        title: "One Piece - Unlimited Cruise SP (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "One Piece - Unlimited Cruise SP2",
        imgSrc: "assets/img/opsp2.jpg",
        altText: "One Piece - Unlimited Cruise SP2",
        title: "One Piece - Unlimited Cruise SP2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "One Piece - Unlimited World Red",
        imgSrc: "assets/img/opunlimited.jpg",
        altText: "One Piece - Unlimited World Red",
        title: "One Piece - Unlimited World Red (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man & Galaga Dimensions",
        imgSrc: "assets/img/pacman.jpg",
        altText: "Pac-Man & Galaga Dimensions",
        title: "Pac-Man & Galaga Dimensions (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man and the Ghostly Adventures",
        imgSrc: "assets/img/pacmanadventure.jpg",
        altText: "Pac-Man and the Ghostly Adventures",
        title: "Pac-Man and the Ghostly Adventures (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pac-Man and the Ghostly Adventures 2",
        imgSrc: "assets/img/pacmanadventure2.jpg",
        altText: "Pac-Man and the Ghostly Adventures 2",
        title: "Pac-Man and the Ghostly Adventures 2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man Party 3D",
        imgSrc: "assets/img/pacmanparty.jpg",
        altText: "Pac-Man Party 3D",
        title: "Pac-Man Party 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Paper Mario - Sticker Star",
        imgSrc: "assets/img/papermario.jpg",
        altText: "Paper Mario - Sticker Star",
        title: "Paper Mario - Sticker Star (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon Alpha Sapphire",
        imgSrc: "assets/img/pokemonalphasapphire.jpg",
        altText: "Pokemon Alpha Sapphire",
        title: "Pokemon Alpha Sapphire (Europe) (En,Ja,Fr,De,Es,It,Ko) (Rev 2).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Moon",
        imgSrc: "assets/img/pokemonmoon.jpg",
        altText: "Pokemon Moon",
        title: "Pokemon Moon (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Omega Ruby",
        imgSrc: "assets/img/pokemonomega.jpg",
        altText: "Pokemon Omega Ruby",
        title: "Pokemon Omega Ruby (Europe) (En,Ja,Fr,De,Es,It,Ko) (Rev 2).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Rumble World",
        imgSrc: "assets/img/pokemonrumble.jpg",
        altText: "Pokemon Rumble World",
        title: "Pokemon Rumble World (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon Sun",
        imgSrc: "assets/img/pokemonsun.jpg",
        altText: "Pokemon Sun",
        title: "Pokemon Sun (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Super Mystery Dungeon",
        imgSrc: "assets/img/pokemonmistery.jpg",
        altText: "Pokemon Super Mystery Dungeon",
        title: "Pokemon Super Mystery Dungeon (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        

    },       
    {
        id: "Pokemon Ultra Moon",
        imgSrc: "assets/img/pokemonultramoon.jpg",
        altText: "Pokemon Ultra Moon",
        title: "Pokemon Ultra Moon (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "KK" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Ultra Sun",
        imgSrc: "assets/img/pokemonultrasun.jpg",
        altText: "Pokemon Ultra Sun",
        title: "Pokemon Ultra Sun (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon X",
        imgSrc: "assets/img/pokemonx.jpg",
        altText: "Pokemon X",
        title: "Pokemon X (USA) (En,Ja,Fr,De,Es,It,Ko).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Y",
        imgSrc: "assets/img/pokemony.jpg",
        altText: "Pokemon Y",
        title: "Pokemon Y (Europe) (En,Ja,Fr,De,Es,It,Ko).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Poochy & Yoshi's Woolly World",
        imgSrc: "assets/img/yoshi.jpg",
        altText: "Poochy & Yoshi's Woolly World",
        title: "Poochy & Yoshi's Woolly World (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Power Rangers - Megaforce",
        imgSrc: "assets/img/powerangers.jpg",
        altText: "Power Rangers - Megaforce",
        title: "Power Rangers - Megaforce (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 2011 3D",
        imgSrc: "assets/img/pes11.jpg",
        altText: "Pro Evolution Soccer 2011 3D",
        title: "Pro Evolution Soccer 2011 3D (Europe) (Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 2012 3D",
        imgSrc: "assets/img/pes12.jpg",
        altText: "Pro Evolution Soccer 2012 3D",
        title: "Pro Evolution Soccer 2012 3D (Europe) (Es,It,Pt,El).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pro Evolution Soccer 2013 3D",
        imgSrc: "assets/img/pes13.jpg",
        altText: "Pro Evolution Soccer 2013 3D",
        title: "Pro Evolution Soccer 2013 3D (Europe) (Es,It,Pt,El).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Project X Zone (Europe).3ds",
        imgSrc: "assets/img/proyectxzone.jpg",
        altText: "Project X Zone (Europe).3ds",
        title: "Project X Zone (Europe).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Project X Zone 2",
        imgSrc: "assets/img/proyectxzone2.jpg",
        altText: "Project X Zone 2",
        title: "Project X Zone 2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Rabbids Rumble",
        imgSrc: "assets/img/rabbids.jpg",
        altText: "Rabbids Rumble",
        title: "Rabbids Rumble (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Rayman 3D",
        imgSrc: "assets/img/rayman3d.jpg",
        altText: "Rayman 3D",
        title: "Rayman 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Rayman Origins",
        imgSrc: "assets/img/raymanorigins.jpg",
        altText: "Rayman Origins",
        title: "Rayman Origins (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Regular Show - Mordecai and Rigby in 8-bit Land",
        imgSrc: "assets/img/regularshow.jpg",
        altText: "Regular Show - Mordecai and Rigby in 8-bit Land",
        title: "Regular Show - Mordecai and Rigby in 8-bit Land (Europe).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil - Revelations",
        imgSrc: "assets/img/revelations.jpg",
        altText: "Resident Evil - Revelations",
        title: "Resident Evil - Revelations (USA) (En,Ja,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil - The Mercenaries 3D",
        imgSrc: "assets/img/rethemercenaries.jpg",
        altText: "Resident Evil - The Mercenaries 3D",
        title: "Resident Evil - The Mercenaries 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Ridge Racer 3D",
        imgSrc: "assets/img/ridgeracer.jpg",
        altText: "Ridge Racer 3D",
        title: "Ridge Racer 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Shantae and the Pirate's Curse",
        imgSrc: "assets/img/shantae.jpg",
        altText: "Shantae and the Pirate's Curse",
        title: "Shantae and the Pirate's Curse (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Shinobi",
        imgSrc: "assets/img/shinobi.jpg",
        altText: "Shinobi",
        title: "Shinobi (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Shovel Knight.3ds",
        imgSrc: "assets/img/shovel.jpg",
        altText: "Shovel Knight.3ds",
        title: "Shovel Knight (USA).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Sonic & All-Stars Racing Transformed",
        imgSrc: "assets/img/sonicracing.jpg",
        altText: "Sonic & All-Stars Racing Transformed",
        title: "Sonic & All-Stars Racing Transformed (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Boom - Fire & Ice",
        imgSrc: "assets/img/sonicboom.jpg",
        altText: "Sonic Boom - Fire & Ice",
        title: "Sonic Boom - Fire & Ice (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Boom - Shattered Crystal",
        imgSrc: "assets/img/sonicboom2.jpg",
        altText: "Sonic Boom - Shattered Crystal",
        title: "Sonic Boom - Shattered Crystal (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Generations",
        imgSrc: "assets/img/sonicgenerations.jpg",
        altText: "Sonic Generations",
        title: "Sonic Generations (USA) (En,Fr,Es).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man - Edge of Time",
        imgSrc: "assets/img/spidermanedge.jpg",
        altText: "Spider-Man - Edge of Time",
        title: "Spider-Man - Edge of Time (Europe) (En,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "SpongeBob SquarePants - Plankton's Robotic Revenge",
        imgSrc: "assets/img/bobesponja.jpg",
        altText: "SpongeBob SquarePants - Plankton's Robotic Revenge",
        title: "SpongeBob SquarePants - Plankton's Robotic Revenge (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Star Fox 64 3D",
        imgSrc: "assets/img/starfox64.jpg",
        altText: "Star Fox 64 3D",
        title: "Star Fox 64 3D (Europe) (En,Fr,De,Es,It) (Rev 3).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 3D Land",
        imgSrc: "assets/img/supermarioland.jpg",
        altText: "Super Mario 3D Land",
        title: "Super Mario 3D Land (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Maker for Nintendo 3DS",
        imgSrc: "assets/img/mariomaker.jpg",
        altText: "Super Mario Maker for Nintendo 3DS",
        title: "Super Mario Maker for Nintendo 3DS (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "SUPER SMASH BROS EUR.3ds",
        imgSrc: "assets/img/supersmashbros.jpg",
        altText: "SUPER SMASH BROS EUR.3ds",
        title: "SUPER SMASH BROS EUR.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Super Street Fighter IV - 3D Edition",
        imgSrc: "assets/img/streetfigther.jpg",
        altText: "Super Street Fighter IV - 3D Edition",
        title: "Super Street Fighter IV - 3D Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Teenage Mutant Ninja Turtles - Danger of the Ooze",
        imgSrc: "assets/img/turtles.jpg",
        altText: "Teenage Mutant Ninja Turtles - Danger of the Ooze",
        title: "Teenage Mutant Ninja Turtles - Danger of the Ooze (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Tekken 3D - Prime Edition",
        imgSrc: "assets/img/tekken3d.jpg",
        altText: "Tekken 3D - Prime Edition",
        title: "Tekken 3D - Prime Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Terraria",
        imgSrc: "assets/img/terraria.jpg",
        altText: "Terraria",
        title: "Terraria (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Tetris Ultimate",
        imgSrc: "assets/img/tetris.jpg",
        altText: "Tetris Ultimate",
        title: "Tetris Ultimate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "The Legend of Zelda - Ocarina of Time 3D",
        imgSrc: "assets/img/zeldaocarina.jpg",
        altText: "The Legend of Zelda - Ocarina of Time 3D",
        title: "The Legend of Zelda - Ocarina of Time 3D.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "The Legend of Zelda - Twilight Princess",
        imgSrc: "assets/img/zeldatw.jpg",
        altText: "The Legend of Zelda - Twilight Princess",
        title: "The Legend of Zelda - Twilight Princess (World) (En,Ja,Fr,De,Es,It) (eShop).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Tom Clancy's Ghost Recon - Shadow Wars",
        imgSrc: "assets/img/tomclancys.jpg",
        altText: "Tom Clancy's Ghost Recon - Shadow Wars",
        title: "Tom Clancy's Ghost Recon - Shadow Wars (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Transformers - Dark of the Moon - Stealth Force Edition",
        imgSrc: "assets/img/transformer.jpg",
        altText: "Transformers - Dark of the Moon - Stealth Force Edition",
        title: "Transformers - Dark of the Moon - Stealth Force Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Transformers Prime - The Game",
        imgSrc: "assets/img/transformerprime.jpg",
        altText: "Transformers Prime - The Game",
        title: "Transformers Prime - The Game (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Turbo - Super Stunt Squad",
        imgSrc: "assets/img/turbo.jpg",
        altText: "Turbo - Super Stunt Squad",
        title: "Turbo - Super Stunt Squad (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "WarioWare Gold",
        imgSrc: "assets/img/warioware.jpg",
        altText: "WarioWare Gold",
        title: "WarioWare Gold (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "WWE All Stars",
        imgSrc: "assets/img/wweallstar.jpg",
        altText: "WWE All Stars",
        title: "WWE All Stars (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Xenoblade Chronicles 3D",
        imgSrc: "assets/img/xenoblade.jpg",
        altText: "Xenoblade Chronicles 3D",
        title: "Xenoblade Chronicles 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Yo-Kai Watch.3ds",
        imgSrc: "assets/img/yokaiwatch.jpg",
        altText: "Yo-Kai Watch.3ds",
        title: "Yo-Kai Watch.3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Yoshi's New Island",
        imgSrc: "assets/img/yoshiisland.jpg",
        altText: "Yoshi's New Island",
        title: "Yoshi's New Island (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "ZELDA Majoras Maks.3ds",
        imgSrc: "assets/img/zeldamajoras.jpg",
        altText: "ZELDA Majoras Maks.3ds",
        title: "ZELDA Majoras Maks.3ds",
        downloadLink2: "https://cuty.io/IC0p5A" // Segundo enlace de descarga

    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
