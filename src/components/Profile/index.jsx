import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../constants'
import { Marginer } from '../Marginer'
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

const CircleAvatar = styled.div`
	overflow: hidden;
	border-radius: 50px;
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		height: 100%;
	}
`
const ProfileName = styled.h3`
	font-weight: 600;
	font-size: 16px;
	color: black;
	padding: 10px;
`
const ProfileDesc = styled.h4`
	color: gray;
	font-size: 12px;
	font-weight: 400;
`

const StorieContainer = styled.div`
	text-align: start;
	width: 100%;
	h3 {
		font-weight: 700;
		font-size: 17px;
		padding: 10px;
	}
`
const EditButton = styled.button`
	background-color: black;
	color: white;
	border-radius: 5px;
	width: 75px;
	height: 35px;
	cursor: pointer;
	transition: all 200ms ease-in-out;
	&:hover {
		opacity: 0.8;
	}
`
const ProfileStateContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ProfileState = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15px;
	h3 {
		font-weight: 700;
		font-size: 17px;
	}
	h4 {
		color: gray;
		font-size: 12px;
		font-weight: 500;
		padding: 5px;
	}
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
function Profile() {
	return (
		<ProfileContainer>
			<NotifContainer>
				<FontAwesomeIcon icon={faBell} size='lg' color='#f98d2dd9' />
			</NotifContainer>
			<ProfileContent>
				<ProfileInfo>
					<AvatarContainer>
						<CircleAvatar>
							<img src={IMAGES.PROFILE_IMAGE} alt='profile' />
						</CircleAvatar>
					</AvatarContainer>
					<ProfileName>Saeed Eyvazy</ProfileName>
					<ProfileDesc>profile description</ProfileDesc>
					<Marginer direction='vertical' margin={8} />
					<EditButton>Edit</EditButton>
					<Marginer direction='vertical' margin={20} />
					<ProfileStateContainer>
						<ProfileState>
							<h3>98</h3>
							<h4>Posts</h4>
						</ProfileState>
						<h3>.</h3>
						<ProfileState>
							<h3>3.5k</h3>
							<h4>Followers</h4>
						</ProfileState>
						<h3>.</h3>
						<ProfileState>
							<h3>900</h3>
							<h4>Followings</h4>
						</ProfileState>
					</ProfileStateContainer>
					<Marginer direction='vertical' margin={20} />
					<ProfileDescContainer>
						<h3>Neelesh Chaudhary</h3>
						<h4>
							Test your Internet connection bandwidth to locations around the
							world with this interactive broadband speed test from Ookla. Test
							your Internet connection bandwidth to locations around the world
							with this interactive broadband speed test from Ookla.
						</h4>
					</ProfileDescContainer>
					<StorieContainer>
						<h3>Your Stories</h3>
					</StorieContainer>
				</ProfileInfo>
			</ProfileContent>
		</ProfileContainer>
	)
}
export default Profile
