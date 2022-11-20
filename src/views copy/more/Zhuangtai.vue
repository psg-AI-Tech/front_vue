<template>
  <div>
    <div style="display: flex;flex-direction: row">
      <div style="width: 30%">
        <el-row class="title">
          <el-col :offset="1" :span="5">
            <span>小车控制</span>
          </el-col>
        </el-row>
        <el-row class="controlbtn" >
          <el-col :offset="1" :span="4">
            <div :class="flag==true ?'readonly':''" @click="autoGo">
              <tab-bar>
                <tab-bar-item :isActive=autoActive activeColor="blue">
                  <img slot="item-icon" alt="" src="../../assets/img/ControlBtn/go1.png">
                  <img slot="item-icon-active" alt="" src="../../assets/img/ControlBtn/go2.png">
                  <div slot="item-text">自动前进</div>
                </tab-bar-item>
              </tab-bar>
            </div>
          </el-col>
          <el-col :offset="2" :span="4">
            <div @click="reset">
              <tab-bar>
                <tab-bar-item activeColor="black">
                  <img slot="item-icon" alt="" src="../../assets/img/ControlBtn/reset.png">
                  <img slot="item-icon-active" alt="" src="../../assets/img/ControlBtn/reset.png">
                  <div slot="item-text">复位</div>
                </tab-bar-item>
              </tab-bar>
            </div>
          </el-col>
          <el-col :offset="2" :span="4">
            <div @click="stop">
              <tab-bar>
                <tab-bar-item :is-active="qidongFlag" activeColor="black">
                  <img slot="item-icon" alt="" src="../../assets/img/ControlBtn/stop1.png">
                  <img slot="item-icon-active" alt="" src="../../assets/img/ControlBtn/stop.png">
                  <div v-if="qidongFlag==true" slot="item-text">停止</div>
                  <div v-else slot="item-text">启动</div>
                </tab-bar-item>
              </tab-bar>
            </div>
          </el-col>
        </el-row>
        <el-row class="title">
          <el-col :offset="1" :span="5">
            <span>水炮控制</span>
          </el-col>
        </el-row>
        <el-row class="controlbtn">
          <el-col :offset="1" :span="4">
            <div @click="shuipaoBtn">
              <tab-bar>
                <tab-bar-item :isActive=shuipaoActive activeColor="blue">
                  <img slot="item-icon" alt="" src="../../assets/img/ControlBtn/shuipao1.png">
                  <img slot="item-icon-active" alt="" src="../../assets/img/ControlBtn/shuipao2.png">
                  <div slot="item-text">水炮</div>
                </tab-bar-item>
              </tab-bar>
            </div>
          </el-col>
          <el-col :offset="2" :span="4">
            <div @click="faMen">
              <tab-bar>
                <tab-bar-item :is-active=famenActive activeColor="black">
                  <img slot="item-icon" alt="" src="../../assets/img/ControlBtn/famen2.png">
                  <img slot="item-icon-active" alt="" src="../../assets/img/ControlBtn/famen1.png">
                  <div slot="item-text">阀门</div>
                </tab-bar-item>
              </tab-bar>
            </div>
          </el-col>
          <el-col :offset="2" :span="4">
            <div @click="penTou">
              <tab-bar>
                <tab-bar-item :is-active=penTouActive activeColor="black">
                  <img slot="item-icon" alt="" src="../../assets/img/ControlBtn/pentou2.png">
                  <img slot="item-icon-active" alt="" src="../../assets/img/ControlBtn/pentou3.png">
                  <div slot="item-text">喷头</div>
                </tab-bar-item>
              </tab-bar>
            </div>
          </el-col>

        </el-row>
      </div>
<!--      <el-row class="title" style="">-->
<!--        <el-col :offset="1" :span="5">-->
<!--          <span>Control</span>-->
<!--        </el-col>-->
        <div id="joy-con" class="joy-con" style="width: 18rem;margin-right: 8rem;margin-left: 3rem" ref="joy-con"></div>



