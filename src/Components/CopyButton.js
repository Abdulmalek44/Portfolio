import React from 'react';

const CopyButton = (props) => {
    const handleCopy = () => {
        const textToCopy = 'Abdulmalek.alaktaa22@gmail.com';
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard!');
                alert('Email address copied to clipboard!')
            })
            .catch((error) => {
                console.error('Failed to copy text:', error);
            });
    };

    return (
        <button onClick={handleCopy} className='flex justify-between items-center w-full' >
            {props.children}
        </button>
    );
};

export default CopyButton;