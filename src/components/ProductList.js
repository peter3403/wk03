import products from "../json/products.json";

export default function ProductList(){
    return (
        <div className="row">
            {products.map(products => (
                <ProductItem key={products.id} product={product}/>
            ) )}
        </div>
    )
}