<template>
  <div class="m-3 font-small">
    <header class="mb-3">
      <strong>Tags</strong>
    </header>
    <div class="d-flex tags">
      <div class="dropdown font-small">
        <a class="btn btn-sm btn-light border border-secondary p-1 dropdown-toggle tag" href="#" data-toggle="dropdown">
          <icon name="plus-circle"></icon>
          <span>Add a tag</span>
        </a>
        <div class="dropdown-menu font-small">
          <input type="text" class="dropdown-item tag-input" placeholder="Start typing a name" v-model="tagName"
            @keyup.enter="addTag">
          <hr class="m-0">
          <div class="dropdown-item c-pointer" v-for="tag in tagsHistory" @click="selectTag(tag)">{{ tag }}</div>
        </div>
      </div>
      <div class="btn btn-sm border border-primary text-primary tag tag-content" v-for="tag in cardData.tags">
        {{ tag.text }}
        <button type="button" class="close" @click="deleteTag(tag)">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/plus-circle'
  
  export default {
    name: 'asideTagsChai',
    data () {
      return {
        tagsHistory: [],
        tagName: '',
      }
    },
    props: ['cardData', 'postItem', 'deleteItem'],
    methods: {
      addTag (event) {
        let newTagName = this.tagName.trim()
        if (newTagName) {
          if (this.cardData.tags.map(item => item.text).indexOf(newTagName) < 0) {
            this.postItem(this.cardData.key, 'tags', {text: newTagName})
            this.tagsHistory.push(newTagName)
            this.tagsHistory = [...new Set(this.tagsHistory)]
          }
          event.target.parentNode.click()
          this.tagName = ''
        }
      },
      selectTag (tagName) {
        if (this.cardData.tags.map(item => item.text).indexOf(tagName) < 0) {
          this.postItem(this.cardData.key, 'tags', {text: tagName})
        }
      },
      deleteTag (tag) {
        this.deleteItem(this.cardData.key, 'tags', tag.id)
      },
    },
  }
</script>

<style scoped>
  .tags {
    flex-wrap: wrap;
  }
  .tag {
    border-radius: 16px;
    margin-bottom: .5rem;
    margin-right: .5rem;
  }
  .tag svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .tag-input:focus {
    outline: none;
  }
  .tag-input:active {
    background: none;
  }
  .tag-content {
    position: relative;
  }
  .close {
    display: none;
  }
  .tag-content:hover .close {
    position: absolute;
    right: 5px;
    top: 3px;
    background: white;
    opacity: 1;
    display: block;
  }
</style>
