import React from 'react'
import { Btn } from './Pagination.styled'


export const Pagination = ({ previousBtn, nextBtn }) => {
    return (
        <div>
            <Btn onClick={previousBtn}>previous</Btn>

            <Btn onClick={nextBtn}>next</Btn>
        </div>
    )

}
