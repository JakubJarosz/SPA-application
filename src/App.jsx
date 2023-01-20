import {
  useGetItemsQuery,
  useGetAllItemsQuery
} from "./services/apiSlices"
import React, { useState, useEffect } from "react";
import { Input } from "components/Input/Input";
import { Items } from "components/Items/Items";
import { Pagination } from "components/Pagination/Pagination";
import { MainModal } from "components/MainModal/MainModal";
import { useNavigate } from "react-router-dom";


export const App = () => {
  const [page, setPage] = useState(JSON.parse(window.localStorage.getItem("page")));
  const [filter, setFilter] = useState(window.localStorage.getItem("filter"));
  const [modalIsOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  

  useEffect(() => {
    navigate(`?per_page=${page}&page=1`);
    navigate(`?per_page=${page}&page=1&id=${filter}`);
    window.localStorage.setItem('page', page);
    window.localStorage.setItem('filter', filter);
    console.log(window.localStorage.getItem("filter"))
  }, [page, filter])

  const { data, isSuccess, error } = useGetItemsQuery({ page: page, id: filter });
  const allItems = useGetAllItemsQuery();

  const previousBtn = () => {
    if (page > 1) {
      setPage(page - 1)
    } else {
      return
    }
  }

  const nextBtn = () => {
    if (page >= 1 && page < 3) {
      setPage(page + 1)
    } else {
      return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputNumber = form.elements.number.value;
    navigate(`?per_page=${page}&page=1&id=${inputNumber}`);
    window.localStorage.setItem('filter', inputNumber);
    setFilter(inputNumber)
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleReset = () => {
    setPage(1);
    window.localStorage.setItem('filter', '');
    setFilter("");
  }

  return (
    <div>
      <h1>Items</h1>
      <Input
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
     
      <Items
        isSuccess={isSuccess}
        filter={filter}
        data={data}
        openModal={openModal}
        errorData={error}
        errorAllData={allItems.error}
      />
      <Pagination
        previousBtn={previousBtn}
        nextBtn={nextBtn}
      />
      <MainModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
        allItems={allItems}
      />
    </div>
  );
};
