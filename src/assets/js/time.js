const padding = (t) => t >= 10 ? ''+t : '0'+t;

export function getFormatedTime(timeStr) {
    
    // console.log(typeof timeStr)
    let t = new Date(timeStr)
    return padding(t.getFullYear()) + '-' + padding(t.getMonth()) + '-' + padding(t.getDate()) + ' ' 
        + padding(t.getHours()) + ':' + padding(t.getMinutes());

}

export default getFormatedTime;