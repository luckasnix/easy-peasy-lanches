import React from 'react'
import { Page, Main } from '../components/PageComponents'
import { PublicSideNavBar } from '../components/NavBarComponents'
import { LargeLogo } from '../components/LogoComponents'
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
			<Main>
				<LargeLogo/>
			</Main>
		</Page>
	)
}

export default MainPage