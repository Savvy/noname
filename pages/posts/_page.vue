<template>
  <div id="posts">
    <div class="container">
      <div class="forum">
        <div class="header d-flex justify-between align-center w-100">
          <div class="left d-flex align-center">
              <div class="header-title"><nuxt-link to="/">Home</nuxt-link> <span>/</span> New Posts</div>
          </div>
          <div class="right d-flex flex-row">
              <div class="btn sort">Filters <i class="bi bi-caret-down-fill"></i></div>
          </div>
        </div>
        <div class="sub-header d-flex w-100" v-if="showPagination">
          <CommonPagination :url="`/posts/`" :pagination=pagination />
        </div>
        <div class="body w-100">
          <CommonThread v-for="thread in recentThreads" :thread="thread" :recent_post="thread.posts[0]" :key="thread.slug" />
        </div>
        <CommonPagination :url="`/posts/`" :pagination=pagination />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'New posts'
    }
  },
  data() {
    return {
      showPagination: true
    }
  },
  async asyncData({ $axios, params, redirect }) {
    const currentPage = parseInt(params.page) || 1;
    let { data } = await $axios.get(`/thread/recent/${currentPage}`)
    if (params.page > data.pagination.totalPages) {
            redirect(`/posts/${data.pagination.totalPages}`);
            return;
    }
    return { recentThreads: data.results, pagination: data.pagination };
  },
}
</script>

<style scoped>
.header .right {
  gap: 10px;
}

.header .header-title {
  font-weight: 500;
  font-size: 20px;
  color: var(--light-text);
}

.header .header-title span {
  font-size: 17px;
}

.header .header-description {
  margin-top: 5px;
  font-size: 14px;
  opacity: 0.75;
}

.sub-header {
  margin: 10px 0;
}

.sort.btn i {
  margin-right: 0;
}

.body {
  background-color: var(--body-color);
  border-radius: var(--border-radius);
  margin-bottom: 20px;
}
.thread:nth-child(even) {
  background-color: var(--bg-light-1);
}
</style>