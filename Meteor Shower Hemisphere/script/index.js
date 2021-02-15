const meteor_shower = [
    { name: 'Alfa Centaurídeos', declination: -59},
    { name: 'Gama Normídeos', declination: -50},
    { name: 'Pi Pupídeos', declination: -45},
    { name: 'Líridas', declination: 34},
    { name: 'Eta Aquáridas', declination: -1},
    { name: 'Eta Líridas', declination: 44},
    { name: 'Bootídeos de Junho', declination: 48},
    { name: 'Alfa Capricornídeos', declination: -10},
    { name: 'Delta Aquáridas do Sul', declination:  -16},
    { name: 'Piscis Austrinídeos', declination: -30},
    { name: 'Perseidas', declination: 58}
]

function meteor_hemisphere () {

    const meteor_shower_north = meteor_shower.filter(
        (meteor) => meteor.declination >= 0
    )
    
    const meteor_shower_south = meteor_shower.filter(
        (meteor) => meteor.declination < 0
    )

    const print_meteor_shower = function (meteor) {
        console.log(meteor.name)
    }

    console.log("\nMeteor showers in the northern hemisphere:")
    meteor_shower_north.forEach(print_meteor_shower)

    console.log("\nMeteor showers in the southern hemisphere:")
    meteor_shower_south.forEach(print_meteor_shower)
}

meteor_hemisphere()