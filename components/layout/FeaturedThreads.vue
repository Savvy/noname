<template>
    <div id="featured-threads">
        <h1>Community Updates</h1>
        <div class="threads d-flex flex-row justify-center align-center">
            <nuxt-link to="/thread"><CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" /></nuxt-link>
            <nuxt-link to="/thread"><CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" /></nuxt-link>
            <nuxt-link to="/thread"><CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" /></nuxt-link>
            <nuxt-link to="/thread"><CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" /></nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.threads {
    gap: 25px;
}

@media (max-width: 900px) {
    .threads {
        flex-wrap: wrap;
    }
}

.threads > a {
    flex: 1;
}

#featured-threads > h1 {
    font-size: 1.65rem;
    margin-bottom: 10px;
}
</style>