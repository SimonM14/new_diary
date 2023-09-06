import React, { useState } from "react";
import DateTimeDisplay from "./timenow";

const Profile = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      return;
    }
    const newEntry = {
      title,
      content,
      timestamp: new Date().toLocaleString(),
    };
    setEntries([...entries, newEntry]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="back2">
      <div className="timest">
        <DateTimeDisplay />
      </div>
      <h1>
        <i>Welcome ,let me know whats on your mind today</i>
      </h1>
      <br />
      <br />
      <div className="entriesform">
        <form className="entriesform" onSubmit={handleSubmit}>
          <br/>
          <label htmlFor="title">
            <b>
              <i>Title</i>
            </b>
          </label>
          <br />
          <input
            className="box1"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />

          <br />
          <br />

          <label htmlFor="content">
            <b>
              <i>Content</i>
            </b>
          </label>
          <br />
          <textarea
            className="box2"
            id="content"
            value={content}
            onChange={handleContentChange}
          />
          <br />
          <button type="submit" className="bttn">
            Add Entry
          </button>
        </form>
      </div>
      <div className="entriesbox">
        <h2>
          <i>My Entries:</i>
        </h2>

        {entries.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>
                <h3>{entry.title}</h3>
                <p>{entry.content}</p>
                <p>{entry.timestamp}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
