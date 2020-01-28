import React, { useState } from 'react'

import {
    InputGroupContainer,
    LabelContainer,
    BoxContainer
} from './checked-radiorow.styles'



const CheckRadioRow = ({props}) => {
    return (
        <InputGroupContainer>
            <LabelContainer htmlFor='radcheck'>RadCheck</LabelContainer>
            <BoxContainer id='radcheck' type='checkbox' checked={true}/>
        </InputGroupContainer>
    )
};

export default CheckRadioRow;