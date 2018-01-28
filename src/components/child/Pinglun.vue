<template>
  <div>
    <ul>
      <li v-for="(item,index) in appTall" :key="index">
        <div class="Li_A">
          <router-link :to="{name:'AuthorXiang',query:{id: item.author.loginname}}" class="img">
            <img :src="item.author.avatar_url" alt="">
          </router-link>
          <div class="Name">
            <div class="Name_1">
                  <span>{{item.author.loginname}}
                    <a href="#"><span>{{index+1}}楼</span>·<span>{{item.create_at | filDate}}</span></a>
                  </span>
              <div class="opI">
                <button @click="dz(index)" class="zz"><span class="ss">点赞:</span> {{item.ups.length}}</button>
                <button>回复</button>
              </div>
            </div>
            <div class="Name_2" v-html="item.content">
              <!--Egg 本身就是架构在 Koa 之上的框架。选 Koa 什么都要自己搞，为什么不用成熟稳定的框架？我不太理解~~-->
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pinglun',
  props: ['appTall'],
  data () {
    return {
      test: '点赞'
    }
  },
  methods: {
    dz (al) {
      this.$http.post('https://cnodejs.org/api/v1/reply/' + this.appTall[al].id + '/ups',
        {
          accesstoken: 'c738990b-5178-4d96-80ca-48bdf39bc7d7'
        }).then((res) => {
        if (res.data.action === 'up') {
          this.$set(this.appTall[al], this.appTall[al].ups.length, this.appTall[al].ups.length++)
        } else {
          // console.log(this.appTall[al].ups.length)
          // this.appTall[al].ups.length--
          this.$set(this.appTall[al], this.appTall[al].ups.length, this.appTall[al].ups.length--)
        }
        // console.log(this.appTall)
      })
    }
  },
  beforeUpdate () {
    console.log(this.appTall)
    let liSt = this.appTall
    liSt.forEach((item, index) => {
    })
  }
}
</script>

<style scoped lang="scss">
    ul{
      li:nth-of-type(1),li:nth-of-type(2),li:nth-of-type(3){
        background: #F4FCF0;
      }
      li{
        margin: 0 auto;
        border-bottom: 1px solid #e0e0e0;
      .Li_A{
        width: 96%;
        margin: 0 auto;
        display: flex;
        align-items: center;
      }
      .img{
        align-self: flex-start;
        margin-top: 5px;
      }
      .Name{
        width: 100%;
      }
      .Name_1{
        display: flex;
        justify-content: space-between;
        width: 98%;
        margin: 0 auto;
      }
      .Name_2{
        padding-top: 20px;
      }
      }
    }
  .zz{
    background: none;
    border: none;
    border-bottom: 1px solid deepskyblue;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .ss{
    display: none;
  }
  li:hover .ss{
    display: block;
  }
  .opI{
    display: flex;
  }
</style>
