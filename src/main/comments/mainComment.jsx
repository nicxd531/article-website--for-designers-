import { useState,useEffect } from "react";
import {getComments as getCommentsApi ,createComment as createCommentApi, deleteComment as deleteCommentApi } from "./api/commentApi"
import Comment from "./comment";
import CommentForm from "./commentForm";

const MainComment = ({currentUserId}) => {
    const [backendComment, setBackendComment] = useState([])
    const [activeComment, setActiveComment] = useState(null)
    const rootComments =backendComment.filter(backendComment=> backendComment.parentId===null)
    const getReplies = (CommentId)=>{
        return backendComment
        .filter((backendComment)=>backendComment.parentId===CommentId)
        .sort((a,b)=>new Date(a.createdAt).getTime()- new Date(b.createdAt).getTime())
        
    };
    const addComment = (text, parentId)=>{
        createCommentApi(text, parentId).then(
            comment=>{
                setBackendComment([comment, ...backendComment]);
                setActiveComment(null)
            }
        )
    }
    const deleteComment=(CommentId)=>{
        if(window.confirm("Are you sure you want to delete comment")){
            deleteCommentApi(CommentId).then(()=>{
                const updatedBackendComments= backendComment.filter
                (backendComment=>backendComment.id!== CommentId);
                setBackendComment(updatedBackendComments)
            });
        }
    }
    useEffect(() => {
     getCommentsApi().then(data=>{
        setBackendComment(data)
     })
    }, []); 
    return ( 
        <section 
        className="main-comment"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        > <div>
        {rootComments.map((data,index)=>{
            return(
                <Comment 
                key={data.id} data={data} 
                replies={getReplies(data.id)}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                />
            )
        })}
        </div>
        <CommentForm submitLabel="write" handleSubmit={addComment}/>
        </section>
     );
}
 
export default MainComment;