<template>
    <div class="lists">
        <h1>Welcome from the lists tab</h1>
        <input id="input" type="text" v-model="newName">
<!--        <button v-on:click="addName">Add Name</button>-->
        <button @click="addName">Add Name</button>
        <h6>First approach for displaying</h6>
        <ul v-for="name in names">
            <li >{{name}}</li>
        </ul>

<!--        <h6>Second approach for displaying</h6>-->
<!--        <ul >-->
<!--            <li v-for="name in names" v-text="name"></li>-->
<!--        </ul>-->

    </div>
</template>

<script>
 export default {
        name: "Lists",
        data (){

            return {
                newName:'',
                names: ['joe','Mary', 'Jane','Jack']
            }

        },
     methods:{
            addName(){
                //alert('Welcome to my website')
                this.names.push(this.newName)
                this.newName=''

            }
     }

    }
</script>

<style scoped>

</style>
