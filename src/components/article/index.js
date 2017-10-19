import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../commentList/index';
import ToggleOpen from '../../decorators/toggleOpen/index';

class Article extends PureComponent {
    static defaultProps = {
        articles: [],
        isOpen: false,
    }

    static propTypes = {
        articles: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
        }).isRequired,
    }

    getBody() {
        const { articles, isOpen } = this.props;
        if (!isOpen) return null;
        return (
            <section>
                {articles.text}
                <CommentList comments={articles.comments} />
            </section>
        );
    }

    render() {
        const { articles, isOpen, toggleOpen } = this.props;
        const btnOpen = isOpen ? 'Close' : 'Open';
        return (
            <div>
                <h3>{articles.title}</h3>
                <button onClick={toggleOpen}>{btnOpen}</button>
                {this.getBody()}
            </div>
        );
    }
}

export default ToggleOpen(Article);
