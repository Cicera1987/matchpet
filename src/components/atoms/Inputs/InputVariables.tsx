import React from "react";
import { InputContainer, InputSelect, InputWrapper } from "./styles";

interface InputVariablesProps {
    title: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[] | number[];
}
export const options = [];
export const InputVariables: React.FC<InputVariablesProps> = ({ title, onChange, options }) => {
   
    return (
        <InputContainer>
            <InputWrapper>
                <InputSelect>
                    <option value="" disabled selected>
                        {title}
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </InputSelect>
            </InputWrapper>
        </InputContainer>
    );
};
