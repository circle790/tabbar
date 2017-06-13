<template>
    <div class="list" @scroll="this.scroll">
      <template v-if="totalCount">
        <slot></slot>
      </template>
      <template v-else>
        <no-data :no-data-tips="noDataTips"></no-data>
      </template>
    </div>
</template>

<script>
    import noData from './noData'
    export default{
        props: ['callback', 'currentPage', 'totalPage', 'totalCount', 'isLoading', 'noDataTips'],
        data: function(){
            return {
                current: this.currentPage,
            }
        },
        components: {
          noData
        },
        methods: {
            scroll: function(event){
                if (event.target.scrollTop >= event.target.scrollHeight - event.target.clientHeight && this.current < this.totalPage && !this.isLoading) {
                    this.current++;
                    this.$parent.isLoading = true;
                    this.callback(this.current);
                }
            }
        },
        mounted() {
            this.callback(this.current);
        }
    }
</script>
