import { axios } from '@/utils/request'
//生产行业合格率接口
export function industryQualifiedRate(parameter){
    return axios({
        url:'risk/cpzljgccglxt/industryQualifiedRate',
        method:'post',
        data:parameter
    })
}