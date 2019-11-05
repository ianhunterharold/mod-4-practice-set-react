import React from 'react'

class UnreadContainer extends React.Component {

  renderArticles = () => {
    return this.props.articles.map((article) => {
      return <p id={article.data.id} onClick={()=> this.props.handleClick(article )} >{article.data.title}</p>
      //this could be a card component that you are creating everytime you iterate through the set of data
    })
  }

  render(){
    return ( 
      <>
      <h3>Unread</h3>
      {this.renderArticles()}
      </>
    )
  }
} 

export default UnreadContainer