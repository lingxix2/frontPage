export function postAjax(url, input, fnSucc, fnFail, ) {
    let xml = new XMLHttpRequest() 
    xml.open('POST', url, true); 
    // xml.setRequestHeader("Accept","application/json"); 
    // xml.setRequestHeader("sign","db0e66dbc3a7ceb2eaf12c2891e3402d"); 
    xml.setRequestHeader("Content-Type","application/json;charset=UTF-8"); 
    xml.send(JSON.stringify(input));
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            fnSucc(JSON.parse(xml.responseText).data);
        } else {
            if (fnFail) fnFail();
        }
    }
    
}

export function getAjax(url, fnSucc, fnFail) {
    let xml = new XMLHttpRequest() 
    xml.open('GET', url, true); 
    // xml.setRequestHeader("Accept","application/json"); 
    // xml.setRequestHeader("sign","db0e66dbc3a7ceb2eaf12c2891e3402d"); 
    xml.setRequestHeader("Content-Type","application/json;charset=UTF-8"); 
    xml.send();
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            fnSucc(JSON.parse(xml.responseText).data);
        } else {
            if (fnFail) fnFail();
        }
    }

}
export default postAjax;