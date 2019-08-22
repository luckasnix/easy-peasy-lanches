import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Page, Main } from '../components/PageComponents'
import PrivateSideBar from '../components/PrivateSideBar'
import { Form, InfoInput } from '../components/FormComponents'

function ProfilePage() {
	const userData = useSelector(
		(state) => {
			return state.userData
		}
	)
	const [userName, setUserName] = useState(userData.displayName ? userData.displayName : '')
	const handleUserName = useCallback(
		(evt) => {
			setUserName(evt.target.value)
		},
		[]
	)
	const updateUserName = useCallback(
		() => {
			firebase.auth().currentUser.updateProfile({ displayName: userName })
		},
		[userName]
	)
	return (
		<Page>
			<PrivateSideBar/>
			<Main>
				<Form>
					<InfoInput
						placeholder='Atualize o seu nome'
						value={userName}
						onChange={handleUserName}
						onClick={updateUserName}
					/>
				</Form>
			</Main>
		</Page>
	)
}

export default ProfilePage