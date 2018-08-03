var request = require("request");


module.exports = function (location) {
    return new Promise(function (resolve, reject) {
        var encodedLoctaion = encodeURIComponent(location);
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodedLoctaion + ",tr&appid=2c01b7c2b50993354dbd8b98615d56ee&units=metric";
        //console.log(location);
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
        );
    })
}
/////----------------example-promise-2. js çalıştırmak için aşağıdaki kod satırlarını açın ve üstekileri kapatın

/* module.exports = function (location, callback) {

    var encodedLoctaion = encodeURIComponent(location);
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodedLoctaion + ",tr&appid=2c01b7c2b50993354dbd8b98615d56ee&units=metric";
    if (!location) {
        return callback("location bilgisi girilmedi");

    }

    request(
        {
            url: url,
            json: true
        },
        function (error, response, body) {
            if (error) {
                callback("Hava durumu alınamadı");
            }
            else {
                callback(body.name + ' sıcaklık : ' + body.main.temp);
            }
        }
    );
} */