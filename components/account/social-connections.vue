<template>
    <div class="account-details">
        <div class="title">Social Connections</div>
        <div class="social-connections">
            <div class="connection" v-if="settings.socialAuth.discord">
                <i class="bi bi-discord"></i>
                <span>Discord</span>
                <div class="btn btn-default" v-if="user.socials && user.socials.discord">Disconnect</div>
                <div class="btn" v-else @click="redirectSocial('discord')">Connect</div>
            </div>
            <div class="connection" v-if="settings.socialAuth.twitter">
                <i class="bi bi-twitter"></i>
                <span>Twitter</span>
                <div class="btn btn-default" v-if="user.socials && user.socials.twitter">Disconnect</div>
                <div class="btn" v-else @click="redirectSocial('twitter')">Connect</div>
            </div>
            <!-- <div class="connection" v-if="settings.socialAuth.facebook">
                <i class="bi bi-facebook"></i>
                <span>Facebook</span>
                <div class="btn btn-default" v-if="user.socials && user.socials.facebook">Disconnect</div>
                <div class="btn" v-else>Connect</div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirectSocial(destination) {
            location = `${this.$config.API_URL}auth/${destination}`;
        },
    }
}
</script>

<style scoped>
.title {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.social-connections,
.connection {
    display: flex;
}

.social-connections {
    flex-wrap: wrap;
    gap: 10px;
}

.connection {
    background-color: var(--bg-dark-10);
    border-radius: vaR(--border-radius);
    text-align: center;
    flex-direction: column;
    flex: 0 1 calc(33.33% - 10px);
    padding: 20px 10px 10px 10px;
}

.connection > span {
    font-weight: 500;
    font-size: 18px;
}

.connection > i {
    margin-bottom: 8px;
    font-size: 38px;
    transition: transform 0.8s ease-in-out;
}

.connection:hover > i {
    transform: rotateY(360deg);
}

.connection > .btn {
    margin-top: 20px;
    padding: 12px 16px;
}

.connection > .btn-default:hover {
    background-color: var(--danger-color);
}

.bi-discord {
    color: var(--discord-color);
}

.bi-twitter {
    color: var(--twitter-color);
}

.bi-facebook {
    color: var(--facebook-color);
}

.bi-youtube {
    color: var(--youtube-color);
}

.bi-twitch {
    color: var(--twitch-color);
}
</style>