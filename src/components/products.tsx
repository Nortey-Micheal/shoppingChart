type products = {
    image: string,
    description: string
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
                        <p>{product.description}</p>
                        <button>Add to cart</button>
                    </div>
                )
            })}
        </section>
    )
}