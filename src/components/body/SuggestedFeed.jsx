import React from 'react';
import SuggestedFriend from './SuggestedFriend';



function SuggestedFeed(props) {
  const styles = {
    containerStyle: {
      width: '350px',
      border: '1px solid black',
      padding: '5px'
    }
  }


  return (
    <div style={styles.containerStyle}>
      <p>Lorem Ipsum</p>
      {props.suggestedFeed.map((suggestedFriend) =>
        <SuggestedFriend name={suggestedFriend.name}
          eyeColor={suggestedFriend.eyeColor}
          key={suggestedFriend.id}/>
      )}


    </div>
  );
}

export default SuggestedFeed;
