import React from 'react'

class ReadContainer extends React.Component {

  renderArticles = () => {
    return this.props.articles.map((article) => {
      return <p >{article.data.title}</p>
    })
    this.setState({
      articlesRead: this.state.articlesRead + 1
    })
  }

  render(){
    return (
      <>
      <h3>Read</h3>
      <p>Number of Articles Read : {this.props.articlesRead} </p>
      {this.renderArticles()}
      </>
    )
  }
} 

export default ReadContainer