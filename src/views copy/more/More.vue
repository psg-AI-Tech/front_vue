<template>
  <div class="page">
    <div class="base-info">
      <div class="pic">
        <img src="../../assets/img/default/robot.png" />
      </div>
      <div class="info">
        <el-descriptions :column="1">
          <el-descriptions-item label="机器人ID/名称">robotID</el-descriptions-item>
          <el-descriptions-item label="机器人角速度">linear.x</el-descriptions-item>
          <el-descriptions-item label="机器人线速度">angular.z</el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <div class="grades-info">
      <el-row>
        <el-col :span="12">
          <Control></Control>
        </el-col>
        <el-col :span="12">
<!--          <div id="chart" style="width: 100%; height: 500px"/>-->
          <Dingyue></Dingyue>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script type="text/javascript">

import Control from "@components/control/Control";
import Dingyue from "@components/control/Dingyue";
export default {
  name: "More",
  data() {
    return {
      info: {},
    };
  },
  components:{
    Control,
    Dingyue
  },
  methods: {
  //   drawChart() {
  //     console.info(option)
  //     const chart = this.$echarts.init(document.getElementById('chart'))
  //     chart.setOption(option)
  //   },
     },
  created() {
    console.log(localStorage.getItem("id"));
  },
  mounted() {
    // this.drawChart();
  },
};
</script>

<style scoped lang="scss">
.page {
  & > div {
    margin-top: 12px;

    &:first-child {
      margin-top: 0;
    }
  }
  .page > div[data-v-4270cc76]:first-child {
    margin-top: 20px;
  }

  .base-info {
    display: flex;
    background-color: #FFF;

    & > div {
      padding-left: 16px;

      &:first-child {
        padding-left: 0px;
      }
    }

    .pic {
      position: relative;
      top: 20px;

      & > img {
        $unit: 40px;
        width: 2*$unit;
        height: 2.5*$unit;
      }
    }

    .info {
      margin-top: 20px;
      height: 100%;

      & .el-descriptions {
        font-size: 20px;
      }
    }
  }


  .grades-info {
    min-height: 500px;

    #chart {
      border: 1px solid #1c7e7c;
    }
  }
}


</style>

