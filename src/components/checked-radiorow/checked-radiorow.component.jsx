import React, { useState } from 'react'

import {
    InputGroupContainer,
    LabelContainer,
    BoxContainer
} from './checked-radiorow.styles'



const CheckRadioRow = (props) => {

    return (
        <InputGroupContainer >
            <LabelContainer htmlFor={`${props.label}`}>{props.label}</LabelContainer>
            <BoxContainer id={props.id} name={`${props.label}`} type={props.type} onClick/>
        </InputGroupContainer>
    )
};

export default CheckRadioRow;