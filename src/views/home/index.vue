<template>
  <el-row class="home" :gutter="10">
    <el-col :span="8.5" style="margin-top: 0px;">
      <el-card shadow="ho">
        <div class="box">
          <!-- <img src="../assets/1.jpeg" alt=""> -->
          <img src="@/assets/1.jpeg" alt="">
          <p class="adm1">Admin</p>
          <p class="adm2">超级管理员</p>
        </div>
        <div class="text1">上次登录时间：<span>2022-6-9</span>
        </div>
        <div class="text2">上次登录地点：<span>北京</span>
        </div>
      </el-card>
      <!-- 表单数据栏 -->
      <el-card style="margin-top: 0px; height: 400px; width: 380px" shadow="ho">
        <el-table :data="tableData">
          <!-- 如果属性多确实不方便 -->
          <el-table-column prop="name" label="品牌" width="130">
          </el-table-column>
          <el-table-column prop="allbuy" label="总购买" width="130">
          </el-table-column>
          <el-table-column prop="thismouthbuy" label="本月购买">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 1 -->
    <el-card shadow="never" style="width: 220px; height: 60px; position: absolute;left: 410px; ">
      <div class="yes"><i class="el-icon-circle-check"></i>
      </div>
      <div class="mun">¥ 1234 <span>¥ 今日支付订单</span></div>
    </el-card>
    <!-- 2 -->
    <el-card shadow="never" style="width: 220px; height: 60px; position: absolute;left: 645px;">
      <div class="star"><i class="el-icon-star-off"></i>
      </div>
      <div class="star1">¥ 1234 <span>¥ 今日支付订单</span></div>
    </el-card>
    <!-- 3 -->
    <el-card shadow="never" style="width: 220px; height: 60px; position: absolute;left: 880px;">
      <div class="buy"><i class="el-icon-goods"></i>
      </div>
      <div class="buy1">¥ 1234 <span>¥ 今日支付订单</span></div>
    </el-card>
    <!-- 4 -->
    <el-card shadow="never" style="width: 220px; height: 60px; position: absolute;left: 410px; top: 70px;">
      <div class="yes"><i class="el-icon-circle-check"></i>
      </div>
      <div class="mun">¥ 1234 <span>¥ 今日支付订单</span></div>
    </el-card>
    <!-- 5 -->
    <el-card shadow="never" style="width: 220px; height: 60px; position: absolute;left: 645px; top: 70px;">
      <div class="star"><i class="el-icon-star-off"></i>
      </div>
      <div class="star1">¥ 1234 <span>¥ 今日支付订单</span></div>
    </el-card>
    <!-- 6 -->
    <el-card shadow="never" style=" width:220px; height: 60px; position: absolute;left: 880px; top: 70px;">
      <div class="buy"><i class="el-icon-goods"></i>
      </div>
      <div class="buy1">¥ 1234 <span>¥ 今日支付订单</span></div>
    </el-card>
    <!-- 折线图 -->
    <el-card class="wan" style="height: 230px;">
      <!-- ref引入一个规则 -->
      <div style="height: 230px;" ref="echarts"></div>
    </el-card>

    <div class="graph">
      <el-card class="card1">
        <div style="height: 200px;" ref="userEcharts"></div>
      </el-card>
      <el-card class="card2">
        <div style="height: 180px;" ref="videEcharts"></div>
      </el-card>
    </div>
  </el-row>
</template>

 <script>
