<template>
  <div class="fr">
    <span>今天是你在网时代的第{{days}}天</span>
    <el-dropdown class="fr" @command="change">
      <span class="el-dropdown-link">
        欢迎您，{{info}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人中心</el-dropdown-item>
        <el-dropdown-item command="b">信息中心</el-dropdown-item>
        <el-dropdown-item command="c">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {get} from "@/utils/http"
 import {removeToken} from "@/utils/auth"
export default {
    data(){
        return{
            time:""
        }
    },
    computed:{
        info(){
            return sessionStorage.getItem("nickname")
        },
        days(){
            let target=new Date(this.time);
            let now=new Date();
            return Math.floor((now-target)/1000/60/60/24)
        }
    },
    mounted(){
        get("/in").then((res)=>{
            this.time=res.time;
        })
    },
    methods:{
        change(command){
            if(command=="c"){
                removeToken()
                this.$router.push("/login")
            }
        }

    }
};
</script>

<style scoped>
span{margin-right: 20px;line-height: 60px;}
</style>