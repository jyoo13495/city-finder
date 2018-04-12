import React from 'react';
import axios from 'axios';

class Results extends React.Component{
  constructor(props){
    super(props)
  }



  addHoverClass(e) {
        
  }
  render(){
    
    if (this.props.cities.length > 0){
      let randomizedCities = this.props.cities.slice()
      console.log('rcities is...', randomizedCities)
      console.log('thispropscities is...', this.props.cities)
      randomizedCities = randomizedCities.sort(function(){
        return .5-(Math.random())
      })
      return (
        <div className='cities' onClick={this.props.showFaves ? this.delete : this.save}>
            {randomizedCities.map((city, idx) => {
            let style = {
              backgroundImage: 'url(' + city.image_url + ')',
              width: "300px",
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }
            return (
              <div key={city._id} className="cityPanel" value={city} style={style}>
                <div className="container">
                  <div className="overlay">
                    <div>Population: {city.population}</div>
                    <div>rent/month: ${city.rent}</div>
                  </div> 
                  {/* <div className="info column is-one-third"> */}
                  <div className="info">
                    <h3>{city.city_name_short}, {city.state}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div>No cities match your search. Please select fewer filters.</div>
      )
    }
  }
}

export default Results;