import { axios } from '@/utils/request'
// 省级/国家积案
export function nationalProvincialPendingCase(parameter){
    return axios({
<<<<<<< HEAD
        url:'dispute/nationalProvincialPendingCase',
=======
        url:'api/dispute/nationalProvincialPendingCase',
>>>>>>> 16b7682e4ccdc33514b187693469b7b4b1639e17
        method:'post',
        data:parameter
    })
}
// 重点案件地区分布
export function keyCaseAreas(parameter){
    return axios({
<<<<<<< HEAD
        url:'dispute/keyCaseAreas',
=======
        url:'api/dispute/keyCaseAreas',
>>>>>>> 16b7682e4ccdc33514b187693469b7b4b1639e17
        method:'post',
        data:parameter
    })
}
// 信访总量
export function petitionCount(parameter){
    return axios({
<<<<<<< HEAD
        url:'dispute/petitionCount',
=======
        url:'api/dispute/petitionCount',
>>>>>>> 16b7682e4ccdc33514b187693469b7b4b1639e17
        method:'post',
        data:parameter
    })
}
// 信访总量
export function petitionStatus(parameter){
    return axios({
<<<<<<< HEAD
        url:'dispute/petitionStatus',
=======
        url:'api/dispute/petitionStatus',
>>>>>>> 16b7682e4ccdc33514b187693469b7b4b1639e17
        method:'post',
        data:parameter
    })
}
// 信访目的
export function petitionAppeal(parameter){
    return axios({
        url:'dispute/petitionAppeal',
        method:'post',
        data:parameter
    })
}
// 行政诉讼地区分布
export function litigationArea(parameter){
    return axios({
        url:'dispute/litigationArea',
        method:'post',
        data:parameter
    })
}
// 行政复议地区分布
export function reconsideration(parameter){
    return axios({
        url:'dispute/reconsideration',
        method:'post',
        data:parameter
    })
}
//区县信访量趋势
export function trendDistribution(parameter){
    return axios({
        url:'dispute/trendDistribution',
        method:'post',
        data:parameter
    })
}
