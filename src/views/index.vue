<template>
  <div class="index">
    <div class="icontent">
      <div class="ititle">
        <img :src="require('@/assets/images/largeData/title.png')" />
      </div>
      <div class="iearth">
        <img :src="require('@/assets/images/largeData/earth.gif')" />
      </div>
      <div class="ilist">
        <div class="iitem" style="left: 62.5rem; bottom: -2rem" @click="toffjc">
          <img :src="require('@/assets/images/largeData/ffjc.png')" />
        </div>
        <div class="iitem" style="bottom: 7rem; left: 32.5rem" @click="toqjgl">
          <img :src="require('@/assets/images/largeData/qjgl.png')" />
        </div>
        <div class="iitem" style="bottom: 7rem; left: 92.5rem" @click="pwd">
          <img :src="require('@/assets/images/largeData/pwd.png')" />
        </div>
        <div class="iitem" style="bottom: 30rem; left: 17.5rem" @click="totsjg">
          <img :src="require('@/assets/images/largeData/tsjg.png')" />
        </div>
        <div class="iitem" style="bottom: 30rem; left: 105.5rem" @click="toyq">
          <img :src="require('@/assets/images/largeData/yyxt.png')" />
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
}
.icontent {
  width: 140rem;
  height: 80rem;
  padding: 5rem 0;

  margin: 0 auto;
  position: relative;
}
.ititle {
  width: 140rem;
  height: 13rem;
  text-align: center;
}
.iearth {
  //   width: 140rem;
  height: 57rem;
  text-align: center;
  //   transform:scale(1.49)
}
.ititle img {
  width: 112rem;
}
.iearth img {
  width: 70rem;
}
.ilist {
  width: 140rem;
  height: 50rem;
  position: absolute;
  bottom: 5rem;
}
.iitem {
  position: absolute;
  cursor: pointer;
}
.iitem img {
  width: 15rem;
}
</style>
