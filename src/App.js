import React, {Component} from 'react';

import Form from './Components/Form/Form';
import ListItem from './Components/ListItem/ListItem';

const key = "aee486591b99b00ee79a83728650a733";

class App extends Component {

  state = {
    tempreture: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // const city = e.target.elements.city.value; another way
    // const country = e.target.elements.country.value; another way
    const city = e.target.city.value,
          country = e.target.country.value,
          api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`),
          data = await api.json();

        if(city && country) {
          this.setState({
            tempreture: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
          })
        } else {
          this.setState({
            tempreture: '',
            city: '',
            country: '',
            humidity: '',
            description: '',
            error: 'Please enter a valid data'
          })
        }
  }
  render(){
    return(
      <div className='container main'>
        <h1 className='pt-5 mb-5 text-center'>Weather App</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <ListItem weather={this.state}/>
      </div>
    )
  } 

}

export default App;
