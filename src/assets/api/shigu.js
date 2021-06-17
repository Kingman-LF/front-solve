import { axios } from '@/utils/request'
// 风险单位地区分布
export function unitArea(parameter){
    return axios({
        url:'/api/accident/risk/unitArea',
        method:'post',
        data:parameter
    })
}
// 检查统计
export function inspectionStatistics(parameter){
    return axios({
        url:'/api/accident/tzsbzhglpt/inspectionStatistics',
        method:'post',
        data:parameter
    })
}
// 预警设备地区分布
export function equipmentArea(parameter){
    return axios({
        url:'/api/accident/tzsbzhglpt/area/equipmentArea',
        method:'post',
        data:parameter
    })
}