<template>
  <div class="m-3 font-small">
    <header class="mb-3"><strong>Attachments</strong></header>
    <div class="attach-list pl-2 mb-3" v-for="attachment in cardData.attachments" :key="attachment.id">
      <div class="attachment d-flex justify-content-between">
        <div>
          <icon name="picture-o" class="align-middle"></icon>
          <span>{{ attachment.name }}</span>
          <icon name="thumb-tack" class="align-middle" v-if="attachment.isPin"></icon>
        </div>
        <div class="attach-action">
          <div class="mr-1" @click="updatePin(attachment.id, attachment.isPin)">
            <icon name="thumb-tack" class="align-middle"></icon>
            <span>{{ attachment.isPin ? 'Unpin' : 'Pin' }}</span>
          </div>
          <div class="mr-1">
            <icon name="download" class="align-middle"></icon>
            <span>Download</span>
          </div>
          <div>
            <icon name="trash-o" class="align-middle" onclick="alert(1)"></icon>
          </div>
        </div>
        <div class="attach-info">
          <span>{{ attachment.uploadDate.toLocaleDateString() }}</span>
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
    name: 'asideAttachmentsChai',
    props: {
      cardData: {
        required: true
      },
      updateItem: {
        type: Function,
        required: true
      }
    },
    methods: {
      updatePin (id, isPin) {
        this.updateItem(this.cardData.key, 'attachments', id, 'isPin', !isPin)
      }
    }
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
    display: flex;
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
