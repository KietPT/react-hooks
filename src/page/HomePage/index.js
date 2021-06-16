import './HomePage.scss';
import ColorBox from '../../component/ColorBox/ColorBox';
import TodoList from '../../component/TodoList/TodoList';
import Form from '../../component/Form/Form';
import PostList from '../../component/PostList/PostList';
import Pagination from '../../component/Pagination';
import PostFilterForm from '../../component/PostFilterForm';
import Clock from '../../component/Clock';
import { useEffect, useState } from 'react';
import queryString from 'query-string'
import MagicBox from '../../component/MagicBox'

const todoList = [
  {
    id: 1,
    name: 'học bài'
  },
  {
    id: 2,
    name: 'chơi game'
  },
  {
    id: 3,
    name: 'câu cá'
  }
]

function HomePage() {

  const [list, setTodo] = useState(todoList);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [postList, setPostList] = useState([]);
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  const [isShowed, setisShowed] = useState(true);
  useEffect(() => {
    async function getPostList() {
      
      try {
        const paramString = queryString.stringify(filters)
        console.log(paramString)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const { data, pagination } = responseJson
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log(error)
      }
    }
    getPostList()

    return () => {
    };
  }, [filters]); // chỉ chay đúng 1 lần khi component un mount


  const handlePageChages = newPage => {
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  const handleFormSubmit = (value) => {

    const newValues = {
      id: 5,
      name: value
    }
    const newTodoList = [...list]
    newTodoList.push(newValues)
    setTodo(newTodoList)
  }

  const handleClick = (id) => {

    const index = list.findIndex(x => x.id === id);
    if (index < 0) {
      return
    }
    const newTodoList = [...list]
    newTodoList.splice(index, 1)
    setTodo(newTodoList)
  }

  const handleChange = (newFilters) => {
    console.log(newFilters)
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchItem,
    })
  }

  const setShowClock = status => {
    setisShowed(!status)
  }

  return (
    <div className="App">
      <ColorBox />
      ---------------------
      <Form onSubmit={handleFormSubmit} />
      <TodoList todoList={list} onDelete={handleClick}/>
      ------------------------
      <PostFilterForm onSubmit={handleChange}/>
      <PostList postList={postList} />
      <Pagination onChangePage={handlePageChages} pagination={pagination}/>
      ---------------------
      <button type="submit" onClick={() => setShowClock(isShowed)}>{isShowed ? 'Close' : 'Show'}</button>
      {isShowed && <Clock/> }
      ------------------
      <MagicBox/>
    </div>
  );
}



export default HomePage;
