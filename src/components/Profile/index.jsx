import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../constants'

const ProfileContainer = styled.div`
	display: flex;
	flex: 1;
	background-color: white;
	border-left: 2px solid #a9b2e52b;
	flex-direction: column;
	/* justify-content: center; */
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
`
const ProfileInfo = styled.div`
	display: grid;
	place-items: center;
`

const AvatarContainer = styled.div`
	width: 80px;
	height: 80px;
	overflow: hidden;
	border-radius: 50px;
	background-image: linear-gradient(
		90deg,
		rgba(63, 94, 251, 1) 0%,
		rgba(252, 70, 107, 1) 100%
	);
	padding: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
`
function Profile() {
	return (
		<ProfileContainer>
			<NotifContainer>
				<FontAwesomeIcon icon={faBell} size='lg' color='#f98d2dd9' />
			</NotifContainer>
			<ProfileContent>
				<ProfileInfo>
					<AvatarContainer>
						<div
							style={{
								overflow: 'hidden',
								borderRadius: '50px',
								overflow: 'hidden',
								width: '100%',
								height: '100%',
							}}
						>
							<img
								style={{ width: '100%', height: '100%' }}
								src={IMAGES.PROFILE_IMAGE}
								alt='profile'
							/>
						</div>
					</AvatarContainer>
				</ProfileInfo>
			</ProfileContent>
		</ProfileContainer>
	)
}
export default Profile
