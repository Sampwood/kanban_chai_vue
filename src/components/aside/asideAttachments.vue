<template>
  <div class="m-3 font-small">
    <header class="mb-3"><strong>Attachments</strong></header>
    <div class="attach-list pl-2 mb-3">
      <div class="attachment d-flex justify-content-between">
        <div>
          <icon name="picture-o" class="align-middle"></icon>
          <span>avatar.jpg</span>
          <icon name="thumb-tack" class="align-middle"></icon>
        </div>
        <div class="attach-action">
          <icon name="thumb-tack" class="align-middle"></icon>
          <span>Unpin</span>
          <icon name="download" class="align-middle"></icon>
          <span>Download</span>
          <icon name="trash-o" class="align-middle" onclick="alert(1)"></icon>
        </div>
        <div class="attach-info">
          <span>31.01.2018</span>
          <img class="userpic" src="../../../static/avatar.jpg">
        </div>
      </div>
    </div>
    <div class="custom-file attach-file">
      <input type="file" class="custom-file-input" id="attachFile">
      <label class="btn btn-sm btn-light border border-secondary" for="attachFile">Attach a file</label>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/picture-o'
  import 'vue-awesome/icons/thumb-tack'
  import 'vue-awesome/icons/download'
  import 'vue-awesome/icons/trash-o'

  export default {
    name: 'asideAttachmentsChai'
  }
</script>

<style scoped>
  .attachment {
    cursor: pointer;
  }
  .attach-action {
    display: none;
  }
  .attachment:hover .attach-action {
    display: block;
  }
  .attachment:hover .attach-info {
    display: none;
  }
  .attach-file {
    width: 100px;
  }
  .attach-file input {

  }
  .attach-file label {
    position: absolute;
    top: 0;
    cursor: pointer;
    width: 100%;
  }
  .userpic {
    width: 20px;
    height: 20px;
  }
</style>
