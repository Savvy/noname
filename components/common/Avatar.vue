<template>
    <div class="avatar" :class="{ 'avatar-shrink': shrinkOnHover }" :style="styleBinding"></div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            required: false,
        },
        width: {
            type: String,
            required: false,
        },
        src: {
            type: String,
            required: true,
        },
        borderRadius: {
            type: String,
            required: false,
            default: '0px'
        },
        pointer: {
            type: Boolean,
            required: false,
            default: false
        },
        shrinkOnHover: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    computed: {
        styleBinding() {
            let size = {};
            if (this.height && this.width) {
                size.height = this.height;
                size.width = this.width;
            }
            return {
                ...size,
                backgroundImage: `url(${this.src})`,
                borderRadius: this.borderRadius,
                cursor: this.pointer ? 'pointer' : 'auto'
            }
        }
    }
}
</script>

<style scoped>
.avatar {
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.avatar-shrink {
    transition: transform 0.25s ease-in-out;
}

.avatar-shrink:hover {
    transform: scale(0.95);
}
</style>