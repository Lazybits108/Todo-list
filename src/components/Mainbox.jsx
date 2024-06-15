import React, { useRef, useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
const Mainbox = () => {
  const [message, setmessage] = useState("");
  const [tasks, settasks] = useState([]);
  const task = useRef();
  const [showfinished, setshowfinished] = useState(false);
  const editbtn = useRef();
  const [cnt, setcnt] = useState(0);
  const textfieldchange = (e) => {
    setmessage(e.target.value);
  };
  const handlebtnclick = () => {
    if(task.current.value.length!==0)
    {
      tasks.push({ tasktext: task.current.value, id: cnt,iscompleted:false});
      setmessage("");
      setcnt(cnt + 1);
    }
    else
    alert("Add a Task first!!")
  };
  const handlecheckboxchange=(e)=>{
    console.log(tasks);
    let id=e.target.name;
    let newtasks=[...tasks];
    newtasks[id].iscompleted=(!newtasks[id].iscompleted);
    settasks(newtasks);
  };
  const handlechangeedit=(e,id)=>{
    console.log(cnt);
    let editmessage=tasks[id].tasktext;
    let newtasks=[...tasks];
    setmessage(editmessage);
    newtasks=newtasks.filter(item => item.id != id);
    for(let i=0;i<newtasks.length;i++)
      {
        newtasks[i].id=i;
      }
      setcnt(newtasks.length);
      settasks(newtasks);
    };
  const handlechangedelete=(e,id)=>{
    let newtasks=[...tasks];
    newtasks=newtasks.filter(item => item.id != id);
    
    for(let i=0;i<newtasks.length;i++)
      {
        newtasks[i].id=i;
      }
      setcnt(newtasks.length);
      settasks(newtasks);
  };
  const handleshowfininshed=()=>
  {
    console.log(showfinished);
    setshowfinished(!showfinished);
  };
  return (
    <div className="flex justify-center h-screen  ">
      <div className=" bg-green-400 m-5  w-2/3 rounded-3xl">
        <h1 className="text-left m-5 font-bold text-3xl">Things to do...</h1>
        <input
          type="text"
          ref={task}
          placeholder="Add a task..."
          value={message}
          className="ml-3 mr-2 bg-yellow-300 text-black rounded-2xl border-2 outline-0 border-black px-3 placeholder-slate-600 focus:placeholder-black w-3/5"
          onChange={textfieldchange}
        ></input>
        <button
          className="bg-blue-500 text-black font-bold text-sm rounded-2xl w-16 border-2 border-black h-7 hover:bg-blue-950  hover:text-white"
          onClick={handlebtnclick}>Save</button>
          <div className="m-5 text-black rounded-2xl font-bold font-mono w-1/2 p-3 h-8 flex items-center mr-auto">
          <input onChange={handleshowfininshed} type='checkbox'/><label for="showfinished" className='p-1 text-sm'>   Show finished tasks  </label>
          </div>
          {(showfinished)?(<p className="font-bold text-mono inline m-3 text-lg">Your finished Todos...</p>):(<p  className="font-bold text-mono inline m-3 text-lg">Your Todos...</p>)}
        {tasks.map((todo) => {
          if(showfinished)
          return ((todo.iscompleted)&&(<div key={todo.id}  className={"mx-8  mt-4 px-4 sm:m-2 sm:p-1 font-bold font-mono bg-purple-400 rounded-xl  flex items-center text-left break-words"}><input type='checkbox' checked={todo.iscompleted} name={todo.id} className="mx-2" onChange={handlecheckboxchange}></input>
            
            <p className={"text-clip".concat(todo.iscompleted ?" line-through": "")}>{todo.tasktext}</p>
            <div className="ml-auto inline">
            <button ref={editbtn} className="bg-yellow-400  m-2 p-2 rounded-lg " onClick={(e)=>handlechangeedit(e,todo.id)}><FaRegEdit /></button>
            <button className="bg-red-500  m-2 p-2 rounded-lg " onClick={(e)=>handlechangedelete(e,todo.id)}><FaRegTrashCan /></button>
            </div>
            </div>));
          else
          return ((!todo.iscompleted)&&(<div key={todo.id}  className={"mx-8  mt-4 px-4 sm:m-2 sm:p-1 font-bold font-mono bg-purple-400 rounded-xl  flex items-center text-left break-words"}><input type='checkbox' checked={todo.iscompleted} name={todo.id} className="mx-2" onChange={handlecheckboxchange}></input>
            
            <p className={"text-clip".concat(todo.iscompleted ?" line-through": "")}>{todo.tasktext}</p>
            <div className="ml-auto inline">
            <button ref={editbtn} className="bg-yellow-400  m-2 p-2 rounded-lg " onClick={(e)=>handlechangeedit(e,todo.id)}><FaRegEdit /></button>
            <button className="bg-red-500  m-2 p-2 rounded-lg " onClick={(e)=>handlechangedelete(e,todo.id)}><FaRegTrashCan /></button>
            </div>
            </div>));
        })}
      </div>
    </div>
  );
};

export default Mainbox;
