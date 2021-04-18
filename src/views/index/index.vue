<template>
  <div class="index">
    <el-row :gutter="20">
      <!-- 四个卡片 -->
      <el-col :span="6">
        <el-card shadow="always" class="card1 cards">
          <div class="fl">
            <p>本月进件</p>
            <p>6588</p>
            <p>+20.12% 与上月相比</p>
          </div>
          <i class="el-icon-tickets card"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="card2 cards">
          <div class="fl">
            <p>本月放款（元）</p>
            <p>121000000</p>
            <p>+1.25% 与上月相比</p>
          </div>
          <i class="el-icon-money card"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="card3 cards">
          <div class="fl">
            <p>累计进件</p>
            <p>128700</p>
            <p>+11.48% 与去年相比</p>
          </div>
          <i class="el-icon-date card"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="card4 cards">
          <div class="fl">
            <p>累计放款</p>
            <p>923380079</p>
            <p>-2.06% 与去年同比</p>
          </div>
          <i class="el-icon-coin card"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="18" class="mt">
        <!-- 进件统计分析 -->
        <el-card>
          <div slot="header" style="text-align: center; line-height: 50px">
            <span style="color: #000000">进件统计分析</span>
          </div>
          <div ref="analysis" style="height: 240px"></div>
        </el-card>
      </el-col>
      <el-col :span="6" class="mt">
        <!-- 进件产品比 -->
        <el-card>
          <div slot="header" style="text-align: center; line-height: 50px">
            <span style="color: #000000">进件产品比</span>
          </div>
          <div ref="pie" style="height: 240px"></div>
        </el-card>
      </el-col>
      <!-- 时间线 -->
      <el-col :span="12" class="mt">
        <el-card body-style="height:500px">
          <el-timeline>
            <el-timeline-item timestamp="2020/07/01" placement="top">
              <el-card>
                <div>审核订单</div>
                <div style="color: #666666">李红操作与08：54</div>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/07/01" placement="top">
              <el-card>
                <div>新增贷款</div>
                <div style="color: #666666">王小虎 操作于11:24</div>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/07/01" placement="top">
              <el-card>
                <div>新增渠道</div>
                <div style="color: #666666">张浩 操作于15:23</div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <!-- 日历 -->
      <el-col :span="12" class="mt">
        <el-card body-style="height:500px">
          <el-calendar> </el-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
    this.drawPie();
  },
  methods: {
    drawLine() {
      var myChart = this.$echarts.init(this.$refs["analysis"]);
      var option = {
        type: "category",
        xAxis: {
          data: ["20-01", "20-02", "20-03", "20-04", "20-05", "20-06", "20-07"],
        },
        yAxis: {},
        series: [
          {
            data: [30, 84, 56, 47, 84, 61, 90],
            type: "line",
            smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4f88ff", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#ffffff", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    drawPie() {
      let myChart = this.$echarts.init(this.$refs["pie"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "房闪贷" },
              { value: 310, name: "新车贷" },
              { value: 234, name: "资金贷" },
              { value: 135, name: "合力贷" },
              { value: 1548, name: "其他" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.index {
  height: 80vh;
}
.cards {
  color: #ffffff;
}
p {
  margin-bottom: 20px;
}
.card1 {
  background: rgb(75, 134, 250);
}
.card2 {
  background: rgb(241, 93, 117);
}
.card3 {
  background: rgb(78, 78, 250);
}
.card4 {
  background: rgb(242, 151, 58);
}
.card {
  font-size: 60px;
  margin-top: 10px;
}
</style>