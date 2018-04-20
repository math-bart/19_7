import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, addComment}) => 
<ul>
  <textarea rows="6" cols="75" onChange={(event) => this.text=event.target.value} />
  <button className={'new'} onClick={() => addComment(this.text)} type={'submit'} >Add comment</button>
  <p>Number of comments: {comments.length}</p>
  {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
</ul>;

export default CommentsList;