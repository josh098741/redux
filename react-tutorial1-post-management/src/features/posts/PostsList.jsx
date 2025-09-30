import {useSelector} from 'react-redux'
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor'

function PostsList(){

    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
            </p>
        </article>
    ))

    return(
        <section>
            <h3>Posts</h3>
            {renderedPosts}
        </section>
    );
}

export default PostsList