import React, { useState, useCallback } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Page, Header } from '../components/PageComponents'
import { Form, TextInput, EmailInput, PasswordInput, FormSubmit } from '../components/FormComponents'
import { AuthLink } from '../components/NavBarComponents'

function RegisterPage(props) {
	// LOCAL STATE
	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('')
	const handleUserName = useCallback(
		(evt) => {
			setUserName(evt.target.value)
		},
		[]
	)
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
	// CALLBACK FUNCTIONS
	const register = useCallback(
		(evt) => {
			evt.preventDefault()
			firebase
				.auth()
				.createUserWithEmailAndPassword(userEmail, userPassword)
				.then(
					() => {
						firebase.auth().currentUser.updateProfile({
							displayName: userName
						})
						props.history.replace('/login')
					}
				)
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
		[props.history, userName, userEmail, setUserEmail, userPassword, setUserPassword]
	)
	// PAGE COMPONENTS
	return (
		<Page>
			<Header/>
			<Form>
				<TextInput placeholder='Digite o seu nome' value={userName} onChange={handleUserName}/>
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