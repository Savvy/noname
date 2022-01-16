<template>
    <div class="dropdown" @click="showMenu = !showMenu">
        {{ value == null ? defaultOption : value }}<i class="bi bi-caret-down-fill"></i>
        <div class="dropdown-menu" v-if="showMenu">
            <div class="option" v-for="(option, index) in options" :key="index" @click="value = option">
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        defaultOption: {
            type: [String, Object],
            required: true,
        },
        options: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            showMenu: false,
            value: null,
        }
    }
}
</script>

<style scoped>
.dropdown {
    background-color: var(--bg-light-10);
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    padding: 10px 16px;
    position: relative;
    cursor: pointer;
    user-select: none;
}

.dropdown > i {
    margin-left: 8px;
}

.dropdown-menu {
    background-color: var(--bg-dark-color);
    overflow: hidden;
    border-radius: var(--border-radius);
    left: 0;
    min-width: 220px;
    position: absolute;
    top: 40px;
    z-index: 5;
}

.dropdown-menu > .option {
    width: 100%;
    padding: 10px;
}

.dropdown-menu > .option:hover {
    background-color: var(--bg-light-10);
}
</style>