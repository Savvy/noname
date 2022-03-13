<template>
<div class="footer-container">
    <footer>
        <div class="container">
            <div class="footer-content"><strong>{{ $config.SITE_NAME }}</strong> created by <a href="https://malcom.sh" target="_blank">Malcom.</a> &copy; 2022 <strong>{{ $config.SITE_NAME }}</strong>. All Rights Reserved.</div>
        </div>
    </footer>
</div>
</template>

<style scoped>
.footer-container {
    margin-top: auto;
}

footer {
    margin-top: 25px;
    background-color: var(--bg-dark-color);
}

.footer-content {
    padding: 20px 0;
    color: var(--primary-color)
}
</style>