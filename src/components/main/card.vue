<template>
  <div class="card text-left" draggable="true" @dragstart='drag' @click="showDetailInfo">
    <div class="card-header card-attachments">
      <img class="card-img-top" :src="attachmentUrl" alt="attachment" v-if="hasPin">
    </div>
    <div class="card-body">
      <div class="card-labels flex" v-if="hasLabels">
        <colour-tag :bg-color="labelColor" :tag-text="labelText" class="color-label" v-if="hasTag"></colour-tag>
        <div class="card-label-item" v-if="hasPriority">
          <priority :text="priorities[cardData.priority]" :level="cardData.priority"></priority>
        </div>
        <checklist-status :progress="progress" v-if="hasChecklistStatus"></checklist-status>
      </div>
      <div class="card-dates flex card-icon" v-if="startDate || dueDate || cardData.estimate">
        <div class="start-date" v-if="startDate">
          <icon name="hourglass-start"></icon>
          <span>{{ startDate }}</span>
        </div>
        <div class="due-date" v-if="dueDate">
          <icon name="hourglass-end"></icon>
          <span>{{ dueDate }}</span>
        </div>
        <div class="estimate" v-if="cardData.estimate">
          <icon name="clock-o"></icon>
          <span>{{ cardData.estimate + 'h' }}</span>
        </div>
      </div>
      <div class="card-content">
        <p class="card-text card-title mb-0" v-text="cardData.title"></p>
        <icon name="align-left" class="card-icon" v-if="cardData.description"></icon>
      </div>
      <div class="card-tags flex card-icon mb-0 mt-2" v-if="cardData.tags && cardData.tags.length">
        <span class="tag" v-for="tag in cardData.tags">{{ tag.text }}</span>
      </div>
      <div class="card-indicators flex card-icon mt-2" v-if="hasIndicators">
        <div class="item-progress" v-if="cardData.checklist && cardData.checklist.length">
          <icon name="check-square-o"></icon>
          <span>{{ checklistStatus }}</span>
        </div>
        <div class="comments" v-if="cardData.comments && cardData.comments.length">
          <icon name="comments"></icon>
          <span>{{ cardData.comments.length }}</span>
        </div>
        <div class="attachments" v-if="cardData.attachments && cardData.attachments.length">
          <icon name="paperclip"></icon>
          <span>{{ cardData.attachments.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { CARD, TAG_COLOURS, PRIORITY } from '@/vuex/data-type'
  import 'vue-awesome/icons/hourglass-start'
  import 'vue-awesome/icons/hourglass-end'
  import 'vue-awesome/icons/clock-o'
  import 'vue-awesome/icons/check-square-o'
  import 'vue-awesome/icons/comments'
  import 'vue-awesome/icons/paperclip'
  import 'vue-awesome/icons/align-left'
  import colourTag from '../common/colourTag'
  import checklistStatus from '../common/checklistStatus'
  import priority from '../common/priority'

  export default {
    name: 'card',
    data () {
      return {
        attachmentUrl: require('../../assets/img/zoro.jpg'),
        priorities: PRIORITY,
        tagColours: TAG_COLOURS,
      }
    },
    props: {
      cardData: {
        required: true,
      },
      getDetail: {
        type: Function,
        default: function () {},
      },
    },
    computed: {
      hasPin () {
        return this.cardData.attachments && this.cardData.attachments.length > 0 && this.cardData.attachments[0].isPin
      },
      hasTag () {
        return this.cardData.colourTagNum > 0
      },
      hasPriority () {
        return this.cardData.priority > 0
      },
      hasChecklist () {
        return this.cardData.checklist && this.cardData.checklist.length
      },
      hasChecklistStatus () {
        return this.cardData.isDone || this.hasChecklist
      },
      hasLabels () {
        return this.hasTag || this.hasPriority || this.hasChecklistStatus
      },
      hasComments () {
        return this.cardData.comments && this.cardData.comments.length
      },
      hasAttachments () {
        return this.cardData.attachment && this.cardData.attachments.lenght
      },
      hasIndicators () {
        return this.hasChecklist || this.hasComments || this.hasAttachments
      },
      labelColor: function () {
        let labelNum = this.cardData.colourTagNum
        if (labelNum && labelNum > 0) {
          return this.tagColours[labelNum]
        }
        return 'gray'
      },
      labelText: function () {
        let labelNum = this.cardData.colourTagNum || 0
        return this.tagColours[labelNum]
      },
      progress () {
        if (this.cardData.isDone) {
          return 1
        } else {
          let itemOfDone = this.cardData.checklist.filter(item => item.isDone)
          let done = itemOfDone.reduce((x, y) => x + y.weight, 0)
          let all = this.cardData.checklist.reduce((x, y) => x + y.weight, 0)
          return done / all
        }
      },
      startDate () {
        if (this.cardData.startDate) {
          let tmp = new Date(this.cardData.startDate).toDateString().split(' ')
          return tmp[2] + ' ' + tmp[1]
        }
        return
      },
      dueDate () {
        if (this.cardData.dueDate) {
          let tmp = new Date(this.cardData.dueDate).toDateString().split(' ')
          return tmp[2] + ' ' + tmp[1]
        }
        return
      },
      checklistStatus () {
        let itemOfDone = this.cardData.checklist.filter(item => item.isDone)
        return itemOfDone.length + '/' + this.cardData.checklist.length
      },
    },
    methods: {
      ...mapMutations([
        'updateShowDetail',
      ]),
      drag (event) {
        event.dataTransfer.setData('cardKey', this.cardData.key)
        event.dataTransfer.setData('sectionKey', this.$parent.sectionData.key)
      },
      showDetailInfo () {
        this.updateShowDetail({
          type: CARD,
          sectionKey: this.$parent.sectionData.key,
          cardKey: this.cardData.key,
        })
      },
    },
    components: {
      'colour-tag': colourTag,
      'checklist-status': checklistStatus,
      priority,
    },
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
    margin-right: .5rem;
    border-radius: 10px;
    overflow: hidden;
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
