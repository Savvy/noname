<template>
    <CommonSideWidget>
        <template v-slot:widget-header>Share this site</template>
        <template v-slot:widget-body>
           <div class="share-icons d-flex flex-row w-100">
               <div class="icon"><i class="bi bi-discord"></i></div>
               <div class="icon"><i class="bi bi-twitter"></i></div>
               <div class="icon"><i class="bi bi-facebook"></i></div>
               <div class="icon"><i class="bi bi-whatsapp"></i></div>
               <div class="icon"><i class="bi bi-envelope"></i></div>
           </div>
        </template>
    </CommonSideWidget>
</template>

<style scoped>

.share-icons {
    gap: 10px;
}
.icon {
    height: 20px;
    width: 20px;
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 100px;
    position: relative;
    transition: opacity 0.25s ease-in-out;
    cursor: pointer;
}

.icon:hover {
    opacity: 0.75;
}

.icon i {
    color: var(--body-color);
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>