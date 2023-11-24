import React, { useState } from "react";
import Pagination from "./components/Pagination";
import "./App.css";
function App() {
  const [posts, setPosts] = useState([
    {id:1,name:"Abdulaziz",status:"Middle1"},
    {id:2,name:"Abdulaziz2",status:"Middle2"},
    {id:3,name:"Abdulaziz3",status:"Middle3"},
    {id:4,name:"Abdulaziz4",status:"Middle4"},
    {id:5,name:"Abdulaziz5",status:"Middle5"},
    {id:6,name:"Abdulaziz6",status:"Middle6"},
    {id:7,name:"Abdulaziz7",status:"Middle7"},
    {id:8,name:"Abdulaziz8",status:"Middle8"},
    {id:9,name:"Abdulaziz9",status:"Middle9"},
  ]);
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="App">
      <div className="container py-4">
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-3 mb-3" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5>
                    #{post.id} {post.name}
                  </h5>
                  <p>{post.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}

export default App;
