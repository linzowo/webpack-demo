<template>
    <div>
        <h1>这是一个主组件</h1>

        <mt-button type="primary">mui按钮</mt-button>
        
        <router-link to="/account">用户</router-link>
        <router-link to="/goodslist">商品列表</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style>
    
</style>