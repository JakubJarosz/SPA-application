import React from 'react'
import Modal from 'react-modal';
import { ListItem, ListLi } from './MainModal.styled';

export const MainModal = ({ modalIsOpen, closeModal, customStyles, allItems }) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Modal</h2>
                <ListItem>
                    {allItems.isSuccess && allItems.data.data.map(({ id, name, year, color }) =>
                        <ListLi color={color} key={id}>
                            {id}  {name} {year}
                        </ListLi>
                    )}
                </ListItem>
            </Modal>
        </div>
    )

}
