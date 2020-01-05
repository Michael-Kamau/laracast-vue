<template>
    <article class="message" v-show="isVisible">
        <div class="message-header">
            {{title}}
            <button class="delete" aria-label="delete" @click="hideMessage"></button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
    </article>
    
</template>

<script>
    export default {
        name: "Message",
        props:['title','body'],
        data(){
            return{
                isVisible:true
            }
        },
        methods:{
            hideMessage(){
                this.isVisible=false

            }
        }
    }
</script>

<style scoped>

</style>
