import React from 'react';
import CafeIndexItem from './cafe_index_item';

class CafeIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCafes: []
    }
  }

  componentDidMount() {
    if (this.props.cafes.length === 0) {

      this.props.fetchAllCafes().then(cafes => 
        this.setState({
          allCafes: cafes
        })
      )
    } 
  }


  // this is probably temporary because no filter, I did it so I can refresh page
  // with all cafes rendering. 

  render() {

    if (this.props.cafes.length === 0) {
      
      const allCafeLis = this.state.allCafes.map(cafe =>
        <CafeIndexItem key={ cafe.id } cafe={cafe} />
        )
      return(
        <div>
          <div className="cafe-index container">
            {allCafeLis}
          </div>
          <h1>something went wrong, here are all the cafes</h1>
        </div>
      )
    } else {
      
      const cafeLis = this.props.cafes.map(cafe =>
        <CafeIndexItem key={ cafe.id } cafe={ cafe } />)
      return (
        <div className="cafe-index container">
          {cafeLis}
        </div>
      )
    }
  }
}

export default CafeIndex;