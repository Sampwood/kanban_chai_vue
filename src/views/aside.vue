<template>
  <div class="aside-container">
    <ul class="nav nav-tabs px-3 pt-3" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#details" role="tab">Card Details</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#activity" role="tab">Activity</a>
      </li>
    </ul>
    <div class="tab-content text-left">
      <div class="tab-pane active mt-3" id="details" role="tabpanel">
        <div class="header-line d-flex m-3">
          <div class="color-label dropdown">
            <a class="color-label-text dropdown-toggle text-white pl-3" href="#" data-toggle="dropdown">Blue</a>
            <div class="dropdown-menu">
              <div class="dropdown-item">No colour tag</div>
            </div>
          </div>
          <div class="status">
            <span class="status-progress"></span>
            <icon name="check-circle"></icon>
            <span class="status-text">50%</span>
          </div>
          <div class="delete-icon ml-auto mr-0">
            <icon name="trash-o"></icon>
          </div>
        </div>
        <div class="create-position d-flex m-3">
          <div class="create-info">
            <img src="../../static/avatar.jpg">
            <span>12 Jan 2018 16:14</span>
          </div>
          <div class="position-info pl-3">
            <div class="position-title">Card in list</div>
            <div class="position-detail">Doing</div>
          </div>
        </div>
        <div class="card-detail">
          <div class="card-title-content">
            <div class="textarea-content pr-5" contenteditable="true">Special title treatment</div>
            <div class="color-palette">
              <icon name="paint-brush"></icon>
            </div>
          </div>
          <hr class="my-0 mx-3">
          <div class="card-description">
            <div class="textarea-content" contenteditable="true">Hello, world</div>
          </div>
        </div>
        <hr>
        <div class="priority-selection d-flex m-3">
          <div class="dropdown">
            <a class="btn btn-success btn-sm dropdown-toggle" href="#" data-toggle="dropdown">
              <icon name="thermometer-0" class="align-middle"></icon>
              Normal priority
            </a>
            <div class="dropdown-menu">
              <button class="btn-light dropdown-item">No priority></button>
            </div>
          </div>
        </div>
        <hr>
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
        <hr>
        <div class="checklist m-3 font-small">
          <header class="mb-3">
            <strong>Checklist</strong>
          </header>
          <div class="mb-3">
            <div class="d-flex justify-content-between checklist-status">
              <strong><span>0</span>% done</strong>
              <div>0 of 1</div>
            </div>
            <div class="input-group">
              <div class="mr-auto">
                <input type="checkbox" class="align-middle">
                <span class="align-middle">1</span>
              </div>
              <div>
                <span class="align-middle">Weight</span>
                <span class="align-middle rounded-circle text-white bg-secondary weight-value">1</span>
                <input type="range" min="1" max="10" step="1" class="align-middle">
                <icon name="trash-o" class="align-middle"></icon>
              </div>
            </div>
          </div>
          <button class="btn btn-sm btn-light border border-secondary">Add an item</button>
        </div>
        <hr>
        <div class="m-3 font-small">
          <header class="mb-3">
            <strong>Tags</strong>
          </header>
          <div class="dropdown font-small">
            <a class="btn btn-sm btn-light border border-secondary p-1 dropdown-toggle tag" href="#" data-toggle="dropdown">
              <icon name="plus-circle"></icon>
              <span>Add a tag</span>
            </a>
            <div class="dropdown-menu">
              <input type="text" class="dropdown-item tag-input" placeholder="Start typing a name">
              <hr class="m-0">
              <div class="dropdown-item">Demo</div>
            </div>
          </div>
        </div>
        <hr>
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
                <img class="userpic" src="../../static/avatar.jpg">
              </div>
            </div>
          </div>
          <div class="custom-file attach-file">
            <input type="file" class="custom-file-input" id="attachFile">
            <label class="btn btn-sm btn-light border border-secondary" for="attachFile">Attach a file</label>
          </div>
        </div>
        <hr>
        <div class="m-3 font-small">
          <div class="comment-list">
            <div>
              <div class="d-flex justify-content-between">
                <img class="userpic" src="../../static/avatar.jpg">
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
  import 'vue-awesome/icons/picture-o'
  import 'vue-awesome/icons/thumb-tack'
  import 'vue-awesome/icons/download'
</script>

<style scoped>
  button {
    cursor: pointer;
  }
  .font-small {
    font-size: 14px;
  }
  .aside-container {
    height: 100%;
  }
  .tab-content {
    height: calc(100% - 60px);
    overflow: auto;
  }
  .header-line {
    height: 24px;
  }
  .color-label {
    margin-left: -1rem;
    padding-right: 1rem;
    position: relative;

    color: white;
    background-color: #007bff;
  }
  .color-label-text {
    background-color: inherit;
    vertical-align: middle;
    text-decoration: none;
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
    border-top: none;
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
  .delete-icon svg {
    width: 1rem;
    height: 1.5rem;
    color: #868e96;
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
  .color-palette {
    position: absolute;
    top: .75rem;
    right: 1rem;
  }
  .checklist-status {
    border-bottom: 1px solid #dee2e6;
    margin-bottom: .5rem;
  }
  .weight-value {
    width: 21px;
    display: inline-block;
    text-align: center;
  }
  .tag {
    border-radius: 16px;
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
    min-width: 0;
    height: 80%;
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
  .comment-content {
    word-wrap: break-word;
    max-width: 90%;
    display: inline-block;
    background: #e9f5fe;
  }
</style>
