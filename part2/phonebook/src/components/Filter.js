import React from 'react'
import Input from './Input'

const Filter = ({newQuery, queryHandler}) => {
    return(
    <div>
         <Input index={'filter shown with'} value={newQuery} setValue={queryHandler}/>  
    </div>
    )
}

export default Filter