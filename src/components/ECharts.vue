<!-- 三个图公共部分写在一起 -->
<template>
  <div ref="echart">
  </div>
</template>

<script>
import * as echart from 'echarts'
export default {
  props: {
    isAxisChart: {
      type: Boolean,
      // 默认值为true
      default: true
    },
    data() {
      return {
        axisOption: {
          xAxis: {
            data: xData
          },
          yAxis: {},
          legend: {
            data: keyArray
          },
          series
        },
        normalOption: {
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
          series: [],
        }
      }
    },
    chartDate: {
      type: Object,
      default() {
        return {
          xDate: [],
          series
        }
      }
    },
    computed: {
      options() {
        return this.isAxisChart ? this.axisOption : this.normalOption

      }
    }
  }
}
</script>

