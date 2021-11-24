import React from "react";

export default function Cartas (){
    return(
        
        <div className='contenedor-carta'>
            <div className='descripcion-carta'>
            <div className='backgroundTop-carta'>Free</div>
                <h1>$0/<span>mes</span></h1>
                <ul>
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Help center access</li>
                    <li>Email support</li>
                </ul>
                <input type="button"value="Sign up for free"/>
            </div>
            <div className='descripcion-carta carta-centro'>
            <div className='backgroundTop-carta'>Pro <br/> <span> Most Popular</span></div>
                <h1>$15/<span>mes</span></h1>
                <ul>
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Help center access</li>
                    <li>Priority email support</li>
                </ul>
                <input type="button"value="Get started"/>
            </div>
            <div className='descripcion-carta'>
            <div className='backgroundTop-carta'>Enterprise</div>
                <h1>$30/<span>mes</span></h1>
                <ul>
                    <li>50 users included</li>
                    <li>30 GB of storage</li>
                    <li>Help center access</li>
                    <li>Phone & email support</li>
                </ul>
                <input type="button"value="Contact us"/>
            </div>
        </div>
    )
}











// function Carta (props){
//     return(
        
//         <div className='contenedor-carta'>
//             <div className='backgroundTop-carta'></div>
//             <div className='descripcion-carta'>
//                 <h1>${props.precio}/mes</h1>
//                 <ul>
//                     <li>{props.user}</li>
//                     <li>{props.GB}</li>
//                     <li>{props.help}</li>
//                     <li>{props.support}</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
// const datosCarta=[
//     {
//         id:1,
//         precio:0,
//         user:"10 users included",
//         GB:"2 GB of storage",
//         help:"Help center access",
//         support:"Email support"
//     },
//     {
//         id:2,
//         precio:15,
//         user:"20 users included",
//         GB:"10 GB of storage",
//         help:"Help center access",
//         support:"Priority email support"
//     },
//     {
//         id:3,
//         precio:30,
//         user:"50 users included",
//         GB:"30 GB of storage",
//         help:"Help center access",
//         support:"Phone & email support"
//     }
// ]


// function TomarArray(data){
//     return(
//         <>
//             {data.array.map((cartas)=>{
//                 const {id,precio,user,GB,help,support}= cartas;
//                 <Carta  precio={precio} user={user} GB={GB} help={help} support={support} key={id}/>
//             })}
//         </>
//     )
// }

// export default function Main(){
//     return(
//         <div>
//             <TomarArray array={datosCarta}/>
//         </div>
//     )
// }
