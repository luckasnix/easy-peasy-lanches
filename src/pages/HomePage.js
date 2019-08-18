import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Page } from '../components/PageComponents'
import PrivateSideBar from '../components/PrivateSideBar'

function HomePage() {
	const userData = useSelector(
		(state) => {
			return state.userData
		}
	)
	if (!userData) {
		return <Redirect to='/'/>
	}
	return (
		<Page>
			<PrivateSideBar/>
		</Page>
	)
}

export default HomePage