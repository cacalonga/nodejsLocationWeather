var location = require("./location");
var weather = require("./weather");


var argv = require("yargs")
    .option('location', {
        demand: false,
        alias: 'l',
        type: 'string',
        description: 'Hava durumu lokasyonu'

    }).help('help')
    .argv;

if (typeof argv.l === 'string' && argv.l !== '') {
    weather(argv.l).then(function(response) {
        console.log(response);
    }, function(err) {
        console.log(err);
    });
    /*     weather(argv.l, function(currentweather) {
            console.log(currentweather);
        }) */
}
else {
    console.log('\nLokasyon bilgilerine ulaşılıyor...\n')
    location().then(function(response) {
        //location dan gelen callback object i içinde birçok attribute bulundurduğu için 
        //.city attribute ile weather functionun parametresine yolluyoruz
        return weather(response.city);
    }).then(function(response) {
        console.log(response);
    }).catch(function(err) {
        console.log(err);
    })


    /*     location(function(location) {
            if (!location) {
                console.log("Hiç bir lokasyon verisi bulunamadı");
            } else {
                weather(location.city, function(currentweather) {
                    console.log(currentweather);
                });
            }
        }) */
}
