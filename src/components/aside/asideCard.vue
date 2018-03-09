<template>
  <div>
    <div class="header-line d-flex m-3">
      <div class="dropdown">
        <colour-tag class="color-label dropdown-toggle" data-toggle="dropdown" :bg-color="labelColor"
          :tag-text="labelText"></colour-tag>
        <div class="mt-2 dropdown-menu font-small">
          <div class="dropdown-item c-pointer" v-for="(colour, index) in tagColours" :key="colour"
            @click="selectColourTag(index)">
            <colour-tag :bg-color="colour" v-if="index > 0"></colour-tag>
            <span :class="{'colour-content': index > 0}" v-text="colour"></span>
          </div>
        </div>
      </div>
      <div class="d-flex ml-auto">
        <checklist-status class="checklist" :progress="1"></checklist-status>
        <div class="delete-icon mr-0 c-pointer" @click="deleteThisCard">
          <icon name="trash-o"></icon>
        </div>
      </div>
    </div>
    <div class="create-position d-flex m-3">
      <div class="create-info">
        <img src="../../../static/avatar.jpg">
        <span v-text="createTime"></span>
      </div>
      <div class="position-info pl-3">
        <div class="position-title">Card in list</div>
        <div class="position-detail" v-text="sectionTitle"></div>
      </div>
    </div>
    <div class="card-detail" :class="[detailEdit, detailBgColor]">
      <div class="card-title-content">
        <div class="textarea-content pr-5" contenteditable="true" v-text="cardData.title" @keyup.enter="updateTitle"
          @keydown.enter.prevent></div>
        <div class="color-palette">
          <color-palette :select="selectBg"></color-palette>  
        </div>
      </div>
      <hr class="my-0 mx-3">
      <div class="card-description" @click="editDescr">
        <autosize-textarea v-model="descr" class="textarea-content" placeholder="Edit card description"></autosize-textarea>
      </div>
      <div class="p-3 confirm-buttons" v-if="isEditDescr">
        <button type="button" class="btn btn-primary btn-sm" @click="saveDescr">save changes</button>
        <button type="buttom" class="btn btn-light btn-sm btn-outline-secondary" @click="cancelEdit">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import 'vue-awesome/icons/check-circle'
  import 'vue-awesome/icons/trash-o'
  import colourTag from '../common/colourTag'
  import colorPalette from '../common/colorPalette'
  import autosizeTextarea from '../common/autosizeTextarea'
  import checklistStatus from '../common/checklistStatus'
  import { ALL_COLOURS, TAG_COLOURS, CLOSE } from '@/vuex/data-type'

  export default {
    name: 'asideCardChai',
    components: {
      'colour-tag': colourTag,
      'color-palette': colorPalette,
      'autosize-textarea': autosizeTextarea,
      'checklist-status': checklistStatus
    },
    data () {
      return {
        allColours: ALL_COLOURS,
        tagColours: TAG_COLOURS,
        isEditDescr: false,
        descr: this.cardData.description
      }
    },
    props: {
      cardData: {
        required: true
      },
      sectionTitle: {
        type: String,
        required: true
      },
      updateData: {
        type: Function,
        required: true
      }
    },
    computed: {
      labelColor: function () {
        let labelNum = this.cardData.colourTagNum
        if (labelNum && labelNum > 0) {
          return this.tagColours[labelNum]
        }
        return 'gray'
      },
      labelText: function () {
        let labelNum = this.cardData.colourTagNum || 0
        return this.tagColours[labelNum]
      },
      createTime: function () {
        return this.cardData.startDate.toLocaleString()
      },
      detailEdit: function () {
        return this.isEditDescr ? 'card-descr-edit' : ''
      },
      detailBgColor: function () {
        return this.cardData.bgColorNum > -1 ? 'bg-' + this.allColours[this.cardData.bgColorNum] : ''
      }
    },
    methods: {
      ...mapMutations([
        'updateShowDetail'
      ]),
      selectColourTag: function (index) {
        this.updateData(this.cardData.key, 'colourTagNum', index)
      },
      updateTitle (event) {
        let cardTitle = event.target.innerText
        this.updateData(this.cardData.key, 'title', cardTitle)
      },
      editDescr () {
        this.isEditDescr = true
      },
      saveDescr () {
        this.updateData(this.cardData.key, 'description', this.descr)
        this.isEditDescr = false
      },
      cancelEdit () {
        this.isEditDescr = false
        this.descr = this.cardData.description
      },
      selectBg (index) {
        this.updateData(this.cardData.key, 'bgColorNum', index)
      },
      deleteThisCard () {
        this.deleteCard({sectionKey: this.$parent.sectionData.key, cardKey: this.cardData.key})
        this.updateShowDetail({type: CLOSE})
      }
    }
  }
</script>

<style scoped>
  .header-line {
    height: 24px;
  }
  .color-label {
    cursor: pointer;
    margin-left: -1rem;
    font-size: 1rem;
    height: 24px;
    vertical-align: baseline;
  }
  .color-label:before {
    right: -6px;
    height: 12px;
    width: 12px;
    border-right-width: 6px;
    border-top-width: 12px;
  }
  .color-label:after {
    right: -6px;
    height: 12px;
    width: 12px;
    border-right-width: 6px;
    border-top-width: 12px;
  }
  .colour-content {
    text-transform: capitalize;
  }
  .checklist {
    margin: auto 1rem;
  }
  .delete-icon svg {
    width: 1rem;
    height: 1.5rem;
    color: #868e96;
  }
  .create-position {
    color: #868e96;
    font-size: 14px;
  }
  .create-info {
    border-right: 1px solid rgba(38,50,56,.1);
    padding-right: 1rem;
  }
  .create-info img {
    height: 40px;
    width: 40px;
  }
  .position-info div {
    line-height: 20px;
  }
  .position-detail {
    color: #2c3e50;
  }
  .card-detail {
    margin: 1rem;
    border: 1px solid rgba(38,50,56,.2);
    border-radius: 4px;
    box-shadow: 0 1px 0 rgba(38,50,56,.1);
  }
  .card-descr-edit {
    border: 1px solid #2196f3;
    box-shadow: 0 0 2px 1px rgba(33,150,243,.3);
    background: #fff !important;
  }
  .card-title-content {
    position: relative;
  }
  .card-description textarea {
    height: 100%;
    width: 100%;
    resize: none;
    overflow: hidden;
    background: transparent;
  }
  .textarea-content {
    border: none;
    width: 100%;
    min-height: 35px;
    padding: .5rem 1rem;
    word-wrap: break-word;
    text-align: left;
  }
  .textarea-content:focus {
    outline: none;
  }
  .color-palette {
    position: absolute;
    top: .5rem;
    right: 1rem;
  }
  .confirm-buttons {
    background: #e9f5fe;
    border-radius: 4px;
  }
</style>
