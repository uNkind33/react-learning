import React, { PureComponent } from 'react';
import Comment from '../comment/index';

export default class CommentList extends PureComponent {
    static defaultProps = {
        comments: [],
    }

    state = {
        isOpnen: false,
    }

    getBody() {
        if (!this.state.isOpen) return null;

        const { comments } = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        );
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const text = this.state.isOpen ? 'hide comment' : 'show comment';
        return (
            <div>
                <button onClick={this.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        );
    }
}
