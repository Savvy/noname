<template>
    <CommonSideWidget>
        <template v-slot:widget-header>Statistics</template>
        <template v-slot:widget-body>
           <div class="stats w-100 d-flex flex-column">
               <div class="stat">Threads: <span>8,847</span></div>
               <div class="stat">Posts: <span>10,495</span></div>
               <div class="stat">Members: <span>498</span></div>
               <div class="stat">Newest Member: <nuxt-link to="/">Chroma</nuxt-link></div>
           </div>
        </template>
    </CommonSideWidget>
</template>

<style scoped>
.stats {
    color: var(--primary-color);
    font-size: 15px;
    gap: 3px;
}

.stat {
    display: flex;
    justify-content: space-between;
}

.stat span,
.stat a {
    font-weight: 500;
}
</style>