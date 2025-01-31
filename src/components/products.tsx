type products = {
    image: string,
    name: string,
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
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </div>
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