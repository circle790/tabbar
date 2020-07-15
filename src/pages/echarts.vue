<template>
  <div class="page">
    <div ref="barEchart" id="main" class="main"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    let barEchartEle = this.$refs["barEchart"];
    let barEchart = echarts.init(barEchartEle);
    let symbolSize = 20;
    let data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
    barEchart.setOption({
      tooltip: {
        triggerOn: 'none',
        formatter: function (params) {
          return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
        }
      },
      xAxis: {
        min: -100,
        max: 80,
        type: 'value',
        axisLine: {onZero: false}
      },
      yAxis: {
        min: -30,
        max: 60,
        type: 'value',
        axisLine: {onZero: false}
      },
      series: [
        {
          id: 'a',
          type: 'line',
          smooth: true,
          symbolSize: symbolSize,
          data: data
        }
      ],
    });

    barEchart.setOption({
      graphic: echarts.util.map(data, function (item, dataIndex) {
        return {
          type: 'circle',
          position: barEchart.convertToPixel('grid', item),
          shape: {
            r: symbolSize / 2
          },
          invisible: true,
          draggable: true,
          ondrag: echarts.util.curry(onPointDragging, dataIndex),
          onmousemove: echarts.util.curry(showTooltip, dataIndex),
          onmouseout: echarts.util.curry(hideTooltip, dataIndex),
          z: 100
        };
      })
    });
    window.addEventListener('resize', function () {
      barEchart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
          return {
            position: barEchart.convertToPixel('grid', item)
          };
        })
      });
    });

    function showTooltip(dataIndex) {
      barEchart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
      });
    }

    function hideTooltip(dataIndex) {
      barEchart.dispatchAction({
        type: 'hideTip'
      });
    }

    function onPointDragging(dataIndex, dx, dy) {
      data[dataIndex] = barEchart.convertFromPixel('grid', this.position);
      barEchart.setOption({
        series: [{
          id: 'a',
          data: data
        }]
      });
    }
  },
  methods: {},
};
</script>

<style>
.main {
  width: 100%;
  height: 400px;
  margin: 100px auto 0;
  background-color: #ccc;
}
</style>
