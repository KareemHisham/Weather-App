import React from 'react';

const Form = ({handleSubmit}) => {
        return (
                <form   className='form-group main-form'
                        onSubmit={handleSubmit}
                >
                        <input  type='text'
                                placeholder='City'
                                id='city'
                                className='form-control'
                        />

                        <input type='text'
                                placeholder='Country'
                                id='country'
                                className='form-control' 
                        />
                        <button className='text-capitalize btn btn-primary d-block m-auto form-control'> get weather</button>
                </form>
        )
        }

export default Form