import React, { useEffect, useState, useRef } from 'react';
import '../style/Sidebar.css';

/*
Color code :
Background #14261f
Green lines : #4ef24b
Green Shadows (background pour les onglets ?) : #20542c
Font : white #FFFFFF
*/

const Spacer = ({ size }) => {
	return (
		<div style={{ width: size, height: size }} />
	);
};

const templateBorder = (widthInput: string, heightInput: string, topInput: string) => ({
	position: 'relative',
	top: topInput,
    border: '2px solid #55c34f',
    padding: '15px',
    width: widthInput,
	height: heightInput,
    margin: '20px',
    borderRadius: '4px'
});

const agentInfoBorder = templateBorder('300px', '235px', '0px');

const channelInfoBorder = templateBorder('300px', '235px', '230px'); 

const Sidebar: React.FC = () => {
	return (
		<>
			<div class-name="agentInfo" style={agentInfoBorder}>
				<img 
					className="picture"
					src=""
					style={{
						width: 120,
						height: 120,
					}}
				/>
				<Spacer size="10px" />
				Legal name : ADD_USER_NAME
				<br />
				Code name : ADD_CODE_NAME
				<br />
				Ranking : ADD_RANKING
			</div>
			<div class-name="channelInfo" style={channelInfoBorder}>
					Channel name :
					<br/>
					Topic : 
					<br/>
					Member : 
					<br/>
			</div>
		</>
	);

};

export default Sidebar;