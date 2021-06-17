import { axios } from '@/utils/request'

/**
 * 舆情类别
 */
 export function sentimentType(parameter){
    return axios({
        url:'api/secreInfoTem/sentimentType',
        method:'post',
        data:parameter
    })
}
/**
 * 舆情区县分布接口
 */
 export function sentimentRegion(parameter){
    return axios({
        url:'api/secreInfoTem/sentimentRegion',
        method:'post',
        data:parameter
    })
}
/**
 * 舆情监测数接口
 */
 export function sentimentMonitor(parameter){
    return axios({
        url:'api/secreInfoTem/sentimentMonitor',
        method:'post',
        data:parameter
    })
}
/**
 * 负面舆情走势接口
 */
 export function negativeSentiment(parameter){
    return axios({
        url:'api/secreInfoTem/negativeSentiment',
        method:'post',
        data:parameter
    })
}
/**
 * 媒体分布接口
 */
 export function mediaDistribution(parameter){
    return axios({
        url:'api/secreInfoTem/mediaDistribution',
        method:'post',
        data:parameter
    })
}
/**
 * 点击图形进行穿透
 */
 export function sentimentDetails(parameter){
    return axios({
        url:'api/secreInfoTem/sentimentDetails',
        method:'post',
        data:parameter
    })
}
// 重点舆情专题
export function secreInfoArea(parameter){
    return axios({
        url:'api/secreInfoTem/secreInfoArea',
        method:'post',
        data:parameter
    })
}
