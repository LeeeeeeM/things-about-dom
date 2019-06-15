<template>
  <div>
    <div class="button-group">
      <div class="button-test" @click="syncEmit">同步触发</div>
      <div class="button-test" @click="simulateClick">模拟事件点击</div>
    </div>
    <console />
  </div>
</template>
<script>
import Console from '@/components/console'
import { SDom, SEvent } from './SimulateEvent/Node'

export default {
  components: {
    Console
  },
  mounted () {
    const dom = new SDom()
    const div1 = dom.createElement('div')
    div1.id = 'div1'
    const div2 = dom.createElement('div')
    div2.id = 'div2'
    const div3 = dom.createElement('div')
    div3.id = 'div3'

    dom.appendChild(div1)
    dom.appendChild(div3)
    dom.insertBefore(div1, div2)

    const div10 = dom.createElement('div')
    div10.id = 'div10'
    const div11 = dom.createElement('div')
    div11.id = 'div11'
    const div12 = dom.createElement('div')
    div12.id = 'div12'

    div1.appendChild(div10)
    div1.appendChild(div11)
    div1.appendChild(div12)

    function aa (event) {
      console.log('inner')
      Promise.resolve().then(() => {
        console.log('inner', 'promise', 'micro', event.currentTarget)
      })
      setTimeout(function () {
        console.log('inner', 'setTimeout', 'macro', event.currentTarget)
      })
    }

    function dd (e) {
      console.log('inner1')
      Promise.resolve().then(() => {
        console.log('inner1 promise micro', e.currentTarget)
      })
      setTimeout(function () {
        console.log('inner1 setTimeout macro', e.currentTarget)
      })
    }

    function bb (event) {
      console.log('outer')
      Promise.resolve().then(() => {
        console.log('outer', 'promise', 'micro', event.currentTarget)
      })
      setTimeout(function () {
        console.log('outer', 'setTimeout', 'marco', event.currentTarget)
      })
    }

    function cc (event) {
      console.log('document')
      Promise.resolve().then(() => {
        console.log('document', 'promise', 'micro', event.currentTarget)
      })
      setTimeout(function () {
        console.log('document', 'setTimeout', 'macro', event.currentTarget)
      })
    }

    div11.addEventListener('click', aa)
    div11.addEventListener('click', aa, true)

    div11.addEventListener('click', dd)
    div11.addEventListener('click', dd, true)

    div1.addEventListener('click', bb)
    div1.addEventListener('click', bb, true)

    dom.addEventListener('click', cc)
    dom.addEventListener('click', cc, true)

    this.$dom = div11
  },
  methods: {
    syncEmit () {
      const event = new SEvent('click', {
        bubbles: true,
        cancelable: true
      })
      this.$dom && this.$dom.dispatchEvent(event, false)
    },
    simulateClick () {
      const event = new SEvent('click', {
        bubbles: true,
        cancelable: true
      })
      this.$dom && this.$dom.dispatchEvent(event, true)
    }
  }
}
</script>

<style lang="less">
  .button-group {
    text-align: left;
    .button-test {
      display: inline-block;
      height: 40px;
      padding: 0 10px;
      margin-top: 20px;
      line-height: 40px;
      border-radius: 10px;
      background: cadetblue;
      color: #fff;
      cursor: pointer;
    }
  }
</style>
