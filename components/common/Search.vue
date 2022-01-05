<template>
    <div class="input-group w-auto">
        <i class="bi bi-search"></i>
        <input type="search" class="w-100 h-100">
        <!-- <div class="results-container">
            <div class="d-flex flex-row justify-between align-center">
                <h1>Search Results</h1>
                <div class="btn">View all</div>
            </div>
            <div class="result-group members">
                <div class="result-header">Matched Members — <span>120</span> results</div>
                <div class="result-body">
                    <nuxt-link to="/" v-for="index in 10" :key="index">
                        <CommonAvatar src="https://i.imgur.com/dhAaUje.jpeg" 
                        borderRadius="100px" height="50px" width="50px"
                        :pointer=true :shrinkOnHover=true />
                    </nuxt-link>
                </div>
            </div>

            <div class="result-group threads">
                <div class="result-header">Search Results — <span>481</span> results</div>
                <div class="result-body">
                </div>
            </div>
        </div> -->
    </div>
</template>

<style scoped>
.input-group {
    position: relative;
}

.input-group input {
    min-height: 35px;
    height: 100%;
    border-radius: 100px;
}

.results-container {
    position: absolute;
    width: 100%;
    background-color: var(--bg-dark-color);
    min-height: 45px;
    top: 100%;
    border-radius:  0 0 var(--border-radius) var(--border-radius);
    padding: 15px;
    color: var(--light-text);
    z-index: 2;
}

.result-group {
    margin: 5px 0;
    padding: 10px;
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
}

.result-header {
    font-size: 18px;
    color: var(--primary-color);
    font-weight: 400;
    margin-bottom: 12px;
}

.result-header span {
    font-weight: 700;
}

.result-body {
    margin: 5px 0;
}

.members .result-body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 5px;
}
</style>