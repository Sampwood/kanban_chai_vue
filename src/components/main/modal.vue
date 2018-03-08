<template>
  <div>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="modalId + 'Label'" v-text="modalTitle"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="modal-body">...</slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="save">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'modal',
    props: {
      // modal的id
      modalId: {
        type: String,
        default: ''
      },
      // modal的标题
      modalTitle: {
        type: String,
        default: ''
      },
      // 点击保存的回调函数
      callback: {
        type: Function,
        default: function () {}
      }
    },
    methods: {
      save () {
        if (this.callback()) {
          $('#' + this.modalId).modal('hide')
        }
      }
    }
  }
</script>

<style>
</style>
