<template>
<div class="dropdown-menu">
    <div class="top-gradient"></div>
    <slot name="data-empty"><div class="data-empty">No information to display.</div></slot>
    <slot name="dropdown-menu"></slot>
    <slot name="dropdown-footer">
        <div class="dropdown-footer">
            <div class="btns d-flex flex-row">
                <div class="btn btn-default">Show All</div>
                <div class="btn btn-default">Another Button</div>
            </div>
        </div>
    </slot>
</div>
</template>

<style scoped>
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--bg-color);
    z-index: 50;
    min-width: 350px;
    margin-top: 8px;
    border-radius: var(--border-radius);
    overflow: hidden;
    padding: 0;
    color: var(--primary-color);
    font-weight: 300;
    cursor: initial;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.data-empty {
    text-align: center;
    padding: 45px;
}

.btns {
    gap: 2px;
    margin: 0;
}

.btns .btn {
    flex: 1;
    font-size: 14px;
    text-align: center;
    padding: 15px 0;
    border-radius: 0;
}
</style>