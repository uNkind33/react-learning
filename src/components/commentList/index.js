import React, { PureComponent } from 'react';
import Comment from '../comment/index';
import ToggleOpen from '../../decorators/toggleOpen/index';

class CommentList extends PureComponent {
    static defaultProps = {
        comments: [],
    }

    getBody() {
        const { comments, isOpen } = this.props;
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        );
    }

    render() {
        const { isOpen, toggleOpen } = this.props;
        const text = isOpen ? 'hide comment' : 'show comment';
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        );
    }
}

export default ToggleOpen(CommentList);
