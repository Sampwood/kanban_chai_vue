<template>
  <div class="m-3 font-small">
    <div class="comment-list" v-for="comment in cardData.comments" :key="comment.id">
      <div>
        <div class="d-flex justify-content-between">
          <img class="userpic" src="../../../static/avatar.jpg">
          <span>{{ comment.createDate.toLocaleString() }}</span>
        </div>
        <autosize-textarea class="ml-4 p-2 rounded comment-content" readonly :value="comment.message"></autosize-textarea>
      </div>
    </div>
    <div class="comment-form">
      <form>
        <div class="form-group">
          <autosize-textarea v-model="newComment" class="textarea-content form-control"></autosize-textarea>
        </div>
        <button type="button" class="btn btn-sm btn-primary" :disabled="hasComment" @click="submit">Send</button>
        <button type="button" class="btn btn-sm btn-light" :disabled="hasComment" @click="cancel">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
  import autosizeTextarea from '../common/autosizeTextarea'

  export default {
    name: 'asideCommentsChai',
    components: {
      'autosize-textarea': autosizeTextarea,
    },
    data () {
      return {
        newComment: '',
      }
    },
    props: {
      cardData: {
        required: true,
      },
      postItem: {
        type: Function,
        required: true,
      },
    },
    computed: {
      hasComment () {
        return this.newComment.trim().length < 1
      },
    },
    methods: {
      cancel () {
        this.newComment = ''
      },
      submit () {
        this.postItem(this.cardData.key, 'comments', {message: this.newComment, createDate: new Date()})
        this.newComment = ''
      },
    },
  }
</script>

<style scoped>
  .userpic {
    width: 20px;
    height: 20px;
  }
  .comment-content {
    word-wrap: break-word;
    max-width: 90%;
    display: inline-block;
    background: #e9f5fe;
  }
</style>
