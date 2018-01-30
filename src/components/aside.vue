<template>
  <div class="aside-container">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#details" role="tab">Card Details</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#activity" role="tab">Activity</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="details" role="tabpanel">
        <div class="header-line flex">
          <div class="color-label"><span class="color-label-text">Blue</span></div>
          <div class="status">
            <span class="status-progress"></span>
            <icon name="check-circle"></icon>
            <span class="status-text">50%</span>
          </div>
          <div class="delete-icon">
            <icon name="trash-o"></icon>
          </div>
        </div>
        <div class="create-position flex">
          <div class="create-info">
            <img src="../../static/avatar.jpg">
            <span>12 Jan 2018 16:14</span>
          </div>
          <div class="position-info">
            <div class="position-title">Card in list</div>
            <div class="position-detail">Doing</div>
          </div>
        </div>
        <div class="card-detail">
          <div class="card-title-content">
            <div class="title-content textarea-content" contenteditable="true">Special title treatment</div>
            <div class="color-palette">
              <icon name="paint-brush"></icon>
            </div>
          </div>
          <hr class="separator">
          <div class="card-description">
            <div class="textarea-content" contenteditable="true">Hello, world</div>
          </div>
        </div>
        <hr>
        <div class="priority-selection flex">
          <div class="dropdown show">
            <a class="btn btn-success btn-sm dropdown-toggle" href="#" data-toggle="dropdown">
              <icon name="thermometer-0"></icon>
              Normal priority
            </a>
            <div class="dropdown-menu">
              <button class="btn-light dropdown-item">No priority></button>
            </div>
          </div>
        </div>
        <hr>
        <div class="timing flex">
          <form>
            <div class="form-group row">
              <label for="startDate" class="col-sm-5 col-form-label col-form-label-sm">Start date</label>
              <div class="col-sm-7">
                <input type="date" class="form-control form-control-sm" id="startDate">
              </div>
            </div>
            <div class="form-group row">
              <label for="dueDate" class="col-sm-5 col-form-label col-form-label-sm">Due date</label>
              <div class="col-sm-7">
                <input type="date" class="form-control form-control-sm" id="dueDate">
              </div>
            </div>
            <div class="form-group row">
              <label for="estimate" class="col-sm-5 col-form-label col-form-label-sm">estimate</label>
              <div class="col-sm-7">
                <input type="number" class="form-control form-control-sm" id="estimate">
              </div>
            </div>
            <div class="form-group row">
              <label for="spentTime" class="col-sm-5 col-form-label col-form-label-sm">Spent time</label>
              <div class="col-sm-7">
                <input type="date" class="form-control form-control-sm" id="spentTime">
              </div>
            </div>
          </form>
        </div>
        <hr>
        <div class="checklist text-left m-3">
          <header>
            <strong>Checklist</strong>
          </header>
          <div>
            <div class="d-flex justify-content-between checklist-status">
              <strong><span>0</span>% done</strong>
              <div>0 of 1</div>
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
              </div>
              <div class="d-flex justify-content-between checklist-item">
                <div>1</div>
                <div>
                  <span>Weight</span>
                  <span>1</span>
                  <input type="range" min="1" max="10" step="1">
                  <icon name="trash-o"></icon>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-light">Add an item</button>
        </div>
        <hr>
        <div class="d-flex m-3">
          <div class="border p-1 tag">
            <icon name="plus-circle"></icon>
            <span>Add a tag</span>
          </div>
        </div>
        <hr>
        <div class="text-left m-3">
          <header><strong>Attachments</strong></header>
        </div>

      </div>
      
      <div class="tab-pane" id="activity" role="tabpanel">activity</div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/trash-o'
  import 'vue-awesome/icons/paint-brush'
  import 'vue-awesome/icons/thermometer-0'
  import 'vue-awesome/icons/plus-circle'
</script>

<style scoped>
  button {
    cursor: pointer;
  }
  .nav-tabs {
    padding: 1rem 1rem 0;
  }
  .tab-content {
    margin-top: 1rem;
  }
  .header-line {
    height: 24px;
  }
  .color-label {
    margin-left: -1rem;
    padding: 0 1rem;
    position: relative;

    color: white;
    background-color: #007bff;
  }
  .color-label-text {
    background-color: inherit;
    vertical-align: middle;
  }
  .color-label-text:before {
    content: '';
    position: absolute;
    right: 0;
    width: 12px;
    height: 12px;
    background-color: inherit;
    border-right: 6px solid;
    border-top: 12px solid transparent;
  }
  .color-label-text:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    background-color: inherit;
    border-right: 6px solid;
    border-bottom: 12px solid transparent;
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
  .delete-icon {
    margin-left: auto;
    margin-right: 0;
  }
  .delete-icon svg {
    width: 1rem;
    height: 1.5rem;
    color: #868e96;
  }
  .flex {
    display: flex;
    margin: 1rem;
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
  .position-info {
    padding-left: 1rem;
    text-align: left;
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
  .title-content {
    padding-right: 3rem;
  }
  .color-palette {
    position: absolute;
    top: .75rem;
    right: 1rem;
  }
  .separator {
    margin: 0 1rem;
  }
  .checklist-status {
    border-bottom: 1px solid #dee2e6;
    margin-bottom: .5rem;
  }
  .checklist-item {
    flex: 1;
  }
  .tag {
    border-radius: 16px;
  }
</style>
