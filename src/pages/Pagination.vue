<template>
  <div class="list">
    <template v-if="count">
      <ul>
        <li v-for="item in items">...</li>
      </ul>
      <div class="pagination">
        <paging
            :page-index="currentPage"
            :total="count"
            :page-size="pageSize"
            @change="pageChange">
        </paging>
      </div>
      <div class="current">当前为第 {{currentPage}} 页数据</div>
    </template>
  </div>
</template>
<script>
  import Paging from '../components/pagination'
  export default {
    //显示的声明组件
    components : {
      'paging': Paging
    },
    data () {
      return {
        pageSize : 20 , //每页显示20条数据
        currentPage : 1, //当前页码
        count : 50, //总记录数
        items : []
      }
    },
    methods : {
      // 获取数据
      getList () {
        // 模拟请求数据
        console.log('模拟请求数据')
      },
      // 从page组件传递过来的当前page
      pageChange(page) {
        this.currentPage = page
        this.getList()
      }
    },
    mounted() {
      // 请求第一页数据
      this.getList()
    }
  }
</script>
<style lang="less" scoped>
  .pagination{
    padding: 1rem 0;
    text-align: center;
  }
  .current{
    text-align: center;
  }
</style>