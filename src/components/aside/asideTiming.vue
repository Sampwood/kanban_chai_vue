<template>
  <div class="timing d-flex m-3">
    <form>
      <div class="form-group row">
        <label for="startDate" class="col-sm-4 col-form-label col-form-label-sm">Start date</label>
        <div class="col-sm-8">
          <input type="datetime-local" class="form-control form-control-sm" id="startDate">
        </div>
      </div>
      <div class="form-group row">
        <label for="dueDate" class="col-sm-4 col-form-label col-form-label-sm">Due date</label>
        <div class="col-sm-8">
          <input type="datetime-local" class="form-control form-control-sm" id="dueDate">
        </div>
      </div>
      <div class="form-group row">
        <label for="estimate" class="col-sm-4 col-form-label col-form-label-sm">estimate</label>
        <div class="col-sm-8">
          <input type="number" class="form-control form-control-sm" id="estimate">
        </div>
      </div>
      <div class="form-group row">
        <label for="spentTime" class="col-sm-4 col-form-label col-form-label-sm">Spent time</label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext form-control-sm" readonly id="spentTime" value="0">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'asideTimingChai'
  }
</script>

<style>
</style>
