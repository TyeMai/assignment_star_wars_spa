import React, {Component} from 'react'
import {connect} from 'react-redux'
import Planets from '../components/Planets'
import { getResourceRequest, resetIsfetching } from '../actions.js'
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
    return(
      <Planets planets={planets} isFetching={isFetching} />
    )
    //this.props.resetIsfetching()
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    planets: state.getPlanets.planets,
    isFetching: state.getPlanets.isFetching,
    //: state
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
// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PlanetsContainer))
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsContainer)
