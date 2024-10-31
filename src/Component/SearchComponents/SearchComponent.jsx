import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchUserCard from './SearchUserCard'; // Import component hiển thị người dùng tìm kiếm
import { debounce } from 'lodash'; // Cài đặt lodash để sử dụng debounce
import { searchUserAction } from '../../Redux/User/Action';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user } = useSelector((store) => store);
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      return; // Ngăn không gọi API nếu ô tìm kiếm rỗng
    }

    // Gọi hàm tìm kiếm với debounce
    debouncedSearch(query);
  };

  // Sử dụng debounce để giảm số lần gọi hàm tìm kiếm
  const debouncedSearch = debounce((query) => {
    dispatch(searchUserAction({ jwt: token, query }));
  }, 300); // 300ms delay

  return (
    <div className='search-container'>
      <div className='px-3 pb-5'>
        <h1 className='text-xl pb-5'>Search</h1>
        <input 
          onChange={handleSearch} 
          className='searchInput' 
          type="text" 
          placeholder='Search...' 
          value={searchQuery} // Đảm bảo ô tìm kiếm có giá trị
        />
      </div>
      <hr />
      <div className='px-3 pt-5'>
        {user.searchUser && user.searchUser.length > 0 ? (
          user.searchUser.map((item) => (
            <SearchUserCard key={item.id} user={item} /> // Thêm key
          ))
        ) : (
          <p className="text-center">No users found</p> // Thông báo nếu không có người dùng nào
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
