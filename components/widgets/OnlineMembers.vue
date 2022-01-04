<template>
    <CommonSideWidget>
        <template v-slot:widget-header>Online Members</template>
        <template v-slot:widget-body>
           <div class="online-users d-flex">
               <CommonAvatar src="https://i.imgur.com/45vM6qK.jpg" borderRadius="100px" height="40px" width="40px" :pointer=true :shrinkOnHover=true v-for="index in 12" :key="index"/>
           </div>
        </template>
    </CommonSideWidget>
</template>

<style scoped>
.online-users {
    flex-wrap: wrap;
    gap: 10px;
}
</style>