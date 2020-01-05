<template>
    <div class="task-list">
        <ul v-for="task in tasks">
            <task>{{task.description}}</task>
        </ul>
    </div>
    
</template>

<script>
    import Task from "./Task.vue";
    export default {
        name: "TaskList",
        components:{
            Task
        },
        data(){
            return{
                tasks:[
                    {description:'go to the store', completed:false},
                    {description:'Marketing Pro', completed:true},
                    {description:'Make a Donation', completed:false},
                    {description:'Clear the market line', completed:true},
                    {description:'Make everything available', completed:false},
                ]
            }

        },

    }
</script>

<style scoped>

</style>
