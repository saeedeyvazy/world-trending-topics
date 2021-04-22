import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../constants'

const HeaderContainer = styled.div`
	display: flex;
	background-color: white;
	justify-content: space-between;
	align-items: center;
	height: auto;
	flex-wrap: wrap;
	padding: 0 10px;
`
const LogoContainer = styled.div`
	width: 90px;
	height: 90px;
	object-fit: contain;
	img {
		width: 100%;
		height: 100%;
	}
`
const SearchInputContainer = styled.div`
	background-color: #a9b2e52b;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	padding: 0 10px;
	border-radius: 8px;
`

const SearchInput = styled.input`
	border: none;
	background-color: transparent;
	margin-left: 10px;
	color: #a9b2e5ff;
`
function TopHeader() {
	return (
		<HeaderContainer>
			<LogoContainer>
				<img src={IMAGES.LOGO} alt='world-trend-logo' />
			</LogoContainer>
			<SearchInputContainer>
				<FontAwesomeIcon color='#a9b2e57d' icon={faSearch} size='1x' />
				<SearchInput placeholder='Search' />
			</SearchInputContainer>
		</HeaderContainer>
	)
}

export default TopHeader
