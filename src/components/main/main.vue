<template>
  <main class="container-fluid">
    <div class="row">
      <section-chai v-for="section in sections" :title="section.title" 
          :cards="section.cards" :key="section.id" :id="section.id"></section-chai>
      <div class="col-2 text-left">
        <div class="input-group add-section">
          <button type="button" class="btn btn-secondary" v-if="show" @click="showAddSectionInput">
            <icon name="plus"></icon>
          </button>
          <input type="text" class="form-control" aria-label="Add new section" 
              v-if="!show" v-focus v-on:blur="addSection" v-on:keyup.enter="addSection" v-model="sectionTitle">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import 'vue-awesome/icons/plus'
  import { mapState, mapActions } from 'vuex'
  import section from './section'

  export default {
    name: 'main',
    data () {
      return {
        show: true,
        sectionTitle: ''
      }
    },
    computed: {
      ...mapState([
        'sections'
      ])
    },
    components: {
      'section-chai': section
    },
    methods: {
      ...mapActions([
        'getSections'
      ]),
      showAddSectionInput () {
        this.show = false
      },
      addSection () {
        if (this.show) {
          return
        }
        if (this.sectionTitle.replace(/\s+/g, '')) {
          let id = this.sections.length
          this.sections.push({id: id, title: this.sectionTitle, cards: []})
        }
        this.show = true
      }
    },
    // 自定义指令
    directives: {
      // 获得焦点指令
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
    created () {
      this.getSections()
    }
  }
</script>

<style scoped>
  main {
    padding-top: 4.5rem;
  }
  .row {
    margin: 0;
  }
  .btn svg {
    position: relative;
    top: 3px;
  }
  .add-section {
    margin-top: 40px;
  }
</style>