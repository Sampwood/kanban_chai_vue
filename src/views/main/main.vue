  <template>
  <main class="container-fluid main-panel">
    <article class="board" v-scroll>
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
    </article>
    <aside class="detail" v-if="getterShowDetail.isShow">
      <aside-chai></aside-chai>
    </aside>
  </main>
</template>

<script>
  import 'vue-awesome/icons/plus'
  import { mapGetters, mapActions } from 'vuex'
  import sectionChai from './section'
  import asideChai from '../aside/aside'

  export default {
    name: 'mainChai',
    data () {
      return {
        show: true,
        sectionTitle: '',
      }
    },
    computed: {
      ...mapGetters([
        'getterSections',
        'getterShowDetail',
      ]),
    },
    components: {
      'section-chai': sectionChai,
      'aside-chai': asideChai,
    },
    methods: {
      ...mapActions([
        'getSections',
        'postSection',
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
      },
    },
    // 自定义指令
    directives: {
      scroll: {
        bind: function (el) {
          let horizontalWheel = function (event) {
            if (event.preventDefault) {
              event.preventDefault()
            }
            this.scrollLeft += event.deltaY
          }

          el.addEventListener('wheel', horizontalWheel, false)
        },
      },
    },
    created () {
      this.getSections()
    },
  }
</script>

<style scoped>
  .main-panel {
    height: 100%;
    padding: 3.5rem 0 0;
    display: flex;
  }
  .board {
    overflow-x: auto;
    height: 100%;
    padding: 0 1rem;
    flex: 1;
  }
  .row {
    margin: 0;
    flex-wrap: nowrap;
    height: 100%;
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
  .detail {
    height: 100%;
    width: 450px;
    background-color: white;
  }
</style>
