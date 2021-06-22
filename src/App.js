import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  //fetching the posts from the API and storing them in the state
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8'
      );
      setPosts(response.data.news);
      console.log(response);
    };
    fetchData();

    // const intervalTwo = setInterval(() => {
    //   setCurrentPage(currentPage + 1);
    //   if (currentPage > 3) {
    //     setCurrentPage(1);
    //   }
    // }, 3000);
    //refetching the data every 3 minutes;
    const interval = setInterval(() => {
      fetchData();
    }, 180000);
    return () => clearInterval(interval);
  }, [currentPage]);

  //render only the first 5 posts for the first page;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  //paginate function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // setInterval(() => {
  //   console.log(`current page is ${currentPage}`);
  //   setCurrentPage(currentPage + 1);
  // }, 3000);

  return (
    <div className="App">
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Posts posts={currentPosts} />
    </div>
  );
}

export default App;
