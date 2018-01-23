import React from 'react';
import Profile from './Profile';
import Bio from './Bio';
import NewsFeed from './NewsFeed';
import SuggestedFeed from './SuggestedFeed';


function Body(props){
const styles ={
  containerStyle: {
    display: 'flex'
  }
}

  return(
    <div style={styles.containerStyle}>
      <div>
        <Profile />
        <Bio />
      </div>

      <div>
        <NewsFeed newsFeed={props.newsFeed}/>
      </div>

      <div>
        <SuggestedFeed suggestedFeed={props.suggestedFeed}/>
      </div>
    </div>
  );
}

export default Body;
