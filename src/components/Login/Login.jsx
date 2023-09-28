import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }
    return (
        <div>
            <button className="bg-orange-200" onClick={handleLogin}>Login with google</button>
        </div>
    );
};

export default Login;