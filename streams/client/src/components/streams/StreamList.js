import React from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'
import {Link} from 'react-router-dom'

// const StreamList = () => {
//   return <div>StreamList</div>
// }

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderList() {
    return this.props.streams.map(s => {
      return (
        <div className="item" key={s.id}>
          {this.renderAdmin(s)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/stream/${s.id}`} className="header">
              {s.title}
            </Link>
            <div className="description">{s.description}</div>
          </div>
        </div>

      )
    })
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          {/*<button className="ui button negative">Delete</button>*/}
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      )
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {streams: Object.values(state.streams), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)