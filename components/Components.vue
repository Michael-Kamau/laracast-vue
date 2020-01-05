<template>
    <div class="components">
        <TaskList/>

        <Message title="Hello World" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."/>

        <Modal v-if="showModal" @close="showModal=false"></Modal>
        <button  class="button" @click="showModal=true">Show modal</button>

        <div>
            <Tabs>
                <tab name="About us" :selected="true">
                    <h1>ABout us Content </h1>
                </tab>

                <tab name="About Our Culture" :selected="true">
                    <h1>Here is the information about our culture </h1>
                </tab>

                <tab name="About our Vision" :selected="true">
                    <h1>Here is the information about our vision </h1>
                </tab>

            </Tabs>
        </div>


    </div>
    
</template>

<script>
    import TaskList from "./task/TaskList.vue";
    import Message from "./message/Message.vue";
    import Modal from "./modal/Modal.vue";
    import Tabs from "./tabs/Tabs.vue";
    import Tab from "./tabs/Tab.vue";
    export default {
        name: "Components",
        components:{
            Tab,
            Tabs,
            Modal,
            TaskList,
            Message
        },
        data(){
            return{
                showModal:false
            }
        }
    }
</script>

<style scoped>

</style>
