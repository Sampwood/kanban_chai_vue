<template>
  <div class="aside-container">
    <ul class="nav nav-tabs pt-3 pl-3 pr-5" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#details" role="tab">Card Details</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#activity" role="tab">Activity</a>
      </li>
    </ul>
    <div class="tab-content text-left">
      <div class="tab-pane active mt-3" id="details" role="tabpanel">
        <aside-card :card-data="cardData" :section-title="sectionData.title" :update-data="changeCardData"></aside-card>
        <hr>
        <aside-priority :card-data="cardData" :update-data="changeCardData"></aside-priority>
        <hr>
        <aside-timing :card-data="cardData" :update-data="changeCardData"></aside-timing>
        <hr>
        <aside-checklist :card-data="cardData" :post-item="postItem"
          :update-item="updateItem" :delete-item="deleteItem"></aside-checklist>
        <hr>
        <aside-tags :card-data="cardData" :post-item="postItem" :delete-item="deleteItem"></aside-tags>
        <hr>
        <aside-attachments :card-data="cardData" :update-item="updateItem"></aside-attachments>
        <hr>
        <aside-comments></aside-comments>
      </div>
      <div class="tab-pane" id="activity" role="tabpanel">activity</div>
    </div>
    <button type="button" class="close" @click="closeAside()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import asideCardChai from './asideCard'
  import asidePriorityChai from './asidePriority'
  import asideTimingChai from './asideTiming'
  import asideChecklistChai from './asideChecklist'
  import asideTagsChai from './asideTags'
  import asideAttachmentsChai from './asideAttachments'
  import asideCommentsChai from './asideComments'
  import { CLOSE } from '@/vuex/data-type'

  export default {
    name: 'asideChai',
    computed: {
      ...mapGetters([
        'getterSections',
        'getterShowDetail'
      ]),
      sectionData: function () {
        let section = this.getterSections.filter(section => section.key === this.getterShowDetail.sectionKey)[0]

        if (!section) {
          console.warn('no related section founded!')
          return {}
        }
        return section
      },
      cardData: function () {
        if (!this.sectionData.cards) {
          return {}
        }
        let card = this.sectionData.cards.filter(card => card.key === this.getterShowDetail.cardKey)[0]

        if (!card) {
          console.warn('no related card founded!')
          return {}
        }
        return card
      }
    },
    components: {
      'aside-card': asideCardChai,
      'aside-priority': asidePriorityChai,
      'aside-timing': asideTimingChai,
      'aside-checklist': asideChecklistChai,
      'aside-tags': asideTagsChai,
      'aside-attachments': asideAttachmentsChai,
      'aside-comments': asideCommentsChai
    },
    methods: {
      ...mapActions([
        'updateCardData',
        'postListInCard',
        'updateListInCard',
        'deleteListInCard'
      ]),
      ...mapMutations([
        'updateShowDetail'
      ]),
      closeAside () {
        this.updateShowDetail({type: CLOSE})
      },
      changeCardData (cardKey, key, value) {
        this.updateCardData({
          sectionKey: this.sectionData.key,
          cardKey,
          key,
          value
        })
      },
      postItem (cardKey, listName, item) {
        this.postListInCard({
          sectionKey: this.sectionData.key,
          cardKey,
          listName,
          item
        })
      },
      updateItem (cardKey, listName, id, key, value) {
        this.updateListInCard({
          sectionKey: this.sectionData.key,
          cardKey,
          listName,
          id,
          key,
          value
        })
      },
      deleteItem (cardKey, listName, id) {
        this.deleteListInCard({
          sectionKey: this.sectionData.key,
          cardKey,
          listName,
          id
        })
      }
    }
  }
</script>

<style scoped>
  .aside-container {
    height: 100%;
    position: relative;
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .tab-content {
    height: calc(100% - 60px);
    overflow: auto;
  }
</style>
