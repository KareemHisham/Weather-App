import React from 'react'

const ListItem = ({weather}) => {
        return (
            <React.Fragment>
                <ul className='list-unstyled text-capitalize mt-5 pb-5 text-center'>
                    {
                        weather.tempreture && <li>tempreture : {weather.tempreture}</li>
                    }
                    {
                        weather.city && <li>city : {weather.city}</li>
                    }
                    {
                        weather.country && <li>country : {weather.country}</li>
                    }
                    {
                        weather.humidity && <li>humidity : {weather.humidity}</li>
                    }
                    {
                        weather.description && <li>description : {weather.description}</li>
                    }
                    {
                        weather.error && <li><div className="alert alert-danger text-center" role="alert">
                        error : {weather.error}</div></li>
                    }
                </ul>
            </React.Fragment>
        )
    }
export default ListItem