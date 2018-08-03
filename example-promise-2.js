var location = require("./location");
var weather = require("./weather");

function doWork(fail) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof fail === 'boolean' && fail === true) {
                reject('hata ! ! ! ');
            }
            else {
                resolve('Herşey Başarılı !');
            }
        }, 1500)
    })
}

/* 
doWork(false).then(function (response) {
    console.log(response);
    return doWork(false);
}).then(function (response) {
    console.log(response);
    return doWork(true);
}).then(function (response) {
    console.log(response);
    console.log("Hepsi tamam...")
}).catch(function (error) {
    console.log(error);
}) */

function getLocation() {
    return new Promise(function (resolve, reject) {
        location(function (response) {
            if (typeof response.city === 'string' && response.city !== '') {
                resolve(response.city);
            }
            else {
                reject('Lokasyon Bilgisine ulaşılamadı');
            }
        })
    })
}
function getWeather(location) {
    return new Promise(function (resolve, reject) {
        weather(location, function (currentweather) {
            if (currentweather != '') {
                resolve(currentweather)
            }
            else {
                reject('Hava Durumu Bilgilerine Ulaşılamadı..')
            }
        })
    })

}


getLocation().then(function (response) {
    return getWeather(response);
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
})
