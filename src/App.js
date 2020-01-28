import React from 'react';
import './App.css';

// import CustomInput from './components/inputs/custom-input.component'
// import CustomSelect from './components/selects/custom-select.component'
// import CustomButton from './components/buttons/custom-button.component'
// import CustomCheckbox from './components/checkeds/custom-checked.component'
// import Example from './components/accordions/accordion.component'
import Accordion from './components/accordions/accordion.component'

function App() {
  // const Options = ['yes', 'no', 'maybe'];

  // const options = ['rice', 'chicken', 'cheese', 'avocado', 'cotton candy', 'tilapia'];


  return (
    <div className="App-wrapper">
        {/* <CustomInput
          label="Enter name"
          name="displayName"
          type="text"
          onChange
          placeholder="hello romane"
        />

        <CustomSelect 
            label={'Gender'}
            name={'gender'}
            options ={Options}
            value = {Options}
            placeholder = {'Select Gender'}
            onChange
        /> 


        <CustomButton inverted>
          My
          inverted
        </CustomButton>

        <CustomButton >
          My button
        </CustomButton>


        <CustomCheckbox
          label='August'
          name='augustName'
          onChange = {handleSkillsCheckBox}
          options={options}
          selectedOptions={'rice'}
          handleChange={handleSkillsCheckBox}
          type='radio'
        />

        <Example allowMultipleExpanded={true} allowZeroExpanded={true} /> */}

        <Accordion />

    </div>
  );
}

export default App;
