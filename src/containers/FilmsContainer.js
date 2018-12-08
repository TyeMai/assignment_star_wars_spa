import React, {Component} from 'react'
import {connect} from 'react-redux'
import Films from '../components/Films'
import { getResourceRequest } from '../actions.js'
//import


class FilmsContainer extends Component {

  componentDidMount(){
    let resource = "films"
    this.props.getResourceRequest(resource)
  }

  render(){
    const {films, isFetching} = this.props
    return(
      <Films films={films} isFetching={isFetching} />
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    films: state.films,
    isFetching: state.isFetching,
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log('im in mapdispath')
  return {
    getResourceRequest: (resource) => {
      dispatch(getResourceRequest(resource))
   }
 }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsContainer)
