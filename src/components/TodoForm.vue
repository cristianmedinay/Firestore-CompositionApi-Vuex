<template>
    <div class="form-group">
        <label for="todo">Todo</label>
        <input class="form-control" id="todo" v-model="todo" />
    </div>
</template>

<script>
    import { ref } from 'vue'
    /* import { useStore } from 'vuex' */
    import useTodos from '../composables/useTodos'
    export default {
        name: 'TodoForm',
        setup() {
           /*  const store = useStore() */
            const {create} = useTodos()
            const todo = ref('')
            let onKeydown =  (event) => {
                console.log(event)
                if (event.key === 'Enter') {
                    if (todo.value.length > 5) {

                        create({
                            id: Date.now(),
                            todo: todo.value
                        })
                       /*  store.dispatch('create', {
                            id: Date.now(),
                            todo: todo.value
                        }) */
                        todo.value = ''
                    }
                }
            }
            window.addEventListener('keydown', onKeydown)
            return { todo }
        }
    }
</script>