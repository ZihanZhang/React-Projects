import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((s) => {
      return (
        <div className="item" key={s.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(s)}>
              Select
            </button>
          </div>
          <div className="content">{s.title}</div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui devided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return {songs: state.songs}
}

export default connect(mapStateToProps, {selectSong})(SongList)