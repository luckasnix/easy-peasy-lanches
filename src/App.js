import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import store from './store/store'
import { PizzaLoader } from './components/LoaderComponents'
import './App.css'

const MainPage = lazy(() => { return import('./pages/MainPage') })
const LogInPage = lazy(() => { return import('./pages/LogInPage') })
const RegisterPage = lazy(() => { return import('./pages/RegisterPage') })
const HomePage = lazy(() => { return import('./pages/HomePage') })
const MenuPage = lazy(() => { return import('./pages/MenuPage') })
const OrderPage = lazy(() => { return import('./pages/OrderPage') })
const ProfilePage = lazy(() => { return import('./pages/ProfilePage') })
const MenuPizzaPage = lazy(() => { return import('./pages/MenuPizzaPage') })
const MenuSandwichPage = lazy(() => { return import('./pages/MenuSandwichPage') })
const MenuSodaPage = lazy(() => { return import('./pages/MenuSodaPage') })
const MenuIceCreamPage = lazy(() => { return import('./pages/MenuIceCreamPage') })

const firebaseConfig = {
  apiKey: "AIzaSyAiFC9thD7ze3kK_NP0LDLT5S2kp8Xtdfw",
  authDomain: "easy-peasy-lanches.firebaseapp.com",
  databaseURL: "https://easy-peasy-lanches.firebaseio.com",
  projectId: "easy-peasy-lanches",
  storageBucket: "",
  messagingSenderId: "24471941062",
  appId: "1:24471941062:web:052679a9b58ad308"
};
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<PizzaLoader/>}>
          <Switch>
            <Route path='/login' component={LogInPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/home' component={HomePage}/>
            <Route path='/menu/pizza' component={MenuPizzaPage}/>
            <Route path='/menu/sandwich' component={MenuSandwichPage}/>
            <Route path='/menu/soda' component={MenuSodaPage}/>
            <Route path='/menu/ice-cream' component={MenuIceCreamPage}/>
            <Route path='/menu' component={MenuPage}/>
            <Route path='/order' component={OrderPage}/>
            <Route path='/profile' component={ProfilePage}/>
            <Route component={MainPage}/>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App