<template>
    <div class="row justify-content-center">
        <div class="col-6 text-center">
            <todo-form />
        </div>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <todo-list :todos="todos" />
            </div>
        </div>
    </div>

</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";
export default {
    components: {TodoForm, TodoList},
    setup() {
        const store = useStore()
        store.dispatch('allRealtime')
        const todos = computed(() => store.state.todos)
        return { todos }
    }
}
</script>