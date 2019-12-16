import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SearchBar from './search_bar';
import { fetchAllCafes } from '../../actions/cafe_actions'

const msp = state => {
  return {
    
  }
}

const mdp = dispatch => {
  return {
    fetchAllCafes: () => dispatch(fetchAllCafes())
  }
}

export default withRouter(connect(msp, mdp)(SearchBar));