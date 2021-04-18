<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px" class="aside">
        <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header>
          <headers></headers>
        </el-header>
        <el-main>
          <keep-alive>
             <router-view v-if="$route.meta.keepAlive"/>
          </keep-alive>
           <router-view v-if="!$route.meta.keepAlive"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavLeft from "@/components/navLeft"
import Headers from "@/components/header"
  export default {
    components:{
      NavLeft,Headers
    }
  }
</script>

<style scoped>
.aside{
  height: 1180px;
  background: #001529;
}
.el-main{background: rgb(231,234,237);}
::-webkit-scrollbar { display: none; }

</style>