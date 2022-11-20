<template>
  <div>
    <el-collapse value="''">
      <el-collapse-item  name="robot">
        <template slot="title">
          <h3 class="title">机器人参数设置</h3>
        </template>
        <el-row class="title">
          <el-col :span="8" :offset="6">
            <el-form ref="form"  :label-position="labelPosition" label-width="200px">
              <el-form-item label="机器人ID" >
                <el-input  v-model="robotID" :disabled="isEdit" style="width: 200px" ></el-input>
<!--                <el-button>编辑</el-button>-->
                <i class="el-icon-edit" style="font-size: 20px;margin-left: 10px" @click="editRobotID"></i>
              </el-form-item>
              <el-form-item label="机器人最大线速度">
                <el-input  v-model="maxLinear" :disabled="true" style="width: 200px" ></el-input>
                <i  style="font-size: 20px;margin-left: 10px" ></i>
              </el-form-item>
              <el-form-item label="机器人最大角速度">
                <el-input  v-model="maxAngular" :disabled="true" style="width: 200px" ></el-input>
              </el-form-item>
              <el-button>保存</el-button>
            </el-form>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item  name="shuipao">
        <template slot="title">
          <h3 class="title">水炮参数设置</h3>
        </template>
        <el-row class="title">
          <el-col :span="8" :offset="6">
            <el-form ref="form"  :label-position="labelPosition" label-width="200px">
              <el-form-item label="水炮上下旋转速度" >
                <el-input  v-model="shuiPaoInfo.upMotorV" style="width: 200px" type="number" max=10 min=0></el-input>
              </el-form-item>
              <el-form-item label="水炮左右旋转速度">
                <el-input  v-model="shuiPaoInfo.downMotorV" style="width: 200px" type="number" max=10 min=0></el-input>
                <i  style="font-size: 20px;margin-left: 10px" ></i>
              </el-form-item>
              <el-button @click="shuiPaoChange">保存</el-button>
            </el-form>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item  name="map">
        <template slot="title">
          <h3 class="title">地图参数设置</h3>
        </template>
        <el-row class="title">
          <el-col :span="8" :offset="6">
            <el-form ref="form"  :label-position="labelPosition" label-width="200px">
              <el-form-item label="地图宽" >
                <el-input  v-model="mapInfo.mapWidth" style="width: 200px" ></el-input>
              </el-form-item>
              <el-form-item label="地图高">
                <el-input  v-model="mapInfo.mapHeight" style="width: 200px" ></el-input>
                <i  style="font-size: 20px;margin-left: 10px" ></i>
              </el-form-item>
              <el-form-item label="地图分辨率">
                <el-input  v-model="mapInfo.mapResolution" style="width: 200px" ></el-input>
                <i  style="font-size: 20px;margin-left: 10px" ></i>
              </el-form-item>
              <el-button @click="mapInfoChange">保存</el-button>
            </el-form>
          </el-col>
        </el-row>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
import store from '../store/index'
import {sendWebsocket, wsUrl} from "@/socketio/websocket";
export default {
  name: "Paras",
  data(){
    return{
      isEdit:true,
      robotID:store.state.robotID,
      maxLinear:180,
      maxAngular:180,
      labelPosition:'right',
      mapInfo: {
        mapWidth:store.state.mapInfo.params[0].value,
        mapHeight:store.state.mapInfo.params[1].value,
        mapResolution:store.state.mapInfo.params[2].value
      },
      shuiPaoInfo:{
        upMotorV:store.state.PskdStateBackInfo.upMotorV,       //上电机速度
        downMotorV:store.state.PskdStateBackInfo.downMotorV      //下电机速度
      }

    }
  },
  computed:{
  },
  methods:{
    editRobotID(){
      console.log('editRobotID')
      // this.isEdit=!this.isEdit
      this.isEdit=false
    },
    shuiPaoChange(){
      console.log(this.shuiPaoInfo)
      store.commit("shuiPaoVChange",this.shuiPaoInfo)
    },
    mapInfoChange(){
      //console.log(store.state.mapInfo)
      console.log(this.mapInfo)
      store.commit("mapInfo",this.mapInfo)
      console.log("改变地图参数",store.state.mapInfo)
      sendWebsocket(wsUrl, store.state.mapInfo)
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 25px;
  color: #1c7e7c;
}
.el-collapse{
  //width: 500px;
  //background-color: white;
  text-align: center;
}

</style>
