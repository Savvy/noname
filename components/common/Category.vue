<template>
  <div class="category-container d-flex align-center">
    <div class="icon"><i :class="forum.icon ? forum.icon : 'bi bi-chat-dots'"></i></div>
    <div class="category align-center">
      <div class="category-info w-auto">
        <nuxt-link :to="`/forum/${forum.slug}`" class="category-title" v-tooltip="forum.description ? forum.description : forum.name">{{ forum.name }}</nuxt-link>
        <div class="category-meta">
          Topics: <span>{{ topics }}</span> Posts: <span>{{ posts }}</span>
        </div>
      </div>
      <div class="recent-thread d-flex flex-row" v-if="forum.recent_thread">
        <nuxt-link :to="'/profile/' + forum.recent_thread.user.username">
          <CommonAvatar
            :src="forum.recent_thread.user.details.avatar"
            borderRadius="100px"
            height="40px"
            width="40px"
            :pointer="true"
          />
        </nuxt-link>
        <div class="thread-info d-flex flex-column">
          <nuxt-link :to="'/threads/' + forum.recent_thread.threadId" class="thread-title">{{ forum.recent_thread.title }}</nuxt-link>
          <div class="thread-meta">
            <nuxt-link :to="'/profile/' + forum.recent_thread.user.username">{{ forum.recent_thread.user.username }}</nuxt-link>
            <span class="sep"></span>
            <!-- <span class="time">3 days ago</span> -->
            <span class="time"><time-ago refresh :long=true :datetime="forum.recent_thread.updatedAt"/></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    forum: {
      type: Object,
      required: true,
    }
  },
  computed: {
    topics() {
      return this.forum.threads.length;
    },
    posts() {
      return this.forum.threads.length + this.forum.threads.reduce((prev, curr) => prev + curr.posts.length, 0);
    }
  }
}
</script>

<style scoped>
.category-container {
  padding: 15px 20px;
}

.category-container > .icon {
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
  width: 280px;
  gap: 12px;
  white-space: nowrap;
  word-wrap: normal;
  text-overflow: ellipsis;
}

.thread-info {
  gap: 5px;
}

.thread-info > .thread-title {
  font-weight: 500;
  font-size: 14px;
  color: var(--light-text);
}

.thread-meta {
  font-size: 14px;
  display: flex;
  align-items: center;
}

.thread-meta > .time {
  color: var(--primary-color);
  font-weight: 300;
}

.category {
  display: flex;
  flex: 1 0 auto;
}

@media screen and (max-width: 720px) {
  .category {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
  }

  .category-meta {
    display: none;
  }

  .recent-thread > a {
    display: none;
  }
}
</style>