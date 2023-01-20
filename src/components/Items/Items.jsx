import React from 'react'
import { ItemsList, ItemsUl } from './Items.styled';

export const Items = ({ isSuccess, filter, data, openModal, errorData, errorAllData }) => {
    return (
        <div>
            <ItemsUl>
                {(isSuccess && filter === "") && data.data.map(({ id, name, year, color }) =>
                    <ItemsList color={color} key={id} onClick={openModal}>
                        {id}  {name} {year}
                    </ItemsList>
                )}
                {errorData && 
                    <>
                    {errorData.status} {JSON.stringify(errorData.data)}
                    </>
                }
                {(isSuccess && filter !== "") &&
                    <ItemsList color={data.data.color} key={data.data.id} onClick={openModal}>
                        {data.data.id}  {data.data.name}  {data.data.year}
                    </ItemsList>
                }
                {errorAllData &&
                    <>
                        {errorAllData.status} {JSON.stringify(errorAllData.data)}
                    </>
                }
            </ItemsUl>
        </div>
    )

}
