<template>
  <div class="page">
    <div class="pageContent">
      <div class="login-box">
        <el-form
            label-position="left"
            label-width="0px"
            class="demo-ruleForm login-container"
            ref="loginform"
            :rules="rules"

        >
          <h3 class="title">城市应急指挥系统登录</h3>
          <el-form-item prop="username">
            <el-input
                type="text"
                prefix-icon="el-icon-user-solid"
                auto-complete="off"
                placeholder="用户名"
                id="loginEmail"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                type="password"
                prefix-icon="el-icon-lock"
                auto-complete="off"
                placeholder="密码"
                id="loginPassword"
            ></el-input>
            <label id="showPasswordToggle"> </label>
          </el-form-item>
          <el-form-item style="width: 100%">
            <div>
              <el-button
                  type="primary"
                  style="width: 100%; background-color: #409EFF; font-size: 20px; margin-top: 20px"
                  @click="userLogin"
                  round
              >登录
              </el-button
              >
            </div>
            <div class="mt5">
              <el-link type="info"  :underline="false"
                       style="width: 100%; font-size: 16px; text-align: center; margin-top: 10px">立即注册
              </el-link>
            </div>
          </el-form-item>
        </el-form>


      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "test",
  data() {
    return {
      loginInfo: {
        username: "admin",
        password: "123",
      },
      registerData: {
        registerFlag: false,
        registerInfo: {
          username: "",
          Name: "",
          password: "",
        },
      },
      rules: {
        username: [{required: true, trigger: "blur"}],
        Name: [{required: true, trigger: "blur"}],
        password: [{required: true, trigger: "blur"}],
      },
    };
  },
  methods: {
    userLogin() {
      // this.$refs["loginform"].validate((v) => {
      //   if (v) {
      //     // console.log("111");
      //     login(this.loginInfo);
      //   } else {
      //     this.$message.error("请输入用户名或密码");
      //   }
      // });
    },
    userRegister() {
      // // this.registerData.registerFlag = false;
      // // this.registerData.registerInfo.LoginPassword = this.registerData.registerInfo.password;
      // register(this.registerData.registerInfo).then((res) => {
      //   console.log(res);
      //   if (res == "注册成功") {
      //     this.$message.success("注册成功");
      //     this.registerData.registerFlag = false;
      //   } else {
      //     this.$message.error(res);
      //   }
      // });
    },
  },
  mounted() {
    // localStorage.clear();
    // this.$localforage.clear();
  },
};
</script>

<style scoped lang="scss">

.title {
  text-align: center;
  margin-bottom: 15px;
  font-size: 24px;
  color: #409EFF;
}

@media (min-width: 800px) {
  .page {
    //background-image: url("../assets/img/2.jpg");

    .login-box {
      border-radius: 0.6em;
    }
  }

}
.page {
  //background-color: $primaryColor;
  background-image: url("../assets/img/2.jpg");
  position: fixed;
  left: 0;
  top: 0;
  /*background-color: #eff3f4;*/
  /*position: absolute;*/
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}

.pageContent {

  width: 100%;
  height: 100%;
}

.login-box {
  border-radius: 0.4em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  width: 96%;
  max-width: 450px;
  background-color: rgba(255,255,255,.8);
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  //border: solid 1px #ddd;
  font-family: "Source Sans Pro", sans-serif;
}
</style>
