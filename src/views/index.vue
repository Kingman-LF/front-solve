<template>
  <div class="index">
    <div class="icontent">
      <div class="ititle">
        <img :src="require('@/assets/images/largeData/toptitle2.png')" />
      </div>
      <div class="iearth">
        <img :src="require('@/assets/images/largeData/earth.gif')" />
      </div>
      <div class="ilist">
        <div class="iitem" style="bottom: 0rem; left: 50%;transform: translate(-50%)" @click="toqjgl">
          <img :src="require('@/assets/images/largeData/qjgl.png')" />
        </div>
        <div class="iitem" style="left: 25%; top: 50%;transform: translate(-50%,-50%)" @click="toffjc">
          <img :src="require('@/assets/images/largeData/ffjc.png')" />
        </div>
        <div class="iitem" style="left: 75%; top: 50%;;transform: translate(-50%,-50%)" @click="toyq">
          <img :src="require('@/assets/images/largeData/yyxt.png')" />
        </div>
        <div class="iitem" style="top: 0rem; right: 0rem" @click="totsjg">
          <img :src="require('@/assets/images/largeData/tsjg.png')" />
        </div>
        <div class="iitem" style="top: 0rem; left: 0rem" @click="pwd">
          <img :src="require('@/assets/images/largeData/pwd.png')" />
        </div>
        
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'index',
  methods:{
    toffjc(){
      window.location.href='http://10.21.3.35/#/page/cockpit?index=2';
    },
    toqjgl(){
      window.location.href='http://10.21.3.35/#/page/entity?index=1';
    },
    totsjg(){
      window.location.href='http://10.21.3.35/#/page/kitchen?index=3';
    },
    pwd(){
      this.$router.push({ path: 'home' })
    },
    toyq(){
      window.location.href='http://tsgz.istarshine.com/#/userLogin?token=fdee4086-d3ad-422b-9e59-6682df580f85&type=token&goback=false';
    }
  }
};
</script>
<style lang="scss" scoped>
.index {
  width: 320rem;
  height: 90rem;
  background-image: url("~@/assets/images/largeData/bg.gif");
  background-size: cover;
  overflow: hidden;
}
.icontent {
  width: 140rem;
  height: 80rem;
  margin: 0 auto;
  position: relative;
}
.ititle {
  width: 140rem;
  height: 13rem;
  text-align: center;
  position: relative;
  z-index: 99;
}
.iearth {
    // width: 60rem;
  height: 60rem;
  text-align: center;
  // margin-top: 20rem;
  //   transform:scale(1.49)
}
.ititle img {
  width: 112rem;
  
}
.iearth img {
  opacity: .6;
  width: 150rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
.ilist {
  width: 155rem;
  height: 55rem;
  position: relative;
  left: 50%;
  top: -60%;
  bottom: 5rem;
  transform: translate(-50%);
}
.iitem {
  position: absolute;
  cursor: pointer;
}
.iitem img {
  width: 18rem;
}
</style>
