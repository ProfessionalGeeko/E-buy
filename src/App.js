import React from "react";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.componenet";
import { connect} from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import { Route, Routes } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {onSnapshot} from "firebase/firestore";

class App extends React.Component{

    unsubscribeFromAuth = null;

    componentDidMount() {

        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);

                onSnapshot(userRef, async (snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }else{
                setCurrentUser({userAuth});
            }
        });
    }


    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render(){
        return (<div>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/signin' element={<SignInAndSignUpPage/>} />
            </Routes>
        </div>);
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    null, mapDispatchToProps)(App);
