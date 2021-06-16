import { axios } from '@/utils/request'
// 省级/国家积案
export function nationalProvincialPendingCase(parameter){
    return axios({
        url:'dispute/nationalProvincialPendingCase',
        method:'post',
        data:parameter
    })
}
// 重点案件地区分布
export function keyCaseAreas(parameter){
    return axios({
        url:'dispute/keyCaseAreas',
        method:'post',
        data:parameter
    })
}
// 信访总量
export function petitionCount(parameter){
    return axios({
        url:'dispute/petitionCount',
        method:'post',
        data:parameter
    })
}
// 信访总量
export function petitionStatus(parameter){
    return axios({
        url:'dispute/petitionStatus',
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
