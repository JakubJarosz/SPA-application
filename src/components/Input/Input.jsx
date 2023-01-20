import React from 'react'
import { Btn, Inp } from './Input.styled'

export const Input = ({ handleSubmit, handleReset }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Inp
                    type="number"
                    name="number"
                    min="1"
                    max="12"
                    title="Input may contain only number form 1 to 12"
                    required
                />
                <br />
                <Btn type="submit">Filter items</Btn>
            </form>
            <Btn onClick={handleReset}>Reset</Btn>
        </div>
     )
 
}

