<template>
  <div class="m-3">
    <form class="timing">
      <div class="form-group row">
        <label for="startDate" class="col-sm-4 col-form-label col-form-label-sm">Start date</label>
        <div class="col-sm-8">
          <input type="datetime-local" class="form-control form-control-sm" :value="startDate"
            @input="updateStartDate($event.target.value)">
        </div>
      </div>
      <div class="form-group row">
        <label for="dueDate" class="col-sm-4 col-form-label col-form-label-sm">Due date</label>
        <div class="col-sm-8">
          <input type="datetime-local" class="form-control form-control-sm" :value="dueDate"
            @input="updateDueDate($event.target.value)">
        </div>
      </div>
      <div class="form-group row">
        <label for="estimate" class="col-sm-4 col-form-label col-form-label-sm">Estimate(h)</label>
        <div class="col-sm-8">
          <input type="number" class="form-control form-control-sm" :value="cardData.estimate"
            @input="updateEstimate($event.target.value)">
        </div>
      </div>
      <div class="form-group row">
        <label for="spentTime" class="col-sm-4 col-form-label col-form-label-sm">Spent time(h)</label>
        <div class="col-sm-8">
          <div class="d-flex spend-time" v-if="show">
            <input type="number" class="form-control-plaintext form-control-sm" readonly :value="cardData.spendTime">
            <button type="button" class="btn btn-success btn-sm" @click="showLogTime">Log Time</button>
          </div>
          <input type="number" class="form-control form-control-sm" v-model="spendTime"
            @keyup.enter="logTime" @keyup.esc="show = true" @blur="show = true" v-if="!show" v-focus>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'asideTimingChai',
    data () {
      return {
        show: true,
        spendTime: 0
      }
    },
    props: {
      cardData: {
        required: true
      },
      updateData: {
        type: Function,
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
        let date = time.getDate()
        date = date > 9 ? date : '0' + date
        let hour = time.getHours()
        hour = hour > 9 ? hour : '0' + hour
        let minute = time.getMinutes()
        minute = minute > 9 ? minute : '0' + minute
        return time.getFullYear() + '-' + month + '-' + date + 'T' + hour + ':' + minute
      },
      updateStartDate (value) {
        this.updateData(this.cardData.key, 'startDate', new Date(value))
      },
      updateDueDate (value) {
        this.updateData(this.cardData.key, 'dueDate', new Date(value))
      },
      updateEstimate (value) {
        this.updateData(this.cardData.key, 'estimate', value)
      },
      logTime () {
        this.updateData(this.cardData.key, 'spendTime', this.cardData.spendTime + parseFloat(this.spendTime))
        this.show = true
      },
      showLogTime () {
        this.show = false
      }
    },
    // 自定义指令
    directives: {
      // 获得焦点指令
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>
  .spend-time {
    justify-content: space-between
  }
</style>
