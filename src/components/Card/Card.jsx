import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
	min-width: 200px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding: 5px;
	background-color: red;
`

function Card() {
	return <CardContainer></CardContainer>
}

export default Card
