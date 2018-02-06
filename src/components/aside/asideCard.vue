<template>
  <div>
    <div class="header-line d-flex m-3">
      <div class="dropdown">
        <colour-tag class="color-label dropdown-toggle" data-toggle="dropdown" bg-color="blue" tag-text="Blue"></colour-tag>
        <div class="mt-2 dropdown-menu font-small">
          <div class="dropdown-item" v-text="colours[0]"></div>
          <div class="dropdown-item" v-for="colour in colours.filter((i,j) => j > 0)" :key="colour">
            <colour-tag :bg-color="colour"></colour-tag>
            <span class="colour-content" v-text="colour"></span>
          </div>
        </div>
      </div>
      <div class="status">
        <span class="status-progress"></span>
        <icon name="check-circle"></icon>
        <span class="status-text">50%</span>
      </div>
      <div class="delete-icon ml-auto mr-0">
        <icon name="trash-o"></icon>
      </div>
    </div>
    <div class="create-position d-flex m-3">
      <div class="create-info">
        <img src="../../../static/avatar.jpg">
        <span>12 Jan 2018 16:14</span>
      </div>
      <div class="position-info pl-3">
        <div class="position-title">Card in list</div>
        <div class="position-detail" v-text="sectionTitle"></div>
      </div>
    </div>
    <div class="card-detail">
      <div class="card-title-content">
        <div class="textarea-content pr-5" contenteditable="true" v-text="cardData.title"></div>
        <div class="color-palette">
          <color-palette></color-palette>  
        </div>
      </div>
      <hr class="my-0 mx-3">
      <div class="card-description">
        <div class="textarea-content description" contenteditable="true" v-text="cardData.description" placeholder="Edit card description"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/check-circle'
  import 'vue-awesome/icons/trash-o'
  import colourTag from '../common/colourTag'
  import colorPalette from '../common/colorPalette'
  import { COLOURS } from '@/vuex/data-type'

  export default {
    name: 'asideCardChai',
    components: {
      'colour-tag': colourTag,
      'color-palette': colorPalette
    },
    data () {
      return {
        colours: COLOURS
      }
    },
    props: {
      cardData: {
        required: true
      },
      sectionTitle: {
        type: String,
        required: true
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
  .status {
    overflow: hidden;
    border: 1px solid #c8e6c9;
    background-color: unset;
    margin-left: 2rem;
    position: relative;
    padding: 0 1rem 0 1.5rem;
    border-radius: 12px;
    color: #28a745;

  }
  .status svg {
    width: 22px;
    height: 22px;
    left: 0;
    position: absolute;
  }
  .status-progress {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;

    width: 50%;
    background-color: #c8e6c9;
  }
  .status-text {
    position: relative;
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
  .card-title-content {
    position: relative;
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
  .description:empty:not(:focus):before {
    content: attr(placeholder);
    font-size: 14px;
    color: rgba(38,50,56,.5);
  }
  .color-palette {
    position: absolute;
    top: .5rem;
    right: 1rem;
  }
</style>
