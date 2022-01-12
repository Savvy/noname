<template>
    <div class="widget">
        <div class="widget-header">
            <slot name="widget-header">
                <div>Widget Name</div>
            </slot>
        </div>
        <div class="widget-body">
            <slot name="widget-body">
                Body Content
            </slot>
        </div>
        <div class="widget-footer">
            <slot name="widget-footer"></slot>
        </div>
    </div>
</template>

<style scoped>
.widget {
    width: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;
}

.widget-header {
    position: relative;
    padding: 15px 25px;
    background-color: var(--header-color);
    color: var(--primary-color);
    font-size: 20px;
}

.widget-body {
    background-color: var(--body-color);
    padding: 15px 25px;
    height: 100%;
}

@media (max-width: 900px) {
    .widget {
        width: calc(50% - 8px);
    }
}
</style>