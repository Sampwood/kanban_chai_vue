<template>
  <div class="m-3">
    <form class="timing">
      <div class="form-group row">
        <label for="startDate" class="col-sm-4 col-form-label col-form-label-sm">Start date</label>
        <div class="col-sm-8">
          <input type="datetime-local" class="form-control form-control-sm" id="startDate" :value="startDate">
        </div>
      </div>
      <div class="form-group row">
        <label for="dueDate" class="col-sm-4 col-form-label col-form-label-sm">Due date</label>
        <div class="col-sm-8">
          <input type="datetime-local" class="form-control form-control-sm" id="dueDate" :value="dueDate">
        </div>
      </div>
      <div class="form-group row">
        <label for="estimate" class="col-sm-4 col-form-label col-form-label-sm">Estimate(h)</label>
        <div class="col-sm-8">
          <input type="number" class="form-control form-control-sm" id="estimate" :value="cardData.estimate">
        </div>
      </div>
      <div class="form-group row">
        <label for="spentTime" class="col-sm-4 col-form-label col-form-label-sm">Spent time(h)</label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext form-control-sm" readonly id="spentTime"
            :value="cardData.spendTime">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'asideTimingChai',
    props: {
      cardData: {
        required: true
      }
    },
    computed: {
      startDate () {
        return this.formateDate(this.cardData.startDate)
      },
      dueDate () {
        return this.formateDate(this.cardData.dueDate)
      }
    },
    methods: {
      formateDate (time) {
        if (!time) {
          return
        }
        let month = time.getMonth() + 1
        month = month > 9 ? month : '0' + month
        return time.getFullYear() + '-' + month + '-' + time.getDate() + 'T' + time.getHours() + ':' + time.getMinutes()
      }
    }
  }
</script>

<style scoped>
  .timing {
    width: 80%
  }
</style>
