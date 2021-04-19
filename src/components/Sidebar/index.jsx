import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
	width: 70px;
	height: 100%;
	background-color: white;
	border-right: 1px solid #c8ced596;
	display: flex;
`

function Sidebar() {
	return <SidebarContainer></SidebarContainer>
}

export default Sidebar