<!--      </el-row>-->



      <div style="">
        <el-dialog :modal-append-to-body="false" :visible.sync="autoFlag" title="移动位置" top="25vh"
                   width="500px">
          <el-form
              ref="autoGo"
              :model="controlInfo"
              :show-message="true"
              label-width="100px">
            <el-form-item label="位置x：" style="margin-top: 20px">
              <el-input v-model="controlInfo.x"></el-input>
            </el-form-item>
            <el-form-item label="位置y：">
              <el-input v-model="controlInfo.y"></el-input>
            </el-form-item>
            <el-form-item label="位置角度：" style="margin-top: 20px">
              <el-input v-model="controlInfo.theta"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="autoSure">确 定</el-button>
            </span>
        </el-dialog>
      </div>
      <div style="">
        <el-dialog :modal-append-to-body="false" :visible.sync="shuiPaoFlag" top="25vh"
                   width="500px">
          <template slot="title">
            <h3 style="margin:0 auto">水炮角度设置</h3>
          </template>
          <div class="block">
            <span class="">上下旋转角度(0~150)</span>
            <el-slider v-model="shuipaoData.upMotor_deg" :max=150 :show-input="true"
                       :show-input-controls="false"></el-slider>
          </div>
          <div class="block">
            <span class="">左右旋转角度(0~360)</span>
            <el-slider v-model="shuipaoData.downMotor_deg" :max=360 :show-input="true"
                       :show-input-controls="false"></el-slider>
          </div>


          <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="shuiPaoStart">确 定</el-button>
            </span>
        </el-dialog>
      </div>
    </div>
    <div>
      <div class="zhuangtai" >
        <div style="text-align: center;margin-bottom: 2rem">
          <span
              style="font-size: 1.5rem;font-weight: bold;"
          >小车状态信息</span>
        </div>
        <div style="display: flex; width: 80% ;">
          <div >
            <el-descriptions  :column="2" size="medium" >
              <el-descriptions-item label="当前连接状态" >正常</el-descriptions-item>
              <el-descriptions-item label="机器人ID">{{ $store.state.robotInfo.robotID }}</el-descriptions-item>
              <el-descriptions-item label="机器人状态">{{ $store.state.robotInfo.robotState }}</el-descriptions-item>
              <el-descriptions-item label="线速度">
              </el-descriptions-item>
              <el-descriptions-item label="角速度">
              </el-descriptions-item>
              <el-descriptions-item label="位置">
                ({{ $store.state.Pose2D.x }},{{ $store.state.Pose2D.y }},{{ $store.state.Pose2D.theta }})
              </el-descriptions-item>
              <el-descriptions-item label="水炮角度"></el-descriptions-item>
            </el-descriptions>
          </div>
          <div style="display: flex;">
            <div style="display: block">
              <el-progress :percentage="25" :width="100" type="circle" ></el-progress>
              <span>小车电量</span>
            </div>
            <i @click="turnOff " class="el-icon-switch-button" style="font-size: 3rem;color: firebrick;margin-top: 2rem;margin-left: 5rem"></i>
          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
