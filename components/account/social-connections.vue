<template>
    <div class="account-details">
        <div class="title">Social Connections</div>
        <div class="social-connections">
            <div class="connection">
                <i class="bi bi-discord"></i>
                <span>Discord</span>
                <div class="btn btn-default">Disconnect</div>
            </div>
            <div class="connection">
                <i class="bi bi-twitter"></i>
                <span>Twitter</span>
                <div class="btn">Connect</div>
            </div>
            <div class="connection">
                <i class="bi bi-facebook"></i>
                <span>Facebook</span>
                <div class="btn">Connect</div>
            </div>
            <div class="connection">
                <i class="bi bi-youtube"></i>
                <span>Youtube</span>
                <div class="btn">Connect</div>
            </div>
            <div class="connection">
                <i class="bi bi-twitch"></i>
                <span>Twitch</span>
                <div class="btn">Connect</div>
            </div>
        </div>

        <!--
            - Discord
            - Twitter
            - Facebook
            - Youtube
            - Twitch
        -->
    </div>
</template>

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
    font-size: 32px;
}

.connection > .btn {
    margin-top: 20px;
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