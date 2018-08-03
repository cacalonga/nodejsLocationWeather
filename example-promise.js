var request = require("request");

function getWeather(location) {
    return new Promise(function (resolve, reject) {
        var encodedLoctaion = encodeURIComponent(location);
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodedLoctaion + ",tr&appid=2c01b7c2b50993354dbd8b98615d56ee&units=metric";
        if (!location) {
            return reject("location bilgisi girilmedi");
    
        }
        request(
            {
                url: url,
                json: true
            },
            function (error, response, body) {
                if (error) {
                    reject("Hava durumu alınamadı");
                }
                else {
                    resolve(body.name + ' sıcaklık : ' + body.main.temp);
                }
            }
        )
    })
}
getWeather('antalya').then(function (currentweather) {
    console.log(currentweather);
}, function (error) {
    console.log(error)
});

/*
function doWorkPromise(data) {
    return new Promise(function (resolve, reject) {
        resolve({
            basarili: 'Herşey başarılı',
            callbackdata: data
        });
        reject({
            error: "Hatalı işlem"
        });
    })
}
 doWorkPromise('verilen parametre')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    }); */