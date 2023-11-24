import * as React from 'react';

const EmailTemplate = ({ item, name, number, email }) => (
    <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>email: {email}</p>
        <p>{item}</p>
    </div>
)

export default EmailTemplate