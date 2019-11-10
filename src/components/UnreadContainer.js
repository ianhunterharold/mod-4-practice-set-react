import React from 'react'

class UnreadContainer extends React.Component {

  renderArticles = () => {
    return this.props.articles.map((article) => {
      return <p id={article.data.id} onClick={()=> this.props.handleClick(article )} >{article.data.title}</p>
      //this could be a card component that you are creating everytime you iterate through the set of data
      // by passing in an object into handleclick you dont have to pass it into the anon, only as the param
    }) 
  }

  render(){
    return ( 
      <>
      <h3>Unread </h3>
      {/* <h4>Articles Unread: {this.props.articlesUnread} </h4> */}
      {this.renderArticles()}
      
      </>
    )
  }
} 
// something needs to be invoked in render and return to show up

export default UnreadContainer