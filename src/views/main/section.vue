<template>
  <div class="card-columns" @dragover="allowDrop" @drop="drop">
    <header class="list-header">
      <span class="list-title" v-text="sectionData.title"></span>
      <span v-text="number"></span>
    </header>
    <div class="card-list">
      <card-chai v-for="card in sectionData.cards" :card-data="card" :key="card.key"></card-chai>
    </div>
    <button type="button" class="btn btn-secondary" v-if="show" @click="showAddCardInput">
      <icon name="plus"></icon>
    </button>
    <input type="text" class="form-control" aria-label="Add new card" 
        v-if="!show" v-focus v-on:keyup.enter="addCard" v-model="cardContent"
        v-on:keyup.esc="show = true" v-on:blur="show = true">
  </div>
</template>

<script>
  import 'vue-awesome/icons/plus'
  import { mapActions } from 'vuex'
  import card from './card'

  export default {
    name: 'sectionChai',
    data () {
      return {
        show: true,
        cardContent: '',
      }
    },
    computed: {
      modalId: function () {
        return 'section' + this.sectionData.title.replace(/\s+/g, '')
      },
      number: function () {
        return this.sectionData.cards ? this.sectionData.cards.length : 0
      },
    },
    components: {
      'card-chai': card,
    },
    props: {
      sectionData: {
        required: true,
      },
    },
    methods: {
      allowDrop (event) {
        event.preventDefault()
      },
      drop (event) {
        event.preventDefault()
        const cardKey = Number(event.dataTransfer.getData('cardKey'))
        const sectionKey = Number(event.dataTransfer.getData('sectionKey'))

        if (sectionKey !== this.sectionData.key) {
          this.updateCardParentSection({
            cardKey,
            oldSectionKey: sectionKey,
            newSectionKey: this.sectionData.key,
          })
        }
      },
      ...mapActions([
        'postCard',
        'updateCardParentSection',
      ]),
      addNewCard () {
        this.postCard({ sectionKey: this.sectionData.key })
        return true
      },
      addCard () {
        if (this.cardContent.trim().length === 0) {
          return
        }
        this.postCard({ sectionKey: this.sectionData.key, cardTitle: this.cardContent })
        this.show = true
        this.cardContent = ''
      },
      showAddCardInput () {
        this.show = false
      },
    },
  }
</script>

<style scoped>
  .card-columns {
    width: 310px;
    min-width: 310px;
    padding: 1rem;
    height: 100%;
    column-count: unset;
  }
  .card-columns:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  header {
    text-align: left;
    line-height: 40px;
  }
  .card-list {
    max-height: calc( 100% - 92px );
    overflow: auto;
    margin-bottom: 0.75rem;
  }
  .btn {
    color: #111;
    background-color: #f8f9fa;
    border-radius: 19px;
  }
  .list-header {
    display: flex;
  }
  .list-title {
    display: block;
    width: 100%;
  }
</style>
