import {
	faBookmark,
	faComment,
	faEllipsisH,
	faHeart,
	faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../Marginer'

const CardContainer = styled.div`
	min-width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding: 10px;
	background-color: white;
	border-radius: 20px;
	margin: 5px 10px;
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

const ActionContainer = styled.div`
	display: flex;
	align-items: center;
`
const LeftActionContainer = styled.div`
	display: flex;
	flex: 1;
	svg {
		padding: 0 5px;
	}
`
const LikedPeople = styled.div`
	display: flex;
	font-size: 14px;
	h4 {
		font-weight: 700;
	}
`
const Description = styled.span`
	font-size: 14px;
	font-weight: 500;
`
const CreateDate = styled.h4`
	color: gray;
	font-weight: 400;
	font-size: 12px;
	padding: 5px 0;
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
			<Marginer direction='vertical' margin={20} />
			<ActionContainer>
				<LeftActionContainer>
					<FontAwesomeIcon icon={faHeart} color='red' />
					<FontAwesomeIcon icon={faComment} color='#a9b2e5ff' />
					<FontAwesomeIcon icon={faPaperPlane} color='#a9b2e5ff' />
				</LeftActionContainer>
				<FontAwesomeIcon icon={faBookmark} color='#a9b2e5ff' />
			</ActionContainer>
			<Marginer direction='vertical' margin={20} />
			<LikedPeople>
				<span>Liked by &nbsp;</span>
				<h4> mahya12,&nbsp;&nbsp;and 24 Other people</h4>
			</LikedPeople>
			<Marginer direction='vertical' margin={10} />
			<Description>{description}</Description>
			<CreateDate>Wed 16, January 2021</CreateDate>
		</CardContainer>
	)
}

export default Card
