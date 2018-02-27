<template>
  <div class="card text-left" draggable="true" @dragstart='drag' @click="showDetailInfo">
    <div class="card-header card-attachments">
      <img class="card-img-top" :src="attachmentUrl" alt="attachment">
    </div>
    <div class="card-body">
      <div class="card-labels flex">
        <colour-tag bg-color="blue" tag-text="Blue" class="color-label"></colour-tag>
        <div class="priority card-label-item">
          <icon name="thermometer-0"></icon>
          <span class="priority-text">Normal</span>
        </div>
        <checklist-status :progress="1"></checklist-status>
      </div>
      <div class="card-dates flex card-icon">
        <div class="start-date">
          <icon name="hourglass-start"></icon>
          <span>25 Jan</span>
        </div>
        <div class="due-date">
          <icon name="hourglass-end"></icon>
          <span>31 Jan</span>
        </div>
        <div class="estimate">
          <icon name="clock-o"></icon>
          <span>50h</span>
        </div>
      </div>
      <div class="card-content">
        <p class="card-text card-title" v-text="cardData.title"></p>
        <icon name="align-left" class="card-icon"></icon>
      </div>
      <div class="card-tags flex card-icon">
        <span class="tag">DEMO</span>
      </div>
      <div class="card-indicators flex card-icon">
        <div class="item-progress">
          <icon name="check-square-o"></icon>
          <span>1/2</span>
        </div>
        <div class="comments">
          <icon name="comments"></icon>
          <span>1</span>
        </div>
        <div class="attachments">
          <icon name="paperclip"></icon>
          <span>1</span>
        </div>
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
  import 'vue-awesome/icons/hourglass-start'
  import 'vue-awesome/icons/hourglass-end'
  import 'vue-awesome/icons/clock-o'
  import 'vue-awesome/icons/check-square-o'
  import 'vue-awesome/icons/comments'
  import 'vue-awesome/icons/paperclip'
  import 'vue-awesome/icons/align-left'
  import colourTag from '../common/colourTag'
  import checklistStatus from '../common/checklistStatus'

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
        this.updateShowDetail({
          type: CARD,
          sectionKey: this.$parent.sectionData.key,
          cardKey: this.cardData.key
        })
      }
    },
    components: {
      'colour-tag': colourTag,
      'checklist-status': checklistStatus
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
  .flex {
    display: flex;
    font-size: 13px;
    height: 20px;
    margin-bottom: .5rem;
  }
  .color-label {
    margin-left: -.5rem;
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
  .card-icon {
    color: rgba(38,50,56,.5);
  }
  .card-icon > div {
    margin-right: 1rem;
  }
  .card-icon svg {
    vertical-align: top;
  }
  .tag:before {
    content: '#';
    margin-right: 3px;
  }
  .card-indicators {
    margin-bottom: 0;
  }
  .card-content p {
    display: inline-block;
  }
  .card-content svg {
    vertical-align: middle;
  }
</style>
