import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitles] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      Navigate('/');
    });
  };
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>

        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitles(e.target.value)}
        />

        <label>Blog Body:</label>

        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Author</label>

        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='Mario'>Mario</option>
          <option value='Yoshi'>Yoshi</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;