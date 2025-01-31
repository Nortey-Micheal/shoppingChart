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
        <section className="px-2 max-w-5xl lg:mx-auto">
            <h2 className="text-3xl">{productType}</h2>
            <div className="grid grid-rows-3 grid-flow-col border-2 rounded-2xl p-4 gap-5 ">
                {products.map((product,index) => {
                    return (
                        <div className="" key={index}>
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