import {reactive, toRefs} from 'vue'
import useFirebaseDatabase  from './useFirebaseDatabase'


const todosPath = '/Todos'
export default function(){

    const {connection} = useFirebaseDatabase()
    const state = reactive({

        todos:[]

    })

    // muestra los datos
    const allRealTime = async ()=>{
        await connection().collection(todosPath)
        .onSnapshot(( snapshot =>{
            snapshot.docChanges().forEach(change => {
                const doc = change.doc.data()
                switch(change.type){
                    case "added":
                        state.todos.push(doc)
                        break
                    case "removed":
                        state.todos =  state.todos.filter(todo=>todo.id!==doc.id)
                        break
                    case "modified":
                        state.todos = [
                            ...state.todos.filter(todo=>todo.id!==doc.id),
                            doc 
                        ]
                        break
                    default:
                        break
                }

                
            });
        }))
    }


    const create = async (todo) =>{
        await connection().collection(todosPath).doc(todo.id.toString()).set(todo)
    }
    const edit = async (todo) =>{
        await connection().collection(todosPath).doc(todo.id.toString()).update(todo)
    }
    const remove = async (id) =>{
        await connection().collection(todosPath).doc(id).delete()
    }

    return { allRealTime, create, edit, remove, ...toRefs(state) }
}