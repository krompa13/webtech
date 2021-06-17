import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddProduct = ({loggedIn}) => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {name, quantity, price};

        setIsPending(true);
        fetch('http://localhost:9000/product', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(() => {
            setIsPending(false);
        })
    }

    if(loggedIn){
        return ( 
            <div className="create">
                <h2>Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>Coffee List: </label>
                    <select>
                    <option value="latte">Latte</option>
                    <option value="esperesso">Esperesso</option>
                    <option value="cappuccino">Cappuccino</option>
                    <option value="americano">Americano</option>
                    <option value="latte Macchiato">Latte Macchiato</option>
                    <option value="flat White">Flat White</option>
                    <option value="iced coffee">Iced coffee</option>
                </select>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="enter the coffee of your choice"
                    />
                    <label>Quantity: </label>
                    <input
                        type="number"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                    />
                    <label>Price: </label>
                    <input
                        type="number"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        min="5"
                    />
                    {!isPending && <button>Add order</button>}
                    {isPending && <button disabled>Adding product...</button>}
                </form>
            </div>
        );
    } else {
        history.push('/');
        return null;
    }
}
 
export default AddProduct;