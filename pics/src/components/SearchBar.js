import React from 'react'

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

  state = { term: '' }

  render() {
    return (
    <div className="ui segment">
      <form className="ui form" onSubmit={e => {
        e.preventDefault();
        // console.log(this.state.term)}
        this.props.onSubmit(this.state.term)
      }}>
        <div className="field">
          <label>Image Search</label>
          <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
        </div>
      </form>
  </div>)
  }
}

export default SearchBar