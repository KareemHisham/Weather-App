import React, {Component} from 'react'

class ListItem extends Component {

    state = {
        isState : false
    }

    renderCourse = () => {
        const {course, deleteItem, index} = this.props;
        return (
            <li className='mb-3'>
                <span className='name text-capitalize'>{course.name}</span>
                <button className='delete btn btn-danger' onClick={()=>deleteItem(index)}>Delete</button>
                <button className='btn btn-success' onClick={this.togglestate}>Edit Course</button>
                
            </li>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.update(this.props.index, this.input.value )

        this.togglestate();
    }

    updateList = () => {
        return (
            <form onSubmit={this.handleSubmit} className='form-group edit-form'>
                <input type='text'
                className='form-control'
                ref={(v) => {this.input= v}}
                defaultValue={this.props.course.name}
            />
                <button className='btn btn-success update'>Update Course</button>
            </form>
            
        )
    }

    togglestate = () => {
        let  {isState} = this.state
        this.setState({
            isState : !isState
        })
    }




    // Main Render
    render() {
        let {isState} = this.state
        return (
            <React.Fragment>
                { isState ? this.updateList() : this.renderCourse()}
            </React.Fragment>
        )
    }
}

export default ListItem