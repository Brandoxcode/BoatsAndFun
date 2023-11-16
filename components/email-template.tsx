import * as React from 'react';

const EmailTemplate = ({ item, name, number }) => (
    <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>{item}</p>
    </div>
)

export default EmailTemplate