// Lista de juegos
const juegos = [
    {
        id: "Adventure Time - The Secret of the Nameless Kingdom",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/aventure.webp",
        altText: "Adventure Time - The Secret of the Nameless Kingdom",
        title: "Adventure Time - The Secret of the Nameless Kingdom (Europe) (En).3ds",
        downloadLink2: "https://nephobox.com/s/1otwFTP7gQ5gQqqHo7NImYQ" // Segundo enlace de descarga
    },       
    {
        id: "Amazing Spider-Man, The",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/spiderman.webp",
        altText: "Amazing Spider-Man, The",
        title: "Amazing Spider-Man, The (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1eNcLX7_146YpSubYq8J2Bg" // Segundo enlace de descarga

    },       
    {
        id: "Amazing Spider-Man 2, The",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/spiderman2.webp",
        altText: "Amazing Spider-Man 2, The",
        title: "Amazing Spider-Man 2, The (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1VJQQoqkWHryn2VBmufHycQ" // Segundo enlace de descarga        

    },       
    {
        id: "Angry Birds Trilogy",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/angry.webp",
        altText: "Angry Birds Trilogy",
        title: "Angry Birds Trilogy (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1QOoKSqBSerqQ5klN6tpMkA" // Segundo enlace de descarga

    },       
    {
        id: "Animal Crossing - New Leaf",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/animal.webp",
        altText: "Animal Crossing - New Leaf",
        title: "Animal Crossing - New Leaf (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1bhTaK565pGiUolk-AogHtg" // Segundo enlace de descarga
        
    },       
    {
        id: "Asphalt 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/asphalt.webp",
        altText: "Asphalt 3D",
        title: "Asphalt 3D (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/18AoKVmQtR37FBX5MeSt5nQ" // Segundo enlace de descarga

    },       
    {
        id: "Batman - Arkham Origins Blackgate",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/batman.webp",
        altText: "Batman - Arkham Origins Blackgate",
        title: "Batman - Arkham Origins Blackgate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/15pD882oJczZWCXfCgPpYVw" // Segundo enlace de descarga

    },       
    {
        id: "Captain America - Super Soldier",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/capitan.webp",
        altText: "Captain America - Super Soldier",
        title: "Captain America - Super Soldier (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1FTLm2SHg9Toa929GkFPYVg" // Segundo enlace de descarga
        
    },       
    {
        id: "Cars 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/cars2.webp",
        altText: "Cars 2",
        title: "Cars 2 (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1_bvIg2xZq1fMaXxV3ITH5w" // Segundo enlace de descarga

    },       
    {
        id: "Cartoon Network Battle Cradhers",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/cartoon.webp",
        altText: "Cartoon Network Battle Cradhers",
        title: "Cartoon Network Battle Cradhers (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1t7TXhvoKVo0JIxlaLDFIYQ" // Segundo enlace de descarga

    },       
    {
        id: "Detective Pikachu",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/detective.webp",
        altText: "Detective Pikachu",
        title: "Detective Pikachu (Europe) (En,Ja,Fr,De,Es,It,Zh).3ds",
        downloadLink2: "https://nephobox.com/s/1w8Eja70lP2vXR8jLUnTarQ" // Segundo enlace de descarga

    },       
    {
        id: "Disney Epic Mickey - Power of Illusion",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/epicmickey.webp",
        altText: "Disney Epic Mickey - Power of Illusion",
        title: "Disney Epic Mickey - Power of Illusion (USA) (En,Fr,Es,Pt).3ds",
        downloadLink2: "https://nephobox.com/s/1odabbVyAj6Lvy9swEMCblw" // Segundo enlace de descarga
        
    },       
    {
        id: "Disney Planes",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/planes.webp",
        altText: "Disney Planes",
        title: "Disney Planes (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1sRe_gVixVvNgkixGimDXFw" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Kong Country Returns 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/donkey.webp",
        altText: "Donkey Kong Country Returns 3D",
        title: "Donkey Kong Country Returns 3D (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1OgshwXHjaYxi_zveGZJnLQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Fusions",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/dbfusions.webp",
        altText: "Dragon Ball Fusions",
        title: "Dragon Ball Fusions (USA).3ds",
        downloadLink2: "https://nephobox.com/s/14N-16Al3LUj5bUYVlb9XvA" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Extreme Butoden",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/dbextreme.webp",
        altText: "Dragon Ball Z - Extreme Butoden",
        title: "Dragon Ball Z - Extreme Butoden.3ds",
        downloadLink2: "https://nephobox.com/s/1x5rfn9sEp107Md9pL41dRw" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Quest VIII - Journey of the Cursed King",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/dragonquest.webp",
        altText: "Dragon Quest VIII - Journey of the Cursed King",
        title: "Dragon Quest VIII - Journey of the Cursed King (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1T-93tq-9Q1eL0B0navl-Zw" // Segundo enlace de descarga

    },       
    {
        id: "Dream Trigger 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/dreamteam.webp",
        altText: "Dream Trigger 3D",
        title: "Dream Trigger 3D (Europe) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1Gyhg9McI7AMNpZeCyPWJaA" // Segundo enlace de descarga
        
    },       
    {
        id: "Driver - Renegade 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/driver.webp",
        altText: "Driver - Renegade 3D",
        title: "Driver - Renegade 3D (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da).3ds",
        downloadLink2: "https://nephobox.com/s/1iVZyJvj2zYQklMQtphbdBA" // Segundo enlace de descarga

    },       
    {
        id: "F1 2011",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/f1.webp",
        altText: "F1 2011",
        title: "F1 2011 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/180k62FWaybdWLO_wWfopEA" // Segundo enlace de descarga

    },       
    {
        id: "Farming Simulator 18",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/farming.webp",
        altText: "Farming Simulator 18",
        title: "Farming Simulator 18 (Europe) (En,Fr,De,Es,It,Pt,Pl,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/1J2JFUhOEt0ewjAiQXDmSKw" // Segundo enlace de descarga
        
    },       
    {
        id: "Fast & Furious - Showdown",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/fastyfurius.webp",
        altText: "Fast & Furious - Showdown",
        title: "Fast & Furious - Showdown (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1AaesDIAo_RONVeuGQ_Guzg" // Segundo enlace de descarga

    },       
    {
        id: "FIFA Soccer 12",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/fifa12.webp",
        altText: "FIFA Soccer 12.3ds",
        title: "FIFA Soccer 12 (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1-OfmmbjX0G4pQacsRwaX8Q" // Segundo enlace de descarga

    },       
    {
        id: "FIFA Soccer 13",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/fifa13.webp",
        altText: "FIFA Soccer 13",
        title: "FIFA Soccer 13 (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1XkLM1_Gy8IfAhv5FD43IEw" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 14 - Legacy Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/fifa14.webp",
        altText: "FIFA 14 - Legacy Edition",
        title: "FIFA 14 - Legacy Edition (Europe) (De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1-jzw3MC5SwOKboq_kDEAiw" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 15 - Legacy Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/fifa15.webp",
        altText: "FIFA 15 - Legacy Edition",
        title: "FIFA 15 - Legacy Edition (Europe) (De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1Ov1qHfV7dfUiN5M0H_rPHw" // Segundo enlace de descarga
        
    },       
    {
        id: "Fire Emblem - Awakening",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/fireawa.webp",
        altText: "Fire Emblem - Awakening",
        title: "Fire Emblem - Awakening (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1WyvdA2A2qyLal6gRMNRGcg" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem Echoes - Shadows of Valentia",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/fireechoes.webp",
        altText: "Fire Emblem Echoes - Shadows of Valentia",
        title: "Fire Emblem Echoes - Shadows of Valentia (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1hF8jWGuaBB-E2vAudcSV6A" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem Fates - Limited Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/firelimited.webp",
        altText: "Fire Emblem Fates - Limited Edition",
        title: "Fire Emblem Fates - Limited Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/12NwIKEkczgN8uOY9GF2yqg" // Segundo enlace de descarga
        
    },       
    {
        id: "Gravity Falls - Legend of the Gnome Gemulets",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/gravity.webp",
        altText: "Gravity Falls - Legend of the Gnome Gemulets",
        title: "Gravity Falls - Legend of the Gnome Gemulets (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1S_lME9KrZ6dcjXhMlbuBfA" // Segundo enlace de descarga

    },       
    {
        id: "Green Lantern - Rise of the Manhunters",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/green.webp",
        altText: "Green Lantern - Rise of the Manhunters",
        title: "Green Lantern - Rise of the Manhunters (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1wdgwV8D0ntMi27wxdPjESg" // Segundo enlace de descarga

    },       
    {
        id: "Hey! Pikmin",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/heypikmin.webp",
        altText: "Hey! Pikmin",
        title: "Hey! Pikmin (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1fwYI8ZGVMN3xyshJi1Nimg" // Segundo enlace de descarga

    },       
    {
        id: "Hot Wheels - World's Best Driver",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/hot.webp",
        altText: "Hot Wheels - World's Best Driver",
        title: "Hot Wheels - World's Best Driver (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1PmpwaJirvUcqRGUKLfGSJw" // Segundo enlace de descarga
        
    },       
    {
        id: "Hyrule Warriors Legends",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/hyrule.webp",
        altText: "Hyrule Warriors Legends",
        title: "Hyrule Warriors Legends (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1q7TEyIjoEwheiQHA_o_nGw" // Segundo enlace de descarga

    },       
    {
        id: "Kid Icarus - Uprising.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/kidicarus.webp",
        altText: "Kid Icarus - Uprising.3ds",
        title: "Kid Icarus - Uprising.3ds",
        downloadLink2: "https://nephobox.com/s/1aujpFGUyDfSJah7-K7KlPQ" // Segundo enlace de descarga
        

    },       
    {
        id: "Kingdom Hearts 3D - Dream Drop Distance",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/kingdoms.webp",
        altText: "Kingdom Hearts 3D - Dream Drop Distance",
        title: "Kingdom Hearts 3D - Dream Drop Distance (USA) (En,Fr).3ds",
        downloadLink2: "https://nephobox.com/s/1fSfLWXOhbjcdKtvV1eKb4g" // Segundo enlace de descarga

    },       
    {
        id: "Kirby - Planet Robobot",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/kirbyrobobot.webp",
        altText: "Kirby - Planet Robobot",
        title: "Kirby - Planet Robobot (Europe).3ds",
        downloadLink2: "https://nephobox.com/s/15VfBvcMjJIva59cnz0eXlg" // Segundo enlace de descarga
        
    },       
    {
        id: "Kirby - Triple Deluxe",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/kirbytriple.webp",
        altText: "Kirby - Triple Deluxe",
        title: "Kirby - Triple Deluxe (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1psX583IrIAcm1bWTSgmawQ" // Segundo enlace de descarga

    },       
    {
        id: "Kirby Battle Royale",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/kirbybattle.webp",
        altText: "Kirby Battle Royale",
        title: "Kirby Battle Royale (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/16sSAy85O6eE_520dAGJMAw" // Segundo enlace de descarga

    },       
    {
        id: "Kirby's Extra Epic Yarn",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/kirbyepic.webp",
        altText: "Kirby's Extra Epic Yarn",
        title: "Kirby's Extra Epic Yarn (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1YDIvcv1BKodoc0h8zz805A" // Segundo enlace de descarga
        
    },       
    {
        id: "Kung Fu Panda - Showdown of Legendary Legends",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/kunfupanda.webp",
        altText: "Kung Fu Panda - Showdown of Legendary Legends",
        title: "Kung Fu Panda - Showdown of Legendary Legends (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1Z9vZhOeTbckGEssKllNYHw" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - A Link Between Worlds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/zeldalinkbetween.webp",
        altText: "Legend of Zelda, The - A Link Between Worlds",
        title: "Legend of Zelda, The - A Link Between Worlds (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1GqV5lYsg6Fgv1refyp9VSA" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Tri Force Heroes",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/zeldatriforce.webp",
        altText: "Legend of Zelda, The - Tri Force Heroes",
        title: "Legend of Zelda, The - Tri Force Heroes (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1WfmS7hW9bkCGFfzOQovrsg" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Batman 3 - Beyond Gotham",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legobatman3.webp",
        altText: "LEGO Batman 3 - Beyond Gotham",
        title: "LEGO Batman 3 - Beyond Gotham (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "https://nephobox.com/s/16gwCTaCO_1kc-dbFCsaUlA" // Segundo enlace de descarga

    },       
    {
        id: "LEGO City Undercover - The Chase Begins",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legocity.webp",
        altText: "LEGO City Undercover - The Chase Begins",
        title: "LEGO City Undercover - The Chase Begins (Europe) (En,Fr,De,Es,It,Nl,Pt,Da,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/1iWzl6mp5_jjaBLg5q_q1dw" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Jurassic World.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legojurassic.webp",
        altText: "LEGO Jurassic World.3ds",
        title: "LEGO Jurassic World (Spain).3ds",
        downloadLink2: "https://nephobox.com/s/111eC1-bF_k4_Wrbb8yfPQQ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Legends of Chima - Laval's Journey",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legochima.webp",
        altText: "LEGO Legends of Chima - Laval's Journey",
        title: "LEGO Legends of Chima - Laval's Journey (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "https://nephobox.com/s/1_CCrsi8dXXzlriXtumPcqA" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Marvel Super Heroes - Universe in Peril",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legomarvel.webp",
        altText: "LEGO Marvel Super Heroes - Universe in Peril",
        title: "LEGO Marvel Super Heroes - Universe in Peril (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "https://nephobox.com/s/1LOHSrdelRsKb6emcYiCkeg" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Movie Videogame, The",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legomovie.webp",
        altText: "LEGO Movie Videogame, The",
        title: "LEGO Movie Videogame, The (Europe) (En,Fr,Es,It,Nl,Da).3ds",
        downloadLink2: "https://nephobox.com/s/182v295hYp3LbuzCj6_iECw" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Ninjago - Nindroids.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legoninjago.webp",
        altText: "LEGO Ninjago - Nindroids.3ds",
        title: "LEGO Ninjago - Nindroids (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "https://nephobox.com/s/1GHq415M51ETUaypMpdOGhw" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Ninjago - Shadow of Ronin.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legoninjagoshadow.webp",
        altText: "LEGO Ninjago - Shadow of Ronin.3ds",
        title: "LEGO Ninjago - Shadow of Ronin (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "https://nephobox.com/s/1mJzOIwN6WBiIH8lhIv7zPA" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Pirates of the Caribbean - The Video Game.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legopirates.webp",
        altText: "LEGO Pirates of the Caribbean - The Video Game",
        title: "LEGO Pirates of the Caribbean - The Video Game (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da).3ds",
        downloadLink2: "https://nephobox.com/s/11rhYY_TicNZiYtbCAto49A" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Star Wars - The Force Awakens",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legostarwars3.webp",
        altText: "LEGO Star Wars - The Force Awakens",
        title: "LEGO Star Wars - The Force Awakens (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "https://nephobox.com/s/16I789NV73BLzXoSmlq4ybQ" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Star Wars III - The Clone Wars",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/legostarwarsawa.webp",
        altText: "LEGO Star Wars III - The Clone Wars",
        title: "LEGO Star Wars III - The Clone Wars (Europe) (En,Fr,De,Es,It,Da).3ds",
        downloadLink2: "https://nephobox.com/s/1usToBPE2tkS8XJbESAN0Kg" // Segundo enlace de descarga

    },       
    {
        id: "Luigi's Mansion - Dark Moon",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/luigismansion2.webp",
        altText: "Luigi's Mansion - Dark Moon",
        title: "Luigi's Mansion - Dark Moon (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1xh9HCDSyQHXkiMOs8Pvwuw" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/maroyluigi.webp",
        altText: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey",
        title: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1EULOJvbxYFIJfQqLx2PK1A" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Luigi - Dream Team Bros",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/marioyluigi2.webp",
        altText: "Mario & Luigi - Dream Team Bros",
        title: "Mario & Luigi - Dream Team Bros. (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/1AgoS3NU0-KTG4oLPzeHfrA" // Segundo enlace de descarga
        
    },       
    {
        id: "Mario & Luigi - Paper Jam Bros",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/marioyluigi3.webp",
        altText: "Mario & Luigi - Paper Jam Bros",
        title: "Mario & Luigi - Paper Jam Bros. (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/1Zl4gP9S1jkO6z55_2-Z1vg" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Sonic at the London 2012 Olympic Games",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/marioysonic.webp",
        altText: "Mario & Sonic at the London 2012 Olympic Games",
        title: "Mario & Sonic at the London 2012 Olympic Games (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1GU9dWwGv9amunXBj9bZ0tw" // Segundo enlace de descarga

    },       
    {
        id: "Mario and Donkey Kong - Minis on the Move",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/marioydonkey.webp",
        altText: "Mario and Donkey Kong - Minis on the Move",
        title: "Mario and Donkey Kong - Minis on the Move (Europe) (En,Fr,De,Es,It) (eShop).3ds",
        downloadLink2: "https://nephobox.com/s/1ajzdGnZvzg99C4ClldzI4Q" // Segundo enlace de descarga
        
    },       
    {
        id: "Mario Kart 7.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/mariokart7.webp",
        altText: "Mario Kart 7.3ds",
        title: "Mario Kart 7.3ds",
        downloadLink2: "https://nephobox.com/s/18JFqFofF5mgzcUOO4Jbj_A" // Segundo enlace de descarga

    },       
    {
        id: "Mario Party - Island Tour",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/marioparty.webp",
        altText: "Mario Party - Island Tour",
        title: "Mario Party - Island Tour (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/1iRy7mlPo6yapYKliqFwpMg" // Segundo enlace de descarga

    },       
    {
        id: "Mario Tennis Open",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/mariotennis.webp",
        altText: "Mario Tennis Open",
        title: "Mario Tennis Open (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/1snRnv5ZBoH2EXlClYF0buw" // Segundo enlace de descarga

    },       
    {
        id: "Mega Man Legacy Collection.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/megaman.webp",
        altText: "Mega Man Legacy Collection.3ds",
        title: "Mega Man Legacy Collection (USA).3ds",
        downloadLink2: "https://nephobox.com/s/1Xg5IJRJTmc98lI-NxLJxUA" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid 3D - Snake Eater",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/metalgear3d.webp",
        altText: "Metal Gear Solid 3D - Snake Eater",
        title: "Metal Gear Solid 3D - Snake Eater (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1G2AoIAbGeRruTsotNfqeQw" // Segundo enlace de descarga
        
    },       
    {
        id: "Metroid - Samus Returns",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/metroidsamus.webp",
        altText: "Metroid - Samus Returns",
        title: "Metroid - Samus Returns (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1PfONJtV5w7kbY4UFksO3Kw" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Prime - Federation Force",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/metroidprime.webp",
        altText: "Metroid Prime - Federation Force",
        title: "Metroid Prime - Federation Force (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1qbp2A_rUs0YCo_VUwLxkhw" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft - New Nintendo 3DS Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/minecraft.webp",
        altText: "Minecraft - New Nintendo 3DS Edition",
        title: "Minecraft - New Nintendo 3DS Edition (USA).3ds",
        downloadLink2: "https://nephobox.com/s/1i06mm6Kmo8xgRxzMj1VLzg" // Segundo enlace de descarga
        
    },       
    {
        id: "Monster Hunter 4 Ultimate",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/monsterhunter4.webp",
        altText: "Monster Hunter 4 Ultimate",
        title: "Monster Hunter 4 Ultimate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1B3UumwmViwhTnsHYBs9xgg" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Powerful Shippuden",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/narutopower.webp",
        altText: "Naruto Powerful Shippuden",
        title: "Naruto Powerful Shippuden (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1XB9-B3QLlvfArvIVFwyHdg" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Shippuden 3D - The New Era",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/naruto3d.webp",
        altText: "Naruto Shippuden 3D - The New Era",
        title: "Naruto Shippuden 3D - The New Era (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1GxzLwTdLKa4RMTYy9vUJXg" // Segundo enlace de descarga
        
    },       
    {
        id: "NASCAR Unleashed.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/nascar.webp",
        altText: "NASCAR Unleashed.3ds",
        title: "NASCAR Unleashed (USA).3ds",
        downloadLink2: "https://nephobox.com/s/1PO-k5sV0i-Huu70z-aLRGw" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - The Run",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/nfstherun.webp",
        altText: "Need for Speed - The Run",
        title: "Need for Speed - The Run (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/19ijliLHx3-73peTp-CE2BA" // Segundo enlace de descarga

    },       
    {
        id: "New Super Mario Bros. 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/newsupermario2.webp",
        altText: "New Super Mario Bros. 2",
        title: "New Super Mario Bros. 2 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/1JGAq2TWGTpdhXZxu80z7OA" // Segundo enlace de descarga
        
    },       
    {
        id: "One Piece - Unlimited Cruise SP",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/opsp.webp",
        altText: "One Piece - Unlimited Cruise SP",
        title: "One Piece - Unlimited Cruise SP (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1ahyTdf8NcaoCjWxSWOAP_A" // Segundo enlace de descarga

    },       
    {
        id: "One Piece - Unlimited Cruise SP2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/opsp2.webp",
        altText: "One Piece - Unlimited Cruise SP2",
        title: "One Piece - Unlimited Cruise SP2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1H0H-mk42VAsJh3CF5HQgJA" // Segundo enlace de descarga

    },       
    {
        id: "One Piece - Unlimited World Red",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/opunlimited.webp",
        altText: "One Piece - Unlimited World Red",
        title: "One Piece - Unlimited World Red (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1Q0-qtf-iF69gu45fquqOGA" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man & Galaga Dimensions",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pacman.webp",
        altText: "Pac-Man & Galaga Dimensions",
        title: "Pac-Man & Galaga Dimensions (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1j-JHHRzdKiWEiWd--lcMxQ" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man and the Ghostly Adventures",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pacmanadventure.webp",
        altText: "Pac-Man and the Ghostly Adventures",
        title: "Pac-Man and the Ghostly Adventures (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1T0EEdWtGQ7KCx5uIfoKljw" // Segundo enlace de descarga
        
    },       
    {
        id: "Pac-Man and the Ghostly Adventures 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pacmanadventure2.webp",
        altText: "Pac-Man and the Ghostly Adventures 2",
        title: "Pac-Man and the Ghostly Adventures 2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1KEczYFGY69wRUiee-FPSqQ" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man Party 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pacmanparty.webp",
        altText: "Pac-Man Party 3D",
        title: "Pac-Man Party 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1z_cuqUhv6gTOVflSWkwsyg" // Segundo enlace de descarga

    },       
    {
        id: "Paper Mario - Sticker Star",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/papermario.webp",
        altText: "Paper Mario - Sticker Star",
        title: "Paper Mario - Sticker Star (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1Vx7JXFbJ9sNT_w5__o5fcw" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon Alpha Sapphire",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonalphasapphire.webp",
        altText: "Pokemon Alpha Sapphire",
        title: "Pokemon Alpha Sapphire (Europe) (En,Ja,Fr,De,Es,It,Ko) (Rev 2).3ds",
        downloadLink2: "https://nephobox.com/s/1nXdyFjqMUHNyT1rLbqKUrQ" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Moon",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonmoon.webp",
        altText: "Pokemon Moon",
        title: "Pokemon Moon (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "https://nephobox.com/s/1KBKcoFRcWzMTFdkARgMP3g" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Omega Ruby",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonomega.webp",
        altText: "Pokemon Omega Ruby",
        title: "Pokemon Omega Ruby (Europe) (En,Ja,Fr,De,Es,It,Ko) (Rev 2).3ds",
        downloadLink2: "https://nephobox.com/s/1Jtv6d9f__gpwR6Yl1jQeMw" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Rumble World",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonrumble.webp",
        altText: "Pokemon Rumble World",
        title: "Pokemon Rumble World (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1rKBf_KiDG-xOBNtpB5Az3w" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon Sun",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonsun.webp",
        altText: "Pokemon Sun",
        title: "Pokemon Sun (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "https://nephobox.com/s/19MCg6AfuNlEUnZFl-EvfgA" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Super Mystery Dungeon",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonmistery.webp",
        altText: "Pokemon Super Mystery Dungeon",
        title: "Pokemon Super Mystery Dungeon (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1FCctyieNZMR70gpV3IiOkg" // Segundo enlace de descarga
        

    },       
    {
        id: "Pokemon Ultra Moon",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonultramoon.webp",
        altText: "Pokemon Ultra Moon",
        title: "Pokemon Ultra Moon (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "https://nephobox.com/s/1jVse7qThFEhu-3FsMZjBkg" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Ultra Sun",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonultrasun.webp",
        altText: "Pokemon Ultra Sun",
        title: "Pokemon Ultra Sun (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "https://nephobox.com/s/13NfXHv0FtgwaDSp6oCOS9w" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon X",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemonx.webp",
        altText: "Pokemon X",
        title: "Pokemon X (USA) (En,Ja,Fr,De,Es,It,Ko).3ds",
        downloadLink2: "https://nephobox.com/s/1UY4tgumd5R_KHlA5fE2_lQ" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Y",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pokemony.webp",
        altText: "Pokemon Y",
        title: "Pokemon Y (Europe) (En,Ja,Fr,De,Es,It,Ko).3ds",
        downloadLink2: "https://nephobox.com/s/1tsmLtdwnXW6jBIs4A6KsYQ" // Segundo enlace de descarga

    },       
    {
        id: "Poochy & Yoshi's Woolly World",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/yoshi.webp",
        altText: "Poochy & Yoshi's Woolly World",
        title: "Poochy & Yoshi's Woolly World (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1cjlRlWzfEhoGT9ZXTcOLIg" // Segundo enlace de descarga
        
    },       
    {
        id: "Power Rangers - Megaforce",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/powerangers.webp",
        altText: "Power Rangers - Megaforce",
        title: "Power Rangers - Megaforce (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/11oq8LUkWv4tJPbOcV7ytTw" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 2011 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pes11.webp",
        altText: "Pro Evolution Soccer 2011 3D",
        title: "Pro Evolution Soccer 2011 3D (Europe) (Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1MG2pTuLjJYmEPCfp-eNMXg" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 2012 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pes12.webp",
        altText: "Pro Evolution Soccer 2012 3D",
        title: "Pro Evolution Soccer 2012 3D (Europe) (Es,It,Pt,El).3ds",
        downloadLink2: "https://nephobox.com/s/1IoFl5n8Vr0_7ULUQe3pDKA" // Segundo enlace de descarga
        
    },       
    {
        id: "Pro Evolution Soccer 2013 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/pes13.webp",
        altText: "Pro Evolution Soccer 2013 3D",
        title: "Pro Evolution Soccer 2013 3D (Europe) (Es,It,Pt,El).3ds",
        downloadLink2: "https://nephobox.com/s/13o9oZzeDF9Iph3tJzmqSXw" // Segundo enlace de descarga

    },       
    {
        id: "Project X Zone (Europe).3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/proyectxzone.webp",
        altText: "Project X Zone (Europe).3ds",
        title: "Project X Zone (Europe).3ds",
        downloadLink2: "https://nephobox.com/s/1ELv-XCb673RG5A3lC1yuDA" // Segundo enlace de descarga

    },       
    {
        id: "Project X Zone 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/proyectxzone2.webp",
        altText: "Project X Zone 2",
        title: "Project X Zone 2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/11y3XczhEtmtYp4VD72vW9w" // Segundo enlace de descarga
        
    },       
    {
        id: "Rabbids Rumble",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/rabbids.webp",
        altText: "Rabbids Rumble",
        title: "Rabbids Rumble (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da).3ds",
        downloadLink2: "https://nephobox.com/s/1mLC6W4z2LZ0jT3BtHFCp_g" // Segundo enlace de descarga

    },       
    {
        id: "Rayman 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/rayman3d.webp",
        altText: "Rayman 3D",
        title: "Rayman 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1rFnmIr9AlPK85v5WPtO8uw" // Segundo enlace de descarga

    },       
    {
        id: "Rayman Origins",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/raymanorigins.webp",
        altText: "Rayman Origins",
        title: "Rayman Origins (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "https://nephobox.com/s/1YoOIgXN13Aw6onjmSTvUJQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Regular Show - Mordecai and Rigby in 8-bit Land",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/regularshow.webp",
        altText: "Regular Show - Mordecai and Rigby in 8-bit Land",
        title: "Regular Show - Mordecai and Rigby in 8-bit Land (Europe).3ds",
        downloadLink2: "https://nephobox.com/s/1IfF5jWh3VUQW0mlm71A-Rw" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil - Revelations",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/revelations.webp",
        altText: "Resident Evil - Revelations",
        title: "Resident Evil - Revelations (USA) (En,Ja,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1z3_n7uJHqp2IHW6G5bNoRg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil - The Mercenaries 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/rethemercenaries.webp",
        altText: "Resident Evil - The Mercenaries 3D",
        title: "Resident Evil - The Mercenaries 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1wVuPc3u4seE-aQ-YIYFqqQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Ridge Racer 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/ridgeracer.webp",
        altText: "Ridge Racer 3D",
        title: "Ridge Racer 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1oMiH48HefacnrPvUyLeDOw" // Segundo enlace de descarga

    },       
    {
        id: "Shantae and the Pirate's Curse",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/shantae.webp",
        altText: "Shantae and the Pirate's Curse",
        title: "Shantae and the Pirate's Curse (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/15Zpj0_ZvMWLVdF9E8ZU5Xw" // Segundo enlace de descarga

    },       
    {
        id: "Shinobi",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/shinobi.webp",
        altText: "Shinobi",
        title: "Shinobi (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1rtGmkp7fEqWtJBFECHAWKA" // Segundo enlace de descarga

    },       
    {
        id: "Shovel Knight.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/shovel.webp",
        altText: "Shovel Knight.3ds",
        title: "Shovel Knight (USA).3ds",
        downloadLink2: "https://nephobox.com/s/1TWl18jhL_iVZ7LlOTVHxJw" // Segundo enlace de descarga

    },       
    {
        id: "Sonic & All-Stars Racing Transformed",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/sonicracing.webp",
        altText: "Sonic & All-Stars Racing Transformed",
        title: "Sonic & All-Stars Racing Transformed (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1bX7KMGbXknENV2vmn-xpiw" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Boom - Fire & Ice",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/sonicboom.webp",
        altText: "Sonic Boom - Fire & Ice",
        title: "Sonic Boom - Fire & Ice (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1g28uvjPGvZZb3d59XyT8BQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Boom - Shattered Crystal",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/sonicboom2.webp",
        altText: "Sonic Boom - Shattered Crystal",
        title: "Sonic Boom - Shattered Crystal (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1At4eDwlNlFwOvJY8g-f_UA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Generations",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/sonicgenerations.webp",
        altText: "Sonic Generations",
        title: "Sonic Generations (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1XxYPTh3gAR3aCEmx7-ppAg" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man - Edge of Time",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/spidermanedge.webp",
        altText: "Spider-Man - Edge of Time",
        title: "Spider-Man - Edge of Time (Europe) (En,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1o9dgxeiaxL-BbR4KZXKq3Q" // Segundo enlace de descarga

    },       
    {
        id: "SpongeBob SquarePants - Plankton's Robotic Revenge",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/bobesponja.webp",
        altText: "SpongeBob SquarePants - Plankton's Robotic Revenge",
        title: "SpongeBob SquarePants - Plankton's Robotic Revenge (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "https://nephobox.com/s/1rylFgXKb0DbcsAEkQTS5kw" // Segundo enlace de descarga

    },       
    {
        id: "Star Fox 64 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/starfox64.webp",
        altText: "Star Fox 64 3D",
        title: "Star Fox 64 3D (Europe) (En,Fr,De,Es,It) (Rev 3).3ds",
        downloadLink2: "https://nephobox.com/s/1OlT4_FPL54v1KfzuIuGBYg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 3D Land",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/supermarioland.webp",
        altText: "Super Mario 3D Land",
        title: "Super Mario 3D Land (USA) (En,Fr,Es).3ds",
        downloadLink2: "https://nephobox.com/s/1LwVQciqLRBhlqPlG1cZWIg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Maker for Nintendo 3DS",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/mariomaker.webp",
        altText: "Super Mario Maker for Nintendo 3DS",
        title: "Super Mario Maker for Nintendo 3DS (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/12hhKEv7GLxvLwal-PT0HpQ" // Segundo enlace de descarga
        
    },       
    {
        id: "SUPER SMASH BROS EUR.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/supersmashbros.webp",
        altText: "SUPER SMASH BROS EUR.3ds",
        title: "SUPER SMASH BROS EUR.3ds",
        downloadLink2: "https://nephobox.com/s/1xhnKVE6axaMASjNAoGH8Tw" // Segundo enlace de descarga

    },       
    {
        id: "Super Street Fighter IV - 3D Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/streetfigther.webp",
        altText: "Super Street Fighter IV - 3D Edition",
        title: "Super Street Fighter IV - 3D Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/13DV0NbWuI1mgrImQauz0JQ" // Segundo enlace de descarga

    },       
    {
        id: "Teenage Mutant Ninja Turtles - Danger of the Ooze",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/turtles.webp",
        altText: "Teenage Mutant Ninja Turtles - Danger of the Ooze",
        title: "Teenage Mutant Ninja Turtles - Danger of the Ooze (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "https://nephobox.com/s/1p-5mJpgWdu0mmgWobsdR-g" // Segundo enlace de descarga
        
    },       
    {
        id: "Tekken 3D - Prime Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/tekken3d.webp",
        altText: "Tekken 3D - Prime Edition",
        title: "Tekken 3D - Prime Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1sPF__wZgQ87QHWM2vpm02w" // Segundo enlace de descarga

    },       
    {
        id: "Terraria",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/terraria.webp",
        altText: "Terraria",
        title: "Terraria (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1hzWn9vkFT1LYiWcOgub29A" // Segundo enlace de descarga

    },       
    {
        id: "Tetris Ultimate",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/tetris.webp",
        altText: "Tetris Ultimate",
        title: "Tetris Ultimate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1G_ZciAFhXm35Gt3JJ1Ibbg" // Segundo enlace de descarga
        
    },       
    {
        id: "The Legend of Zelda - Ocarina of Time 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/zeldaocarina.webp",
        altText: "The Legend of Zelda - Ocarina of Time 3D",
        title: "The Legend of Zelda - Ocarina of Time 3D.3ds",
        downloadLink2: "https://nephobox.com/s/1_fbC8TRmf9XyRUcA4Tnqng" // Segundo enlace de descarga

    },       
    {
        id: "The Legend of Zelda - Twilight Princess",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/zeldatw.webp",
        altText: "The Legend of Zelda - Twilight Princess",
        title: "The Legend of Zelda - Twilight Princess (World) (En,Ja,Fr,De,Es,It) (eShop).3ds",
        downloadLink2: "https://nephobox.com/s/1sOEs9RH2oVPAxOJmj6ropQ" // Segundo enlace de descarga

    },       
    {
        id: "Tom Clancy's Ghost Recon - Shadow Wars",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/tomclancys.webp",
        altText: "Tom Clancy's Ghost Recon - Shadow Wars",
        title: "Tom Clancy's Ghost Recon - Shadow Wars (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1RQ8u3MbCpLcTrOy2VoNL7g" // Segundo enlace de descarga
        
    },       
    {
        id: "Transformers - Dark of the Moon - Stealth Force Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/transformer.webp",
        altText: "Transformers - Dark of the Moon - Stealth Force Edition",
        title: "Transformers - Dark of the Moon - Stealth Force Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1gRKl84m2_aH4VxJecSwYTg" // Segundo enlace de descarga

    },       
    {
        id: "Transformers Prime - The Game",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/transformerprime.webp",
        altText: "Transformers Prime - The Game",
        title: "Transformers Prime - The Game (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "https://nephobox.com/s/1OVgzuIwNM9HYkA-zusIlnw" // Segundo enlace de descarga

    },       
    {
        id: "Turbo - Super Stunt Squad",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/turbo.webp",
        altText: "Turbo - Super Stunt Squad",
        title: "Turbo - Super Stunt Squad (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1sttthHTNsLzBiEaL1PkIkA" // Segundo enlace de descarga
        
    },       
    {
        id: "WarioWare Gold",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/warioware.webp",
        altText: "WarioWare Gold",
        title: "WarioWare Gold (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1wty12cYWaPHtzKvbvpW4nw" // Segundo enlace de descarga

    },       
    {
        id: "WWE All Stars",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/wweallstar.webp",
        altText: "WWE All Stars",
        title: "WWE All Stars (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/11cw1s02Uf3eFWH_lrMcIZA" // Segundo enlace de descarga

    },       
    {
        id: "Xenoblade Chronicles 3D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/xenoblade.webp",
        altText: "Xenoblade Chronicles 3D",
        title: "Xenoblade Chronicles 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "https://nephobox.com/s/1qyqIfP7rUXqoFHrLQPvb1g" // Segundo enlace de descarga

    },       
    {
        id: "Yo-Kai Watch.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/yokaiwatch.webp",
        altText: "Yo-Kai Watch.3ds",
        title: "Yo-Kai Watch.3ds",
        downloadLink2: "https://nephobox.com/s/1HvV1MEt2DxO3YsFEbsVR3A" // Segundo enlace de descarga

    },       
    {
        id: "Yoshi's New Island",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/yoshiisland.webp",
        altText: "Yoshi's New Island",
        title: "Yoshi's New Island (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "https://nephobox.com/s/1mqQ2BQw0oYYGliYE5GPOag" // Segundo enlace de descarga
        
    },       
    {
        id: "ZELDA Majoras Maks.3ds",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/3ds/zeldamajoras.webp",
        altText: "ZELDA Majoras Maks.3ds",
        title: "ZELDA Majoras Maks.3ds",
        downloadLink2: "https://nephobox.com/s/1XT8gCu6qoPTNAq_5BBPHmQ" // Segundo enlace de descarga

    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
