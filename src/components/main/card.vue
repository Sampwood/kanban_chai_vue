<template>
  <div class="card text-left" draggable="true" @dragstart='drag'>
    <!--
    <div class="card-header category">
      <i class="svg-icon svg-baseline">
        <icon name="sticky-note-o"></icon>
      </i>
      <span v-text="cardData.category"></span>
    </div>
    <div class="card-body">
      <h4 class="card-title" v-text="cardData.title"></h4>
      <p class="card-text description" v-text="cardData.description"></p>
      <button type="button" class="btn btn-primary hide" @click="getDetail" disabled>Detail</button>
    </div>
    <div class="card-footer text-muted" v-text="cardData.createDate"></div>
    -->
    
    <div class="card-body">
      <p class="card-text description" v-text="cardData.description"></p>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/sticky-note-o'

  export default {
    name: 'card',
    props: {
      cardData: {
        required: true
      },
      getDetail: {
        type: Function,
        default: function () {}
      }
    },
    methods: {
      drag (event) {
        event.dataTransfer.setData('cardKey', this.cardData.key)
        event.dataTransfer.setData('sectionKey', this.$parent.sectionData.key)
      }
    }
  }
</script>

<style scoped>
  .hide {
    display: none;
  }
</style>
