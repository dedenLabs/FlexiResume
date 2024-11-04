import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { checkConvertMarkdownToHtml } from '../../utils/ParseAndReplaceSkills';
import { useCollapser } from '../../utils/Tools';

interface BaseCardProps {
	id: string;
	name: string,
	hidden?: boolean,
	content?: string,
}


/**
 * 基础卡片组件
 *
 * @param name 卡片名称
 * @param hidden 是否隐藏卡片
 * @param content 卡片内容，支持Markdown语法
 * @returns 返回React组件
 */
const BaseCard: React.FC<BaseCardProps> = ({ id, name, hidden, content }) => {
	const { collapsedItems } = useCollapser(id, 1);
	// 将 content 转换为 HTML, 获取到可以实时更新数据并渲染的html结构数据
	const markdownContent = checkConvertMarkdownToHtml(content);
	if (!collapsedItems[0]) {
		return (
			<div className='markdown-content' dangerouslySetInnerHTML={{ __html: markdownContent }} />
		);
	}
	return <></>
};

export default BaseCard;