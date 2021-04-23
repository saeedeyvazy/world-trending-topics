import {
	faDotCircle,
	faEllipsisH,
	faMortarPestle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../Marginer'

const CardContainer = styled.div`
	min-width: 300px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding: 5px;
	background-color: white;
	border-radius: 10px;
	margin-right: 10px;
`
const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const AvatarContainer = styled.div`
	width: 45px;
	height: 45px;
	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}
`

const AvatarDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: start;
	align-items: flex-start;
	padding: 5px;
	h3 {
		color: black;
		font-size: 14px;
		font-weight: 500;
		white-space: nowrap;
	}
	h4 {
		color: gray;
		font-size: 12px;
		white-space: nowrap;
	}
`
const LeftHeader = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
`
const TweetImage = styled.img`
	width: 100%;
	border-radius: 10px;
	height: 150px;
	object-fit: cover;
`

function Card({ url, description, creator, location }) {
	return (
		<CardContainer>
			<HeaderContainer>
				<LeftHeader>
					<AvatarContainer>
						<img src={url} alt='avatr' />
					</AvatarContainer>
					<AvatarDescContainer>
						<h3>{creator}</h3>
						<h4>{location}</h4>
					</AvatarDescContainer>
				</LeftHeader>
				<FontAwesomeIcon icon={faEllipsisH} color='#a9b2e5ff' size='sm' />
			</HeaderContainer>
			<Marginer direction='vertical' margin={20} />
			<TweetImage src={url}></TweetImage>
		</CardContainer>
	)
}

export default Card
