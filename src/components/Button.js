import React from 'react';
import PropTypes from 'prop-types';

// How to use:
// first import the button in your component: import Button from './components/Button';
// Then add the button in your jsx like this: <Button btnText="Click me!" btnClass="thisPage primaryBtn" btnFunction={this.clickHandler} />
// btnText is the visible text in the button
// btnClass can be a string of one or multiple classes
// btnFunction is an onClick function callback which is defined in your component

const Button = ({ btnText, btnClass, btnFunction }) => {
    console.log(typeof btnFunction);
    return (
        <button className={ btnClass } onClick={btnFunction}> { btnText } </button>
    )
}

Button.propTypes = {
    // the Button requires a clickHandler
    btnFunction: PropTypes.func.isRequired,
    // the Button requires text to show the function of the button
    btnText: PropTypes.string.isRequired,
    // the Button requires a class for the correct styling
    btnClass: PropTypes.string.isRequired
};

export default Button;