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
      <div class="one" v-show="leabeShow">
        <template>
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            height="53rem"
            style="margin-top:1rem"
            @row-click="rowClick"
            >
            <el-table-column prop="id" label="序号"></el-table-column>
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
      <div class="two" v-show="!leabeShow">
        <div class="coun">
          <div class="tabs">
            <div
            v-for="(item, index) in twoList"
            :key="item.id"
            :class="twoTab === index ? 'clie' : ''"
            @click="clickF(item, index)">{{item.text}}</div>
          </div>
        </div>
        <div class="labse">
          <!-- 登记记录 -->
          <div class="lab_dis" v-show="twoTab===0">
            <div class="ify">
              <div class="tatl">系统信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">职能：</div>
                  <div class="conts">{{twoList[0].data.xtxx.zn}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记编号：</div>
                  <div class="conts">{{twoList[0].data.xtxx.djbh}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记时间：</div>
                  <div class="conts">{{twoList[0].data.xtxx.djsj}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">信息来源：</div>
                  <div class="conts">{{twoList[0].data.xtxx.xxly}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">接收方式：</div>
                  <div class="conts">{{twoList[0].data.xtxx.jsfs}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记部门：</div>
                  <div class="conts">{{twoList[0].data.xtxx.djbm}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">受理登记人：</div>
                  <div class="conts">{{twoList[0].data.xtxx.sldjr}}</div>
                </div>
              </div>
            </div>
            <div class="ify">
              <div class="tatl">投诉方信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">姓名/名称：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.nume}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">联系电话：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.lxdh}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">通讯地址：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.txdz}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">事发地：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.sfd}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">事发时间：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.sfdate}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">性别：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.sex}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">投诉方身份：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.tsfsf}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">投诉主体：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.tszt}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">关键字：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.gjz}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费方式：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.xffs}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否预付式消费：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.sfyfxx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型中类：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.xflxzx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型小类：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.xflxxx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">投诉内容大类：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.tsnrdl}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">投诉内容中类：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.tsnrzl}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">投诉内容小类：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.tsnrxl}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否长三角地区：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.sfcsjdq}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">残疾人标志：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.cjrbz}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">具体内容：</div>
                  <div class="conts">{{twoList[0].data.tsfxx.jtnr}}</div>
                </div>
              </div>
            </div>
            <div class="ify">
              <div class="tatl">被投诉方信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">涉及主体名称：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.ztname}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">所在行业类别：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.szhylb}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">联系电话：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.lxdh}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">统一社会信用代码：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.tyshxydm}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">涉及主体地址：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.sjztdz}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">品牌：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.pp}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">商品名称：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.spmc}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">型号规格：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.xhgg}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">涉及金额：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.sjje}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">数量：{{twoList[0].data.btsfxx.sl}}</div>
                  <div class="conts">单位：{{twoList[0].data.btsfxx.dw}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">商品进口标致：</div>
                  <div class="conts">{{twoList[0].data.btsfxx.spjkbz}}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 审批记录 -->
          <div class="lab_dis" v-show="twoTab===1">
            <table>
              <thead>
                <tr>
                  <th>序号</th>
                  <th>送审类型</th>
                  <th>送审部门</th>
                  <th>送审人员</th>
                  <th>送审时间</th>
                  <th>审批部门</th>
                  <th>审批人员</th>
                  <th>审批时间</th>
                  <th>送审附言</th>
                  <th>审核附言</th>
                  <th>审核状态</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in twoList[1].data"
                      :key="item.id">
                  <td>{{item.id}}</td>
                  <td>{{item.sslx}}</td>
                  <td>{{item.ssbm}}</td>
                  <td>{{item.sssj}}</td>
                  <td>{{item.spbm}}</td>
                  <td>{{item.spry}}</td>
                  <td>{{item.spsj}}</td>
                  <td>{{item.ssfy}}</td>
                  <td>{{item.shfy}}</td>
                  <td>{{item.shzt}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 流转记录 -->
          <div class="lab_dis" v-show="twoTab===2">
            <div class="ify">
              <div class="tatl">当前记录信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">受理编号：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.slbh}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">信息类型：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.xxlx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">当前状态：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.dqzt}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">受理登记人：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.sldjr}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">催问次数：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.cwcs}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记日期：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.djrq}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">办理期限：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.blqx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否重大案件：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.sfzdaj}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记部门：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.djbm}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">所在部门：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.szbm}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">转向部门：</div>
                  <div class="conts">{{twoList[2].data.dqjlxx.zxbm}}</div>
                </div>
              </div>
            </div>
            <div class="ify">
              <div class="tatl">流转记录情况</div>
              <div class="xx">
                <table>
                  <thead>
                    <tr>
                      <th>序号</th>
                      <th>流转时间</th>
                      <th>转出部门</th>
                      <th>接受部门</th>
                      <th>流转类型</th>
                      <th>流转人</th>
                      <td>联系电话</td>
                      <th>附言</th>
                      <th>返回原因</th>
                      <th>撤诉人姓名</th>
                      <th>撤诉人联系电话</th>
                      <th>督办解释</th>
                      <th>解释人</th>
                      <th>解释部门</th>
                      <th>解释时间</th>
                      <th>解释内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in twoList[2].data.lzjlqk"
                      :key="item.id">
                      <td>{{item.id}}</td>
                      <td>{{item.lzsj}}</td>
                      <td>{{item.zcbm}}</td>
                      <td>{{item.jsbm}}</td>
                      <td>{{item.lzlx}}</td>
                      <td>{{item.lzr}}</td>
                      <td>{{item.lxdh}}</td>
                      <td>{{item.fy}}</td>
                      <td>{{item.fhyy}}</td>
                      <td>{{item.csrlxdh}}</td>
                      <td>{{item.dbjs}}</td>
                      <td>{{item.jsr}}</td>
                      <td>{{item.jsbm}}</td>
                      <td>{{item.jssj}}</td>
                      <td>{{item.jsnr}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 投诉 调解反馈 -->
          <div class="lab_dis" v-show="twoTab===3 && twoList[twoTab].text==='调解反馈'">
            <div class="ify">
              <div class="tatl">反馈信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">办理类型：</div>
                  <div class="conts">{{twoList[3].data.fkxx.bllx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解人：</div>
                  <div class="conts">{{twoList[3].data.fkxx.tjr}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解人联系电话：</div>
                  <div class="conts">{{twoList[3].data.fkxx.tjrlxdh}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解结束日期：</div>
                  <div class="conts">{{twoList[3].data.fkxx.tjjsrq}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解信息：</div>
                  <div class="conts">{{twoList[3].data.fkxx.tjxx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">行政调解书文号：</div>
                  <div class="conts">{{twoList[3].data.fkxx.xzjtswh}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">案值：</div>
                  <div class="conts">{{twoList[3].data.fkxx.az}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">争议金额：</div>
                  <div class="conts">{{twoList[3].data.fkxx.jyje}} 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">挽回经济损失：</div>
                  <div class="conts">{{twoList[3].data.fkxx.whjjss}} 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">加倍赔偿金额：</div>
                  <div class="conts">{{twoList[3].data.fkxx.jbpcj}} 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">精神赔偿金额：</div>
                  <div class="conts">{{twoList[3].data.fkxx.jspcje}} 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">案件涉及类型：</div>
                  <div class="conts">{{twoList[3].data.fkxx.ansjlx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否进行行政处罚：</div>
                  <div class="conts">{{twoList[3].data.fkxx.sfjxxzcf}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">反馈登记人：</div>
                  <div class="conts">{{twoList[3].data.fkxx.fkdjr}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">反馈登记人部门：</div>
                  <div class="conts">{{twoList[3].data.fkxx.fxdjrbm}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">反馈时间：</div>
                  <div class="conts">{{twoList[3].data.fkxx.fksj}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">告知方式：</div>
                  <div class="conts">{{twoList[3].data.fkxx.gzfs}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否出现场：</div>
                  <div class="conts">{{twoList[3].data.fkxx.sfcxc}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">回复内容：</div>
                  <div class="conts">{{twoList[3].data.fkxx.hfnr}}</div>
                </div>
              </div>
            </div>
            <div class="ify">
              <div class="tatl">投诉信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">被诉方：</div>
                  <div class="conts">{{twoList[3].data.tsxx.bsf}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">侵权人类型：</div>
                  <div class="conts">{{twoList[3].data.tsxx.qqrlx}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">统一社会信用代码：</div>
                  <div class="conts">{{twoList[3].data.tsxx.tyshxydm}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">联系电话：</div>
                  <div class="conts">{{twoList[3].data.tsxx.lxdh}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">地址：</div>
                  <div class="conts">{{twoList[3].data.tsxx.dz}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型中类：</div>
                  <div class="conts">{{twoList[3].data.tsxx.xflxzl}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型小类：</div>
                  <div class="conts">{{twoList[3].data.tsxx.xflxxl}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">消费类型品种：</div>
                  <div class="conts">{{twoList[3].data.tsxx.xflxpz}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质大类：</div>
                  <div class="conts">{{twoList[3].data.tsxx.xzdl}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质中类：</div>
                  <div class="conts">{{twoList[3].data.tsxx.xzzl}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质小类：</div>
                  <div class="conts">{{twoList[3].data.tsxx.xzxl}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">商品名称：</div>
                  <div class="conts">{{twoList[3].data.tsxx.spmc}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">品牌名称：</div>
                  <div class="conts">{{twoList[3].data.tsxx.ppmc}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">类型规格：</div>
                  <div class="conts">{{twoList[3].data.tsxx.lxgg}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">销售地所在行政区别：</div>
                  <div class="conts">{{twoList[3].data.tsxx.xsdszxzqb}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">销售地：</div>
                  <div class="conts">{{twoList[3].data.tsxx.xsd}}</div>
                </div>

              </div>
            </div>
          </div>

          <!-- 举报 查处结果反馈 -->
          <div class="lab_dis" v-show="twoTab===3 && twoList[twoTab].text==='查处结果反馈'">
            <div class="ify">
              <div class="tatl">反馈信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">办理类型：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解人：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解人联系电话：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解结束日期：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解信息：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">行政调解书文号：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">案值：</div>
                  <div class="conts">工商</div>
                </div>

                <div class="xx_const">
                  <div class="num">争议金额：</div>
                  <div class="conts">工商 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">挽回经济损失：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">加倍赔偿金额：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">精神赔偿金额：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">案件涉及类型：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否进行行政处罚：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">反馈登记人：</div>
                  <div class="conts">工商</div>
                </div>

                <div class="xx_const">
                  <div class="num">反馈登记人部门：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">反馈时间：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">告知方式：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否出现场：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">回复内容：</div>
                  <div class="conts">工商</div>
                </div>
              </div>
            </div>
            <div class="ify">
              <div class="tatl">投诉信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">被诉方：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">侵权人类型：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">统一社会信用代码：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">联系电话：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">地址：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型中类：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型小类：</div>
                  <div class="conts">工商</div>
                </div>

                <div class="xx_const">
                  <div class="num">消费类型品种：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质大类：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质中类：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质小类：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">商品名称：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">品牌名称：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">类型规格：</div>
                  <div class="conts">工商</div>
                </div>

                <div class="xx_const">
                  <div class="num">销售地所在行政区别：</div>
                  <div class="conts">工商</div>
                </div>
                <div class="xx_const">
                  <div class="num">销售地：</div>
                  <div class="conts">工商</div>
                </div>

              </div>
            </div>
          </div>

          <!-- 回访信息 -->
          <div class="lab_dis" v-show="twoTab===4">
            <div class="ify">
              <div class="tatl">回访信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">回访状态：</div>
                  <div class="conts">{{twoList[4].data.hfzt}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">回访人：</div>
                  <div class="conts">{{twoList[4].data.hfr}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">回访时间：</div>
                  <div class="conts">{{twoList[4].data.hfsj}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">回访方式：</div>
                  <div class="conts">{{twoList[4].data.hffs}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">满意度：</div>
                  <div class="conts">{{twoList[4].data.myd}}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 抄告记录 -->
          <div class="lab_dis" v-show="twoTab===5">
            <table>
              <thead>
                <tr>
                  <th>序号</th>
                  <th>登记部门</th>
                  <th>抄告部门</th>
                  <th>抄告人</th>
                  <th>抄告时间</th>
                  <th>状态</th>
                  <th>阅读人</th>
                  <th>阅读时间</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in twoList[5].data"
                      :key="item.id">
                  <td>{{item.id}}</td>
                  <td>{{item.djbm}}</td>
                  <td>{{item.cgbm}}</td>
                  <td>{{item.cgr}}</td>
                  <td>{{item.cgsj}}</td>
                  <td>{{item.zt}}</td>
                  <td>{{item.yd}}</td>
                  <td>{{item.ydsj}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 文件附录 -->
          <div class="lab_dis" v-show="twoTab===6">
            <table>
              <thead>
                <tr>
                  <th>序号</th>
                  <th>文件名</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in twoList[6].wjm"
                      :key="item.id">
                  <td>{{item.id}}</td>
                  <td>{{item.wjm}}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>序号</th>
                  <th>文件材料</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in twoList[6].wjcl"
                      :key="item.id">
                  <td>{{item.id}}</td>
                  <td>{{item.wjcl}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 时间轴 -->
          <div class="lab_dis" v-show="twoTab===7">
            <div class="sjcons" v-for="item in twoList[7].data"
                      :key="item.id">
              <div class="data">时间：{{item.date}}</div>
              <div class="cons">
                <div>{{item.name}}</div>
                <div>该记录由<span>{{item.jg}}</span>机构的<span>{{item.mz}}</span>，于<span>{{item.date}}</span>进行<span>{{item.name}}</span>。审批结果为：<span>{{item.spjg}}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="retu" @click="rowClick">返回</div>
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


import {list} from "@/assets/api/tousu"
export default {
  data() {
    return {
      // 详情显示隐藏
      dialogTableVisible: false,
      // 内容显示隐藏
      leabeShow: true,
      //列表
      tableData: [
            {
              id:1,
              categoryName:3305230000000202105312269,
              complainants:"周先生",
              content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
              complaint:"宝蝶竹业有限公司",
              start:'代办理',
              consumptionType:"一般食品",
              feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
            }],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 10, // 每页的数据条数

      //详情
      twoTab:0,
      twoList: [
        {
          id: Math.random(),
          text: "登记记录",
          data:{
            xtxx:{zn:'工商',djbh:3305230000000202105312269,date:'2021-06-11 17:26:36',xxly:'12345系统',jsdh:'电话',djbm:'安吉县局消保科',sldjr:'宣颖娟'},
            tsfxx:{nume:'周先生',xldh:'13757290504',txdz:'',sfd:'',sfdate:'2021-06-11 17:26:36',sex:'男',tsfsf:'城镇',tszt:'其他',gjz:'',xffs:'实体店铺销售',sfyfsxx:'否',lflxzl:'一般食品',xflxxl:'蔬菜',xflxpz:'其他蔬菜',tsnrdl:'质量',tslxzl:'销售失效、变质的产品',tsnrxl:'销售失效、变质的产品',sfcsjdq:'是',cjrbz:'',jtnr:'（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210611160305）我在安吉县递铺镇物美超市购买了蔬菜，之后发现菜已经发霉，和商家协商无果，现在我要求商家赔偿，请相关单位处理。'},
            btsfxx:{ztname:'物美超市',szhylb:'超市',lxdh:'',tyshxydm:'无',sjztdz:'九州',pp:'无',spmc:'蔬菜',xhgg:'不详',sjje:'0',sl:'1',dw:'其他',spjkbz:'国产'},
          }
        },
        {
          id: Math.random(),
          text: "审批记录",
          data:[
            {id:1,sslx:'分流审批',ssbm:'安吉县局消保科',ssry:'宣颖娟',sssj:'2021-06-11 17:30:38',spbm:'安吉县局消保科',spry:'宣颖娟',spsj:'2021-06-11 17:30:43',ssfy:'请分流审批',shfy:'同意分流',shzt:'已审批',},
          ]
        },
        {
          id: Math.random(),
          text: "流转记录",
          data:{
            dqjlxx:{slbh:'3305230000000202105312269',xxlx:'投诉',dqzt:'代办理',sldjr:'宣颖娟',cwcs:'0',djrq:'2021-6-11',blqx:'2021-6-23',sfzdaj:'',djbm:'安吉县局消保科',szbm:'安吉昌硕市场监管所',zxbm:''},
            lzjlqk:[
              {id:1,lzsj:'2021-06-11 17:30',zcbm:'安吉县局消保科',jsbm:'安吉昌硕市场监...',lzlx:'向下分流',lzr:'宣颖娟',lxdh:'',fy:'同意分流',shyy:'',csrxm:'',csrlxdh:'',dbjs:'',jsr:'',jsbm:'',jssj:'',jsnr:'',}
            ]
          }
        },
        {
          id: Math.random(),
          text: "调解反馈",
          data:{
            fkxx:{bllx:'',tjr:'',tjrlxdh:'',tjjssj:'',tjxx:'',xztjswh:'',az:'',zyje:'',whjjss:'',jbpcje:'',jspcje:'',ejsjlx:'',sfjxxzcf:'',skdjr:'',fldjrbm:'',fksj:'',gzfs:'',sfcxc:'',hfnr:''},
            tsxx:{bsf:'',qqrlx:'',tyshxydm:'',lxdh:'',dz:'',xflxzl:'',xflxxl:'',xflxpz:'',xzdl:'',xzzl:'',xzxl:'',spmc:'',ppmc:'',xhgg:'',xsdszxzqh:'',xsd:''}
          }
        },
        {
          id: Math.random(),
          text: "回访信息",
          data:{hfr:'',hfzt:'',hfsj:'',hffs:'',myd:''}
        },
        {
          id: Math.random(),
          text: "抄告记录",
          data:[
            // {id:1,djbm:'',cgbm:'',cgr:'',cgsj:'',zt:'',ydr:'',ydsj:'',}
          ]
        },
        {
          id: Math.random(),
          text: "文件附录",
          wjm:[{id:1,wjm:''}],
          wjcl:[{id:1,wjcl:''}]
        },
        {
          id: Math.random(),
          text: "时间轴",
          data:[
            {id:'1',date:'2021-6-11',name:'分流审批',jg:'安吉县局消保科',mz:'宣颖娟',spjg:'同意'}
          ]
        },
      ],

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
    // 点击图标数字显示列表
    tkshowCli(boll,data){
      //显示弹窗
      this.dialogTableVisible=boll
      //详情隐藏，显示列表
      this.leabeShow=true

      list(data).then(res => {

      })
      // console.log(boll,data);

    },
    // 详细信息显示隐藏
    rowClick(row, column, event){
      // console.log(row, column, event);
      this.leabeShow=!this.leabeShow
    },
    // two table切换
    clickF(data,index){
      this.twoTab = index;
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
