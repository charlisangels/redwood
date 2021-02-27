//@ts-ignore
import { Link, routes } from '@redwoodjs/router'

const PostPage = () => {
  return (
    <>
      <h1>PostPage</h1>
      <p>
        Find me in <code>./web/src/pages/PostPage/PostPage.js</code>
      </p>
      <p>
        My default route is named <code>post</code>, link to me with `
        <Link to={routes.post()}>Post</Link>`
      </p>
    </>
  )
}

export default PostPage
