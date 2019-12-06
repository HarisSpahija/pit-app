import React from 'react'
import {
  useParams
} from 'react-router-dom'

export const NavigatePage = (props) => {    
    const { id } = useParams();
    
    return (
        <div>
            {id}
        </div>
    )
}

export default NavigatePage;
