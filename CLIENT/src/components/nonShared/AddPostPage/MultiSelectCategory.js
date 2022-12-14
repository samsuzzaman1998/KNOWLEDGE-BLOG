import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";

const MultiSelectCategory = ({ setSelectedCategorires }) => {
    const [categoryList, setCategoryList] = useState([]);

    // fetching category data
    const fetchCategories = async () => {
        const token = localStorage.getItem("access-token");
        const config = {
            headers: { authorization: `Bearer ${token}` },
        };
        try {
            const response = await axios.get(
                "http://localhost:2000/api/v1/blog/get-category",
                config
            );
            if (response?.data?.status) {
                setCategoryList(response.data.result);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    const handleTagsRemove = (list) => {
        let temp = [];
        if (list.length) {
            for (let i = 0; i < list.length; i++) {
                const { categoryName } = list[i];
                temp.push(categoryName);
            }
        }
        setSelectedCategorires(temp);
    };

    const handleTagsSelect = (list) => {
        let temp = [];
        if (list.length) {
            for (let i = 0; i < list.length; i++) {
                const { categoryName } = list[i];
                temp.push(categoryName);
            }
        }
        setSelectedCategorires(temp);
    };
    return (
        <>
            <Multiselect
                id="addPostTagDropdown"
                displayValue="categoryName"
                onKeyPressFn={function noRefCheck() {}}
                onRemove={handleTagsRemove}
                onSelect={handleTagsSelect}
                onSearch={function noRefCheck() {}}
                options={categoryList}
                showArrow={true}
                showCheckbox
            />
        </>
    );
};

export default MultiSelectCategory;
