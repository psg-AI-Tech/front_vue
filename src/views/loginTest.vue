<template>
  <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-row>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(response => {
              this.loading = false;
              let code = response.data.code;
              if (code == 200) {
                this.$router.push({
                  path: "/success",
                  query: { data: response.data.data }
                });
              } else {
                this.$router.push({
                  path: "/error",
                  query: { message: response.data.message }
                });
              }
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          // eslint-disable-next-line no-console
          console.log("参数验证不合法！");
          return false;
        }
      });
    }
  }
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