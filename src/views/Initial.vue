<template>
<div class="page">
  <h1>欢迎进入智能小车控制系统，请稍候......</h1>
</div>
</template>

<script>
// import {Loading} from "element-";

export default {
  name: "Initial",
  // methods:{
  //   loading(){
  //     let loading = Loading.service({
  //         lock: true,
  //         text: 'Loading',
  //         spinner: 'el-icon-loading',
  //         background: 'rgba(0, 0, 0, 0.7)'
  //     });
  //   }
  // },
  mounted() {
     //this.loading()
    setTimeout(()=>{
   //   this.$router.replace("/login");
      this.$router.replace("/login");
    },2000)
  }
}
</script>

<style scoped>
.page {
  background-image: url("../assets/bg.jpeg");
  position: fixed;
  left: 0;
  top: 0;
  background-color: #eff3f4;
  /*position: absolute;*/
  width: 100%;
  height: 98%;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
