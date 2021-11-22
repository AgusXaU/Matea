import React from "react";
function Prueba (props){
    return(
        
            <div className='estiloPrueba'>
                <img src={props.imgUrl}/>
                {props.nombre}
            </div>
        
    )
}

const bichitos=[
{   id:1,
    nombre:"Comida de fin de año", 
    imgn:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMUrzb5RSoK-Ti73gCyECpuZMzr6vXywg1g&usqp=CAU"
},

{   id:2,
    nombre:"Felix",
    imgn:"https://www.masquesaludanimal.es/posts/easset_upload_file82327_702469_e.jpg"

},

{   id:3,
    nombre:"cerdo vietnamita", 
    imgn:"https://www.masquesaludanimal.es/posts/easset_upload_file8892_702469_e.jpg "
},

{   id:4,
    nombre:"porky", 
    imgn:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrxm_zmNp_iLhKJgcwBehksBIrhpSAcryu55qAMdmyaqtgWN3buVzqHLEb-s2LVCd43Q&usqp=CAU"
}
] 

 function Lista(datos){
    return(
        <>
        {datos.array.map((cerdito)=>{
            const {nombre, imgn,id}= cerdito;
            return (
                <Prueba nombre={nombre} imgUrl ={imgn} key={id}/>
            )
        })}
        </>
    )
}

export default function App (){
return (
    <div>
        <h1>Berraca</h1>
         <Lista array={bichitos}/>
    </div>
)
}
 