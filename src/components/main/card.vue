<template>
  <div class="card text-left" draggable="true" @dragstart='drag' @click="showDetailInfo">
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

    <div class="card-header card-attachments">
      <img class="card-img-top" :src="attachmentUrl" alt="attachment">
    </div>
    <div class="card-body">
      <div class="card-labels"></div>
      <div class="card-dates"></div>
      <p class="card-text card-title" v-text="cardData.title"></p>
      <div class="card-tags"></div>
      <div class="card-indicators"></div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/sticky-note-o'
  import { mapMutations } from 'vuex'
  import { CARD } from '../../vuex/data-type.js'

  export default {
    name: 'card',
    data () {
      return {
        attachmentUrl: require('@/assets/zoro.jpg')
      }
    },
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
      ...mapMutations([
        'updateShowDetail'
      ]),
      drag (event) {
        event.dataTransfer.setData('cardKey', this.cardData.key)
        event.dataTransfer.setData('sectionKey', this.$parent.sectionData.key)
      },
      showDetailInfo () {
        this.updateShowDetail({type: CARD, key: this.cardData.key})
      }
    }
  }
</script>

<style scoped>
  .hide {
    display: none;
  }
  .card {
    cursor: pointer;
  }
  .card:last-child {
    margin-bottom: 0;
  }
  .card-attachments {
    padding: 0;
  }
  .card-body {
    padding: 0.5rem;
  }
</style>
