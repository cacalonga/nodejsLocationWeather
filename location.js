var request = require("request");
var url = "https://ipinfo.io/";

module.exports = function () {
    return new Promise(function (resolve, reject) {
        request({
            url: url,
            json: true
        }, function (err, res, body) {
            if (err) {
                reject(err);
            }
            else {
                //console.log(res)
                resolve(body);
            }
        })
    })
}

/* module.exports = function (callback) {
    request({
        url: url,
        json: true
    },
        function(err, res, body) {
            if (err) {
                callback();
            }
            else {
                callback(body);
            }
        }
    )}; */