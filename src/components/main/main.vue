<template>
  <main class="container-fluid">
    <div class="row">
      <section-chai v-for="section in getterSections" :section-data="section" :key="section.key" ></section-chai>
      <div class="col-2 text-left">
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
  </main>
</template>

<script>
  import 'vue-awesome/icons/plus'
  import { mapGetters, mapActions } from 'vuex'
  import sectionChai from './section'

  export default {
    name: 'mainChai',
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
      'section-chai': sectionChai
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
  .row {
    margin: 0;
  }
  .btn svg {
    position: relative;
    top: 3px;
  }
  .add-section {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  .text-left {
    min-width: 125px;
  }
</style>
