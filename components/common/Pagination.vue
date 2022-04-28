<template>
  <div class="pagination">
    <nuxt-link :to="url + `${pagination.currentPage - 1}`" class="btn btn-default btn-prev" :disabled='pagination.currentPage == 1'><i class="bi bi-chevron-double-left"></i></nuxt-link>

    <nuxt-link :to="url + `1`" class="btn btn-default btn-page" v-if="pagination.currentPage > 2">1</nuxt-link>
    <nuxt-link :to="url + `${pagination.currentPage - 1}`" class="btn btn-default btn-page" v-if="pagination.currentPage > 1">{{ pagination.currentPage - 1}}</nuxt-link>
    <div class="btn btn-default btn-page current">{{ pagination.currentPage }}</div>
    <nuxt-link :to="url + `${pagination.currentPage + 1}`" class="btn btn-default btn-page" v-if="pagination.currentPage < pagination.totalPages">{{ pagination.currentPage + 1}}</nuxt-link>
    <nuxt-link :to="url + `${pagination.totalPages}`" class="btn btn-default btn-page" v-if="pagination.currentPage < (pagination.totalPages - 1)">{{ pagination.totalPages }}</nuxt-link>

    <!-- <div class="btn btn-default btn-next"  v-if="pagination.currentPage < pagination.totalPages"><i class="bi bi-chevron-double-right"></i></div> -->
    <!-- Instead of hiding the button, show as disabled -->
    <nuxt-link :to="url + `${pagination.currentPage + 1}`" class="btn btn-default btn-next" :disabled='pagination.currentPage == pagination.totalPages'><i class="bi bi-chevron-double-right"></i></nuxt-link>
  </div>
</template>
<script>
export default {
  props: [ 'url', 'pagination' ]
}
</script>

<style scoped>

.pagination {
  display: flex;
  gap: 3px;
}

.pagination .btn-prev {
  border-radius: 5px 0 0 5px;
}

.pagination .btn-page {
  border-radius: 0;
}

.pagination .btn-page.current {
  background-color: var(--bg-light-10);
}

.pagination .btn-next {
  border-radius: 0 5px 5px 0;
}

.pagination .btn i {
  margin-right: 0;
}

.pagination .btn[disabled='disabled'] {
  pointer-events: none;
  opacity: .65;
}
</style>