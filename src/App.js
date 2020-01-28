import React, { useState } from 'react'
import './App.css';

// import CustomInput from './components/inputs/custom-input.component'
// import CustomSelect from './components/selects/custom-select.component'
// import CustomButton from './components/buttons/custom-button.component'
// import CustomCheckbox from './components/checkeds/custom-checked.component'
// import Example from './components/accordions/accordion.component'
import CheckRadioRow from './components/checked-radiorow/checked-radiorow.component'
import CheckRadioCol from './components/checked-radiocol/checked-radiocol.component'

const App = () =>{
//   const Options = ['yes', 'no', 'maybe'];

//   const foods = ['rice', 'chicken', 'cheese', 'avocado', 'cotton candy', 'tilapia'];
//   const [selectedFoods, setSelectedFoods] = useState(['rice'])

//  const handleFoodCheckBox = e => {
//     console.log(e.currentTarget)
//  }

  const [going, setGoing] = useState('true')

  const handleClick = e => {
    console.log(e.currentTarget)
  }

  return (
    <div className="App-wrapper">

        Hello
        <div>
          <div>
            <CheckRadioRow 
              type='radio'
              checked={going}
              label='MeAugustMe'
              onClick={e=>handleClick}
              name='boo'
            />
            <CheckRadioRow 
              type='radio'
              checked={going}
              label='MeAugustMe'
              onClick={e=>handleClick}
              name='boo'
            />

            <CheckRadioRow 
              type='radio'
              checked={going}
              label='MeAugustMe'
              onClick={e=>handleClick}
              name='boo'
            />
          </div>
          <div>
            <CheckRadioCol 
              type='checkbox'
              checked={going} 
              label='BroBallingThough'
              onClick={e=>handleClick}
            />
            <CheckRadioCol 
              type='checkbox'
              checked={going} 
              label='BroBallingThough'
              onClick={e=>handleClick}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
