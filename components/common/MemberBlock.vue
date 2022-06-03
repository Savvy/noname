<template>
    <div class="member-block">
        <CommonAvatar :src="userAvatar(member.details)" 
            borderRadius="100px" height="80px"
            width="80px" :pointer=true :shrinkOnHover=false 
        />
        <h4>{{ member.username }}</h4>
        <div class="badges">
            <CommonBadge :role="member.role" />
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'member' ]
}
</script>

<style scoped>
.member-block {
    background-color: var(--body-color);
    padding: 15px 40px;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.member-block > h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 15px 0 10px 0;
}
.badges {
}
</style>