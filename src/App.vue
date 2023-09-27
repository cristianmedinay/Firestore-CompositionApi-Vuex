<div>
  <todo-form/>
  <pre>
    {{ todos }}
  </pre>
</div>

</template>

<script>

import TodoForm from './components/TodoForm.vue';
import useTodos from './composables/useTodos';
export default {
name: 'App',
components: {
  TodoForm
},
setup(){
  const {allRealTime,todos}=useTodos();
  allRealTime()
  return {todos}
}
}
</script>
