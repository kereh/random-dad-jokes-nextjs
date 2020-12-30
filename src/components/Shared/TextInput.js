import React, { Fragment } from 'react';

export default function TextInput({value, onChange, placeHolder}) {
    return (
        <Fragment>
            <input
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                placeholder={placeHolder} 
            />
        </Fragment>
    );
}
