<template>
  <div class="container">
    <form class="card-create-form">
      <div class="form-group row">
        <label for="inputCategory" class="col-sm-2 col-form-label">分类</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputCategory" placeholder="Feature" v-model.lazy="category">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputTitle" class="col-sm-2 col-form-label">标题</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputTitle" placeholder="Title" v-model="title">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputDescription" class="col-sm-2 col-form-label">描述</label>
        <div class="col-sm-10">
          <textarea class="form-control" id="inputDescription" rows="3" placeholder="Description" v-model="description"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'cardCreate',
    computed: {
      ...mapState({
        storeCategory: 'category',
        storeTitle: 'title',
        storeDescription: 'description'
      }),
      title: {
        get () {
          return this.storeTitle
        },
        set (val) {
          this.updateCardForm({ key: 'title', value: val })
        }
      },
      category: {
        get () {
          return this.storeCategory
        },
        set (val) {
          this.updateCardForm({ key: 'category', value: val })
        }
      },
      description: {
        get () {
          return this.storeDescription
        },
        set (val) {
          this.updateCardForm({ key: 'description', value: val })
        }
      }
    },
    methods: {
      ...mapMutations([
        'updateCardForm'
      ])
    }
  }
</script>

<style scoped>
  .card-create-form {
    text-align: left;
  }
</style>