import React, {Component} from 'react'
import {connect} from 'react-redux'
import Films from '../components/Films'
import { getResourceRequest, resetIsfetching} from '../actions.js'
import { withRouter } from 'react-router-dom'


class FilmsContainer extends Component {

  componentDidMount(){
    let resource = "films"
    //console.log('files conaer did mount')
    this.props.getResourceRequest(resource)
    //this.props.resetIsfetching()
  }

  // componentDidUpdate(){
  //   console.log('componet did update in filsm')
  //   let resource = "films"
  //   //this.props.resetIsfetching()
  //   //this.props.getResourceRequest(resource)
  // }

  render(){
    const {films, isFetching, resetIsfetching} = this.props
    return(
      <Films films={films} isFetching={isFetching} />
    )
    //this.props.resetIsfetching()
    //resetIsfetching()
    //console.log(isFetching)
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    films: state.getFilms.films,
    isFetching: state.getFilms.isFetching,
  }
}
const mapDispatchToProps = (dispatch) => {
  //console.log('im in mapdispath')
  return {
    getResourceRequest: (resource) => {
      dispatch(getResourceRequest(resource))
    },
    // resetIsfetching: () => {
    //   dispatch(resetIsfetching())
    // }
   }

 }



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsContainer))

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FilmsContainer)
