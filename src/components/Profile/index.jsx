import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../Marginer'
import ProfileTopSection from './ProfileTopSection'
import StorieSection from './StorieSection'

const ProfileContainer = styled.div`
	display: flex;
	flex: 1;
	background-color: white;
	border-left: 2px solid #a9b2e52b;
	flex-direction: column;
	align-items: center;
`
const NotifContainer = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	svg {
		padding: 20px;
	}
`

const ProfileContent = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 10px 0;
`
const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex: 2;
	width: 100%;
`

const ProfileDescContainer = styled.div`
	text-align: start;
	width: 100%;
	h3 {
		font-weight: 700;
		font-size: 17px;
		padding: 10px;
	}
	h4 {
		color: gray;
		font-size: 13px;
		font-weight: 400;
		padding: 10px;
	}
`

function ProfileInnerSection() {
	return (
		<ProfileDescContainer>
			<h3>Neelesh Chaudhary</h3>
			<h4>
				Test your Internet connection bandwidth to locations around the world
				with this interactive broadband speed test from Ookla. Test your
				Internet connection bandwidth to locations around the world with this
				interactive broadband speed test from Ookla.
			</h4>
		</ProfileDescContainer>
	)
}

function Profile() {
	return (
		<ProfileContainer>
			<NotifContainer>
				<FontAwesomeIcon icon={faBell} size='lg' color='#f98d2dd9' />
			</NotifContainer>
			<ProfileContent>
				<ProfileInfo>
					<ProfileTopSection />
					<Marginer direction='vertical' margin={20} />
					<ProfileInnerSection />
					<StorieSection />
				</ProfileInfo>
			</ProfileContent>
		</ProfileContainer>
	)
}
export default Profile
