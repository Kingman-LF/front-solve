import { axios } from '@/utils/request'
// 舆情类别
export function nationalProvincialPendingCase(parameter){
    return axios({
        url:'/api/dispute/nationalProvincialPendingCase',
        method:'post',
        data:parameter
    })
}