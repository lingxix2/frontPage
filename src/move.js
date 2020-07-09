// import React, {setState} from 'react';

export function getAttr(obj, attr) {
    console.log(obj.state[attr])
    return obj.state[attr];

}

export function moveAttr(obj, json, decay, func) {
    if (obj.timer) clearInterval(obj.timer);
    else obj.timer = null;
    
    
    obj.timer = setInterval(function (){
        for (let attr in json) {
            var fin = true;
            var currAttr = null;
            if (attr === "opacity") {
                currAttr = Math.round(parseFloat(getAttr(obj, attr)) * 100);
            } else {
                currAttr = parseInt(getAttr(obj, attr));
            }
            var speed = (json[attr] - currAttr) / decay;
            if (currAttr !== json[attr]) {
                fin = false;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                obj.setState({attr: currAttr + speed});
                // console.log(currAttr + speed);
            }
        }
        if (fin) {
            clearInterval(obj.timer);
            if (func) func();
        }
    }, 30);
}

export function constantMove(obj, json, eps, speed, func) {
    if (obj.timer) clearInterval(obj.timer);
    else obj.timer = null;
    obj.timer = setInterval(function () {
        for (let attr in json) {
            var fin = true;
            var currAttr = null;
            if (attr === "opacity") {
                currAttr = Math.round(parseFloat(getAttr(obj, attr)) * 100);
            } else {
                currAttr = parseInt(getAttr(obj, attr));
            }
            
            if (Math.abs(currAttr - json[attr]) > eps) {
                fin = false;
                if (attr === "opacity") {
                    obj.style.filter = 'alpha(opacity:' + currAttr + speed + ')';
                    obj.style.opacity = (currAttr + speed) / 100;
                } else {
                    obj.style[attr] = currAttr + speed + 'px';
                }
            }
        }
        if (fin) {
            clearInterval(obj.timer);
            if (func) func();
        }
       
    }, 30);
}



