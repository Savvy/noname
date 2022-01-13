<template>
    <div id="account-details">
        <div class="container d-flex flex-row">
            <div class="sidebar left">
                <div class="nav">
                    <div class="nav-section">
                        <div class="nav-title">
                            Your Account
                        </div>
                        <div class="sidenav-links">
                            <nuxt-link class="sidenav-btn" to="/profile">Your Profile</nuxt-link>
                            <div class="sidenav-btn">Alerts</div>
                            <div class="sidenav-btn">Conversations</div>
                            <div class="sidenav-btn">Saved Threads</div>
                        </div>
                    </div>
                    <div class="nav-section">
                        <div class="nav-title">
                            Account Settings
                        </div>
                        <div class="sidenav-links">
                            <div class="sidenav-btn active">Account Details</div>
                            <div class="sidenav-btn">Password & Security</div>
                            <div class="sidenav-btn">Privacy</div>
                            <div class="sidenav-btn">Social Connections</div>
                            <div class="sidenav-btn danger">Log out</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body">
                <AccountDetails/>
            </div>
        </div>
    </div>
</template>

<style scoped>

#account-details > .container {
    gap: 15px;
}

.sidebar, .body {
    color: var(--light-text);
}

.sidebar {
    background-color: var(--bg-dark-color);
    /* padding: 15px; */
    border-radius: var(--border-radius);
    font-weight: 400;
    height: 100%;
    min-width: 325px;
    overflow: hidden;
}

.nav-section {
    margin-bottom: 10px;
}

.body {
    flex: 1;
    background-color: var(--bg-color);
    padding: 15px;
    border-radius: var(--border-radius);
}

.sidenav-links {
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
}

.nav-title,
.sidenav-btn {
    padding: 12px 15px;
}

.nav-title {
    font-size: 1.15rem;
    font-weight: bold;
}

.sidenav-btn {
    border-left: 3px solid transparent;
    user-select: none;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    font-size: 0.95rem;
    opacity: 0.7;
    text-decoration: none;
}

.sidenav-btn:hover,
.sidenav-btn.active {
    background-color: var(--bg-light-5);
    color: var(--primary-color);
    opacity: 1;
}

.sidenav-btn.active {
    border-color: var(--primary-color);
}

.sidenav-btn.danger:hover {
    color: var(--light-text);
    background-color: var(--danger-mid-color);
}

.sidenav-btn.danger {
    color: var(--danger-color);
}
</style>