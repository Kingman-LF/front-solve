<template>
    <div class="boxs myborder">
        <div class="ul">
            <div class="">
                <div class="type">投诉</div>
                <div class="category">投诉类别:质量</div>
                <div class="cont">内容:xxxxxxxxx....</div>
                <div class="date">时间:2021-6-2 12:00:00</div>
                <div class="agency">待办理</div>
            </div>
            <div class="">
                <div class="type">投诉</div>
                <div class="category">投诉类别:质量</div>
                <div class="cont">内容:xxxxxxxxx....</div>
                <div class="date">时间:2021-6-2 12:00:00</div>
                <div class="agency">待办理</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.boxs {
    height: 7.33rem;
    margin-top: 1.1rem;
    border-radius: 4px;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    .ul{
        height: 6.33rem;
        overflow: hidden;
        div{
            float: left;
            height: 5rem;
            line-height: 5rem;
            font-size: 2rem;
            font-family: PingFang SC;
            font-weight: bold;
            font-style: italic;
            color: #FFFFFF;
        }
        .type{
            width: 7rem;
        }
        .category{
            width: 16rem;
        }
        .cont{
            width: 20rem;
        }
        .date{
            width: 26rem;
        }
        .agency{
            font-size: 1.67rem;
            color: #FF9000;
        }
    }
    
}
</style>