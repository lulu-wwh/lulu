<template>
  <div class="login">
      <el-card >
        <div slot="header" class="title">
          <h1>樱花金融管理系统</h1>
        </div>
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" status-icon>
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:100%" @click="login">登录</el-button>
            </el-form-item>
          </el-form> 
      </el-card>
  </div>
</template>


<script>
import {post} from "@/utils/http.js"
import {setToken} from "@/utils/auth"
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password:'',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 8, message: '用户名要求4-8位字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 8, message: '密码要求4-8位字符', trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      login() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            post("/login",this.ruleForm).then((res)=>{
                  setToken(res.token)
                  this.$router.push("/")
                  sessionStorage.setItem("nickname",res.nickname)
            }).catch((error)=>{
              console.log(error)
            })
          }
        });
      },
    }
  }
</script>

<style lang="less" scoped>
.login{
  width: 500px;
  margin: auto;
  margin-top: 100px;
}
  .title{text-align: center;}

</style>
