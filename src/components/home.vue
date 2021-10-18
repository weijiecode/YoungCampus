<template>
  <div class="all">
    <div class="top">
      <!-- <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      > -->
      <span
        class="iconfont icon-xiaoyuan"
        style="
          font-size: 30px;
          color: #9479ce;
          float: left;
          display: block;
          margin-top: 10px;
          margin-left: 10px;
        "
      ></span>
      <img src="../assets/logo.png" alt="" />
      <el-col :span="2">
        <el-dropdown>
          <span class="el-dropdown-link">
            社区
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-tickets">帖子列表</el-dropdown-item>
            <el-dropdown-item icon="el-icon-collection-tag">全部标签</el-dropdown-item>
            <el-dropdown-item icon="el-icon-paperclip">全部分类</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2">
        <el-dropdown>
          <span class="el-dropdown-link">
            校园
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">选项1</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">选项2</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">选项3</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">选项4</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">选项5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2">
        <el-dropdown>
          <span class="el-dropdown-link">
            网站
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">选项1</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">选项2</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">选项3</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">选项4</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">选项5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2">
        <el-dropdown>
          <span class="el-dropdown-link">
            我的
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">个人资料</el-dropdown-item>
            <el-dropdown-item icon="el-icon-document">我的帖子</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">选项3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!-- <el-col :span="2">
        <el-dropdown>
          <span class="el-dropdown-link">
            色情
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">步兵</el-dropdown-item>
            <el-dropdown-item icon="el-icon-document">骑兵</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">国兵</el-dropdown-item>
            <el-dropdown-item icon="el-icon-user">韩兵</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2" style="clear: right;">
        <el-dropdown>
          <span class="el-dropdown-link">
            赌博
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">澳门赌场</el-dropdown-item>
            <el-dropdown-item icon="el-icon-document">昌腾发牌</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">云炜郎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col> -->
      <div class="search">
        <el-input size="medium" placeholder="请输入搜索内容" class="input-with-select">

        </el-input>
      </div>
        <!-- 账户信息 -->
        <el-col :span="2" style="float:right;margin-left:-40px;margin-right:20px;">
          <el-dropdown>
            <i class="el-icon-user" style="font-size:24px;cursor: pointer;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-key">修改密码</el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button" @click.native="loginout">退 出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <!-- 消息通知 -->
      <i class="el-icon-bell" style="font-size:24px;margin-top:10px;float:right;cursor: pointer;"></i>

      <!-- <el-button type="primary" @click="loginout">退出账号</el-button> -->
    </div>
        <div class="nowtext">
          <el-input
            v-model="nowtext"
            clearable>
             <template slot="prepend">即刻</template>
             <el-button slot="append" icon="el-icon-loading"></el-button>
          </el-input>
        </div>

  </div>
</template>

<script>
export default {
  created() {
    this.getNowtext()
  },
  data() {
    return {
      nowtext:[],
    };
  },
  methods: {
    loginout() {
      // window.sessionStorage.clear();
      this.$store.commit('del_token');
      this.$router.push("/login");
      this.$notify({
          title: '警告',
          message: '已从该设备安全退出',
          type: 'warning'
        });
    },
    // 即刻
    async getNowtext(){
      const {data:res} = await this.$http.get('content/nowtext')
      console.log('即刻')
      console.log(res)
    }
  },
};
</script>

<style scoped>
.el-message--success {
  background-color: #9479ce;
  font-size: #fff;
}
.all {
  background-color: rgb(250, 245, 245);
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
}
.top img {
  float: left;  
  height: 50px;
  margin-right: 100px;
}

.el-dropdown{
  margin-left: 50px;
  margin-top: 10px;
  font-size: 17px;
  width: 60px;
  height: 30px;
  text-align: center;

}

.el-dropdown-link:hover{
  height: 30px;
  color: #fff;
  background-color: #8a68d3;
  cursor: pointer;
  border-radius: 4px;
  display: block;
  text-align: center;
  padding-top: 3px;
}
.el-col-2 {
  margin-left: -22px;
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #8a68d3 !important;
  color: #fff;
}

.search {
  width: 20%;
  float: left;
  margin-top: 7px;
  margin-left: 50px;
}
/deep/.el-input__inner:focus {
    border-color: #8a68d3 !important;
    outline: 0;
}
.nowtext /deep/.el-input__inner {
  border: 1px solid #8a68d3;
  border-left: 0px;
  border-right: 0px;
}
.nowtext {
  margin-top: 25px;
  margin-left: 100px;
  margin-right: 100px;
}
/deep/ .el-input__inner{
          height: 50px;
        }
/deep/ .el-input-group__prepend {
  background-color: #fff;
  color: black;
  font-size: 16px;
  font-weight: bolder;
  border: 1px solid #8a68d3;
  border-right: 0px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
/deep/ .el-input-group__append {
  background-color: #fff;
  border: 1px solid #8a68d3;
  border-left: 0px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>