<template>
  <div>
    <h1>Welcome!{{msg}}</h1>
    <el-row>
      <!-- 按钮分类： -->
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" 
          :loading="loading"
          @click.native.prevent="stateRun"
          >改变状态{{statusRun}}</el-button>
                  
      <el-button type="text">text</el-button>
    </el-row>

    <el-row>
      <!-- 按钮样式： -->
      <el-button type="primary" plain>朴素按钮</el-button>
      <el-button type="primary" round>圆角按钮</el-button>
      <el-button type="primary" circle icon="el-icon-search"></el-button>
    </el-row>

    <el-row>
        <!-- 按钮状态： -->
    <el-button type="primary">正常</el-button>
    <el-button type="primary" disabled>禁用</el-button>
    </el-row>
    <el-row>
          <!-- 按钮分组： -->
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </el-row>
    <el-row>
        <!-- 按钮的尺寸： -->
      <el-button>默认</el-button>
      <el-button type="primary" size="medium ">medium</el-button>
      <el-button type="primary" size="small">small</el-button>
      <el-button type="primary" size="mini">mini</el-button>
    </el-row>



      <!-- <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <h2 class="login-title color-main">登录页面</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
          >
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
      </el-form> -->
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      statusRun: "-RUN",
    };
  },
  methods:{
    stateRun() {
      console.log("click--");
      this.statusRun="changed";
      this.$router.push({
                  path: "/error",
                  query: {message: "跳转"}
                  });
    }
  }
  // name: "login",
  // data() {
  //   return {
  //     loginForm: {
  //       username: "admin",
  //       password: "123456"
  //     },
  //     // loading: false,
  //     // pwdType: "password",
  //   };
  // },
  // methods: {
  //   showPwd() {
  //     if (this.pwdType === "password") {
  //       this.pwdType = "";
  //     } else {
  //       this.pwdType = "password";
  //     }
  //   },
  //   handleLogin() {
  //     this.$refs.loginForm.validate(valid => {
  //       if (valid) {
  //         this.loading = true;
  //         this.$store
  //           .dispatch("Login", this.loginForm)
  //           .then(response => {
  //             console.log(response.data.code);
  //             this.loading = false;
  //             let code = response.data.code;
  //             // let code=200
  //             if (code == 200) {
  //               this.$router.push({
  //                 path: "/successTest",
  //                 query: { data: response.data.data }
  //               });
  //             } else {
  //               this.$router.push({
  //                 path: "/error",
  //                 query: { message: response.data.message }
  //               });
  //             }
  //           })
  //           .catch(() => {
  //             this.loading = false;
  //           });
  //       } else {
  //         // eslint-disable-next-line no-console
  //         console.log("参数验证不合法！");
  //         return false;
  //       }
  //     });
  //   }
  // }
  
};
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>