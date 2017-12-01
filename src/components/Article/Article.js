import PropTypes from 'prop-types'
import React from 'react'

const Article = ({ title, author, description, abstract }) => (
  <div className="w-full sm:w-1/2 md:w-1/3">
    <h1 className="font-sans font-thin mb-4">{title}</h1>
    <p className="text-grey mb-3">{author}</p>
    <h2 className="font-sans font-thin leading-normal mb-4">{description}</h2>
    <p className="text-grey-darkest mb-6 leading-tight">{abstract}</p>
    <div>
      <a href="#" className="text-black mr-2">
        READ MORE
      </a>
    </div>
  </div>
)

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  abstract: PropTypes.string
}

export default Article
