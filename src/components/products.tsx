type products = {
    image: string,
    description: string,
    price: number
}

type productsProps = {
    products: products[]
}

export function Products({products}:productsProps) {
    return (
        <section>
            {products.map((product,index) => {
                return (
                    <div key={index}>
                        <img src={product.image} alt="" />
                        <div>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </div>
                        <button>Add to cart</button>
                    </div>
                )
            })}
        </section>
    )
}