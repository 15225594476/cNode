<template>
      <div>
        <div class="but2">
          <div class="but_div">
            <button @click="bjj">编辑</button>
          </div>
          <button class="shou" @click="shou">{{coll}}</button>
        </div>
      </div>
</template>

<script>
export default {
  props: ['appScang', 'appCollect'],
  name: 'but',
  data () {
    return {
      Duan: 1,
      coll: '收藏',
      cot: null
    }
  },
  created () {
    console.log(this.cot)
  },
  watch: {
    appCollect (val) {
      if (val === true) {
        this.coll = '取消收藏'
      } else {
        this.coll = '收藏'
      }
    }
  },
  methods: {
    bjj () {
      this.$emit('appBj')
    },
    shou () {
      if (this.coll === '收藏') {
        this.$http.post('https://cnodejs.org/api/v1/topic_collect/collect', {
          accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
          topic_id: this.appScang
        }).then((res) => {
          this.coll = '取消收藏'
          alert('收藏成功')
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.$http.post('https://cnodejs.org/api/v1/topic_collect/de_collect', {
          accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7',
          topic_id: this.appScang
        }).then((res) => {
          alert('取消收藏成功')
          this.coll = '收藏'
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .but2{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    width: 98%;
    margin: 10px auto;
  button{
    outline: none;
    cursor: pointer;
  }
  .but_div{
  button{
    border: none;
    background: none;
    border-bottom: 1px solid #ccc;
  }
  }
  .shou{
    width: 80px;
    height: 35px;
    color: #fff;
    background: #80BD01;
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  }
</style>
