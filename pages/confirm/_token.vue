<template>
  <div class="status">
    <div class="success" v-show="!loading && verified">
      <div class="icon" @click="returnHome">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
          <circle class="path circle" fill="none" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
          <polyline class="path check" fill="none" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
        </svg>
      </div>
      <h1 @click="returnHome">Account verified!</h1>
      <h3 @click="returnHome">Click to return home</h3>
    </div>
    <div class="failure" v-show="!loading && !verified">
      <div class="icon" @click="returnHome">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
          <circle class="path circle" fill="none" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
          <line class="path line" fill="none" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
          <line class="path line" fill="none" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
        </svg>
      </div>
      <h1 @click="returnHome">Account Not Found!</h1>
      <h3 @click="returnHome">Click to return home</h3>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      loading: true,
      verified: false,
    }
  },
  methods: {
    returnHome() {
      this.$router.push('/')
    }
  },
  mounted() {
    this.$store.dispatch('auth/confirmUser', { token: this.$route.params.token }).then(({ data }) => {
      this.loading = false;
      this.verified = true;
    }).catch((error) => {
      if (!error.response.data.status) {
        this.loading = false;
        this.verified = false;
      }
    });
  }
}
</script>

<style scoped>
.status {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  user-select: none;
}

.status .success,
.status .failure {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  color: var(--success-color);
  margin-bottom: 10px;
  cursor: pointer;
}

.failure h1 {
  color: var(--danger-color);
}

h3 {
  text-decoration: underline;
  cursor: pointer;
}

.icon {
  cursor: pointer;
  transition: transform 0.25s ease-in-out;
}

.icon:hover {
  transform: scale(0.85);
}

svg {
  width: 300px;
  display: block;
  margin-bottom: 25px;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
}

.path.circle {
  -webkit-animation: dash 1.9s ease-in-out;
  animation: dash 1.9s ease-in-out;
}

.success .path.circle,
.success .path.check {
  stroke: var(--success-color);
}

.failure .path.circle,
.failure .path.line {
  stroke: var(--danger-color);
}

.path.check {
  stroke-dashoffset: -100;
  -webkit-animation: dash-check 1.9s 0.35s ease-in-out forwards;
  animation: dash-check 1.9s 0.35s ease-in-out forwards;
}

.path.line {
  stroke-dashoffset: 1000;
  -webkit-animation: dash 1.9s 0.35s ease-in-out forwards;
  animation: dash 1.9s 0.35s ease-in-out forwards;
}

@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}
@keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}
</style>