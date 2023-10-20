import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {details} = props
  return (
    <>
      <div className="img-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="img-pro"
          alt="profile"
        />
        <h1 className="name">Shiva Ram</h1>
        <p>Webdeveloper India</p>
      </div>
      <ul className="ul-con">
        {details.map(each => (
          <BlogItem key={each.id} list={each} />
        ))}
      </ul>
    </>
  )
}
export default BlogList
