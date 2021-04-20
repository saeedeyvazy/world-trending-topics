import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../constants'
const SidebarContainer = styled.div`
	width: 70px;
	height: 100%;
	background-color: white;
	border-right: 2px solid #a9b2e52b;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	img {
		width: 50px;
		height: 50px;
		cursor: pointer;
		transition: all 200ms ease-in-out;
		&:hover {
			opacity: 0.7;
		}
	}
`
const SettingContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	flex-direction: column;
	img {
		width: 30px;
		height: 30px;
	}
`
const EmptyColumn = styled.div`
	display: flex;
	flex: 1;
`

const OtherMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex: 3;
`

function Sidebar() {
	return (
		<SidebarContainer>
			<EmptyColumn />
			<OtherMenuContainer>
				<img src={IMAGES.HOME} alt='home' />
				<img src={IMAGES.VIDEO} alt='video-message' />
				<img src={IMAGES.EVENT} alt='events' />
				<img src={IMAGES.FRIEND} alt='friend' />
				<img src={IMAGES.SAVE} alt='save' />
				<img src={IMAGES.TV} alt='tv' />
				<img src={IMAGES.LIKE} alt='like' />
			</OtherMenuContainer>
			<SettingContainer>
				<img src={IMAGES.SETTING} alt='settings' />
			</SettingContainer>
		</SidebarContainer>
	)
}

export default Sidebar
