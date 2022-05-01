<template>
    <CommonSideWidget>
        <template v-slot:widget-header>Share this site</template>
        <template v-slot:widget-body>
            <div class="share-icons d-flex flex-row w-100" v-if="settings.socials.networks">
                <ShareNetwork
                    v-for="network in settings.socials.networks"
                    :network="network.network"
                    :key="network.network"
                    :style="{backgroundColor: network.bgColor, color: network.color}"
                    :url="replaceAll(settings.socials.sharing.url)"
                    :title="replaceAll(settings.socials.sharing.title)"
                    :description="replaceAll(settings.socials.sharing.description)"
                    :hashtags="settings.socials.sharing.hashtags"
                    :twitterUser="settings.socials.sharing.twitterUser"
                >
                <i :class="network.icon"></i>
                </ShareNetwork>
            </div>
        </template>
    </CommonSideWidget>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        replaceAll(stringName) {
            return stringName.replace('$siteName', this.$config.SITE_NAME).replace('$siteUrl', this.$config.URL);
        }  
    }
}
</script>

<style scoped>

.share-icons {
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;
}

a[class^="share-network-"] {
    height: 20px;
    width: 20px;
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 100px;
    position: relative;
    transition: opacity 0.25s ease-in-out;
    cursor: pointer;
}

a[class^="share-network-"]:hover {
    opacity: 0.75;
}

a[class^="share-network-"] .bi {
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>