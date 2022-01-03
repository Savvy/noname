<template>
    <div id="featured-threads">
        <h1>Community Updates</h1>
        <div class="threads d-flex flex-row justify-center align-center">
            <CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" />
            <CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" />
            <CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" />
            <CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" />
        </div>
    </div>
</template>

<style scoped>
.threads {
    gap: 25px;
}

#featured-threads > h1 {
    font-size: 1.65rem;
    margin-bottom: 10px;
}
</style>