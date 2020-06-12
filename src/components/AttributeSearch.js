import React, {useState} from 'react';

const AttributeSearch = (props) => {
    let [attribute, setAttribute] = useState('');
    let [value, setValue] = useState('');

    let handleAttributeSubmit = (event) => {
        attribute = attribute.toLowerCase();
        event.preventDefault();
        props.onSubmitAttribute(attribute);
        setAttribute('');
    }

    let handleValueSubmit = async (event) => {
        value = value.toLowerCase();
        event.preventDefault();
        props.onSubmitValue(value);
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