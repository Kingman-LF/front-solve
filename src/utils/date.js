export function getYearStartDate (){
    const date = new Date();
    return date.getFullYear()+"-01-01"
}
export function getNowDate(){
    const date = new Date();
    let Y = date.getFullYear();
    let M = date.getMonth()+1;
    let D = date.getDate()-1;
    M = M<10?"0"+M:M
    D = D<10?"0"+D:D
    return Y+'-'+M+'-'+D
}
export function getDate(date){
    let Y = date.getFullYear();
    let M = date.getMonth()+1;
    let D = date.getDate();
    M = M<10?"0"+M:M
    D = D<10?"0"+D:D
    return Y+'-'+M+'-'+D
}
