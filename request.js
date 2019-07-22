// Simple for javascript to make request data from server or local via html request


function makeRequest(method, url,callback) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject('Unable to complete ' + method + ' request for: ' + url);
            }
        };
        xhr.onerror = function () {
            reject('Unable to complete ' + method + ' request for: ' + url);
        };
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
              callback(xhr.response);
            }
        };
        xhr.send();
    });
}
