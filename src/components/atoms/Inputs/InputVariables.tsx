import React from "react";
import { InputContainer, InputSelect, InputWrapper } from "./styles";

interface InputVariablesProps {
    title: string;
    handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
}

export interface Option {
    label: string,
    value: number | string
}

export const InputVariables = ({ title, options, handleChange}: InputVariablesProps) => {

    return (
        <InputContainer>
            <InputWrapper>
                <InputSelect onChange={handleChange}>
                    <option value="" disabled selected>
                        {title}
                    </option>
                    {options.map((item) => (<option key={item.value} value={item.value}>{item.label}</option>))}

                </InputSelect>
            </InputWrapper>
        </InputContainer>
    );
};
