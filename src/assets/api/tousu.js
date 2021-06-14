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