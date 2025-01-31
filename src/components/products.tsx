type products = {
    image: string,
    description: string,
    price: number
}

type productsProps = {
    products: products[],
    productType: string
}

export function Products({products,productType}:productsProps) {
    return (
        <section>
            <h2>{productType}</h2>
            <div>
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
            </div>
        </section>
    )
}