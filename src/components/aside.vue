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
            <textarea class="title-content textarea-content">Special title treatment</textarea>
            <div class="color-palette">
              <icon name="paint-brush"></icon>
            </div>
          </div>
          <hr class="separator">
          <div class="card-description">
            <textarea class="textarea-content">Hello, world</textarea>
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
</script>

<style scoped>
  .aside-container {
    margin: 1rem;
  }
  .tab-content {
    margin-top: 1rem;
  }
  .header-line {
    height: 24px;
  }
  .color-label {
    margin-left: -.5rem;
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
    margin-bottom: 1rem;
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
    border: 1px solid rgba(38,50,56,.2);
    border-radius: 4px;
  }
  .card-title-content {
    position: relative;
  }
  .textarea-content {
    border: none;
    width: 100%;
    resize: none;
    min-height: 35px;
    overflow: hidden;
    height: auto;
    padding: .5rem 1rem;
  }
  .title-content {
    padding-right: 3rem;
  }
  .color-palette {
    position: absolute;
    top: .5rem;
    right: 1rem;
  }
  .separator {
    margin: 0 1rem;
  }
</style>
