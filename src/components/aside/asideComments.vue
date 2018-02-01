<template>
  <div class="m-3 font-small">
    <div class="comment-list">
      <div>
        <div class="d-flex justify-content-between">
          <img class="userpic" src="../../../static/avatar.jpg">
          <span>31 Jan 2018 14:01</span>
        </div>
        <p class="ml-4 p-2 rounded comment-content">hello</p>
      </div>
    </div>
    <div class="comment-form">
      <form>
        <div class="form-group">
          <input type="text" class="form-control">
        </div>
        <button type="button" class="btn btn-sm btn-primary">Send</button>
        <button type="button" class="btn btn-sm btn-light">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'asideCommentsChai'
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
