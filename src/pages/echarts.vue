<template>
  <div class="page">
    <div ref="lineEchart" class="line-echart"></div>
    <div ref="pieEchart" class="pie-echart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    let lineOption = {
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        formatter: '{x|{name}}',
        icon: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
        textStyle: {
          rich: {
            x: {
              color: 'red',
              fontFamily: 'Microsoft YaHei',
              borderColor: '#449933',
              backgroundColor: 'yellow',
              borderRadius: 4
            }
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
          symbol: ['none', 'arrow'],
          lineStyle: {
            color: '#ccc'
          },
        },
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
    let lineEchartEle = this.$refs["lineEchart"];
    let lineEchart = echarts.init(lineEchartEle);
    lineEchart.setOption(lineOption);
    window.addEventListener('resize', () => {
      lineEchart.resize();
    })

    let pieOption = {
      title: {
        text: '天气情况统计',
        subtext: '虚构数据',
        left: 'center'
      },
      color: ['#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 10,
        left: 'center',
        data: ['西凉', '益州', '兖州', '荆州', '幽州']
      },
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            {value: 1548, name: '幽州'},
            {value: 535, name: '荆州'},
            {value: 510, name: '兖州'},
            {value: 634, name: '益州'},
            {value: 735, name: '西凉'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    let pieEchartEle = this.$refs["pieEchart"];
    let pieEchart = echarts.init(pieEchartEle);
    pieEchart.setOption(pieOption);
    window.addEventListener('resize', () => {
      pieEchart.resize();
    })
  },
  methods: {},
};
</script>

<style>
.line-echart {
  width: 100%;
  height: 400px;
  margin: 50px auto 0;
}
.pie-echart {
  width: 100%;
  height: 400px;
  margin: 50px auto 0;
}
</style>
