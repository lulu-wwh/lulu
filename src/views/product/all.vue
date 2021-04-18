<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index"
        >{{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row :gutter="20">
        <el-col :span="6"
          ><el-input
            style="width: 100%"
            v-model.trim="params.name"
            placeholder="产品名称"
          ></el-input
        ></el-col>
        <el-col :span="6">
          <el-select style="width: 100%" v-model="params.rate" placeholder="利率">
            <el-option label="3.8%" value="3.8">3.8</el-option>
            <el-option label="3.9%" value="3.9">3.9</el-option>
            <el-option label="4.1%" value="4.1">4.1</el-option>
            <el-option label="4.3%" value="4.3">4.3</el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            style="width: 100%"
            v-model="params.data"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
          <span @click="toggle">
            {{ advanced ? "收起" : "展开" }}
            <i
              :class="advanced ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
            ></i>
          </span>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mt" v-show="advanced">
        <el-col :span="6">
          <el-input placeholder="产品类别" v-model.trim="params.category" />
        </el-col>
        <el-col :span="6">
          <el-input placeholder="最高分期数" v-model.trim="params.best" />
        </el-col>
        <el-col :span="6">
          <el-input placeholder="状态" v-model.trim="params.status" />
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table :data="tableData">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="id" label="产品名称"></el-table-column>
        <el-table-column prop="type" label="产品类别"></el-table-column>
        <el-table-column prop="rate" label="利率"></el-table-column>
        <el-table-column prop="date" label="开放日期"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-button size="mini" type="success" v-if="scope.row.status == 1"
              >已启用</el-button
            >
            <el-button size="mini" type="danger" v-else>已禁用</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="highest"
          label="最高分期数（月）"
        ></el-table-column>
        <el-table-column prop="number" label="申请客户数量"></el-table-column>
        <el-table-column prop="total" label="累计签约金额"></el-table-column>
        <el-table-column prop="average" label="件均"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" v-if="scope.row.status == 1" 
              >停用</el-button
            >
            <el-button size="mini" type="primary" v-else >启用</el-button>
            <el-button size="mini" type="primary" @click="detail(scope.row.name)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb.js";
import { get } from "@/utils/http";
export default {
  mixins: [breadCrumb],
  mounted() {
    this.list();
  },
  data() {
    return {
      advanced: false,
      params: {
        name: "",
        rate: "",
        data: "",
        category: "",
        best: "",
        status: "",
      },
      tableData: [],
    };
  },
  methods: {
    toggle() {
      this.advanced = !this.advanced;
    },
    list() {
      get("/productList").then((res) => {
        this.tableData = res.data.list;
        this.total = res.data.total;
      });
    },
    detail(name){
      sessionStorage.setItem("name",name)
      this.$router.push("/product/detail");
    }
  },
};
</script>

<style scoped>
</style>