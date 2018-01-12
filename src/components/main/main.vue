<template>
  <main class="container-fluid main-panel">
    <div class="board">
      <div class="row">
        <section-chai v-for="section in getterSections" :section-data="section" :key="section.key" ></section-chai>
        <div class="section-add-column text-left">
          <div class="input-group add-section">
            <button type="button" class="btn btn-secondary" v-if="show" @click="showAddSectionInput">
              <icon name="plus"></icon>
            </button>
            <input type="text" class="form-control" aria-label="Add new section" 
                v-if="!show" v-focus v-on:blur="addSection" v-on:keyup.enter="addSection" v-model="sectionTitle"
                v-on:keyup.esc="show = true">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import 'vue-awesome/icons/plus'
  import { mapGetters, mapActions } from 'vuex'
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
      ...mapGetters([
        'getterSections'
      ])
    },
    components: {
      'section-chai': section
    },
    methods: {
      ...mapActions([
        'getSections',
        'postSection'
      ]),
      showAddSectionInput () {
        this.show = false
      },
      addSection () {
        if (this.sectionTitle.trim().length === 0) {
          this.show = true
        }
        if (this.show) {
          return
        }
        if (this.sectionTitle.replace(/\s+/g, '')) {
          this.postSection({title: this.sectionTitle})
          this.sectionTitle = ''
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
  .main-panel {
    height: 100%;
  }
  .board {
    overflow: hidden;
    overflow-x: auto;
    height: 100%
  }
  .row {
    margin: 0;
    flex-wrap: nowrap;
  }
  .btn svg {
    position: relative;
    top: 3px;
  }
  .section-add-column {
    min-width: 200px !important;
  }
  .add-section {
    margin-top: 40px;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
  }
  .text-left {
    min-width: 125px;
  }
</style>
