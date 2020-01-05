<template>
    <div class="app">
<!--        <ul>-->
<!--            <li> <a><router-link to="/">Go to Index</router-link></a></li>-->
<!--            <li><a><router-link to="/about">Go to About</router-link></a></li>-->
<!--            <li><a><router-link to="/products">Error page</router-link></a></li>-->
<!--            <li><a><router-link to="/products">Error pagnew</router-link></a></li>-->
<!--            <li class="test"><a><router-link to="/products">Error pagnew</router-link></a></li>-->
<!--        </ul>-->
        <div class="tabs">
            <ul>
                <li class="is-active"><a><router-link to="/">Go to Index</router-link></a></li>
                <li><a><router-link to="/about">Go to About</router-link></a></li>
                <li><a><router-link to="/lists">Lists Page</router-link></a></li>
                <li><a><router-link to="/class-binding">Class-Binding</router-link></a></li>
                <li><a><router-link to="/computed">Computed</router-link></a></li>
                <li><a><router-link to="/components">Components</router-link></a></li>
                <li><a><router-link to="/tabs">Tabs</router-link></a></li>

            </ul>
        </div>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        name: "App",
        components:{
        }
    }
</script>

<style scoped>
    .test{
        color: red;
    }
</style>
