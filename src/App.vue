
<template>
<div>
 <!--  <todo-form/>
  <pre>
    {{ todos }}
  </pre>

  <div>
    <todo-list :todos="todos" />
  </div> -->
  <todo-app/>
</div>


</template>

<script>

/* import TodoForm from './components/TodoForm.vue';
import useTodos from './composables/useTodos';
import TodoList from './components/TodoList.vue'; */
import useFirebaseDatabase from './composables/useFirebaseDatabase';
import TodoApp from './components/TodoApp.vue';
import { useStore } from 'vuex';
export default {
name: 'App',
components: {
  TodoApp
  /* TodoForm,
  TodoList */
},
setup(){
  const {connection} = useFirebaseDatabase()
  const store = useStore()
  store.commit('SET_DATABASE',connection())
/*   const {allRealTime,todos}=useTodos();
  allRealTime()
  return {todos} */
}
}
</script>
