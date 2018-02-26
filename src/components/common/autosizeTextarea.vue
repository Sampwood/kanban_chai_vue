<template>
  <textarea :value="value" @input="updateValue($event.target.value)" :placeholder="placeholder" rows="1"></textarea>
</template>

<script>
  import autosize from 'autosize'

  export default {
    name: 'autosizeTextarea',
    props: ['value', 'placeholder'],
    mounted: function () {
      this.$nextTick(function () {
        autosize(this.$el)
      })
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style>
</style>
