<template>
  <div>
    <div id="outer">
      <div id="inner">可点击区域</div>
    </div>
    <console />
  </div>
</template>
<script>
import Console from '@/components/console'
export default {
  components: {
    Console
  },
  mounted () {
    const inner = document.getElementById('inner')
    const outer = document.getElementById('outer')

    function aa (e) {
      console.log('inner')
      Promise.resolve().then(() => {
        console.log('inner promise micro', e.currentTarget)
      })
      setTimeout(() => {
        console.log('inner setTimeout macro', e.currentTarget)
      })
    }

    function dd (e) {
      console.log('inner1')
      Promise.resolve().then(() => {
        console.log('inner1 promise micro', e.currentTarget)
      })
      setTimeout(() => {
        console.log('inner1 setTimeout macro', e.currentTarget)
      })
    }

    function bb (e) {
      console.log('outer')
      Promise.resolve().then(() => {
        console.log('outer promise micro', e.currentTarget)
      })
      setTimeout(() => {
        console.log('outer setTimeout macro', e.currentTarget)
      })
    }

    function cc (e) {
      console.log('document')
      Promise.resolve().then(() => {
        console.log('document promise micro', e.currentTarget)
      })
      setTimeout(() => {
        console.log('document setTimeout macro', e.currentTarget)
      })
    }

    inner.addEventListener('click', aa)
    inner.addEventListener('click', aa, true)

    inner.addEventListener('click', dd)
    inner.addEventListener('click', dd, true)

    outer.addEventListener('click', bb)
    outer.addEventListener('click', bb, true)

    document.addEventListener('click', cc)
    document.addEventListener('click', cc, true)

    const clickEvent = new Event('click', {
      bubbles: true,
      cancelable: true
    })

    inner.dispatchEvent(clickEvent)
  }
}
</script>
<style>
#outer {
  height: 300px;
  width: 300px;
  background: #666;
}

#inner {
  height: 200px;
  width: 200px;
  background: #ddd;
  line-height: 200px;
}
</style>
