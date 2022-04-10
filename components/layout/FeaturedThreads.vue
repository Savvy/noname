<template>
    <div id="featured-threads">
        <h1>Community Updates</h1>
        <div class="threads d-flex flex-row justify-center align-center">
            <CommonThreadGrid image="https://i.imgur.com/dbGyGuS.png" />
            <CommonThreadGrid image="https://images.squarespace-cdn.com/content/v1/602d246245658135031e4b2a/1616447818146-YFIXRZ2D4BG1RPDSY1P8/RUST_GroupShot_Building.png" />
            <CommonThreadGrid image="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/172872k8a375k8/c1964d6dfe37619793cf9eb073deff3d0719fe00.jpg" />
            <CommonThreadGrid image="https://assets1.ignimgs.com/2016/01/03/gmodjpg-0d6f2d_160w.jpg?width=1280" />
        </div>
    </div>
</template>

<style scoped>
.threads {
    gap: 25px;
}

@media screen and (max-width: 720px) {
    .threads {
        flex-wrap: wrap;
    }
}

#featured-threads > h1 {
    font-size: 1.65rem;
    margin-bottom: 10px;
}
</style>