import { axios } from '@/utils/request'
// 舆情统计（正面负面中性，媒体类别）
export function common(parameter){
    return axios({
        url:'/api/secreCommon/common',
        method:'post',
        data:parameter
    })
}
// 专题列表
export function subjectTree(parameter){
    return axios({
        url:'/api/secreSubject/subjectTree',
        method:'post',
        data:parameter
    })
}
// 舆情列表
export function yqInfo(parameter){
    return axios({
        url:'/api/secreInfo/yqInfo',
        method:'post',
        data:parameter
    })
}

