import React from 'react';
import PropTypes from 'prop-types';

class NewsFeedCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      likeStatus: true,
      likeText: 'like'
    };
    this.likeUnlike = this.likeUnlike.bind(this);
  }

  likeUnlike() {
    let likeText = '';
    if(this.state.likeStatus === true){
      this.setState({likeStatus: false})
      this.setState({likeText: 'Unlike'})
      console.log(this.state.likeStatus);
    } else if (this.state.likeStatus === false)
    this.setState({likeStatus: true})
      this.setState({likeText: 'Like'})
      console.log(this.state.likeStatus);

  }

  render(){

    const styles = {
      containerStyle: {
        border: '1px solid black',
        margin: 5,
        padding: 5,
        display: 'flex'
      },
      profilePic: {
        width: '50px',
        height: '50px',
        backgroundColor: 'green',
      }
    };

    return (
      <div style={styles.containerStyle}>
        <div style={styles.profilePic}></div>
        <div style={styles.flexItem}>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <button onClick={this.likeUnlike}>Button</button>
          <p>{this.likeText}</p>
        </div>
      </div>
    );
  }
}

NewsFeedCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default NewsFeedCard;
