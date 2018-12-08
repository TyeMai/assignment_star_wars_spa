import React, {Component} from 'react'
import {connect} from 'react-redux'
import People from '../components/People'
import { getResourceRequest } from '../actions.js'
//import


class PeopleContainer extends Component {

  componentDidMount(){
    let resource = "people"
    this.props.getResourceRequest(resource)
  }

  render(){
    const {people, isFetching} = this.props
    return(
      <People people={people} isFetching={isFetching} />
    )
  }

}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    people: state.people,
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
)(PeopleContainer)
