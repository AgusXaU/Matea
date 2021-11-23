import React from "react";
function Usuarios(propiedad){
    return(
        <main> 
            <div className="carta">
                <img src={propiedad.img}/>
                <ul>
                    <li>{propiedad.nombre}</li>
                    <li>{propiedad.edad} Años</li>
                </ul>
            </div>
        </main>
    )   
}
const arrayUsuarios=[
    {
        id:1,
        nombre:"Agustin",
        edad:25,
        foto:"https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
        id:2,
        nombre:"Wilfred",
        edad:18,
        foto:"https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
        id:3,
        nombre:"Oliver",
        edad:45,
        foto:"https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        id:4,
        nombre:"Victoria",
        edad:54,
        foto:"https://randomuser.me/api/portraits/women/54.jpg"
    },
    {
        id:5,
        nombre:"Maya",
        edad:15,
        foto:"https://randomuser.me/api/portraits/women/15.jpg"
    },
    {
        id:5,
        nombre:"Elena",
        edad:18,
        foto:"https://randomuser.me/api/portraits/women/18.jpg"
    }
   
]

function TomarUsuarios(datos){
    return(
        <>
            {datos.array.map((usuarios)=>{
                const {nombre,edad,foto,id}=usuarios;
                return(
                    <Usuarios img={foto} edad={edad} nombre={nombre} key={id}/>
                )
            })}

        </>
    )
}
export default function MostrarUsuarios(){
    return(
        <>
         <h1> Usuarios </h1>
            <div className="contenedor-carta">
                <TomarUsuarios array={arrayUsuarios}/>
            </div>
        </>
    )
}