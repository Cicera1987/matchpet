import React from 'react';

interface ButtonProps {
    color: string;
    title: string;
    width?: string;
    onClick?: () => void;
}

const ButtonModal: React.FC<ButtonProps> = ({ color, title, onClick, width, ...props }) => {
    const buttonStyle = {
        width: width || '120px',
        height: '40px',
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSise: '16px',
        fontWeight: 'bold',
        border: 'none',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {title}
        </button>
    );
};

export default ButtonModal;
