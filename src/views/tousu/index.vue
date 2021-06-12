<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">“破五多”综合治理平台</div>
    <div class="Etitle">
      <p>投诉调处</p>
    </div>
    <div class="con">
      <div class="left">
        <top-list></top-list>
        <div class="middle">
          <shop-type 
            @tkshow="tkshowCli"
            ref="meetingroomselect"
          ></shop-type>
          <serve-type @tkshow="tkshowCli" ref="meetingroomselect"></serve-type>
        </div>
        <bottom></bottom>
      </div>
      <div class="mid">
        <tousunum></tousunum>
        <div class="middle">
          <tousuwenti></tousuwenti>
          <jubaowenti></jubaowenti>
        </div>
        <tousulist></tousulist>
      </div>
      <div class="right">
        <div class="rightTop">
          <!-- <banliState></banliState> -->
          <chulichaoqi></chulichaoqi>
          <xiaobaowei></xiaobaowei>
        </div>
        <rightbom></rightbom>
      </div>
    </div>
    <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
      <div v-show="leabeShow">
        <template>
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            height="53rem"
            style="margin-top:1rem"
            @row-click="rowClick"
            @cell-mouse-enter="hoverSize">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="categoryName" label="登记编号"></el-table-column>
            <el-table-column prop="complainants" label="投诉方"></el-table-column>
            <el-table-column prop="content" label="内容"></el-table-column>
            <el-table-column prop="complaint" label="被投诉对象"></el-table-column>
            <el-table-column prop="consumptionType" label="消费类型(中类)"></el-table-column>
            <el-table-column prop="start" label="办结状态"></el-table-column>
            <el-table-column prop="feedbackContent" label="反馈内容"></el-table-column>
          </el-table>
        </template>
        <div class="block" style="margin-top:2rem">
            <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="currentPage" 
            :page-sizes="[10,20]" 
            :page-size="pageSize"
            background
            layout=" prev, pager, next" 
            :total="tableData.length">
            </el-pagination>
            <div class="zts">共{{tableData.length}}条</div>
        </div>
      </div>
      <div v-show="!leabeShow">
        121212121
      </div>
    </el-dialog>
  </div>
</template>
<script>
import TopList from "@/components/tousu/topList.vue";
import ShopType from "@/components/tousu/shopType.vue";
import ServeType from "@/components/tousu/serveType.vue";
import bottom from "@/components/tousu/bottom.vue";
import tousunum from "@/components/tousu/tousunum.vue";
import tousuwenti from "@/components/tousu/tousuwenti.vue";
import jubaowenti from "@/components/tousu/jubaowenti.vue";
import tousulist from "@/components/tousu/tousulist.vue";
import banliState from "@/components/tousu/banliState.vue";
import chulichaoqi from '@/components/tousu/chulichaoqi.vue'
import xiaobaowei from "@/components/tousu/xiaobaowei.vue";
import rightbom from "@/components/tousu/rightbom.vue"

export default {
  data() {
    return {
      dialogTableVisible: false,
      leabeShow: true,
      tableData: [
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
            {
              categoryName:3305230000000202105312269,
              complainants:"廖先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            },
          ],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 10, // 每页的数据条数
    }
  },
  methods: {
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.currentPage = 1;
        this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage = val;
    },
    tkshowCli(boll,data){
      // console.log(boll,data);
      this.dialogTableVisible=boll
      this.leabeShow=true
    },
    rowClick(row, column, event){
      console.log(row, column, event);
      this.leabeShow=false
    },
    hoverSize(row, column, cell, event){
      // console.log(row, column, cell, event);
      event.path[1].style={"color":'#00F0FF'}
      console.log(event.path[1]); 
    },
    toHome() {
      this.$router.replace("/home");
    },
  },
  components: {
    TopList,
    ShopType,
    ServeType,
    bottom,
    tousunum,
    tousuwenti,
    jubaowenti,
    tousulist,
    banliState,
    chulichaoqi,
    xiaobaowei,
    rightbom,
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 320rem;
  height: 90rem;
  background-image: url("~@/assets/images/bg4.gif");
  background-size: cover;
  position: relative;
  .con {
    @extend .flex-row;
    justify-content: space-around;
    .left {
      width: 117rem;
      @extend .flex-col;
      .middle {
        @extend .flex-row;
      }
    }
    .mid {
      width: 77.67rem;
      .middle {
        @extend .flex-row;
      }
    }
    .right {
      width: 117rem;
      .rightTop {
        @extend .flex-row;
      }
    }
  }
}
</style>