// import axios from 'axios',
// import { getData } from '../api/data.js'
import { getData } from '@/api/data.js'
import * as echarts from 'echarts'
// import { objectToString } from '@vue/shared'
export default {
  
  data() {
    return {
      name:'Home',
      tableData: [{
        name: 'OPPO',
        allbuy: '22000',
        thismouthbuy: '3500'
      }, {
        name: 'vivo',
        allbuy: '24000',
        thismouthbuy: '2200'
      }, {
        name: '华为',
        allbuy: '65000',
        thismouthbuy: '4500'
      }, {
        name: '小米',
        allbuy: '34000',
        thismouthbuy: '2200'
      }]
    }
  },
  mounted() {
    getData().then(res => {
      const { code, data } = res.data
      if (code === 20000) {
        this.tableData = data.tableData
        const order = data.orderData
        const xData = order.date
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach(key => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })

        const option = {
          xAxis: {
            data: xData
          },
          yAxis: {},
          legend: {
            data: keyArray
          },
          series
        }
        const E = echarts.init(this.$refs.echarts)
        E.setOption(option)

        //柱状图
        const userOption = {
          legend: {
            //图例文字颜色（上面的）
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "10%",
          },
          //提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            data: data.userData.map(item => item.data),
            type: "category",
            axisLine: {
              linestyle: {
                color: '#17b3a3'
                // color: '#333'
              }
            },
            axisLable: {
              interval: 1,
              color: "#333"
            }
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                linestyle: {
                  color: '#17b3a3'
                }
              },
            }
          ],
          // 柱状图的颜色
          color: ["#2ec7c9", "#b6a2de"],
          // 和home中的数据做连接
          series: [
            {
              name: '新增用户',
              data: data.userData.map(item => item.new),
              type: 'bar'
            },
            {
              name: '活跃用户',
              data: data.userData.map(item => item.active),
              type: 'bar'
            }
          ]
        }
        const U = echarts.init(this.$refs.userEcharts)
        U.setOption(userOption)

        // 饼状图
        const videOption = {
          tooltip: {
            trigger: "item"
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#e1bb22",
            "#333",
            "#3ed1cf",
            "#39c362"
          ],
          series: [
            {
              data: data.videData,
              type: 'pie'
            }

          ],
        }

        const V = echarts.init(this.$refs.videEcharts)
        V.setOption(videOption)

      }
      console.log(res);
    })
  }
}
</script>
<style scoped>
.card2 {
  float: right;
  width: 340px;
  height: 200px;
}

.card1 {
  position: absolute;
  float: left;
  width: 340px;
  height: 200px;
}

.graph {
  position: absolute;
  top: 400px;
  left: 400px;
  width: 700px;
  height: 130px;
}

.wan {

  position: absolute;
  top: 150px;
  left: 400px;
  width: 700px;
}

.yes {
  background-color: rgb(0, 208, 255);
  border-radius: 3px;
  position: absolute;
  left: 1px;
  width: 55px;
  height: 55px;
  top: 50%;
  transform: translateY(-50%)
}

.star {
  background-color: rgb(255, 179, 0);
  border-radius: 3px;
  position: absolute;
  left: 1px;
  width: 55px;
  height: 55px;
  top: 50%;
  transform: translateY(-50%)
}

.buy {
  background-color: blue;
  border-radius: 3px;
  position: absolute;
  left: 1px;
  width: 55px;
  height: 55px;
  top: 50%;
  transform: translateY(-50%)
}

.mun {

  position: absolute;
  left: 60px;
  top: 10px;
  font-size: 16px;
}

.star1 {
  position: absolute;
  left: 60px;
  top: 10px;
  font-size: 16px;
}

.buy1 {
  position: absolute;
  left: 60px;
  top: 10px;
  font-size: 16px;
}

.mun span {
  position: absolute;
  width: 100px;
  top: 30px;
  left: 0px;
  font-size: 10px;
  color: rgb(137, 130, 130);
}

.star1 span {
  position: absolute;
  width: 100px;
  top: 30px;
  left: 0px;
  font-size: 10px;
  color: rgb(137, 130, 130);
}

.buy1 span {
  position: absolute;
  width: 100px;
  top: 30px;
  left: 0px;
  font-size: 10px;
  color: rgb(137, 130, 130);
}

.el-icon-circle-check {
  position: absolute;
  font-size: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.el-icon-star-off {
  position: absolute;
  font-size: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.el-icon-goods {
  position: absolute;
  font-size: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.home {
  height: 50px;
}

img {
  height: 95px;
  width: 100px;
  float: left;
  position: relative;
  top: -40px;
}

.adm1 {
  color: red;
  Font-size: 29px;
  position: relative;
  top: -20px;
}

.adm2 {
  color: rgb(122, 113, 113);
  Font-size: 12px;
  position: relative;
  top: -50px;

}

.text1 {
  font-size: 10px;
  position: relative;
  top: -20px;
}

.text2 {
  font-size: 10px;
  position: relative;
  top: -20px;
}

.money {
  background-color: aquamarine;
}
</style>
