import { axios } from '@/utils/request'
export function yqInfo(parameter){
    return axios({
        url:'/secreInfo/yqInfo',
        method:'post',
        data:parameter
    })
}
