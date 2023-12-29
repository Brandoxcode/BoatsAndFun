import * as React from 'react';

const EmailTemplate = ({ item, name, number, email, memo }) => (
    <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>Email: {email}</p>
        <p>{item}</p>
        <p>Memo: {memo}</p>
    </div>
)

export default EmailTemplate