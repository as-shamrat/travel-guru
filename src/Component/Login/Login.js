import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './LoginManager';
import { Button, Container, Form } from 'react-bootstrap';
import Header from '../Header/Header';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { MyContext } from '../../App';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        photo: '',
        success: false,
        error: ''
    });

    const [newUser, setNewUser] = useState(true);
    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            console.log(displayName, email, photoURL);
            console.log(result.user);
        }).catch(function (error) {
            // Handle Errors here.
            console.log(error.message);
        });
    };
    const handleFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorMessage);
        });
    };
    const handleEvent = (e) => {
        console.log(e.target.name, e.target.value);
        let isFormValid = true;
        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isLength = e.target.value.length > 6;
            const isCharacter = /\d{1}/.test(e.target.value);
        }
        if (e.target.name === 'passwords') {
            if (user.password !== e.target.value) {
                document.getElementById('span').innerHTML = 'password should be same';
                document.getElementById('formBasicPassword').value = '';
                const newUserInfo = { ...user };
                newUserInfo.password = '';
                setUser(newUserInfo);
            } else {
                const newUserInfo = { ...user };
                newUserInfo.password = e.target.value;
                setUser(newUserInfo);
            }
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        }
    };
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    let name = newUserInfo.firstname + ' ' + newUserInfo.lastname;
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    newUserInfo.name = name;
                    updateName(name);
                    setLoggedInUser(newUserInfo);
                    setUser(newUserInfo);
                    history.replace(from);
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    // ...
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    newUserInfo.name = res.user.displayName;
                    setLoggedInUser(newUserInfo);
                    setUser(newUserInfo);
                    history.replace(from);
                    console.log(res.user);
                   
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });
        }


        e.preventDefault();
        console.log('clicked');
    };
    const updateName = (name) => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        })
            .then(res => console.log(res))
            .catch(function (error) {
                console.log(error);
            });
    };
   

    return (
        <Container style={{ textAlign: 'center' }}>
            <Header login={true} color="black"></Header>
            <Form onSubmit={handleSubmit} style={{ width: '45%', border: '1px solid gray', padding: '30px', margin: '15px auto' }}>
                <h3 style={{ textAlign: 'left', marginBottom: '20px' }}>{newUser ? 'Create an account' : 'Login'}</h3>
                {
                    newUser &&
                    <Form.Group>
                        <Form.Control onBlur={handleEvent} name="firstname" type="text" placeholder="firstname" />
                    </Form.Group>
                }
                {
                    newUser &&
                    <Form.Group >
                        <Form.Control onBlur={handleEvent} name="lastname" type="text" placeholder="lastname" />
                    </Form.Group>
                }
                <Form.Group controlId="formBasicEmail">
                    <Form.Control onBlur={handleEvent} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">

                    <Form.Control onBlur={handleEvent} name="password" type="password" placeholder="Password" />
                </Form.Group>
                {
                    newUser &&
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onBlur={handleEvent} name="passwords" type="password" placeholder="confirm password" />
                        <span id="span" className='text-danger'></span>
                    </Form.Group>
                }
                <Button variant="warning" type="submit" size="lg" block>
                        {newUser ? 'Create an account' : 'Login'}
                </Button>
               
                {
                    newUser &&
                    <Form.Text className="text-muted">
                        Already have an account? <Link className="text-warning" onClick={() => setNewUser(!newUser)}>Login</Link>
                    </Form.Text>
                }
                {
                    !newUser &&
                    <Form.Text className="text-muted">
                        Don't have an account? <Link className="text-warning" onClick={() => setNewUser(!newUser)}>Create an account</Link>
                    </Form.Text>
                }

            </Form>

            <Button onClick={handleGoogle} style={{ marginTop: '10px', borderRadius: '50px', padding: '10px 60px' }} variant="outline-secondary" size="lg">Continue with google</Button>
            <br />
            <Button onClick={handleFacebook} style={{ marginTop: '10px', borderRadius: '50px', padding: '10px 60px' }} variant="outline-secondary" size="lg">Continue with facebook</Button>
        </Container>
    );
};

export default Login;