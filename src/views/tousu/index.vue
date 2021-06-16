<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">“破五多”综合治理平台</div>
    <div class="Etitle">
      <p>投诉调处</p>
    </div>
    <div class="con">
      <div class="left">
        <top-list @tkshow="tkshowtopList" ref="meetingroomselect"></top-list>
        <div class="middle">
          <shop-type
            @tkshow="tkshowCli"
            ref="meetingroomselect"
          ></shop-type>
          <serve-type @tkshow="tkshowCli" ref="meetingroomselect"></serve-type>
        </div>
        <bottom @tkshow="tkshowCli" ref="meetingroomselect"></bottom>
      </div>
      <div class="mid">
        <tousunum @tkshow="tkshowCli" ref="meetingroomselect"></tousunum>
        <div class="middle">
          <tousuwenti @tkshow="tkshowCli" ref="meetingroomselect"></tousuwenti>
          <jubaowenti @tkshow="tkshowCli" ref="meetingroomselect"></jubaowenti>
        </div>
        <tousulist @tkshow="toDetail" ref="meetingroomselect"></tousulist>
      </div>
      <div class="right">
        <div class="rightTop">
          <!-- <banliState></banliState> -->
          <chulichaoqi @tkshow="tkshowchuli" ref="meetingroomselect"></chulichaoqi>
          <xiaobaowei @tkshow="tkshowCli" ref="meetingroomselect"></xiaobaowei>
        </div>
        <rightbom @tkshow="tkshowCli" ref="meetingroomselect"></rightbom>
      </div>
    </div>
    <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
      <div class="one" v-if="leabeShow">
        <template>
          <el-table
            :data="tableData"
            height="53rem"
            highlight-current-row
            style="margin-top:1rem"
            @row-click="toDetail"
            >
            <el-table-column type="index" label="序号" show-overflow-tooltip width="100"></el-table-column>
            <el-table-column prop="tsRegister" label="登记编号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsProvider" label="投诉方" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsContent" label="内容" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsType" label="类型" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsDefendantName" label="被投诉对象" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsConMedType" label="消费类型(中类)" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsHandlingStatus" label="办结状态" show-overflow-tooltip></el-table-column>
            <el-table-column prop="tsFeedContent" label="反馈内容" show-overflow-tooltip></el-table-column>
          </el-table>
        </template>
        <div class="block" style="margin-top:2rem">
            <el-pagination
              align='center'
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10,20]"
              :page-size="pageSize"
              background
              layout=" prev, pager, next"
              :total="total">
            </el-pagination>
            <div class="zts">共{{total}}条</div>
        </div>
      </div>
      <div class="two" v-if="!leabeShow">
        <div class="coun">
          <div class="tabs">
            <div
            v-for="(item, index) in titList"
            :key="item.id"
            :class="twoTab === index ? 'clie' : ''"
            @click="clickF(item, index)">{{item}}</div>
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
                  <div class="conts">{{detail.register?detail.register.tsFunction:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记编号：</div>
                  <div class="conts">{{detail.register.tsRegistration?detail.register.tsRegistration:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记时间：</div>
                  <div class="conts">{{detail.register.tsRegistrationtime?detail.register.tsRegistrationtime:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">信息来源：</div>
                  <div class="conts">{{detail.register.tsInformation?detail.register.tsInformation:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">接收方式：</div>
                  <div class="conts">{{detail.register.tsAcceptance?detail.register.tsAcceptance:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记部门：</div>
                  <div class="conts">{{detail.register.tsDepartment?detail.register.tsDepartment:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">受理登记人：</div>
                  <div class="conts">{{detail.register.tsAcceptances?detail.register.tsAcceptances:''}}</div>
                </div>
              </div>
            </div>
            <div class="ify">
              <div class="tatl">投诉方信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">姓名/名称：</div>
                  <div class="conts">{{detail.register.tsName?detail.register.tsName:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">联系电话：</div>
                  <div class="conts">{{detail.register.tsContact?detail.register.tsContact:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">通讯地址：</div>
                  <div class="conts">{{detail.register.tsAddress?detail.register.tsAddress:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">事发地：</div>
                  <div class="conts">{{detail.register.tsIncident?detail.register.tsIncident:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">事发时间：</div>
                  <div class="conts">{{detail.register.tsIncidenttime?detail.register.tsIncidenttime:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">性别：</div>
                  <div class="conts">{{detail.register.tsSex?detail.register.tsSex:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">投诉方身份：</div>
                  <div class="conts">{{detail.register.tsComplainant?detail.register.tsComplainant:''}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">投诉主体：</div>
                  <div class="conts">{{detail.register.tsSubject?detail.register.tsSubject:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">关键字：</div>
                  <div class="conts">{{detail.register.tsKeyword?detail.register.tsKeyword:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费方式：</div>
                  <div class="conts">{{detail.register.tsConsumption?detail.register.tsConsumption:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否预付式消费：</div>
                  <div class="conts">{{detail.register.tsAdvance?detail.register.tsAdvance:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型中类：</div>
                  <div class="conts">{{detail.register.tsMiddle?detail.register.tsMiddle:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型小类：</div>
                  <div class="conts">{{detail.register.tsSubclas?detail.register.tsSubclas:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型品种：</div>
                  <div class="conts">{{detail.register.tsVarieties?detail.register.tsVarieties:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">投诉内容大类：</div>
                  <div class="conts">{{detail.register.tsContent?detail.register.tsContent:''}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">投诉内容中类：</div>
                  <div class="conts">{{detail.register.tsMiddleclass?detail.register.tsMiddleclass:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">投诉内容小类：</div>
                  <div class="conts">{{detail.register.tsSubc?detail.register.tsSubc:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否长三角地区：</div>
                  <div class="conts">{{detail.register.tsTriangle?detail.register.tsTriangle:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">残疾人标志：</div>
                  <div class="conts">{{detail.register.tsDisability?detail.register.tsDisability:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">具体内容：</div>
                  <div class="conts">{{detail.register.tsSpecific?detail.register.tsSpecific:''}}</div>
                </div>
              </div>
            </div>
            <div class="ify">
              <div class="tatl">被投诉方信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">涉及主体名称：</div>
                  <div class="conts">{{detail.register.tsInvolve?detail.register.tsInvolve:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">所在行业类别：</div>
                  <div class="conts">{{detail.register.tsIndustry?detail.register.tsIndustry:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">联系电话：</div>
                  <div class="conts">{{detail.register.tsContacts?detail.register.tsContacts:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">统一社会信用代码：</div>
                  <div class="conts">{{detail.register.tsSociology?detail.register.tsSociology:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">涉及主体地址：</div>
                  <div class="conts">{{detail.register.tsDesign?detail.register.tsDesign:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">品牌：</div>
                  <div class="conts">{{detail.register.tsBrand?detail.register.tsBrand:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">商品名称：</div>
                  <div class="conts">{{detail.register.tsCommodity?detail.register.tsCommodity:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">型号规格：</div>
                  <div class="conts">{{detail.register.tsModel?detail.register.tsModel:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">涉及金额：</div>
                  <div class="conts">{{detail.register.tsMoney?detail.register.tsMoney:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">数量：{{detail.register.tsNum?detail.register.tsNum:''}}</div>
                  <div class="conts">单位：{{detail.register.tsDw?detail.register.tsDw:''}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">商品进口标致：</div>
                  <div class="conts">{{detail.register.tsImport?detail.register.tsImport:''}}</div>
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
                <tr v-for="(item,index) in detail.approvaList"
                      :key="item.id">
                  <td>{{index+1}}</td>
                  <td>{{item.tsType?item.tsType:''}}</td>
                  <td>{{item.tsApproval?item.tsApproval:''}}</td>
                  <td>{{item.tsApersonnel?item.tsApersonnel:''}}</td>
                  <td>{{item.tsApprovalTime?item.tsApprovalTime:''}}</td>
                  <td>{{item.tsDept?item.tsDept:''}}</td>
                  <td>{{item.tsPersonnel?item.tsPersonnel:''}}</td>
                  <td>{{item.tsSubmittime?item.tsSubmittime:''}}</td>
                  <td>{{item.tsPostscript?item.tsPostscript:''}}</td>
                  <td>{{item.tsExamine?item.tsExamine:''}}</td>
                  <td>{{item.tsState?item.tsState:''}}</td>
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
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsAcceptance}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">信息类型：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsInformation}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">当前状态：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsCurrent}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">受理登记人：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsRegistrant}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">催问次数：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsUrge}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记日期：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsDate}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">办理期限：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsHandle}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否重大案件：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsMajor}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">登记部门：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsDept}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">所在部门：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsWheredept}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">转向部门：</div>
                  <div class="conts">{{detail.circulationList[detail.circulationList.length-1].tsTurn}}</div>
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
                    <tr v-for="(item,index) in detail.circulationList"
                      :key="item.id">
                      <td>{{index+1}}</td>
                      <td>{{item.cCirculation?item.cCirculation:''}}</td>
                      <td>{{item.cTransfer?item.cTransfer:''}}</td>
                      <td>{{item.tsAccept?item.tsAccept:''}}</td>
                      <td>{{item.tsType?item.tsType:''}}</td>
                      <td>{{item.tsTransferor?item.tsTransferor:''}}</td>
                      <td>{{item.tsContact?item.tsContact:''}}</td>
                      <td>{{item.tsPostscript?item.tsPostscript:''}}</td>
                      <td>{{item.tsReturn?item.tsReturn:''}}</td>
                      <td>{{item.tsWithdrawing?item.tsWithdrawing:''}}</td>
                      <td>{{item.tsContacts?item.tsContacts:''}}</td>
                      <td>{{item.tsSupervise?item.tsSupervise:''}}</td>
                      <td>{{item.tsInterpreter?item.tsInterpreter:''}}</td>
                      <td>{{item.tsInterpreterdept?item.tsInterpreterdept:''}}</td>
                      <td>{{item.tsInterpretertime?item.tsInterpretertime:''}}</td>
                      <td>{{item.tsContent?item.tsContent:''}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- 投诉 调解反馈 -->
          <div class="lab_dis" v-show="twoTab===3 && detail.circulationList[detail.circulationList.length-1].tsInformation==='投诉'">
            <div class="ify">
              <div class="tatl">反馈信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">办理类型：</div>
                  <div class="conts">{{detail.mediate.tsHandling}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解人：</div>
                  <div class="conts">{{detail.mediate.tsMediator}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解人联系电话：</div>
                  <div class="conts">{{detail.mediate.tsContact}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解结束日期：</div>
                  <div class="conts">{{detail.mediate.tsEnddate}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">调解信息：</div>
                  <div class="conts">{{detail.mediate.tsInformation}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">行政调解书文号：</div>
                  <div class="conts">{{detail.mediate.tsDocument}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">案值：</div>
                  <div class="conts">{{detail.mediate.tsCase}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">争议金额：</div>
                  <div class="conts">{{detail.mediate.tsAmount}} 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">挽回经济损失：</div>
                  <div class="conts">{{detail.mediate.tsRedeem}} 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">加倍赔偿金额：</div>
                  <div class="conts">{{detail.mediate.tsDouble}} 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">精神赔偿金额：</div>
                  <div class="conts">{{detail.mediate.tsSpirit}} 元</div>
                </div>
                <div class="xx_const">
                  <div class="num">案件涉及类型：</div>
                  <div class="conts">{{detail.mediate.tsInvolve}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否进行行政处罚：</div>
                  <div class="conts">{{detail.mediate.tsPunish}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">反馈登记人：</div>
                  <div class="conts">{{detail.mediate.tsFeedback}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">反馈登记人部门：</div>
                  <div class="conts">{{detail.mediate.tsRegister}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">反馈时间：</div>
                  <div class="conts">{{detail.mediate.tsTime}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">告知方式：</div>
                  <div class="conts">{{detail.mediate.tsInform}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">是否出现场：</div>
                  <div class="conts">{{detail.mediate.tsAppear}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">回复内容：</div>
                  <div class="conts">{{detail.mediate.tsHfnr}}</div>
                </div>
              </div>
            </div>
            <div class="ify">
              <div class="tatl">投诉信息</div>
              <div class="xx">
                <div class="xx_const">
                  <div class="num">被诉方：</div>
                  <div class="conts">{{detail.mediate.tsDefendant}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">侵权人类型：</div>
                  <div class="conts">{{detail.mediate.tsTort}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">统一社会信用代码：</div>
                  <div class="conts">{{detail.mediate.tsUnified}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">联系电话：</div>
                  <div class="conts">{{detail.mediate.tsContacts}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">地址：</div>
                  <div class="conts">{{detail.mediate.tsAddress}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型中类：</div>
                  <div class="conts">{{detail.mediate.tsConsumption}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">消费类型小类：</div>
                  <div class="conts">{{detail.mediate.tsSubclass}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">消费类型品种：</div>
                  <div class="conts">{{detail.mediate.tsVarieties}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质大类：</div>
                  <div class="conts">{{detail.mediate.tsNature}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质中类：</div>
                  <div class="conts">{{detail.mediate.tsMiddle}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">性质小类：</div>
                  <div class="conts">{{detail.mediate.tsSubc}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">商品名称：</div>
                  <div class="conts">{{detail.mediate.tsCommodity}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">品牌名称：</div>
                  <div class="conts">{{detail.mediate.tsBrand}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">类型规格：</div>
                  <div class="conts">{{detail.mediate.tsModel}}</div>
                </div>

                <div class="xx_const">
                  <div class="num">销售地所在行政区别：</div>
                  <div class="conts">{{detail.mediate.tsSale}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">销售地：</div>
                  <div class="conts">{{detail.mediate.tsPlace}}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 举报 查处结果反馈 -->
          <div class="lab_dis" v-show="twoTab===3 && detail.circulationList[detail.circulationList.length-1].tsInformation==='举报'">
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
                  <div class="conts">{{detail.returnvisit?detail.returnvisit.tsReturn:""}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">回访人：</div>
                  <div class="conts">{{detail.returnvisit?detail.returnvisit.tsVisitors:""}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">回访时间：</div>
                  <div class="conts">{{detail.returnvisit?detail.returnvisit.tsReturntime:""}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">回访方式：</div>
                  <div class="conts">{{detail.returnvisit?detail.returnvisit.tsReturnmode:""}}</div>
                </div>
                <div class="xx_const">
                  <div class="num">满意度：</div>
                  <div class="conts">{{detail.returnvisit?detail.returnvisit.tsSatisfaction:""}}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 抄告记录 -->
          <div class="lab_dis" v-show="twoTab===9">
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
          <div class="lab_dis" v-show="twoTab===9">
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
          <div class="lab_dis" v-show="twoTab===5">
            <div style="padding: 0 1.5rem">
              <el-timeline :reverse="true">
                <el-timeline-item
                  v-for="(item, index) in detail.ctimeaxisList"
                  :key="index"
                  placement="top"
                  :timestamp="item.tsHandletime">
                  <div class="item">
                    <h3>{{item.tsStatus}}</h3>
                    <p>{{item.tsContent}}</p>
                  </div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </div>
        <div v-if="num" class="retu" @click="rowClick">返回</div>
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


import {list,getComplaintlistDetails,listDept,listOverDept} from "@/assets/api/tousu"
export default {
  data() {
    return {
      // 详情显示隐藏
      dialogTableVisible: false,
      // 内容显示隐藏
      leabeShow: true,
      //列表
      // 列表用于请求的参数
      listPostData:null,
      tableData: [],
      currentPage: 1, // 当前页码
      total: 0, // 总条数
      pageSize: 10, // 每页的数据条数

      //详情
      twoTab:0,
      detail:{

      },
      titList:["登记记录","审批记录","流转记录","调解反馈","回访信息","时间轴"],
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
    handleCurrentChange(val) {
      this.listPostData.page = val.toString();
      list(this.listPostData).then(res => {
        console.log(res.count)
        this.total = res.count
        this.tableData = res.data
      })
    },
    // 点击图标数字显示列表
    tkshowCli(boll,data){
      //显示弹窗
      this.dialogTableVisible=boll;
      //详情隐藏，显示列表
      this.leabeShow=true;
      this.listPostData = data
      // console.log(this.listPostData);
      this.$nextTick(() => {
        this.listPostData.page = '1'
        this.listPostData.limit = this.pageSize.toString();
        list(this.listPostData).then(res => {
          console.log(res.count)
          this.total = res.count
          this.tableData = res.data
        })
      })
    },
    // toplist穿透
    tkshowtopList(boll,data){
      //显示弹窗
      this.dialogTableVisible=boll;
      //详情隐藏，显示列表
      this.leabeShow=true;
      this.listPostData = data
      // console.log(this.listPostData);
      this.$nextTick(() => {
        this.listPostData.page = '1'
        this.listPostData.limit = this.pageSize.toString();
        listDept(this.listPostData).then(res => {
          // console.log(res.data);
            this.total = res.count
            this.tableData = res.data
        })
      })
    },
    // 处理超期区县分布穿透
    tkshowchuli(boll,data){
      //显示弹窗
      this.dialogTableVisible=boll;
      //详情隐藏，显示列表
      this.leabeShow=true;
      this.listPostData = data
      // console.log(this.listPostData);
      this.$nextTick(() => {
        this.listPostData.page = '1'
        this.listPostData.limit = this.pageSize.toString();
        listOverDept(this.listPostData).then(res => {
          // console.log(res.data);
            this.total = res.count
            this.tableData = res.data
        })
      })
    },
    // 详细信息显示隐藏
    rowClick(row, column, event){
      // console.log(row, column, event);
      this.leabeShow=!this.leabeShow
    },
    backList(){
      this.leabeShow = true
    },
    //点击列表跳转详情
    toDetail(row,num){
      this.num=num
      // console.log(row.tsRegister);
      // let rows=row?row.tsRegister:"3305220000000202106111355";
      // getComplaintlistDetails({registration:row.tsRegister}).then(res => {
      getComplaintlistDetails({registration:"3305220000000202106111355"}).then(res => {
        this.dialogTableVisible=true;
        this.detail = res.data
        
        this.leabeShow = false;
        // console.log(this.detail)
        // console.log(res)
      })

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
.item{
  font-size: 1.5rem;
  color: #ffffff;
}
</style>
<style lang="scss">
.el-timeline-item__tail{
  border-color: #ffffff;
}
.el-timeline-item__timestamp{
  font-size: 1.5rem;
  color: #ffffff;
}

</style>
