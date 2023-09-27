
<template>
<div>
  <todo-form/>
  <pre>
    {{ todos }}
  </pre>

  <div>
    <todo-list :todos="todos" />
  </div>

</div>


</template>

<script>

import TodoForm from './components/TodoForm.vue';
import useTodos from './composables/useTodos';
import TodoList from './components/TodoList.vue';
export default {
name: 'App',
components: {
  TodoForm,
  TodoList
},
setup(){
  const {allRealTime,todos}=useTodos();
  allRealTime()
  return {todos}
}
}
</script>
