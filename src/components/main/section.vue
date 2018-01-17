<template>
  <div class="card-columns" @dragover="allowDrop" @drop="drop">
    <header class="list-header">
      <span class="list-title" v-text="sectionData.title"></span>
      <span v-text="number"></span>
    </header>
    <card-chai v-for="card in sectionData.cards" :card-data="card" :key="card.key"></card-chai>
    <button type="button" class="btn btn-secondary" data-toggle="modal" :data-target="'#' + modalId">
      <icon name="plus"></icon>
    </button>
    <modal-chai :modal-id="modalId" modal-title="新的标签" :callback="addNewCard">
      <!-- 替换modal组件中的<slot name="modal-body"></slot>插槽 -->
      <div slot="modal-body">
        <card-create-chai></card-create-chai>
      </div>
    </modal-chai>
  </div>
</template>

<script>
  import 'vue-awesome/icons/plus'
  import { mapActions } from 'vuex'
  import card from './card'
  import modal from './modal'
  import cardCreate from './cardCreate'

  export default {
    name: 'sectionChai',
    computed: {
      modalId: function () {
        return 'section' + this.sectionData.title.replace(/\s+/g, '')
      },
      number: function () {
        return this.sectionData.cards ? this.sectionData.cards.length : 0
      }
    },
    components: {
      'card-chai': card,
      'modal-chai': modal,
      'card-create-chai': cardCreate
    },
    props: {
      sectionData: {
        required: true
      }
    },
    methods: {
      allowDrop (event) {
        event.preventDefault()
      },
      drop (event) {
        event.preventDefault()
        var cardKey = event.dataTransfer.getData('cardKey')
        var sectionKey = event.dataTransfer.getData('sectionKey')
        if (sectionKey !== this.sectionData.key) {
          this.updateCardParentSection({
            cardKey: cardKey,
            oldSectionKey: sectionKey,
            newSectionKey: this.sectionData.key
          })
        }
      },
      ...mapActions([
        'postCard',
        'updateCardParentSection'
      ]),
      addNewCard () {
        this.postCard({ sectionKey: this.sectionData.key })
        return true
      }
    }
  }
</script>

<style scoped>
  .card-columns {
    column-count: 1;
    min-width: 310px;
    padding: 0 1rem;
  }
  header {
    text-align: left;
    line-height: 40px;
  }
  .btn {
    color: #111;
    background-color: #f8f9fa;
    border-radius: 19px;
  }
  .btn svg {
    position: relative;
    top: 3px;
  }
  .list-header {
    display: flex;
  }
  .list-title {
    display: block;
    width: 100%;
  }
</style>
