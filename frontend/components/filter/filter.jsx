import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(pros);

    this.state({
      checked: false
    });

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    this.setState({
      check: !this.state.checked
    });
  }

  render() {
    // const {type, cities, animals} = this.props;
    // let list;
    // if (type === "animal") {
    //   list = cafe.animals.map(animal => 
    //     <
    //   ); 
    // } else if (type === "city") {
    //   list = cafe.cities.map(city => ) 
    // }

    return(

      <div>
        <section>
          <button
            onClick={() => this.handleClick()}
          >

          </button>
        </section>

      </div>


    )
  }


}

export default Filter;