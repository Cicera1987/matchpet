import React from 'react';

interface ButtonProps {
    Bcolor: string;
    title: string;
    onClick?: () => void;
}

const ButtonRules: React.FC<ButtonProps> = ({ Bcolor, title, onClick }) => {
    const buttonStyle = {
        width: '120px',
        height: '40px',
        backgroundColor: Bcolor,
        color: 'red',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '25px',
        border: 'none',
    
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {title}
        </button>
    );
};

export default ButtonRules;
