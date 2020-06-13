import React, {useState} from 'react';

const UseAttributeState = () => {
    let [attribute, setAttribute] = useState('');
    let [value, setValue] = useState('');
    let [submitError, setSubmitError] = useState(false);
    return {attribute, value, submitError, setAttribute, setSubmitError, setValue};
}

const AttributeSearch = (props) => {
    const {attribute, value, submitError, setAttribute, setSubmitError, setValue} = UseAttributeState();

    let handleAttributeSubmit = (event) => {
        const attributeName = attribute.toLowerCase();
        event.preventDefault();
        if (attributeName !== 'type' && attributeName !== 'weight' && attributeName !== 'move') {
            setSubmitError(true);
        }
        else {
            setSubmitError(false);
        }
        props.onSubmitAttribute(attributeName);
        setAttribute('');
    }

    let handleValueSubmit = async (event) => {
        const valueAmount = value.toLowerCase();
        event.preventDefault();
        props.onSubmitValue(valueAmount);
        setValue('');
    }
    
    return <div>
        Search for pokemon here!
        <form onSubmit = {handleAttributeSubmit}>
            <input
            type = "text"
            value = {attribute}
            onChange = {event => setAttribute(event.target.value)}
            placeholder = "Enter an attribute type"
            required
            />
            {
            submitError ?
                <div>Invalid attribute type! Please select amongst type, move, or weight!</div>
                :null
            }
            </form>
        <form onSubmit = {handleValueSubmit}>
            <input 
            type = "text"
            value = {value}
            onChange = {event => setValue(event.target.value)}
            placeholder = "Enter a value"
            required
            />
        </form>
        <button onClick = {props.onClick}>Search for Pokemon</button>
    </div>
}
export default AttributeSearch;