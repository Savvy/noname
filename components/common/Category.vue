<template>
  <div class="category d-flex align-center">
    <div class="icon"><i class="bi bi-megaphone"></i></div>
    <div class="category-info w-auto">
      <nuxt-link to="/category" class="category-title"
        >News & Announcements</nuxt-link
      >
      <div class="category-meta">
        Topics: <span>481</span> Posts: <span>1028</span>
      </div>
    </div>
    <div class="recent-thread d-flex flex-row">
      <nuxt-link to="/profile">
        <CommonAvatar
          src="https://i.imgur.com/45vM6qK.jpg"
          borderRadius="100px"
          height="40px"
          width="40px"
          :pointer="true"
        />
      </nuxt-link>
      <div class="thread-info d-flex flex-column">
        <nuxt-link to="/thread" class="thread-title">New API Changes</nuxt-link>
        <div class="thread-meta">
          <nuxt-link to="/profile">Chroma</nuxt-link>
          <span class="sep"></span>
          <span class="time">3 days ago</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category {
  padding: 15px 20px;
}

.category > .icon {
  margin-right: 15px;
  font-size: 32px;
}

.icon > i {
  color: var(--primary-color);
}

@supports (-webkit-background-clip: text) or (background-clip: text) {
  .icon > i {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
}

.category-title {
  color: var(--light-text);
  font-size: 1.15rem;
}

.category-meta {
  font-size: 0.88rem;
  color: var(--primary-color);
}

.category-meta span {
  font-weight: 600;
}

.recent-thread {
  gap: 12px;
}

.thread-info {
  gap: 5px;
}

.thread-info > .thread-title {
  font-weight: 500;
  color: var(--light-text);
}

.thread-meta {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
}

.thread-meta > .time {
  color: var(--primary-color);
  font-weight: 300;
}
</style>