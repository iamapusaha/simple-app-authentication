import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(logInUser)
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(logInUser)
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }
    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser(null)
            }).catch((error) => {
                console.log(error, error.message);
            });

    }
    return (
        <div>
            {user ?
                <button className="bg-orange-200" onClick={handleLogOut}>Log Out</button>
                : <div className="flex gap-4">
                    <button className="bg-orange-200" onClick={handleLogin}>Login with google</button>
                    <button className="bg-orange-200" onClick={handleGitHubSignIn}>Login with github</button>
                </div>

            }

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