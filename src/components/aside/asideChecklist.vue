<template>
  <div class="checklist m-3 font-small">
    <header class="mb-3" v-if="!cardData.checklist.length">
      <strong>Checklist</strong>
    </header>
    <div class="mb-3" v-if="cardData.checklist.length">
      <div class="d-flex justify-content-between checklist-status">
        <strong><span v-text="completion"></span>% done</strong>
        <div><span v-text="itemOfDone.length"></span> of <span v-text="cardData.checklist.length"></span></div>
      </div>
      <div class="input-group m-1" v-for="(item, index) in cardData.checklist" :key="item.id">
        <div class="mr-auto">
          <input type="checkbox" class="align-middle" :checked="item.isDone"
            @change="updateStatus($event.target.checked, item.id)">
          <span class="align-middle" v-text="item.name"></span>
        </div>
        <div>
          <span class="align-middle">Weight</span>
          <span class="align-middle rounded-circle text-white bg-secondary weight-value" v-text="item.weight"></span>
          <input type="range" min="1" max="10" step="1" class="align-middle" :value="item.weight"
            @input="updateWeight($event.target.value, item.id)">
          <div class="d-inline-block" @click="deleteItem(item.id)">
            <icon name="trash-o" class="align-middle c-pointer"></icon>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-sm btn-light border border-secondary" @click="show = false" v-if="show">Add an item</button>
    <input type="text" class="form-control" v-if="!show" v-focus v-model="checkName"
      @blur="show = true" @keyup.enter="addCheck" @keyup.esc="show = true">
  </div>
</template>

<script>
  import 'vue-awesome/icons/trash-o'

  export default {
    name: 'asideChecklistChai',
    data () {
      return {
        hasItems: false,
        show: true,
        checkName: ''
      }
    },
    computed: {
      itemOfDone () {
        return this.cardData.checklist.filter(item => item.isDone)
      },
      completion () {
        let done = this.itemOfDone.reduce((x, y) => x + y.weight, 0)
        let all = this.cardData.checklist.reduce((x, y) => x + y.weight, 0)
        return Math.round(done / all * 100)
      }
    },
    props: {
      cardData: {
        required: true
      },
      updateData: {
        type: Function,
        required: true
      },
      postItem: {
        type: Function,
        required: true
      }
    },
    methods: {
      addCheck () {
        let item = {name: this.checkName, weight: 1, isDone: false}
        this.checkName = ''
        this.show = true
        this.hasItems = true
        this.postItem(this.cardData.key, 'checklist', item)
      },
      updateItem (key, value, id) {
        let checklist = Object.assign([], this.cardData.checklist)
        for (let i = 0; i < checklist.length; i++) {
          if (checklist[i].id === id) {
            checklist[i][key] = value
            break
          }
        }
        this.updateData(this.cardData.key, 'checklist', checklist)
      },
      updateWeight (value, id) {
        this.updateItem('weight', parseInt(value), id)
      },
      updateStatus (value, id) {
        this.updateItem('isDone', value, id)
      },
      deleteItem (id) {
        let checklist = Object.assign([], this.cardData.checklist)
        for (let i = 0; i < checklist.length; i++) {
          if (checklist[i].id === id) {
            checklist.splice(i, 1)
            break
          }
        }
        this.updateData(this.cardData.key, 'checklist', checklist)
      }
    }
  }
</script>

<style scoped>
  .checklist-status {
    border-bottom: 1px solid #dee2e6;
    margin-bottom: .5rem;
  }
  .weight-value {
    width: 21px;
    display: inline-block;
    text-align: center;
  }
</style>
