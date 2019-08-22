import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Page, Header } from '../components/PageComponents'
import { Form, EmailInput, PasswordInput, FormSubmit } from '../components/FormComponents'
import { AuthLink } from '../components/NavBarComponents'
import * as Actions from '../store/actions/userActions'

function RegisterPage(props) {
	const dispatch = useDispatch()
	const insertUserData = useCallback(
		(userData) => {
			dispatch(Actions.insertUserData(userData))
		},
		[dispatch]
	)
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('')
	const handleUserEmail = useCallback(
		(evt) => {
			setUserEmail(evt.target.value)
		},
		[]
	)
	const handleUserPassword = useCallback(
		(evt) => {
			setUserPassword(evt.target.value)
		},
		[]
	)
	const handleUserPasswordConfirmation = useCallback(
		(evt) => {
			setUserPasswordConfirmation(evt.target.value)
		},
		[]
	)
	const register = useCallback(
		(evt) => {
			evt.preventDefault()
			firebase
				.auth()
				.createUserWithEmailAndPassword(userEmail, userPassword)
				.catch(
					(err) => {
						console.log(err.code)
						console.log(err.message)
					}
				)
				.finally(
					() => {
						setUserEmail('')
						setUserPassword('')
					}
				)
		},
		[userEmail, setUserEmail, userPassword, setUserPassword]
	)
	firebase.auth().onAuthStateChanged(
		(user) => {
			if(user) {
				insertUserData(user)
				props.history.replace('/home')
			}
		}
	)
	return (
		<Page>
			<Header/>
			<Form>
				<EmailInput placeholder='Digite o seu email' value={userEmail} onChange={handleUserEmail}/>
				<PasswordInput placeholder='Digite a sua senha' value={userPassword} onChange={handleUserPassword}/>
				<PasswordInput placeholder='Confirme a sua senha' value={userPasswordConfirmation} onChange={handleUserPasswordConfirmation}/>
				<FormSubmit value='Cadastrar' onClick={register}/>
			</Form>
			<AuthLink to='/login' title='Já tenho conta'/>
		</Page>
	)
}

export default RegisterPage