//import {serverDomain} from 'const/domain.js';

const xhrSuccessStatus = {
    200: 200,
    204: 204,
    205: 205,
    // file protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE9
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
};


export const STATUS_SUCCESS = 'success';

export default function Request(path,data,callback){
    return Ajax(path,'POST',data,callback)
}

export function Ajax(path, type, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var st = xhrSuccessStatus[xhr.status],
            json, err;
        if (st) {
            if (st === 200) {
                try {
                    json = JSON.parse(xhr.responseText);
                } catch (e) {
                    err = e;
                }
            }
        } else {
            err = new Error(xhr.status + ' : ' + xhr.statusText);
        }
        callback(err, json);
    };
    xhr.onerror = function () {
        callback(new Error());
    };
    xhr.open(type, path, true);
    try {
        xhr.setRequestHeader("Content-Type", "application/json");
        //xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    } catch (e) {
        callback(e);
    }
    return xhr;
}

