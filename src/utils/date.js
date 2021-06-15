// 本年第一天
export function getYearStartDate (){
    const date = new Date();
    return date.getFullYear()+"-01-01"
}
// 当前时间的前一天
export function getNowDate(){
    const date = new Date();
    let Y = date.getFullYear();
    let M = date.getMonth()+1;
    let D = date.getDate()-1;
    M = M<10?"0"+M:M
    D = D<10?"0"+D:D
    return Y+'-'+M+'-'+D
}
// 当前时间
export function getDate(date){
    const dates = new Date(date);
    let Y = dates.getFullYear();
    let M = dates.getMonth()+1;
    let D = dates.getDate();
    M = M<10?"0"+M:M
    D = D<10?"0"+D:D
    return Y+'-'+M+'-'+D
}
