<template>
  <div id="vue-data">
    <div class="button-group">
      <div class="button-test" @click="loadVue('1.0.28')">加载1.0.28</div>
      <div class="button-test" @click="loadVue('2.5.3')">加载2.5.3</div>
      <div class="button-test" @click="loadVue('2.6.1')">加载2.6.1</div>
    </div>
  </div>
</template>
<script>
const vueVersionMap = {
  '1.0.28': 'https://cdn.bootcss.com/vue/1.0.28/vue.js',
  '2.5.3': 'https://cdn.bootcss.com/vue/2.5.3/vue.js',
  '2.6.1': 'https://cdn.bootcss.com/vue/2.6.1/vue.js'
}

function LoadVue (version) {
  const script = document.createElement('script')
  script.src = vueVersionMap[version]
  document.head.appendChild(script)
  return new Promise(function (resolve, reject) {
    script.onload = function (e) {
      console.log(e)
      resolve()
    }
  })
}

export default {
  mounted () {
    this.$$_appDom = document.getElementById('vue-data')
  },
  methods: {
    loadVue (version) {
      return LoadVue(version).then(() => {
        const div = document.createElement('div')
        this.$$_appDom.appendChild(div)
        new window.Vue({
          template: `<div><div v-if="loading">{{x}}</div>
            <div>{{name}}</div>
            <button @click="clickEvent">点击${version}</button></div>`,
          data () {
            return {
              loading: false,
              name: ''
            }
          },
          mounted () {
            this.deal()
          },
          methods: {
            deal () {
              this.loading = false
              const n = (Math.random() * 1000) >> 0
              Promise.resolve().then(() => {
                this.loading = true
                this.name = n
              }).then(() => {
                this.x = n
              })
            },
            clickEvent () {
              this.deal()
            }
          }
        }).$mount(div)
      })
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
