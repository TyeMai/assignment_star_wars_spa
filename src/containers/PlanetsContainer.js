import React, {Component} from 'react'
import {connect} from 'react-redux'
import Planets from '../components/Planets'
import { getResourceRequest } from '../actions.js'
//import


class PlanetsContainer extends Component {

  componentDidMount(){
    let resource = "planets"
    this.props.getResourceRequest(resource)
  }

  render(){
    const {planets, isFetching} = this.props
    return(
      <Planets planets={planets} isFetching={isFetching} />
    )
  }

}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    planets: state.planets,
    isFetching: state.isFetching,
    //magic: state
  }
}
const mapDispatchToProps = (dispatch) => {
  //console.log('im in mapdispath')
  return {
    getResourceRequest: (resource) => {
      dispatch(getResourceRequest(resource))
   }
 }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsContainer)
