import { axios } from '@/utils/request'
// 排序
export function sortKey(array,key){
 return array.sort(function(a,b){
  var x = a[key];
  var y = b[key];
  return ((y<x)?-1:(y>x)?1:0)
 })
}
// 商品类别投诉接收量
export function shopTypes(parameter){
    return axios({
        url:'/api/complaintlist/xzzf/commodityCategory',
        method:'post',
        data:parameter
    })
}
// 服务类别投诉接收量
export function serveTypes(parameter){
    return axios({
        url:'/api/complaintlist/xzzf/serviceCategory',
        method:'post',
        data:parameter
    })
}
// 被投诉对象TOP10
export function bottomleft(parameter){
    return axios({
        url:'api/complaintlist/xzzf/passiveComplainter',
        method:'post',
        data:parameter
    })
}
// 投诉人TOP10
export function bottomright(parameter){
    return axios({
        url:'api/complaintlist/xzzf/complainter',
        method:'post',
        data:parameter
    })
}
// 投诉问题类别
export function tousuwenti(parameter){
    return axios({
        url:'api/complaintlist/xzzf/complaints',
        method:'post',
        data:parameter
    })
}
// 举报问题类别
export function jubaowenti(parameter){
    return axios({
        url:'api/complaintlist/xzzf/reports',
        method:'post',
        data:parameter
    })
}
// 投诉与举报量走势
export function tousunum(parameter){
    return axios({
        url:'api/complaintlist/xzzf/trend',
        method:'post',
        data:parameter
    })
}
// 投诉率统计
export function complaintRate(parameter){
    return axios({
        url:'api/complaintlist/xzzf/complaintRate',
        method:'post',
        data:parameter
    })
}
// 临近超期未办理
export function overdue(parameter){
    return axios({
        url:'api/complaintlist/xzzf/overdue',
        method:'post',
        data:parameter
    })
}
// 处置超期区县分布
export function overdueArea(parameter){
    return axios({
        url:'api/complaintlist/xzzf/overdueArea',
        method:'post',
        data:parameter
    })
}
// 消保委投诉类型统计接口
export function cpcTypeStatistics(parameter){
    return axios({
        url:'api/consumption/qgxfz/cpcTypeStatistics',
        method:'post',
        data:parameter
    })
}
// 被举报对象TOP10接口
export function passiveReporter(parameter){
    return axios({
        url:'api/complaintlist/xzzf/passiveReporter',
        method:'post',
        data:parameter
    })
}
// 举报人TOP10接口
export function reporter(parameter){
    return axios({
        url:'api/complaintlist/xzzf/reporter',
        method:'post',
        data:parameter
    })
}
// 列表
export function list(parameter){
    return axios({
        url:'api/complaintlist/xzzf/list',
        method:'post',
        data:parameter
    })
}


