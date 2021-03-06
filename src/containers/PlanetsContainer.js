import React, {Component} from 'react'
import {connect} from 'react-redux'
import Planets from '../components/Planets'
import { getResourceRequest } from '../actions.js'
import { withRouter } from 'react-router-dom'


class PlanetsContainer extends Component {

  componentDidMount(){
    let resource = "planets"
    //console.log('plaents contaer compoent did mount')
    this.props.getResourceRequest(resource)
    //this.props.resetIsfetching()
  }
  //
  // componentDidUpdate(){
  //   console.log('componet did update called in planets')
  //   let resource = "planets"
  //   //this.props.resetIsfetching()
  //   //this.props.getResourceRequest(resource)
  // }

  render(){
    const {planets, isFetching} = this.props
    //if (fetchedResource === 'planets'){
      return(
        <Planets planets={planets} isFetching={isFetching} />
      )

    // } else {
    //   return <h1> hey im working </h1>
    // }
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    planets: state.getPlanets.planets,
    isFetching: state.getPlanets.isFetching,
    //: state
    // planets: state.planets,
    // isFetching: state.isFetching,
    // fetchedResource: state.fetchedResource
  }
}
const mapDispatchToProps = (dispatch) => {
  //console.log('im in mapdispath')
  return {
    getResourceRequest: (resource) => {
      dispatch(getResourceRequest(resource))
        //.then(dispatch(resetIsfetching())
    }, //,


   //  resetIsfetching: () => {
   //      dispatch(resetIsfetching())
   // }
 }
}

//
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsContainer))

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PlanetsContainer)
