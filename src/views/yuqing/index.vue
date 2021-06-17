<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">“破五多”综合治理平台</div>
    <div class="Etitle">
      <p>舆情监测</p>
    </div>
    <el-row :gutter="12">
      <el-col :span="9">
        <el-row :gutter="12">
          <!--  舆情类别-->
          <el-col :span="16">
            <leibie @typeTitle="typeTitle"></leibie>
          </el-col>
          <!--  舆情检测数-->
          <el-col :span="8">
            <jcs @jcsTitle="jcsTitle"></jcs>
          </el-col>
        </el-row>
      </el-col>
      <!--负面舆情走势-->
      <el-col :span="6">
        <el-row :gutter="16">
          <el-col :span="24">
            <yqxqfb></yqxqfb>
          </el-col>
        </el-row>
      </el-col>
      <!--重点舆情专题-->
      <el-col :span="9">
        <el-row :gutter="12">
          <el-col :span="24">
            <zdqyzt></zdqyzt>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="9">
        <el-row :gutter="12">
          <!--  舆情区县分布-->
          <el-col :span="16">
            <xqfb @xqfbTitle="xqfbTitle"></xqfb>
          </el-col>
          <!--  预警舆情-->
          <el-col :span="8">
            <yjyq></yjyq>
          </el-col>
        </el-row>
      </el-col>
      <!--负面舆情走势-->
      <el-col :span="6">
        <el-row :gutter="12">
          <!--     媒体分布       -->
          <el-col :span="24">
            <mtfb></mtfb>
          </el-col>
          <!--      信息范围分布      -->
<!--          <el-col :span="12">-->
<!--            <infoFb></infoFb>-->
<!--          </el-col>-->
        </el-row>
      </el-col>
      <!--事件库-->
      <el-col :span="9">
        <el-row :gutter="12">
          <el-col :span="24">
            <shijianku></shijianku>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 弹框 -->
    <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
      <!-- :data="list" -->
      <template>
        <el-table
          height="53rem"
          highlight-current-row
          style="margin-top: 1rem"
          @row-click="toDetail"
        >
          <el-table-column
            type="index"
            label="序号"
            show-overflow-tooltip
            width="100"
          ></el-table-column>
          <el-table-column
            v-for="item in headerList"
            :key="item.id"
            :prop="item.keyWord"
            :label="item.text"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              {{ list[scope.$index][item.keyWord] }}
            </template>
          </el-table-column>
          <!--
            <el-table-column prop="tsRegister" label="登记编号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsProvider" label="投诉方" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsContent" label="内容" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsType" label="类型" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsDefendantName" label="被投诉对象" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsConMedType" label="消费类型(中类)" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsHandlingStatus" label="办结状态" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsFeedContent" label="反馈内容" show-overflow-tooltip></el-table-column> -->
        </el-table>
      </template>
      <div class="block" style="margin-top: 2rem">
        <el-pagination
          align="center"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20]"
          :page-size="limit"
          background
          layout=" prev, pager, next"
          :total="total"
        >
        </el-pagination>
        <div class="zts">共{{ total }}条</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import leibie from "../../components/yuqing/leibie.vue";
import jcs from "../../components/yuqing/jcs.vue";
import yqxqfb from "../../components/yuqing/fmyqzs.vue";
import zdqyzt from "../../components/yuqing/zdqyzt.vue";
import xqfb from "../../components/yuqing/xqfb.vue";
import yjyq from "../../components/yuqing/yjyq.vue";
import mtfb from "../../components/yuqing/meitifenbu.vue";
import infoFb from "../../components/yuqing/infoFb";
import shijianku from "../../components/yuqing/shijianku";

import { sentimentDetails } from "@/assets/api/yuqing";
export default {
  components: {
    leibie,
    jcs,
    yqxqfb,
    zdqyzt,
    xqfb,
    yjyq,
    mtfb,
    infoFb,
    shijianku,
  },
  data() {
    return {
      list: [],
      page: 1,
      limit: 20,
      total: 0,
      currentPage: 1,
      headerList: [],
      dialogTableVisible: false,
    };
  },
  created() {
    this.headerList = [
      {
        text: "倾向性",
        keyWord: "orientation",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "电视频道",
        keyWord: "channel",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "电视栏目",
        keyWord: "column",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "关键词",
        keyWord: "keyWord",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "信息URL",
        keyWord: "url",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "内容id",
        keyWord: "kvUuid",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "视频URL",
        keyWord: "vedioUrl",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "专题ID",
        keyWord: "keyWordId",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "作者",
        keyWord: "author",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "是否图片识别信息",
        keyWord: "isOcr",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "是否已读信息",
        keyWord: "isread",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "是否加入我的关注",
        keyWord: "ismyattention",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "是否已经反馈",
        keyWord: "isfeedback",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "计算相似信息值",
        keyWord: "simhash",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "微博作者头像地址",
        keyWord: "wbAuthPic",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "发布时间",
        keyWord: "ctime",
        id: Math.random() + new Date().valueOf() + "",
      },
      {
        text: "总数",
        keyWord: "totalrows",
        id: Math.random() + new Date().valueOf() + "",
      },
    ];
  },
  methods: {
    // 头部点击事件--start
    typeTitle(e) {
      //舆情类别
      let obj = { ...e, page: this.page + "", limit: this.limit + "" };
      this.dialogTableVisible = true;
      this.sentimentDetails(obj);
    },
    jcsTitle() {
      //舆情检测数
      this.dialogTableVisible = true;
    },
    xqfbTitle() {
      //舆情区县分布
      this.dialogTableVisible = true;
    },
    // 头部点击事件--end
    toHome() {
      this.$router.replace("/home");
    },
    // 舆情类别详情
    sentimentDetails(par) {
      sentimentDetails(par).then((res) => {
        if (res.code === 200) {
          console.log(res.data);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    // 点击页标事件
    handleCurrentChange(e) {
      console.log(e);
    },
    // 表格的渗透
    toDetail() {},
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
}
</style>
