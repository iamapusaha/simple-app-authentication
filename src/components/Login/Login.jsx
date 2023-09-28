import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(logInUser)
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }
    return (
        <div>
            <button className="bg-orange-200" onClick={handleLogin}>Login with google</button>
            {user && <div>
                <h1>user: {user.displayName}</h1>
                <p>{user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>

            }
        </div>
    );
};

export default Login;