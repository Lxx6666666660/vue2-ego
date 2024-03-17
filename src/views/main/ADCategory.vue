<template>
  <div>
     <h2>数据报表</h2>
     <el-card>
      <div id="main" style="width: 600px;height: 400px; margin-left: 300px;"></div>
     </el-card>
  </div>
</template>

<script>

import * as echarts from 'echarts';


export default {
data() {
  return{}
},
created(){},
mounted(){
  var data = {
      categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      values: [10, 20, 15, 25, 30, 45]
    };

    // 创建图表实例
    var chart = echarts.init(document.getElementById('main'));

    // 设置图表配置项和数据
    var option = {
      xAxis: {
        type: 'category',
        data: data.categories
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data.values,
        type: 'bar'
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    chart.setOption(option);

},
methods:{}
}
</script>

<style lang="less" scoped>

</style>