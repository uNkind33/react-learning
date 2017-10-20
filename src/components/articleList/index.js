import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Article from '../article/index';
// import { articles } from '../../fixtures';
import Accordion from '../../decorators/accordion/index';

class ArticleList extends PureComponent {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired,
    }
    
    state = {
        openArticleId: null,
    }
    // toggleOpenArticle = openArticleId => (ev) => {
    //     this.setState({
    //         openArticleId,
    //     });
    // }

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props;
        const articleList = articles.map(article => (<li key={article.id}>
            <Article
                articles={article}
                isOpen={article.id === openItemId}
                toggleOpen={toggleOpenItem(article.id)}
            />
        </li>));
        return (
            <ul>
                {articleList}
            </ul>
        );
    }
}

export default Accordion(ArticleList);
