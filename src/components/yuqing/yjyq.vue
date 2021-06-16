<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>预警舆情</p>
    </div>
    
    <div class="yj_list">
      <ul>
        <li v-for="(item,index) in listArr" :key="index">
          <p>{{ item.txt }}</p>
          <p>
            <span class="times">{{ item.times }}</span>
            <span class="luntan">{{ item.luntan }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "yjyq",
  data(){
    return{
      listArr:[
        {txt:'最近听说不少健身房跑路，昨天还收钱，今天就怎样怎样',times:'4小时前',luntan:'南太湖论坛'},
        {txt:'健身房跑路已是一大顽疾',times:'3小时前',luntan:'南太湖论坛'},
        {txt:'最近听说不少健身房跑路，昨天还收钱，今天就怎样怎样',times:'4小时前',luntan:'南太湖论坛'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.myborder{
  height: 40rem;
  border-radius:4px;
  .yj_list{
    height:29rem;
    margin:3.5rem 0 2.67rem 2.42rem;
    overflow: auto;
    ul{
      li{
        list-style:none;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        font-size: 1.5rem;
        margin-bottom:6.25rem;
        p{
          &:nth-child(1){
            //height:1.58rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            word-break: break-all;
          }
          &:nth-child(2){
             height: 1.5rem;
             float: right;
            padding-top:1.58rem;
            .luntan{
              padding-left:3.25rem;
            }
           }
        }
      }
    }
  }
}
</style>