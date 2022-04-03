<template>
  <div id="home">
    <div class="container">
      <LayoutFeaturedThreads />
      <div class="home-header d-flex flex-row justify-between align-center">
        <h1>Forum</h1>
        <div class="header-btns d-flex flex-row align-center">
          <div class="btn btn-primary"><i class="bi bi-eye"></i> New Posts</div>
        </div>
      </div>
      <div class="page-container">
        <div class="page-body">
          <div class="categories-view">
            <CommonForum v-for="(category, index) in $store.state.categories.data" :key="index" :category="category" />
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
  head() {
    return {
        title: 'Home'
    }
  },
}
</script>

<style scoped>
.home-header {
  margin: 40px 0 20px 0;
}

.header-btns {
  gap: 10px;
}

h1 {
  font-size: 1.65rem;
}
</style>