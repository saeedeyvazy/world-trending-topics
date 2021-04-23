import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card/Card'
import Profile from '../../components/Profile'
import Sidebar from '../../components/Sidebar'
import TopHeader from '../../components/TopHeader'

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

const TweetsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 1;
	padding: 20px 15px;
`

function HomePage() {
	const [tweetList, setTweetList] = useState([])

	useEffect(() => {
		const getTweetList = async () => {
			const response = axios.get('http://localhost:9000/stories')
			setTweetList((await response).data)
		}
		getTweetList()
	}, [])

	return (
		<>
			<Sidebar />
			<ContentContainer>
				<Content>
					<TopHeader />
					<TweetsContainer>
						{tweetList.length ? (
							tweetList.map((tweet, idx) => <Card key={idx} {...tweet} />)
						) : (
							<h3>Loading Tweets...</h3>
						)}
					</TweetsContainer>
				</Content>
				<Profile />
			</ContentContainer>
		</>
	)
}

export default HomePage
