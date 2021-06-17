import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = ({login}) => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, password };
        fetch('http://localhost:9000/user/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((res) => {
            if(res.status === 200){
                login();
                history.push('/products');
            } else {
                throw res.error;
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error logging in');
        });
    }

    return ( 
        <div className="create">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    
                />
                <label>Password: </label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
            <p>No account? Register for extra 5% sale!</p>
            <h3><Link to='/register'> Register</Link></h3>
        </div>
    );
}
 
export default Login;