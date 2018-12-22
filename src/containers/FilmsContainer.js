import React, {Component} from 'react'
import {connect} from 'react-redux'
import Films from '../components/Films'
import Button from '../components/Button'
import { getResourceRequest, pageUp, pageDown } from '../actions.js'
import { withRouter, Link} from 'react-router-dom'
//import serachHelper from '../components/helpers/searchHelper'



class FilmsContainer extends Component {

  componentDidMount(){
    let resource = "films"
    //console.log('files conaer did mount')
    this.props.getResourceRequest(resource)
    //this.props.resetIsfetching()
  }


  render(){
    const {films, isFetching, page, bkPage, fwdPage} = this.props
  //  if (fetchedResource === 'films'){
  //console.log(films, "films passgd from satet")
  //console.log(ownProps)
  if(!isFetching){
    //console.log(page, "im the page")
    //console.log(films, 'im the films')
    let filmPageStart = page - 1
    //console.log(filmPageStart)
    let filmOnPage = films.slice(filmPageStart, page)
    //console.log(filmOnPage)
    return (
      <div>
        <Films films={filmOnPage} isFetching={isFetching} />
        {/* <Button btnName='Back' onClick={bkPage}/>
        <Button btnName='Forward' onClick={fwdPage}/> */}
        <Link to={{pathname: '/films', search: `page=${page}`}}>
          Forward
        </Link>
        <Link to={`/films/${page - 1}`}>
          Back
        </Link>
      </div>
    )
  } else {
    return <Films films={films} isFetching={isFetching} />
  }



    // } else {
    //       return <h1> hey im working </h1>
    // }

    //this.props.resetIsfetching()
    //resetIsfetching()
    //console.log(isFetching)
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log( ownProps)
  return {
    films: state.getFilms.films,
    isFetching: state.getFilms.isFetching,
    //page: state.pageControl.filmsPage,
    searchedFilms: state.getFilms.searchResult,
    page: ownProps.page

    // films: state.films,
    // isFetching: state.isFetching,
    // fetchedResource: state.fetchedResource
  }
}
const mapDispatchToProps = (dispatch) => {
  //console.log('im in mapdispath')
  return {
    getResourceRequest: (resource) => {
      dispatch(getResourceRequest(resource))
    },

    fwdPage: () => {
      dispatch(pageUp())
    },

    bkPage: () => {
      dispatch(pageDown())
    },
    onSearchSubmit: (resource) => {
      dispatch(getResourceRequest(resource))
    }
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

//need to get props that were passed into it.
