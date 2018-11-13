import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    friends: friends
  }

  // remove friend on click function
  handleRemoveFriend = (id) => {
    // filter friend list to remove friend that has this id
    const filteredFriendList = this.state.friends.filter(friend => {
      return id !== friend.id
    });
    // run this.setState to update friendlist and trigger a UI change to reflect this update
    this.setState({friends: filteredFriendList});
  }
 
  render() {
    return (
      <Wrapper>
        <h1 className="title">Clicky Game</h1>
        {/* Map over this.state.friends and print out a FriendCard for each friend */}
        {this.state.friends.map((friend, i) => (
          <FriendCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            location={friend.location}
            occupation={friend.occupation}
            handleRemoveFriend={this.handleRemoveFriend}
          />
        ))}
      </Wrapper>
    )
  }
} 

export default App;
