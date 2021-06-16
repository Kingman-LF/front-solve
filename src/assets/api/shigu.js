import { axios } from '@/utils/request'
// 商品类别投诉接收量
export function unitArea(parameter){
    return axios({
        url:'/api/accident/risk/unitArea',
        method:'post',
        data:parameter
    })
}