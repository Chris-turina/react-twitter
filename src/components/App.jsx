import React from 'react';
import Header from './header/Header';
import Body from './body/Body';
import NewNewsFeedForm from './body/NewNewsFeedForm';
import NewSuggestedForm from './body/NewSuggestedForm';
import { Switch, Route } from 'react-router-dom';
import NewsFeed from './body/NewsFeed';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterNewsFeed: [],
      masterSuggestedFeed: []
    };
    this.handleAddingNewNewsToList = this.handleAddingNewNewsToList.bind(this);
    this.handleAddingNewSuggestedToList = this.handleAddingNewSuggestedToList.bind(this);
  }

  handleAddingNewNewsToList(newNewsCard) {
    let newMasterNewsFeed = this.state.masterNewsFeed.slice();
    newMasterNewsFeed.push(newNewsCard);
    this.setState({masterNewsFeed: newMasterNewsFeed});
  }

  handleAddingNewSuggestedToList(newSuggestedCard) {
    let newMasterSuggestedFeed = this.state.masterSuggestedFeed.slice();
    newMasterSuggestedFeed.push(newSuggestedCard);
    this.setState({masterSuggestedFeed: newMasterSuggestedFeed});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Body newsFeed={this.state.masterNewsFeed} suggestedFeed={this.state.masterSuggestedFeed}/>} />
          <Route path='/newnewsfeedform' render={()=><NewNewsFeedForm onNewNewsCardCreation={this.handleAddingNewNewsToList} />} />
          <Route path='/newsuggested' render={()=><NewSuggestedForm onNewSuggestedCreation={this.handleAddingNewSuggestedToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
