<template>
    <div class="content">
        <div class="ding" @click="toHome"></div>
        <img :src="require('@/assets/images/4558c9caa1c6045dd9c70de66803f44.jpg')" alt="">
    </div>
</template>
<script>
export default {
    methods: {
         toHome(){
      console.log(123)
      this.$router.replace("/home")
    }
    },
}
</script>
<style lang="scss" scoped>
    .content{
        .ding{
            width: 60rem;
            height: 7rem;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            margin: auto;
            cursor: pointer;
        }
        img{
            width: 320rem;
            height: 90rem;
        }
    }
</style>