<template>
    <tr>
        <td>{{ todo.id }}</td>
        <td>{{ todo.todo }}</td>
        <td>
            <button class="btn btn-sm btn-info" @click="$emit('show-modal')">
                Editar
            </button>
            <button class="btn btn-sm btn-danger" @click="$emit('remove-todo')">
                Eliminar
            </button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    }
</script>