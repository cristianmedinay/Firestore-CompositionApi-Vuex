<template>
    <div>

    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Todo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody v-if="todos.length">
            <todo-item
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @remove-todo="removeTodo(todo.id)"
                @show-modal="showModal = true; selectedTodo = todo"
            />
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="3">
                    <div class="alert alert-danger text-center">
                        No hay nada que mostrar
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <todo-modal
        :selected-todo="selectedTodo"
        v-if="showModal"
        @close="showModal = false"
    />
    </div>
</template>

<script>
    import { reactive, ref } from 'vue'
   /*  import { useStore } from 'vuex' */
    import useTodos from '../composables/useTodos'
    import TodoItem from "./TodoItem.vue";
    import TodoModal from "./TodoModal.vue";
    export default {
        name: 'TodoList',
        components: {TodoItem, TodoModal},
        props: {
            todos: {
                type: Array,
                default: []
            }
        },
        setup() {
            /* const store = useStore() */
            const { remove } = useTodos();
            const selectedTodo = reactive({})
            const showModal = ref(false)
            const removeTodo = (id) => {
                //store.dispatch('remove', id.toString())
                remove(id.toString())
            }
            return { removeTodo, selectedTodo, showModal }
        }
    }
</script>