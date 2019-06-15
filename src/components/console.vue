<template>
  <div class="lui-console">
    <div @contextmenu="clear" class="lui-console__button">右键清空</div>
    <div v-for="(item, index) in infoList" :key="index" class="lui-console__list">
      <span v-for="(l,i) in item" :key="i" class="lui-console__span">{{'   '+ l + '   '}}</span>
    </div>
  </div>
</template>
<script>
let temp = console.log

export default {
  data () {
    return {
      infoList: []
    }
  },
  mounted () {
    console.log = (...args) => {
      temp(...args)
      this.infoList.push(args)
    }
  },
  beforeDestroy () {
    console.log = temp
  },
  methods: {
    clear (e) {
      e.preventDefault()
      this.infoList = []
    }
  }
}
</script>
<style lang="less">
.lui-console {
  position: fixed;
  padding-top: 20px;
  height: 500px;
  width: 300px;
  top: 50px;
  right: 0;
  background: cadetblue;
  color: #fff;
  overflow: auto;
  &::before {
    color: #ffff00;
    content: '详情请打开开发者工具';
    position: relative;
    top: -10px;
  }
  &__list {
    border-bottom: 1px solid #000;
  }
  &__button {
    position: absolute;
    top: 0;
    left: 5px;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    line-height: 40px;
  }
}

</style>
