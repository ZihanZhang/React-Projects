import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {
  // state = {isSignedIn: null}

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '651673344585-pn55hhrn4ret44pgo67jtpnu09rkk9s4.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'streamy'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        // this.setState({isSignedIn: this.auth.isSignedIn.get()})
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    // this.setState({isSignedIn: this.auth.isSignedIn.get()})
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    }
    else {
      this.props.signOut()
    }
  }

  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      {/*return <div>I don't know if we are signed in</div>*/}
      return null
    }
    else if (this.props.isSignedIn) {
      {/*return <div>I am signed in!</div>*/}
      return (
        <button className="ui red google button"><i className="google icon" onClick={this.onSignOut}/>Sign Out</button>
      )
    }
    else {
      {/*return <div>I am not signed in</div>*/}
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign In
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)