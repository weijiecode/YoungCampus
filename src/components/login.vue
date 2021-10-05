<template>
  <div class="login_container">
    <div class="login_all">
      <div class="login_pic">
          <img src="../assets/picture/login1.png" alt="">
      </div>
      <div class="login_box">
          <p class="login_p">登录</p>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="0px"
          class="login_form"
        >
          <el-form-item prop="username">
            <el-input
              placeholder="请输入用户名"
              v-model="loginForm.username"
            >
              <!-- <template slot="prepend">账号：</template> -->
              </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <!-- <el-input
              v-model="loginForm.password"
              type="password"
              >
              <template slot="prepend">密码：</template>
              </el-input> -->
              <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-link class="login_reg">立即注册<i class="el-icon-s-promotion el-icon--right"></i> </el-link>
          <el-form-item class="btns">
            <el-button type="primary" @click="login" round >登录</el-button>
            <el-button type="info" @click="resetLoginForm" round>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Qs from "qs";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginFormRules: {
        username: [
          { require: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { require: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: { Qs },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        console.log("6666666");
        console.log(this.loginForm.username);
        console.log(this.loginForm.password);
        // let formData = new FormData;
        // formData.append("username", this.loginForm.username);
        // formData.append("password", this.loginForm.password);
        console.log(Qs.stringify(this.loginForm));
        const { data: res } = await this.$http.post(
          "login",
          Qs.stringify(this.loginForm)
        );
        console.log(res);
        if (res.code !== 200) return this.$message.error("账号或密码错误!");
        this.$message.success("登录成功！");
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.login_container {

  background-color: #e2d3fe;
  height: 100%;
  width: 100%;
}
.login_all {
  width: 956px;
  height: 500px;
  /* background-color: rgb(233, 36, 36); */
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_pic {
    width: 430px;
    height: 500px;
    float: left;
}
.login_pic img {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    width: 100%;
    height: 100%;
}
.login_p {
    margin-top: 120px;
    margin-left: 100px;
    font-size: 20px;
}
.login_box {
    border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    float: left;
  width: 525.8px;
  height: 500px;
  background-color: rgb(255, 255, 255);

}
.login_form {
    margin-left: 100px;
    margin-right: 100px;
}
.login_reg {
    float: right;
}
.btns {
    margin-top: 60px;
}
.el-button--primary {
 margin-left: 40px;
 width: 120px;
 background-color: #9479CE;
 border-color: #9479CE;
}
.el-button--primary:hover {
 background-color: #8a68d3;
 border-color: #8a68d3;
}
.el-button--primary:focus{
 background-color: #8a68d3;
 border-color: #8a68d3;
}
</style>