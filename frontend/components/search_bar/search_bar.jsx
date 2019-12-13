import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  times() {
    const times = [];
    for (let i = 1; i < 4; i++) {
      times.push({
        name: "10:30 AM"
      });
    }
  }


  render() {
    // const { times } = this.props;
    // let timeLis = times.map(time => 
    //   <option value={time.name} key={time.id}>{time.name}</option>);
    return(
      <div className="search-bar">
        <header className="search-header">
          Find your animal for any occasion
        </header>
        <form className="searchForm">
          <input type="date" name="" id=""/>
          
{/*           
          <select id="time" onChange={this.update("")}>
            <option selected >somehow selects 7pm</option>
            {timeLis}
          </select> */}
        
        
        
        </form>
      </div>

    );
  }
}

export default SearchBar;