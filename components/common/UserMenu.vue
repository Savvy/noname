<template>
<div class="dropdown-menu">
    <div class="top-gradient"></div>
    <div class="user-info">
        <CommonAvatar :src="userAvatar(user.details)" 
            borderRadius="100px" height="60px"
            width="60px" :pointer=true :shrinkOnHover=false 
        />
        <div class="user-data">
            <span class="name">{{ user.username }}</span>
            <span class="role">Member</span>
        </div>
    </div>
    <ul>
        <li @click="$emit(`close-user-menu`)">
            <nuxt-link :to="'/profile/' + user.username">Profile</nuxt-link>
        </li>
        <li @click="$emit(`close-user-menu`)">
            <nuxt-link to="/account-details">Account Details</nuxt-link>
        </li>
        <li @click="$emit(`close-user-menu`)">
            <a @click="logout">Logout</a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    methods: {
    }
}
</script>

<style scoped>
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--bg-color);
    z-index: 50;
    min-width: 265px;
    margin-top: 8px;
    border-radius: var(--border-radius);
    overflow: hidden;
    padding: 0;
    color: var(--primary-color);
    font-weight: 300;
    cursor: initial;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    user-select: none;
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

.user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    background-image: linear-gradient(to right, #654EA3, #B06AB3);
    color: var(--light-text);
    gap: 20px;
}


.user-data {
    display: flex;
    flex-direction: column;
}

span.name {
    font-weight: 500;
    font-size: 1.15rem;
}

span:not(.name) {
    font-size: 0.95rem;
}

ul {
    list-style: none;
    width: 100%;
    height: 100%;
}

ul > li {
    width: 100%;
    height: 100%;
}

ul > li {
    border-left: 3px solid transparent;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)) 1 100%;
    border-right: 0;
    font-size: 14px;
    transition: border 0.15s ease-in-out;
}

ul > li:hover {
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to bottom, #654EA3, #B06AB3) 1 100%;
    border-right: 0;
    cursor: pointer;
}

ul > li > a {
    transition: padding-left 0.15s ease-in-out;
    padding: 12px 15px 12px 12px;
    display: block;
    width: 100%;
    height: 100%;
}

ul > li:hover > a {
    display: block;
    text-decoration: none;
    padding-left: 17px;
}
</style>