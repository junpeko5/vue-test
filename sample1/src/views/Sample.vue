<template>
  <div>
    <p>{{ countNum }}</p>
    <button v-on:click="clickPlus">プラス</button>
    <button v-on:click="clickMinus">マイナス</button>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  computed: {
    countNum() {
      return this.$store.getters.count
    }
  },
  methods: {
    clickPlus() {
      this.$store.commit('increment')
    },
    clickMinus() {
      this.$store.commit('decrement')
    }
  }
}
</script>
