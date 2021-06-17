import { axios } from '@/utils/request'
//获取已交办任务列表
export function noAssignment(parameter){
    return axios({
        url:'/mainAssignment/noAssignment',
        method:'post',
        data:parameter
    })
}
// 交办
export function assignment(parameter){
    return axios({
        url:'/mainAssignment/assignment',
        method:'post',
        data:parameter
    })
}
// 获取投诉多问题
export function status(parameter){
    return axios({
        url:'api/complaintlist/xzzf/status',
        method:'post',
        data:parameter
    })
}
// 获取纠纷多问题
export function PageList(parameter){
    return axios({
        url:'api/dispute/PageList',
        method:'post',
        data:parameter
    })
}
