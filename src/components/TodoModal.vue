<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">Editar todo {{ todoModel.todo }}</div>
                    <div class="modal-body"><input class="form-control" v-model="todoModel.todo" /></div>
                    <div class="modal-footer">
                        <button class="btn btn-success" @click="updateTodo">Actualizar</button>
                        <button class="btn btn-danger" @click="$emit('close')">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import { reactive } from 'vue'
    /* import { useStore } from 'vuex' */
    import useTodos from '../composables/useTodos'
    export default {
        name: 'TodoModal',
        props: {
            selectedTodo: {
                type: Object,
                required: true
            }
        },
        setup(props, {emit}) {
            const todoModel = reactive(props.selectedTodo)
          /*   const store = useStore() */
          const {edit} = useTodos();
            const updateTodo = () => {
                /* store.dispatch('edit', todoModel) */
                edit(todoModel)
                emit('close')
            }
            return { updateTodo, todoModel }
        }
    }
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>