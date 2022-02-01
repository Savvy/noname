<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="title"><slot name="modal-title">Modal Title</slot></h1>
                <div class="btn btn-close" @click="$emit(`close-modal-${name}`)">×</div>
            </div>
            <div class="modal-body">
                <slot name="modal-body">Default modal content</slot>
            </div>
            <!-- <div class="modal-footer"></div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.modal-dialog {
    padding-top: 5%;
    position: absolute;
    z-index: 6;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

@media (max-width: 900px) {
    .modal-dialog {
        max-width: 80vw;
        width: 100%;
    }
}

.modal-content {
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
    overflow: hidden;
}

.modal-header {
    padding: 15px;
    position: relative;
    width: 100%;
    min-height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg-dark-color);
}

.modal-header .title {
    font-weight: 400;
}

.modal-body {
    padding: 15px;
    max-height: 80vh;
    height: 100%;
    overflow-y: auto;
    color: var(--light-text);
}

.modal-footer {
    padding: 11px 15px;
}

.btn.btn-close {
    display: inline-block;
    color: var(--bg-light-20);
    font-size: 21px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
    font-weight: bold;
    border-radius: var(--border-radius);
}

@media (min-width: 768px) {
    .modal-dialog {
        width: 820px;
        max-width: calc(100% - 10px);
        margin: 30px auto;
    }
    
    .modal-content {
        box-shadow: 0 5px 15px rgba(0 0 0 / 50%);
    }
}
</style>