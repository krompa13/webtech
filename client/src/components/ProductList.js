import { Link, useHistory } from 'react-router-dom';

const ProductList = ({products}) => {
    const history = useHistory();

    const handleClick = (id) => {
        fetch('http://localhost:9000/product/'+ id,{
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
            history.push('/products');
        })
    }

    if(products.length===0){
        return(
            <div className="product-list">
                <h3>No coffee order available</h3>
                <h3>To add coffee order go to <Link to='/addproduct'> coffee order</Link></h3>
            </div>
        )
    } else {
        return(
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-preview" key={product._id}>
                        <h4>{product.name}</h4>
                        <h4>Price: {product.price}</h4>
                        <h4>Quantity: {product.quantity}</h4>
                        <button   onClick={() => handleClick(product._id)}>Delete order</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default ProductList;