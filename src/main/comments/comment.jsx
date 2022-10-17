import { updateComment } from "./api/commentApi";
import CommentForm from "./commentForm";


const Comment = ({data, replies ,currentUserId ,deleteComment ,activeComment,setActiveComment, parentId = null, addComment}) => {
    const isReplying = activeComment && activeComment.type=== "replying" && activeComment.id === data.id
    const isEditing = activeComment && activeComment.type=== "editing" && activeComment.id === data.id
    const fiveMinutes= 300000
    const createdAt = new Date(data.createdAt).toLocaleDateString();
    const timePassed = new Date() - new Date(data.createdAt) > fiveMinutes;
    const  canReply= Boolean(currentUserId);
    const canEdit=currentUserId===data.userId && !timePassed 
    const canDelete = currentUserId === data.userId && !timePassed
    
    const replyId = parentId ? parentId :data.id
    return ( 
        <div className="comment-tree">
            <div  className="userComment">
                <div className="user-comment-img">
                    <img src="./image/Untitled design (1).png" alt=" user image"/>
                </div>
                <div className="comment-right-part">
                    <div className="comment-content">
                        <div className="comment-author">{data.username}</div>
                         <div>{createdAt}</div>
                    </div>
                   {!isEditing && <div className="comment-text">{data.body}</div>}
                   {isEditing && (
                    <Comment submitLabel="update" 
                    hasCancelButton 
                    initialText={data.body}
                    handleSubmit={(text)=>updateComment(text, data.id)}
                    handleCancel={()=> setActiveComment(null)}
                    />
                   )}
                    <div className="comment-btn">
                        { canReply && <span
                        onClick={()=>setActiveComment({
                            id:data.id,type:"replying"
                        })}
                    
                        >Reply</span>}
                        {canEdit && <span
                         onClick={()=>setActiveComment({
                            id:data.id,type:"editing"
                        })}
                        >Edit</span>}
                        {canDelete && <span
                        onClick={()=>deleteComment(data.id)}
                        >Delete</span>}
                    </div>

                </div>
            </div>
            {isReplying && <CommentForm
            submitLabel="Reply"
            handleSubmit={(text)=>addComment(text,replyId)}

            />} 
             {replies.length > 0 && (
                <div className="replies">
                    {replies.map(reply=>{
                        return( 
                        <Comment 
                        data={reply} key={reply.id} 
                        replies={[]} 
                        deleteComment={deleteComment} 
                        parentId={data.id} 
                        addComment={addComment} 
                        setActiveComment={setActiveComment} 
                        activeComment={activeComment}
                        currentUserId={currentUserId}
                        />                        
                        )
                    })}

                </div>
            )} 
        </div>
       
     );
}
 
export default Comment;