import TabBarItem from "@components/common/TabBarItem";
import TabBar from "@components/common/TabBar";
import {closeWebsocket, initWebSocket, sendWebsocket, wsUrl} from "@/socketio/websocket";
import store from '../../store/index'
import {autoGo, get_error_manager, get_platform_state, get_pskd_state, get_robot_pose} from "@api/dingyue/dingyue";
import {Message} from "element-ui";
import {MessageBox} from "element-ui"
import {resetBit, setBit} from "@utils/bitOperators";
import { Joystick} from "@utils/joyCon";
export default {
  name: "Zhuangtai",
  components: {
    TabBarItem,
    TabBar,
  },
  data() {
    return {
      qidongFlag: true,
      autoActive: false,
      shuipaoActive: false,
      famenActive: false,
      penTouActive: false,
      shuiPaoActive: false,
      flag: false,   //样式flag
      autoFlag: false,
      shuiPaoFlag: false,
      robotZhuangtai: true,
      yidongFlag: false,

      controlInfo: {
        robotID: store.state.robotInfo.robotID,
        controlDigit: store.state.controlDigit[0],
      //  Pose2D: [0,0,10]
        x:0,
        y:0,
        theta:10
      },

      pub_cmd_velInfo: {
        robotID: store.state.robotInfo.robotID,
        linear_x: 0,
        linear_y: 0,
        linear_z: 0,
        angular_x: 0,
        angular_y: 0,
        angular_z: 0

      },

      shuipaoData: {
        robotID: store.state.robotInfo.robotID,
        Digit: 0,
        upMotor_deg: 0,
        downMotor_deg: 0,
        upMotorV: store.state.PskdStateBackInfo.upMotorV,
        downMotorV: store.state.PskdStateBackInfo.downMotorV,

      }
    }
  },
  methods: {

    //启动小车
    robotStart(){
      //启动小车，第6位置1
      this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 6)
      console.log("启动小车时---", this.controlInfo.controlDigit)
      console.log("启动小车时", this.controlInfo.controlDigit.bin())
      sendWebsocket(wsUrl, this.controlInfo);

    },
    //自动前进
    autoGo() {
      // console.log(this.controlInfo)
      if (this.autoActive == false) {
        this.autoFlag = true
      }

    },
    //自动前进
    autoSure() {
      //点击确定，发送自动前进命令
      //自动前进，第2位置1,第1位和第3位置0
      this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 2)
      this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 1)
      this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 3)
      //this.controlInfo.controlDigit=store.state.controlDigit[2]
      console.log("自动前进时控制命令---", this.controlInfo.controlDigit)
      console.log("自动前进时控制命令", this.controlInfo.controlDigit.bin())
      //发送到服务器端
      console.log(this.controlInfo)
      sendWebsocket(wsUrl, this.controlInfo)
      this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 6)
      console.log(this.controlInfo)
      this.autoFlag = false;
      this.autoActive = true;
    },

    //复位
    reset() {
      // this.controlInfo.controlDigit=store.state.controlDigit[3]
      //发送到服务器端
      //复位，第三位置1,第1,2位置0
      this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 3)
      this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 2)
      this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 1)
      console.log("复位时控制命令---", this.controlInfo.controlDigit)
      console.log("复位时控制命令", this.controlInfo.controlDigit.bin())
      sendWebsocket(wsUrl, this.controlInfo)
      // closeWebsocket();
      this.autoActive = false;

    },
    //停止
    stop() {
      // //第7位置1
      // this.controlInfo.controlDigit=setBit(this.controlInfo.controlDigit,7)
      if (this.qidongFlag) {//停止
        //第六位置0
        this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 6)
        //第七位置1
        this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 7)
        console.log("停止时控制命令---", this.controlInfo.controlDigit)
        console.log("停止时控制命令", this.controlInfo.controlDigit.bin())
        this.qidongFlag = false
      } else {    //启动
        //第六位置1
        this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 6)

        console.log("停止时控制命令---", this.controlInfo.controlDigit)
        console.log("停止时控制命令", this.controlInfo.controlDigit.bin())
        this.qidongFlag = true
        this.autoActive = false;

      }
      //发送到服务器端
      sendWebsocket(wsUrl, this.controlInfo)
      setTimeout(()=>{
        //第七位置1
        this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 7)
        //发送到服务器端
        sendWebsocket(wsUrl, this.controlInfo)
      },500)
    },


    shuipaoBtn() {
      if(this.shuipaoActive==false){//开启水炮
      this.shuiPaoFlag = true
      }else{  //关闭水炮，controldigit第13位置1
     // this.controlInfo.controlDigit=setBit(this.controlInfo.controlDigit,7)
        //digit第一位置1
        this.shuipaoData.Digit = resetBit(this.shuipaoData.Digit, 1)
        console.log(this.shuipaoData)
        this.shuipaoActive=false
        //sendWebsocket(wsUrl, this.shuipaoData)


      }
    },
    //水炮启动角度发送
    shuiPaoStart(){
      console.log("上电机角度", this.shuipaoData.upMotor_deg);
      console.log("下电机角度", this.shuipaoData.downMotor_deg);
      //digit第一位置1
      this.shuipaoData.Digit = setBit(this.shuipaoData.Digit, 1)
      console.log("水炮启动控制命令---", this.shuipaoData.Digit)
      console.log("水炮启动控制命令", this.shuipaoData.Digit.bin())
      console.log("水炮启动控制命令---", this.shuipaoData)
      //发送到服务器端
      //closeWebsocket();
      sendWebsocket(wsUrl, this.shuipaoData)
      // closeWebsocket();
      this.shuipaoActive = true
      this.shuiPaoFlag = false
    },

    //开启/关闭阀门
    faMen() {
      // if(this.shuipaoActive==true){
        this.famenActive = !this.famenActive
        if (this.famenActive) { //开启阀门，第11位置1
          this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 11)
          console.log("开阀门时控制命令---", this.controlInfo.controlDigit)
          console.log("开阀门时控制命令", this.controlInfo.controlDigit.bin())
          sendWebsocket(wsUrl, this.controlInfo)
        } else {   //关闭阀门，第11位置0
          this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 11)
          console.log("关阀门时控制命令---", this.controlInfo.controlDigit)
          console.log("关阀门时控制命令", this.controlInfo.controlDigit.bin())
          sendWebsocket(wsUrl, this.controlInfo)
        }
        //console.log( this.pub_cmd_velInfo.linear_z)
      // }else {
      //   Message.error("请先启动水炮")
      // }

    },

    //喷头
    penTou() {
      // if (this.shuipaoActive==true){
        this.penTouActive = !this.penTouActive
        if (this.penTouActive) { //喷头为柱状，第12位置1
          this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 12)
          console.log("柱状喷头时控制命令---", this.controlInfo.controlDigit)
          console.log("柱状喷头时控制命令", this.controlInfo.controlDigit.bin())
          sendWebsocket(wsUrl, this.controlInfo)
        } else {   //喷头为雾状，第11位置0
          this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 12)
          console.log("雾状喷头时控制命令---", this.controlInfo.controlDigit)
          console.log("雾状喷头时控制命令", this.controlInfo.controlDigit.bin())
          sendWebsocket(wsUrl, this.controlInfo)
        }
      // }else {
      //   Message.error("请先启动水炮")
      // }

    },
    //关机
    turnOff(){
      // this.$msgbox({
      //   title: '关机确认',
      //   message:"确认是否关机",
      //   showCancelButton: true,
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   beforeClose: (action,instance,done) => {
      //     if (action === 'confirm') {
      //       this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 14)
      //       console.log("关机时控制命令---", this.controlInfo.controlDigit)
      //       console.log("关机时控制命令", this.controlInfo.controlDigit.bin())
      //       sendWebsocket(wsUrl, this.controlInfo)
      //       done()
      //
      //     }else {
      //       done()
      //     }
      //     }
      //
      // })
      // sendWebsocket(wsUrl,JSON.stringify("get_robot_pose"))
      // console.log("小车数据存储",store.state.robotPose)
      //
      // sendWebsocket(wsUrl,JSON.stringify("get_pskd_state"))
      // console.log("get_pskd_state",store.state.robotPose)
       //sendWebsocket(wsUrl,JSON.stringify("get_platform_state"))
      // console.log("小车数据存储",store.state.PskdStateBackInfo)
      // console.log("小车数据存储",store.state.robotPose)
      // sendWebsocket(wsUrl,JSON.stringify("get_robot_pose"))
      //sendWebsocket(wsUrl,JSON.stringify("get_global_plan"))
      sendWebsocket(wsUrl,JSON.stringify("get_map"))
       //sendWebsocket(wsUrl,JSON.stringify("get_scan"))
       //sendWebsocket(wsUrl,JSON.stringify("get_error_manager"))
       //sendWebsocket(wsUrl,JSON.stringify("get_params_get"))



    },
    //摇杆
    JoyInit(){
      let _this=this
      //摇杆控件
      let joyCon = document.querySelector("#joy-con");
      let joyOptions = {
        mode: "static",// 'dynamic', 'static' or 'semi'
        size: 200,
        color: '#909399',
        position: {
          left: "50%",
          top: "50%"
        },//在容器内垂直居中显示
        zone: joyCon //如果不提提供zone容器元素，那么默认动态生成的元素是注入在body中的。
      };
      //摇杆控件
      let manager =new Joystick(joyOptions)
      manager.init()
      manager.onMove = function(evt,data) {
        _this.moveHandler(evt,data)
      }
      manager.onEnd=function (evt,data){
        _this.moveEnd(evt,data)
      }

    },
    //摇杆移动处理
    moveHandler:function (evt,data){
      if (data.direction) {
        let angular
        let linear
        //给出线速度
        // console.log("evt-------",evt)
         console.log("data------",data)


        if(data.distance<40){//线速度为0
          linear=0
        }else {
          if (data.direction.y=="up"){
              linear=(data.distance-40)/60
            console.log("向前")

            console.log("线速度",linear)
          }else {
              linear=(data.distance-40)/-60
            console.log("向后")

            console.log("线速度",linear)
          }
        }
        console.log(data.angle.degree)
        if((data.angle.degree>30 && data.angle.degree<150) || (data.angle.degree>210 && data.angle.degree<330)){
          if((data.direction.x=="left" && data.direction.y=="up") ||(data.direction.x=="right" && data.direction.y=="down")){
            angular=Math.cos(data.angle.radian+Math.PI/6)
          }else {
            angular=Math.cos(data.angle.radian-Math.PI/6)
          }
        }else {
          angular=0
        }
      console.log("角度",angular)
        //手动状态，第1位置1,第2,3位置0
        this.controlInfo.controlDigit = setBit(this.controlInfo.controlDigit, 1)
        this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 2)
        this.controlInfo.controlDigit = resetBit(this.controlInfo.controlDigit, 3)
        console.log("复位时控制命令---", this.controlInfo.controlDigit)
        console.log("复位时控制命令", this.controlInfo.controlDigit.bin())
        //发送线速度和角速度
        sendWebsocket(wsUrl,this.controlInfo)
        //角度为角速度，离圆心的距离为线速度
        this.pub_cmd_velInfo.linear_x = linear
        this.pub_cmd_velInfo.angular_z = angular
        console.log("线速度------", this.pub_cmd_velInfo.linear_x)
        console.log("角速度------", this.pub_cmd_velInfo.angular_z)
        console.log(this.pub_cmd_velInfo)

        //发送线速度和角速度
        sendWebsocket(wsUrl,this.pub_cmd_velInfo)
      }
    },
    moveEnd(){
      this.pub_cmd_velInfo.linear_x=0;
      this.pub_cmd_velInfo.angular_z=0;
      sendWebsocket(wsUrl,this.pub_cmd_velInfo)
    }

  },
  mounted() {

    //初始化websocket
    //initWebSocket()
    //启动小车
    // this.robotStart();
   // new Promise((resolve,reject)=>{
     // 获取机器人相关信息
   //   setInterval(()=>{
   //      //get_pskd_state();
   //      //get_robot_pose();
   //     get_platform_state();
   //   },1000)
   // }).then()
    // new Promise((resolve,reject)=>{
    //   // 获取机器人相关信息
    //   setInterval(()=>{
    //     get_pskd_state();
    //     //get_robot_pose();
    //     // get_platform_state();
    //   },1000)
    // }).then()
    // new Promise((resolve,reject)=>{
    //   // 获取机器人相关信息
    //   setInterval(()=>{
    //     //get_pskd_state();
    //     get_robot_pose();
    //     //get_platform_state();
    //   },1000)
    // }).then()
    setInterval(()=>{
      // sendWebsocket(wsUrl,JSON.stringify("get_robot_pose"))
      // sendWebsocket(wsUrl,JSON.stringify("get_pskd_state"))
      // sendWebsocket(wsUrl,JSON.stringify("get_platform_state"))

    },1000)

    // sendWebsocket(wsUrl,"get_robot_pose")


    //摇杆控件初始化
    this.JoyInit();
    //定时获取订阅消息
    // setTimeout(() => {
    //   get_platform_state()
    // }, 1000);
    //是否开机成功
    // if (store.state.PlatformStateBackInfo.digit == 8) {
    //   Message.success("开机成功")
    // } else {
    //   Message.error("开机失败")
    // }
  },
  beforeDestroy() {
    // closeWebsocket();
    // socketClose();
    // this.onclose(); // 离开路由之后断开websocket连接
    //clearInterval()
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1c7e7c;
  margin: 1rem 0 0 0;
}

.controlbtn {
  margin-top: 1.5rem;
}

.zhuangtai {
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  border-color: #bbbbbb;
  text-align: center;
  width:80%;
  height: 100%;
  margin-left:3rem;
  margin-bottom: 1rem;
  //margin-top: 3rem;
  // margin-right:40px ;
  //height: 500px;
  //background-color: #909399;
  & .el-descriptions {
    font-size:1rem;
    margin-left:1rem;
    //width: 300px;
  }
  //.my_label{
  //  font-size: 1rem;
  //  color: #67C23A;
  //}

}

.joy-con {
  position: relative;
  left: 2rem;
  //right: 10px;
  width: 100vw;
  height: 22rem;
}

.el-row {
  width: 28rem;
}

.readonly {
  pointer-events: none;
}


</style>
