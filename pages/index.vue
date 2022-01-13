<template>
  <div id="home">
    <div class="container">
      <LayoutFeaturedThreads />
      <div class="home-header d-flex flex-row justify-between align-center">
        <h1>Forum</h1>
        <div class="header-btns d-flex flex-row align-center">
          <div class="btn btn-primary"><i class="bi bi-eye"></i> New Posts</div>
          <div class="btn btn-default"><i class="bi bi-pencil-square"></i> Post Thread</div>
        </div>
      </div>
      <div class="page-container">
        <div class="page-body">
          <div class="categories-view">
            <CommonForum v-for="index in 3" :id="index" :key="index" />
          </div>
        </div>
        <div class="page-sidebar">
          <WidgetsOnlineMembers />
          <WidgetsStatistics />
          <WidgetsShare />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home-header {
  margin: 40px 0 20px 0;
}

.header-btns {
  gap: 10px;
}
</style>