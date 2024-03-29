import React, { createElement, useState } from 'react';
// ------- STYLES -----
// ------- COMPONENTS -----
import { Comment, Tooltip, Avatar, Card, List, Space, Button } from 'antd';
import moment from 'moment';
// Created
import Comentario from './escrever-resposta'

// ------ ICONS -----
import {
	LikeOutlined,
	LikeFilled
} from '@ant-design/icons';
import { IoIosUndo } from 'react-icons/io';

const Resposta = props => {

    return (
			<>
				{/* <Card className="card-box">
					<Comment
						actions={actions}
						author={<a>Han Solo</a>}
						avatar={
							<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
						}
						content={
							<p>
								We supply a series of design principles, practical patterns and
								high quality design resources (Sketch and Axure), to help people
								create their product prototypes beautifully and efficiently.
							</p>
						}
						datetime={
							<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
								<span>{moment().fromNow()}</span>
							</Tooltip>
						}
					/>
				</Card> */}

				<Card className="card-box">				
					<Comentario />
				</Card>
			</>
		);
};

export default Resposta;