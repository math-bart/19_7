import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './actions';
import {thumbDownComment} from './actions';
import {remComment} from './actions';
import {editComment} from './actions';


const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  remComment: (id) => dispatch(remComment(id)),
  editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);
