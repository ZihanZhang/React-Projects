import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';
import Test from './test'

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//     )

//   return <div>Latitude: </div>;
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {lat: null, errorMessage: ''}
  // }

  state = {lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({lat: position.coords.latitude})},
      (err) => {this.setState({errorMessage: err.message})}
    )
  }

  renderContent() {
    // return( 
    // <div>
    //   Latitude: {this.state.lat}
    //   <br />
    //   Error: {this.state.errorMessage}
    // </div>
    // )
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      {/*return <div>Latitude: {this.state.lat}</div>*/}
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Spinner message="Please accept location request" />
    // return <Spinner />

  }


  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
      )
    // return (
    //   <Test>
    //     <div>
    //       Test1
    //       <div>
    //         Test2
    //       </div>
    //     </div>
    //   </Test>
    //   )
  }
}

ReactDOM.render(
  <App />, document.querySelector('#root')
  )