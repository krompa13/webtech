import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, password };

        fetch('http://localhost:9000/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Register</h2>
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
                <button>Register</button>
            </form>
        </div>
    );
}
 
export default Register;