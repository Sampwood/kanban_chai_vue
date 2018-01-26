<template>
  <div class="card text-left" draggable="true" @dragstart='drag' @click="showDetailInfo">
    <div class="card-header card-attachments">
      <img class="card-img-top" :src="attachmentUrl" alt="attachment">
    </div>
    <div class="card-body">
      <div class="card-labels">
        <div class="color-label"><span class="color-label-text">Blue</span></div>
        <div class="priority card-label-item">
          <icon name="thermometer-0"></icon>
          <span class="priority-text">Normal</span>
        </div>
        <div class="status card-label-item">
          <span class="status-progress"></span>
          <icon name="check-circle"></icon>
          <span class="status-text">50%</span>
        </div>
      </div>
      <div class="card-dates">
        <span class="start-date">25 Jan</span>
        <span class="due-date">31 Jan</span>
        <span class="estimate">50h</span>
      </div>
      <p class="card-text card-title" v-text="cardData.title"></p>
      <div class="card-tags">
        <span class="tag">#DEMO</span>
      </div>
      <div class="card-indicators">
        <span class="item-progress">1/2</span>
        <span class="comments">1</span>
        <span class="attachments">1</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { CARD } from '../../vuex/data-type.js'
  import 'vue-awesome/icons/sticky-note-o'
  import 'vue-awesome/icons/thermometer-0'
  import 'vue-awesome/icons/check-circle'

  export default {
    name: 'card',
    data () {
      return {
        attachmentUrl: require('@/assets/img/zoro.jpg')
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
    border: 0;
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
  .card-labels {
    font-size: 13px;
    line-height: 20px;
    display: flex;
  }
  .color-label {
    margin-left: -.5rem;
    padding: 0 10px 0 8px;
    position: relative;

    color: white;
    background-color: #007bff;
  }
  .color-label-text {
    background-color: inherit;
  }
  .color-label-text:before {
    content: '';
    position: absolute;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: inherit;
    border-right: 5px solid;
    border-top: 10px solid transparent;
  }
  .color-label-text:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: inherit;
    border-right: 5px solid;
    border-bottom: 10px solid transparent;
  }
  .card-label-item {
    margin-left: .5rem;
    position: relative;
    padding: 0 10px 0 22px;
    border-radius: 10px;
    color: #28a745;
    background-color: #e8f5e9;
  }
  .card-label-item svg {
    height: 20px;
    width: 12px;
    position: absolute;
    left: 6px;
  }
  .status {
    overflow: hidden;
    border: 1px solid #c8e6c9;
    height: 20px;
    background-color: unset;
  }
  .status svg {
    width: 18px;
    height: 18px;
    left: 0;
  }
  .status-progress {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;

    width: 50%;
    background-color: #c8e6c9;
  }
  .status-text {
    position: relative;
  }
</style>
