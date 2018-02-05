import React from 'react';


class FriendsSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchName: '',  searchedName: ""}
    this.selectName = this.selectName.bind(this)
  };

  // componentDidMount() {
  //   this.props.requestUsers();
  // }
  updateInfo() {
    return event => this.setState({
      searchName: event.target.value
    })
  }


  matches() {
    const matches = [];
    this.props.users.forEach(user => {
      let sub = user.username.slice(0, this.state.searchName.length);
      if (sub.toLowerCase() === this.state.searchName.toLowerCase() && user.username !== 'Guest') {
        matches.push({username: user.username, id: user.id});
      }
    });
    return matches;
  }

  selectName(event) {
    event.preventDefault()
    console.log({friender_id: this.props.currentUser, friendee_id: event.target.key, status: 'active'});
    return (event) => this.props.befriend({friender_id: this.props.currentUser, friender_id: event.target.key, status: 'active'})
  }




  render() {
      let results = this.matches().map((result) => {
    return (
      <li key={result.id} onClick={this.selectName(event)}>
        <i color='white' className="fas fa-plus"></i>
        &nbsp;&nbsp;{result.username}</li>
    );
  });

    return (
      <form>
        <input value={this.state.searchName}
          placeholder='Search'
          onChange={this.updateInfo()}></input>
        <ul className='friend-search-list'>
          {results}
        </ul>

      </form>
    )
  }
}

export default FriendsSearch;



// <ul className='friends-search-list'>
//   {this.props.users.map(user => <li key={Date()}>{user.username}</li>)}
// </ul>
