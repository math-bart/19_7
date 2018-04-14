import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, addComment}) => <ul><button onClick={() => addComment()}>Add comment</button>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;