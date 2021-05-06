import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StorieAvatarContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 10px;
	align-items: center;
`

const CreatePostButton = styled.button`
	width: 100%;
	height: 40px;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-weight: 700;
	transition: all 200ms ease-in-out;
	background: linear-gradient(
		90deg,
		rgba(252, 70, 161, 1) 0%,
		rgba(252, 169, 70, 1) 100%
	);
	&:hover {
		opacity: 0.8;
	}
`

const StorieAvatar = styled.img`
	border-radius: 50%;
	width: 60px;
	height: 60px;
	object-fit: cover;
	padding: 2px;
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

function StorieSection() {
	const [storieList, setStorieList] = useState([])

	useEffect(() => {
		const getStorieList = async () => {
			const response = await axios.get(
				'https://my-json-server.typicode.com/saeedeyvazy/servycing-api/services'
			)
			setStorieList(response.data)
			console.log(response.data)
		}

		getStorieList()
	}, [])

	return (
		<>
			<StorieContainer>
				<h3>Your Stories</h3>
				<StorieAvatarContainer>
					{storieList.length ? (
						storieList.map((item) => (
							<StorieAvatar src={item.url} alt='storie'></StorieAvatar>
						))
					) : (
						<h2>Loading...</h2>
					)}
				</StorieAvatarContainer>
				<div style={{ padding: '10px' }}>
					<CreatePostButton>Create Post</CreatePostButton>
				</div>
			</StorieContainer>
		</>
	)
}

export default StorieSection
