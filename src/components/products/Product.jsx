import React from 'react'

function Product({match}) {
    const products = match.params.id === "ch" ? "Хемиски" : "Прехранбени";

    return (
        <div>
        <h1>{products} производи</h1>         
        </div>
    )
}

export default Product
