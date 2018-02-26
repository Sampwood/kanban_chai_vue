<template>
  <textarea :value="value" @input="updateValue($event.target.value)" :placeholder="placeholder" rows="1"></textarea>
</template>

<script>
  import autosize from 'autosize'

  export default {
    name: 'autosizeTextarea',
    props: ['value', 'placeholder'],
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        autosize(this.$el)
      })
    },
    updated: function () {
      this.$nextTick(function () {
        autosize.update(this.$el)
      })
    }
  }
</script>

<style>
</style>
