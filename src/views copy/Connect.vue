<template>
  <div class="page">

    <div class="grades-info">
      <el-row  style="height: 3.5rem">
        <div class="base-info">
            <el-alert
                type="error"
                :closable="false"
                style="width: 25rem;height: 4rem"
            >
              <span slot="title" class="warnInfo">注意：当前暂未连接机器人，请选择机器人进行连接</span>
            </el-alert>
        </div>
      </el-row>

      <el-row>
          <div class="search"
               style="height: 4.5rem;display: flex;align-items: center;width: 100%;margin-top: 3rem;margin-left: 7.3rem"
          >
            <el-form
                label-width="8rem"
                style="text-align: center"
                :inline="true"
            >
              <el-form-item>
                <template slot="label">
                  <label style="font-size: 0.9rem">请输入机器人ID:</label>
                </template>
                <el-input  v-model.lazy="searchID" type="text" ref="robotID"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button  @click="searchBtn" type="primary" plain> 查找 </el-button>
              </el-form-item>
              <el-form-item>
                  <el-button @click="" type="primary" plain> 断开连接 </el-button>
              </el-form-item>
              <el-form-item>
                  <el-button @click="" type="primary" plain>刷新列表  </el-button>
              </el-form-item>


            </el-form>
          </div>
      </el-row>
      <el-row>
        <el-col :span="24" >
          <el-table
              :data="searchFlag?searchInfo:tableData"
              border
              style="width: 80% ;margin: 0 auto"

          >
<!--              style="width: 50%;margin:auto"-->
            <el-table-column
                prop="num"
                label="机器人编号"
            />
            <el-table-column
                prop="ID"
                label="机器人ID"
            />
            <el-table-column
                prop="state"
                label="机器人状态"
            >
            </el-table-column>
            <el-table-column
                prop="operate"
                label="操作"
            >
              <template slot-scope="scope">
                <el-button  @click="connectBtnClick(scope.row)" type="primary" plain size="medium">连接</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
<!--          <div id="chart" style="width: 100%; height: 500px"/>-->
        </el-col>
      </el-row>
    </div>

  </div>

</template>

<script>

import store from '../store/index'
import {wsUrl, sendWebsocket, closeWebsocket, initWebSocket} from "@/socketio/websocket";
import {
  get_platform_state,
  get_pskd_state,
  get_robot_pose,
  get_params_get,
  get_scan,
  connect
} from "@api/dingyue/dingyue";

export default {
  name: "Connect",
  data() {
    return {
      searchID:'',
      searchFlag:false,
      connectFlag:false,
      tableData: [{
        num: '2001',
        ID: 'tv_robot01',
        state: '正常',

      }, {
        num: '2002',
        ID: 'tv_robot02',
        state: '异常',
      }, {
        num: '2003',
        ID: 'tv_robot03',
        state: '正常',
      }, {
        num: '2004',
        ID: 'tv_robot04',
        state: '异常',
      }],
      searchInfo:[]

    };
  },
  methods: {
    //查找
    searchBtn(){
      this.searchFlag=true
      if (this.searchID==''){
        this.searchInfo=this.tableData
      }else {
        this.searchInfo=this.tableData.filter((data)=>{
          return data.ID==this.searchID
        })
      }
     // this.tableInfo.filter(data=>data.id==this.searchID)
      console.log(this.searchID)
      console.log(this.tableInfo)
      console.log(this.tableData)
      // const Pose2D={
      //   x:1,
      //   y:2,
      //   theta:3
      // }
      // store.commit("Pose2D",Pose2D)
      // console.log(store.state.Pose2D)
      // console.log(this.$refs['robotID'].value)
      // this.searchID=this.$refs['robotID'].value
      // //开始查找（调用接口）
    //  push();
    //   get_platform_state();
      //delete this.tableData[0].num
      //this.$delete(this.tableData[0],"num")
     // console.log(this.tableData)
    //   get_pskd_state();
    //  get_robot_pose();
    //   get_scan();
    //   get_params_get();
    },

    //连接机器人
    connectBtnClick(row){
      //执行连接操作（连接命令暂时不知道）
      //存放连接数据
      localStorage.setItem("robotInfo",JSON.stringify(row))
      localStorage.setItem("robotID",row.ID)
      localStorage.setItem("robotState",row.state)
      store.commit("robotInfo")
      // store.state.robotInfo.robotID=row.ID
      // store.state.robotInfo.robotState=row.state
      //发送一个启动机器人的命令
      //调用接口，设置IP

     // let PlatformStateBackInfo={
     //   robotID:'',
     //   digit:0,
     //   motorState:10,
     //   shunDownFlag:0,
     //   feedData_length:0,
     //   feedData:{
     //
     //   }
     // }
     //  console.log(PlatformStateBackInfo.hasOwnProperty("shunDownFlag"))
      //connect();
    //  setTimeout(()=>{

       initWebSocket();
     // },1000)
      this.$router.push('/Control')
      console.log(localStorage.getItem('robotInfo'))


      // initWebSocket()



      //发送启动机器人命令
      // const robotInfo={
      //     robotID:store.state.robotInfo.robotID,
      //     controlDigit:store.state.controlDigit[6],
      //     Pose2D:{
      //       x:0,
      //       y:0,
      //       theta:10
      //     }
      // }

   //    sendWebsocket(wsUrl,robotInfo)
      // this.connectFlag=true

      // //获取机器人相关信息
      // get_pskd_state();
      // get_robot_pose();
      // get_platform_state();
      // const controlID=store.state.controlDigit[6]
      // console.log(controlID)
    }

  },
  mounted() {
    // localStorage.clear();
    // this.$localforage.clear();
  },
};
</script>

<style lang="scss" scoped>
//html{
//  font-size: 12px;
//}
.tab{
  /*让表格居中*/
  width: 100% ;
  //margin:auto;
  //text-align: center;
}
p{
  width: 1rem;
  height: 1rem;
  background-color: #409EFF;
}
.page {
& > div {
   // margin-top: 20px;
    margin-top: 1.5rem;
    text-align: center;
&:first-child {
   margin-top: 0;
 }
}
.page > div[data-v-4270cc76]:first-child {
  margin-top: 1.5rem;
}

.base-info {
  //height: 100px;
  //margin-top: 50px;
  width: 38%;
  //height: 80px;
  height: 4rem;
  margin: 2rem auto;
 // //margin: 50px auto;
 // display: flex;
  text-align: center;
 // //justify-content: center;
  //box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  //box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.1);
  //width: 2rem;
  //height: 2rem;
  //background-color: #67C23A;
  //background-color: #FFF;
  .warnInfo{
    font-size: 1rem;
    -webkit-transform: scale(0.83);
    text-align: center;
    color: #1c7e7c
  }

& > div {
    //padding-left: 16px;
  padding-left: 1rem;

&:first-child {
   padding-left: 0px;
 }
}
.pic {
  position: relative;

& > img {
    //$unit: 40px;
    $unit: 2.2rem;
    width: 3*$unit;
    height: 4*$unit;
  }
}
  //.label-title{
  //  font-size: 3rem;
  //}
}
}
.el-input{
  width: 10rem;
}
.el-button{
  width: 6rem;
}


</style>
