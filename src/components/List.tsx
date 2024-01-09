import React, { useEffect, useState } from "react";
import { ApiPost } from "../api/Api";
import { IPost, IPrueba } from "../interfaces/interfaces";


export const List: React.FC<IPrueba> = ({ name, productos }) => {
    const [post, setpost] = useState<IPost[]>([]);
    const [input, setInput] = useState<string>("");

  const resul = async () => {
    const datos = await ApiPost();
    console.log(datos);
    setpost(datos);
  };

  useEffect(() => {
    resul();
  }, []);

  const filter = (idc: `${string}-${string}-${string}-${string}-${string}`) => {
    const res = post?.filter((post) => post.id !== idc);
    setpost(res);
  };
const obj:IPost = {   
    id: crypto.randomUUID(),
    title: input,
    body: "string",
    userId: 250
}

  const filters = () => {
       setpost([...post, obj]);
  };


  return (
    <div>
      <h2>{name}</h2>
      <h6>Cantidad de elemetos {post?.length}</h6>
      <h4>{productos?.map((el)=> (<div>{el.nombre}, {el.precio}</div>))}</h4>
      <input type="text" onChange={(e)=>(setInput(e.target.value))} value={input} /> <button onClick={()=>{filters()}}>Anadir</button>
      {post &&
        post.map((el) => (
          <button onClick={() => filter(el.id)} key={el.id}>
            {el.title}
          </button>
        ))
       }
    </div>
  );
};
