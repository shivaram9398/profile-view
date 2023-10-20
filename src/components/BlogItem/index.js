import './index.css'

const BlogItem = props => {
  const {list} = props
  const {id, title, description, publishedDate} = list
  return (
    <div className="con">
      <div className="event">
        <h1 className="post">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr className="line" />
    </div>
  )
}
export default BlogItem
