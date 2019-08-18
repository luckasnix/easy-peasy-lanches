import React from 'react'
import { Page } from '../components/PageComponents'
import { PublicSideNavBar } from '../components/NavBarComponents'
import registerIcon from '../images/register-icon.svg'
import logInIcon from '../images/log-in-icon.svg'

function MainPage() {
	return (
		<Page>
			<PublicSideNavBar
				data={
					[
						{ to: '/register', icon: registerIcon, title: 'Criar conta' },
						{ to: '/login', icon: logInIcon, title: 'Entrar' }
					]
				}
			/>
		</Page>
	)
}

export default MainPage