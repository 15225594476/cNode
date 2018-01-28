<template>
  <div id="templ">
    <div class="title">{{titleTex}}</div>
    <ul id="tem_ul">
      <li v-for="(item,key,index) in tleList" :key="index">
        <a v-show="Text">{{item.name}}</a>
        <a v-show="Text2" href="#">
          <img :src="item.img" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'temple',
  props: ['titleTex', 'tleList', 'Text', 'Text2']
}
</script>

<style scoped lang="scss">
    #templ{
      margin-top: 10px;
      background: #fff;
      #tem_ul{
        list-style: none;
        padding-bottom: 8px;
        li{
          line-height: 35px;
          text-indent: 0.5em;
          color: #333;
          font-size: 14px;
          img{
            width: 60%;
          }
        }
      }
    }
</style>
