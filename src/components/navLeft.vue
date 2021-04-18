<template>
  <div>
    <el-menu background-color="#001529" text-color="#ffffff" :router="true">
        <p>樱花金融后台管理系统</p>
        <menus v-for="(item,index) in menuData" :key="index" :menu="item"></menus> 
    </el-menu>
  </div>
</template>

<script>
import {get} from "@/utils/http"
import menus from "./menu"
export default {
    data(){
        return{
            menuData:[],
        }
    },
    mounted(){
        get("/menu").then((res)=>{
            this.menuData=res.data
        })
    },
    components:{
        menus
    }
};
</script>

<style lang="less" scoped>
.el-menu{
  width: 200px;
  p{color: #ffffff;margin-top: 20px;margin-left: 20px;}
}
</style>