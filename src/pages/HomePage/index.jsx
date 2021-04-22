import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Profile from '../../components/Profile'
import Sidebar from '../../components/Sidebar'
import TopHeader from '../../components/TopHeader'
import { IMAGES } from '../../constants'

const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
	height: 100%;
`

const ContentContainer = styled.div`
	display: flex;
	height: 100%;
	flex: 1;
`

function HomePage() {
	return (
		<>
			<Sidebar />
			<ContentContainer>
				<Content>
					<TopHeader />
				</Content>
				<Profile />
			</ContentContainer>
		</>
	)
}

export default HomePage
