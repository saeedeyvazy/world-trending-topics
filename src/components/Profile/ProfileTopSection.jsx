import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../constants'
import { Marginer } from '../Marginer'

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

function ProfileTopSection() {
	return (
		<div style={{ display: 'flex', flex: 1, width: '100%', height: '120px' }}>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'flex-end',
				}}
			>
				<ProfileState>
					<h3>98</h3>
					<h4>Posts</h4>
				</ProfileState>
			</div>
			<div
				style={{
					flexDirection: 'column',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flex: 2,
					textAlign: 'center',
				}}
			>
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
				<ProfileState>
					<h3>3.5k</h3>
					<h4>Followers</h4>
				</ProfileState>
			</div>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'flex-end',
				}}
			>
				<ProfileState>
					<h3>900</h3>
					<h4>Followings</h4>
				</ProfileState>
			</div>
		</div>
	)
}

export default ProfileTopSection
