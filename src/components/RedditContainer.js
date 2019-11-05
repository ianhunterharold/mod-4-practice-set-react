import React from 'react'
import UnreadContainer from './UnreadContainer'
import ReadContainer from './ReadContainer'


class RedditContainer extends React.Component {
  state = {
    unreadArticles: [],
    readArticles: [],
  }

  fetchReddit =()=> {
    fetch('https://www.reddit.com/r/reactjs.json')
    .then(res=>res.json())
    .then(json =>{
      this.setState({ 
        unreadArticles: json.data.children 
      })
    })
  }

  componentDidMount(){
    this.fetchReddit()
  }

  readArticle = (article) => {
    const newReadArticles = [...this.state.readArticles, article]
    const newUnreadArticles = this.state.unreadArticles.filter((art) => {
      return art.data.id !== article.data.id
    })
    this.setState({
      unreadArticles: newUnreadArticles,
      readArticles: newReadArticles
    })
  }

 
  render(){
    return  (
      <div>
      <h3>Reddit Container</h3>
      <UnreadContainer articles={this.state.unreadArticles} handleClick={this.readArticle} />
      <ReadContainer articles={this.state.readArticles}/>
      </div>
    )
  }

}

export default RedditContainer