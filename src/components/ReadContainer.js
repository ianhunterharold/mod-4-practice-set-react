import React from 'react'

class ReadContainer extends React.Component {

  renderArticles = () => {
    return this.props.articles.map((article) => {
      return <p >{article.data.title}</p>
    })
  }

  render(){
    return (
      <>
      <h3>Read</h3>
      {this.renderArticles()}
      </>
    )
  }
} 

export default ReadContainer