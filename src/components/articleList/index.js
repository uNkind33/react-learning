import React from 'react';
import Article from '../article/index';
// import { articles } from '../../fixtures';

export default function ArticleList({ articles }) {
    const artilceList = articles.map(article => <li key={article.id}><Article articles={article} /></li>);
    return (
        <ul>
            {artilceList}
        </ul>
    );
}
