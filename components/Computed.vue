<template>
    <div class="computed">
        <h1>Example 1</h1>
        <h3 >{{reversedMessage}}</h3>

        <h1>Example 2</h1>

        <h5><b>All Tasks</b></h5>
        <ul v-for="task in tasks">
            <li >{{task.description}}</li>
        </ul>

        <h5><b>Incomplete Tasks</b></h5>
        <ul v-for="task in incompleteTasks">
            <li >{{task.description}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Computed",
        data(){
            return{
                message:"hello World",
                tasks:[
                    {description:'go to the store', completed:false},
                    {description:'Marketing Pro', completed:true},
                    {description:'Make a Donation', completed:false},
                    {description:'Clear the market line', completed:true},
                    {description:'Make everything available', completed:false},
                ]
            }

        },
        computed:{
            reversedMessage(){
                return this.message.split('').reverse().join('')
            },
            incompleteTasks(){

                return this.tasks.filter(task=>!task.completed)

            }
        }
    }
</script>

<style scoped>

</style>
