import './styles/Post.css';

function Post(prop){
  return <div className='Post'>
    <p>{prop.post.author.name}</p>
    <p>{prop.post.author.nickname}</p>
    <img src={prop.post.author.photo} alt="Author"></img>
    <p>{prop.post.content}</p>
    <img src={prop.post.image} alt="Post"></img>
    <p>{prop.post.date}</p>
  </div>
}

export default Post;