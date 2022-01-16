<template>
    <div class="password-security">
        <div class="title">Privacy</div>
        <form>
            <div class="input-group align-center">
                <span>Privacy Options:</span>
                <div class="default-box">
                    <input type="checkbox" name="online-status" id="online-status">
                    <label>Show your online status</label>
                    <div class="disclaimer">This setting will show users when you are online.</div>
                </div>
            </div>
            <div class="input-group align-start">
                <span>Allow users to:</span>
                <div class="grouped-settings">
                    <div class="default-box">
                        Start conversations with you (excludes staff)
                        <div class="dropdown-container">
                            <CommonDropdown :options=conversationOptions :defaultOption=conversationOptions[0] />
                        </div>
                    </div>
                    <div class="default-box">
                        Post messages on your wall
                        <div class="dropdown-container">
                            <CommonDropdown :options=wallPosts :defaultOption=wallPosts[0] />
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary align-self-center">Save</button>
        </form>
        <!--
            - Current Status.
            - Allow users to start conversations, excluding certain (eg. staff) roles.
            - Allow users to post on your wall.
        -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            conversationOptions: ['All Visitors', 'Staff Members'],
            wallPosts: ['All Visitors', 'Staff Members']
        }
    }
}
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
    gap: 60px;
}

.input-group {
    flex: 1 0 auto;
    max-width: initial;
    display: flex;
    flex-direction: row;
}

.input-group > span {
    min-width: 160px;
    max-width: 200px;
    width: 100%;
}

.default-box {
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: row;
    gap: 10px;
    flex: 1;
}

.default-box > span {
    font-size: 14px;
    opacity: 0.6;
}

.grouped-settings {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.grouped-settings > .default-box {
    justify-content: space-between;
}

.disclaimer {
    position: absolute;
    left: 0;
    top: 20px;
}
</style>