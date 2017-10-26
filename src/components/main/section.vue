<template>
  <div class="card-columns col-2">
    <header class="list-header">
      <span class="list-title" v-text="title"></span>
      <span v-text="cards.length"></span>
    </header>
    <card-chai v-for="card in cards" :create-date="card.createDate" :key="card.id"
        :title="card.title" :description="card.description" :category="card.category"></card-chai>
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
  import { mapMutations } from 'vuex'
  import card from './card'
  import modal from './modal'
  import cardCreate from './cardCreate'

  export default {
    name: 'section',
    computed: {
      modalId: function () {
        return 'section' + this.title.replace(/\s+/g, '')
      }
    },
    components: {
      'card-chai': card,
      'modal-chai': modal,
      'card-create-chai': cardCreate
    },
    props: {
      id: {
        required: true,
        type: Number,
        default: 0
      },
      title: {
        required: true,
        type: String,
        default: ''
      },
      cards: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      ...mapMutations([
        'addCard'
      ]),
      addNewCard () {
        this.addCard({ sectionId: this.id })
        return true
      }
    }
  }
</script>

<style scoped>
  .card-columns {
    column-count: 1;
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