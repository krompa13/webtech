import { useHistory } from 'react-router-dom';
import ProductList from '../components/ProductList';
import useFetch from '../hooks/useFetch';

const Products = ({loggedIn}) => {
    const history = useHistory();
    const products = useFetch('http://localhost:9000/product');

    if(loggedIn){
        return ( 
            <div className="home">
                <h2>Coffee List</h2>
                {products && <ProductList products={products}/>}
            </div>
        );
    } else {
        history.push('/');
        return null;
    }

}
 
export default Products;