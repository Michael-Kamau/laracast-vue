<template>
    <div class="class-binding">
        <h1>Hello from class binding component</h1>
<!--        <button v-bind:title="title">Hover over me</button>-->
        <button :title="title">Hover over me</button>

        <h1 :class="className">Binding Text</h1>

        <button class="button" @click="toggleAccepted">Accept terms and conditions</button>
        <button class="button" :disabled="!accepted" :class="{'is-info':accepted}">Next</button>
<!--        <button class="button" :class="{'is-info':accepted}">Next</button>-->
    </div>
</template>

<script>
    export default {
        name: "ClassBinding",
        data(){
            return{
                title:"I am the tooltip",
                className:'color-red',
                accepted:false
            }
        },
        methods:{
            toggleAccepted(){
                this.accepted=!this.accepted
            }
        }


    }
</script>

<style scoped>
.color-red{color:red}
.color-blue{color:blue}
</style>
