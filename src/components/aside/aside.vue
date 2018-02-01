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
        <aside-card></aside-card>
        <hr>
        <aside-priority></aside-priority>
        <hr>
        <aside-timing></aside-timing>
        <hr>
        <aside-checklist></aside-checklist>
        <hr>
        <aside-tags></aside-tags>
        <hr>
        <aside-attachments></aside-attachments>
        <hr>
        <aside-comments></aside-comments>
      </div>
      <div class="tab-pane" id="activity" role="tabpanel">activity</div>
    </div>
  </div>
  </div>
</template>

<script>
  import asideCardChai from './asideCard'
  import asidePriorityChai from './asidePriority'
  import asideTimingChai from './asideTiming'
  import asideChecklistChai from './asideChecklist'
  import asideTagsChai from './asideTags'
  import asideAttachmentsChai from './asideAttachments'
  import asideCommentsChai from './asideComments'

  export default {
    name: 'asideChai',
    components: {
      'aside-card': asideCardChai,
      'aside-priority': asidePriorityChai,
      'aside-timing': asideTimingChai,
      'aside-checklist': asideChecklistChai,
      'aside-tags': asideTagsChai,
      'aside-attachments': asideAttachmentsChai,
      'aside-comments': asideCommentsChai
    }
  }
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
</style>
