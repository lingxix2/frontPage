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

export function postJSON (url, input) {
    const promise = new Promise(function(resolve, reject){
      const xml = new XMLHttpRequest();
      xml.open("POST", url, true);
      xml.onreadystatechange = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
            resolve(this.response.data);
        } else {
          reject(new Error(this.statusText));
        }
      };
      xml.responseType = "json";
      xml.setRequestHeader("Content-Type", "application/json");
      xml.send(JSON.stringify(input));
  
    });
  
    return promise;
};


export function postFetch (url, params) {
    console.log(params)
    return (fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        mode: 'no-cors',
    }))
    .then(res => res.json())
    .then(res => res.data)
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