import { createStore, createLogger } from "vuex";

const todosPath = '/Todos'

const store = createStore({
    state() {
        return {
            db: null,
            todos: []
        }
    },
    actions: {
        async allRealtime({ state, commit }) {
            await state.db.collection(todosPath)
                .onSnapshot((snapshot) => {
                    snapshot.docChanges().forEach(change => {
                        const doc = change.doc.data()
                        switch (change.type) {
                            case "added":
                                commit('CREATE_TODO', doc)
                                break
                            case "modified":
                                commit('UPDATE_TODO', doc)
                                break
                            case "removed":
                                commit('REMOVE_TODO', doc.id)
                                break
                            default:
                                break
                        }
                    })
                })
        },
        async create({ state }, payload) {
            await state.db.collection(todosPath).doc(payload.id.toString()).set(payload)
        },
        async edit({ state }, payload) {
            await state.db.collection(todosPath).doc(payload.id.toString()).update(payload)
        },
        async remove({ state }, id) {
            await state.db.collection(todosPath).doc(id).delete()
        },
    },
    mutations: {
        SET_DATABASE(state, db) {
            state.db = db
        },
        CREATE_TODO(state, payload) {
            state.todos.push(payload)
        },
        UPDATE_TODO(state, payload) {
            state.todos = [
                ...state.todos.filter(todo => todo.id !== payload.id),
                payload
            ]
        },
        REMOVE_TODO(state, payload) {
            state.todos = state.todos.filter(todo => todo.id !== payload)
        }
    },
    plugins: [createLogger()]
})

export default store