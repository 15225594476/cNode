<template>
    <div>
      <div class="area">
        <div class="areaA">这里有一堆东西……</div>
        <textarea  style="height: 300px;" v-model="tex"></textarea>
      </div>
      <div class="but">
        <button @click="hf">回复</button>
      </div>
    </div>
</template>
<script>
export default {
  name: 'textares',
  data () {
    return {
      tex: null
    }
  },
  methods: {
    hf () {
      this.$emit('appPi', this.tex)
      this.tex = ''
    }
  }
}
</script>

<style scoped>

</style>
