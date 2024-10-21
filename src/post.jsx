import './post.css'
export default function Post({post}){
    const {title, body, id, userID} = post;
    return (
        <div className="box">
            <h5>Title: {title} </h5>
            <p><small>userID: {userID} </small></p>
            <p><small>PostID: {id} </small></p>
            <p> {body} </p>
        </div>
    )
}