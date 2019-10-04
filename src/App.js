import React, {Component} from 'react';
import Form from './Components/Form/Form'
import ListItem from './Components/ListItem/ListItem'

import './App.scss';

class App extends Component {
  state = {
    courses :[
      {name: 'HTML5'},
      {name: 'CSS3'},
      {name: 'react'}
    ],
    current: ''
  }

  // Functions

  handleChange = (e) => {

    this.setState({
      current: e.target.value
    })
    
  } 

  handleDelete = (index) => {
    const {courses} = this.state;
    courses.splice(index , 1)
    this.setState({
      courses
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {courses, current} = this.state;
    courses.push({name: current})
    this.setState({
      courses,
      current: ''
    })
  }

  handleUpdate = (index, value) => {
    const {courses} = this.state;
    const course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })

  }

  render() {
    
    const {courses, current} = this.state;
    const Length = this.state.courses.length
    const AllCourses = Length ? (
      courses.map( (course, index) => {
        return <ListItem  key={index}
                          index={index}
                          course={course}
                          deleteItem={this.handleDelete}
                          update={this.handleUpdate}
                />
      })
    ) : (
        <div className="alert alert-danger mt-3" role="alert">
          There's no items to show
        </div>
    )

    return(
      <div className='container main'>
        <h1 className='pt-5 text-center'>Add Courses App</h1>
        <Form change={this.handleChange}
              submit={this.handleSubmit}
              current={current}
        />
        <ul>{AllCourses}</ul>
      </div>
    )
  }
}

export default App;
