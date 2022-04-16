<template>
  <div class="badge" :style="styleObject">{{ role.name }}</div>
</template>

<script>
export default {
  props: ['role'],
  computed: {
    styleObject() {
      return {
        'background-color': this.role.badge_color,
        'color': this.role.text_color,
      }
    }
  }
}
</script>

<style scoped>
.badge {
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 100px;
  background-color: var(--primary-color);
  color: var(--light-text);
  user-select: none;
  cursor: pointer;
}
</style>