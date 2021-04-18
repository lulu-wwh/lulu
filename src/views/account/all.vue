<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index"
        >{{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row>
        <el-col :span="8">
          <el-input v-model="searchValue" placeholder="手机号、姓名、角色类型">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="8">
          <el-button type="primary" @click="create">新建角色</el-button>
          <el-button :disabled="!selectedRows.length">启动</el-button>
          <el-button :disabled="!selectedRows.length">冻结</el-button>
          <el-button :disabled="!selectedRows.length">删除</el-button>
        </el-col>
        <el-col>
          <el-table
            :data="tableData"
            @select="select"
            style="width: 100%"
            @select-all="selectAll"
          >
            <el-table-column type="selection"> </el-table-column>
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="account" label="账户"></el-table-column>
            <el-table-column prop="character" label="角色"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
            <el-table-column prop="reason" label="创建原因"></el-table-column>
            <el-table-column prop="status" label="状态">
              <template slot-scope="scope">
                {{ scope.row.status == 1 ? "已启用" : "未启用" }}
              </template>
            </el-table-column>
            <el-table-column label="操作" width="300px">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row)"
                  >编辑</el-button
                >
                <el-button size="mini" type="danger">删除</el-button>
                <el-button size="mini">
                  {{ scope.row.status == 1 ? "禁用" : "启用" }}
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog title="提示" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="forms">
        <el-form-item label="角色" label-width="100px" prop="character">
          <el-select
            v-model="form.character"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="业务人员" value="1"></el-option>
            <el-option label="审核人员" value="2"></el-option>
            <el-option label="风控经理" value="3"></el-option>
            <el-option label="管理员" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" label-width="100px" prop="remark">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item label="创建原因" label-width="100px" prop="reason">
          <el-input v-model="form.reason"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onOk">确 定</el-button>
      </div>
    </el-dialog>
     <el-pagination
      :current-page="params.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="params.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
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
      searchValue: "",
      tableData: [],
      total: 0,
      selectedRows: [],
      dialogFormVisible: false,
      form: {
        character: "",
        remark: "",
        reason: "",
      },
      params:{
        page:1,
        size:10
      },
      rules: {
        character: [
          { required: true, message: "请选择角色", trigger: "change" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
        reason: [
          { required: true, message: "请输入创建原因", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    create() {
      (this.dialogFormVisible = true), this.$refs["forms"].resetFields();
    },
    list() {
      get("/all").then((res) => {
        (this.tableData = res.data.list), (this.total = res.data.tatal);
      });
    },
    select(selection) {
      this.selectedRows = selection;
    },
    selectAll(selection) {
      this.selectedRows = selection;
    },
    onOk() {
      this.$refs["forms"].validate((valid) => {
        if (valid) {
          this.$message.success("创建成功");
          this.list();
          this.dialogFormVisible = false;
          this.$refs["forms"].resetFields();
        }
      });
    },
    handleEdit(row) {
      this.dialogFormVisible = true;
      this.form = {
        character: row.character,
        remark: row.remark,
        reason: row.reason,
      };
    },
  },
};
</script>

<style scoped>
</style>