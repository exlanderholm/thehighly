import React from 'react'

const Post = ({title, tester}) => (
  <div>
    <h1>{title}</h1>
    <p>{tester}</p>
  </div>
)

Post.defaultProps = {
  title: 'Mike is cool diary',
  tester: 'Mork Mindy'
}

export default Post