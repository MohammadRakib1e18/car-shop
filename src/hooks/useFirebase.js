import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (
        email,
        password,
        name,
        phone,
        district,
        history,
        location
    ) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("");
                const newUser = {
                    email,
                    displayName: name,
                    phoneNumber: phone,
                    district: district,
                };
                setUser(newUser);
                // save the user to database.user
                saveUser(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    email: email,
                    displayName: name,
                    district: district,
                    phoneNumber: phone,
                })
                    .then(() => {})
                    .catch((error) => {});
                history.replace("/");
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, [user.email]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        isAdmin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    };
};

export default useFirebase;
