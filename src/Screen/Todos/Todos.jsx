import React, { useRef, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, getDocs, query, where, Timestamp, orderBy, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import './todo.css'

const Todos = () => {
  const [data, setdata] = useState([])
  const todo = useRef()

  async function addtodo(e) {
    e.preventDefault()

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo.current.value,

      });
      setdata([...data, {
        todo: todo.current.value,
        docRef: docRef.id
      }])
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    todo.current.value = ""
  }

  function deleteTodo(index) {

    const todosRef = doc(db, "todos", data[index].docRef)
    console.log(data[index].docRef);
    deleteDoc(todosRef)
      .then(() => {
        data.splice(index, 1)
        setdata([...data])

      }).catch((e) => {
        console.log(e);
      })
  }

  const [edit, setedit] = useState()
  const [bol, setbol] = useState(false)
  const text = useRef()

  function updateTodo(index) {

    const todosRef = doc(db, "todos", data[index].docRef)
    console.log(data[index].docRef);
    //   if (text.value > 0) {
    updateDoc(todosRef, {
      todo: text.current.value
    }).then(() => {
      data[index].todo = text.current.value
      setdata([...data])
    }).catch((e) => {
      console.log(e);

    })
    //   }
    //   else {
    //     updateTodo(index)
    //   }
  }
  return (
    <div className='hero'>
      <Navbar />
      <div className='  flex mt-28 justify-center flex-col items-center p-[10px]  border-[3px] rounded m-auto'>
        <form className='m-2    flex justify-between gap-2 ' action="" onSubmit={(e) => {
          e.preventDefault()
          todo.current.value.length > 0 ? addtodo(e) : alert('please Enter the todo')

        }}>
          <input ref={todo} type="text" className='p-2 input input-primary max-w-56' />
          <button type='submit' className='border btn btn-primary'>add todo</button>
        </form>
        <div className='overflow-auto  flex flex-col gap-1 w-[20rem] text-white h-[50vh]'>
          {data.map((element, index) => {
            return (

              <div key={index} className=' border-[2px] p-[5px] rounded m-2'>

                {
                  index === edit && bol ? <form onSubmit={(e) => {

                    e.preventDefault()
                    updateTodo(index)

                  }}>
                    <input type="text" ref={text} className='text-[19px] m-[2px] p-[2px] text-black rounded' />
                    <button type='submit' className='border rounded p-[4px] m-[2px] bg-slate-500' onClick={() => {
                      setTimeout(() => {
                        setbol(false)

                      }, 400)

                    }}>save</button>

                  </form> : <div className='text-[20px] m-[5px]'>{index + 1 + ". " + element.todo}</div>
                }
                <button className=' btn btn-primary m-[20px]' onClick={() => { deleteTodo(index) }}>delete</button>
                <button className='btn btn-primary' onClick={() => {
                  setedit(index)
                  setbol(true)
                  
                }}>edit</button>
              </div>
            )
          })
          }

        </div> 
      </div>
    </div>
  )
}

export default Todos