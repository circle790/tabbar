<template>
  <div class="page">
    <div class="three-d-picker">
      <smooth-picker :data="list" :change="choosed"></smooth-picker>
    </div>
  </div>
</template>

<script>
import SmoothPicker from "../components/SmoothPicker";
export default {
  components: {
    SmoothPicker,
  },
  data() {
    return {
      list: [
        {
          currentIndex: 0,
          flex: 3,
          list: [
            'Plan A - free', 'Plan B - $50', 'Plan C - $100'
          ],
          textAlign: 'center',
          className: 'row-group'
        },
        {
          divider: true,
          flex: 1,
          text: 'product',
          textAlign: 'center',
          className: 'divider'
        },
        {
          currentIndex: 2,
          flex: 3,
          list: [
            '1 * A item', '2 * A items', '3 * A items', '4 * A items', '5 * A items'
          ],
          textAlign: 'center',
          className: 'item-group'
        }
      ],
    };
  },
  methods: {
    choosed(gIndex, iIndex) {
      console.log("gIndex===" + gIndex + ";iIndex===" + iIndex);
    },
  },
};
</script>

<style scoped>
  .three-d-picker{
    font-size: 18px;
  }
</style>
