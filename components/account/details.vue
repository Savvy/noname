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
    <form>
      <div class="input-group align-center">
        <span>Username:</span>
        <div class="default-box">
          {{ user.username }}
          <div class="btn btn-default">Change</div>
        </div>
      </div>
      <div class="input-group align-center">
        <span>Email:</span>
        <div class="default-box">
          {{ user.email }}
          <div class="btn btn-default">Change</div>
        </div>
      </div>
      <div class="input-group disclaimer">
        <span>Avatar:</span>
        <div class="change-avatar">
          <CommonAvatar
            src="https://i.imgur.com/rzuOBa8.png"
            borderRadius="5px"
            height="80px"
            width="80px"
            :pointer="true"
            @click.native="$refs.changeAvatar.click()"
          />
          <input
            type="file"
            ref="changeAvatar"
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
          <CommonRichEditor btn-text="Save" />
        </client-only>
      </div>
      <button type="submit" class="btn btn-primary align-self-center">
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.title {
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

form {
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