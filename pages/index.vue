<template>
  <div id="home">
    <div class="container">
      <LayoutFeaturedThreads />
      <div class="categories-view">
        <div class="header d-flex flex-row justify-between align-center">
          <h1>Forum</h1>
          <div class="header-btns d-flex flex-row align-center">
            <div class="btn btn-primary"><i class="bi bi-eye"></i> New Posts</div>
            <div class="btn btn-default"><i class="bi bi-pencil-square"></i> Post Thread</div>
          </div>
        </div>
         <CommonForum />
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
.categories-view {
  margin-top: 40px;
}

.header-btns {
  gap: 10px;
}
</style>