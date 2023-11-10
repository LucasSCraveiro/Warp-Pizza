import { useState } from 'react'



function Dados() {

    const pizzasTeste = [
        {
            'id' : 1,
            'sabor' : 'Portuguesa',
            'valor' : 40
        },
        {
            'id' : 2,
            'sabor' : 'Paulista',
            'valor' : 30
        }
    ]

    const [count, setCount] = useState(0)

    return (
        <>
            <div className='w-full'>
                {pizzas.map((pizza) => 
                    <div key={pizza.id} className='w-full'>
                        <div className='w-3/12 border '>
                            <h1>{pizza.sabor}</h1>
                            <p>Valor: {pizza.valor}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Dados