<template>
    <!--
            - Username,
            - Email,
            - Avatar,
            - Gender,
            - About Me,
      -->
  <div class="account-details">
    <div class="title">Account Details</div>
    <div class="form">
      <div class="alert-message error" v-if="message.error">{{ message.error }}</div>
      <div class="alert-message success" v-if="message.success">{{ message.success }}</div>
      <div class="input-group align-center">
        <span>Username:</span>
        <div class="default-box">
          <span v-if="!edit.username">{{ user.username }}</span>
          <input type="text" v-model="credentials.username" name="username" class="input-default" v-else>
          <div class="btn btn-primary" v-if="edit.username" @click="changeUsername">Save</div>
          <div class="btn btn-default" @click="edit.username = !edit.username">{{ edit.username ? 'Cancel' : 'Change' }}</div>
        </div>
      </div>
      <div class="input-group align-center">
        <span>Email:</span>
        <div class="default-box">
          <span v-if="!edit.email">{{ user.email }}</span>
          <input type="email" v-model="credentials.email" name="email" class="input-default" v-else>
          <div class="btn btn-primary" v-if="edit.email" @click="changeEmail">Save</div>
          <div class="btn btn-default" @click="edit.email = !edit.email">{{ edit.email ? 'Cancel' : 'Change' }}</div>
        </div>
      </div>
      <div class="input-group disclaimer">
        <span>Avatar:</span>
        <div class="change-avatar">
          <CommonAvatar
            :src="userAvatar(user.details)"
            borderRadius="5px"
            height="80px"
            width="80px"
            :pointer="true"
            @click.native="$refs.avatar.click()"
          />
          <input
            type="file"
            ref="avatar"
            @change="uploadAvatar($event)"
            name="avatar"
            style="display: none"
            accept=".gif,.jpeg,.jpg,.png"
          />
          <span>Click the image to change your avatar.</span>
        </div>
      </div>
      <div class="input-group">
        <span>Gender:</span>
        <div class="input-group-radio">
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="other" value="other" />
          <label for="other">Other</label>
        </div>
      </div>
      <div class="input-group">
        <span>About Me:</span>
        <client-only>
          <CommonRichEditor />
        </client-only>
      </div>
      <button type="submit" class="btn btn-primary align-self-center">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        error: '',
        success: '',
      },
      credentials: {
        username: '',
        email: '',
      },
      edit: {
        username: false,
        email: false,
      }
    };
  },
  methods: {
    uploadAvatar(event) {
      const formData = new FormData();
      formData.append('avatar', event.target.files[0]);
      this.$axios.post('/user/avatar', formData, {
        headers: {
          'Content-Type': `multipart/form-data`
        }
      }).then(({ data }) => {
        this.updateSuccess(data.message);
        this.$store.dispatch('auth/updateAvatar', data.avatar);
        setTimeout(() => {
          this.message.success = '';
        }, 3000);
      }).catch((error) => {
        this.updateError(error.response.data.message);
      })
    },
    changeUsername() {
      if (this.credentials.username.length < this.settings.minUsernameLength) {
        this.updateError('username_too_short');
        return;
      }
      if (this.credentials.username.length > this.settings.maxUsernameLength) {
          this.updateError('username_too_long');
          return;
      }
      this.$store.dispatch('auth/changeUsername', { username: this.credentials.username }).then((res) => {
        if (res) {
          this.updateSuccess(res.data.message);
          this.credentials.username = '';
          this.edit.username = false;
        }
      }).catch((error) => {
        this.updateError(error.response.data.message);
      });
    },
    changeEmail() {
      if (!this.credentials.email) {
        this.updateError('email_field_empty');
        return;
      }
      this.$store.dispatch('auth/changeEmail', { email: this.credentials.email }).then((res) => {
        if (res) {
          this.updateSuccess(res.data.message);
          this.credentials.email = '';
          this.edit.email = false;
        }
      }).catch((error) => {
        this.updateError(error.response.data.message);
      });
    },
    updateSuccess(message) {
      this.message.success = message;
      setTimeout(() => this.message.success = '', 3000);
    },
    updateError(message) {
      this.message.error = message;
      setTimeout(() => this.message.error = '', 3000);
    },
  },
};
</script>

<style scoped>
.account-details {
    width: 100%;
    height: 100%;
}

.title {
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.input-group {
  flex: 1 0 auto;
  max-width: initial;
  display: flex;
  flex-direction: row;
}

.input-group > span {
  min-width: 120px;
}

.input-group > .editor-container {
  flex: 1;
}

.change-avatar span {
  display: block;
  margin-top: 5px;
  font-size: 12px;
}

.default-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.default-box .btn {
  flex: 1 0 auto;
}

label {
  margin-right: 20px;
}

button[type="submit"] {
  font-size: 16px;
  min-width: 120px;
}

.avatar {
  transition: filter 0.25s ease-in-out;
}

.avatar:hover {
  filter: grayscale(1);
}
</style>