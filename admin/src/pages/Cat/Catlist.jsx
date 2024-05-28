import React, { useEffect, useState } from "react";
import "./Catlist.css";
import { url } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/cat/listCat`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (catId) => {
    const response = await axios.post(`${url}/api/cat/removeCat`, {
      id: catId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="catlist-table-format title">
          <b>Image</b>
          <b>Name</b>

          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="catlist-table-format">
              <img src={`${url}/images/` + item.menu_image} alt="" />
              <p>{item.menu_name}</p>

              <button
                small
                onClick={() => removeFood(item._id)}
                className="button">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
