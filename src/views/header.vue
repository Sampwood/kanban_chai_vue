<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <span class="navbar-brand" href="#">Kanban</span>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link home" href="#">主页 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">行为</a>
        </li>
        <li class="nav-item">
          <a class="nav-link statistics disabled" href="#">统计</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'headerChai',
  }
</script>

<style scoped>
  nav {
    border-bottom: 1px solid;
    border-bottom-color: rgba(38, 50, 56, .2);
  }
</style>
