import React, { useEffect, useState } from "react";
import axios from "axios";


function DishPage() {

    const [dish , setDishes] = useState([])


    useEffect(() =>  {
        console.log('Еда', dish)
    },[])


    return (
        <>
        <div>
            <div><h1>Блюда</h1></div>
            <div>
                {dish.map((restorauntName) => (
                    <>
                    <div key={restorauntName.id}>
                        <div>
                            {restorauntName}
                        </div>
                        <div>
                            {restorauntName}
                        </div>
                        <div>
                            {restorauntName}
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </div>
        
        
        </>
    )
}

export default DishPage