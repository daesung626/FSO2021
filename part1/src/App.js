import * as React from 'react';

const list = [
  {
    title: 'React',
    author: 'Daesung Choi',
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    author: 'Apple Pie',
    points: 8,
    objectID: 1
  }
];


const App = () => (
  <div>
    <h1>Hello World</h1>

    <hr />

    <Search />

    <hr />

    <ul>
      {list.map((item) => {
        return <li key={item.objectID}>{item.title}</li>
      })}
    </ul>
  </div>
)

const List = () => (
  <ul>
    {list.map((item) => {
      return (
        <li key={item.objectID}>
          <span>
            <a>{item.author}</a>
          </span>
        </li>
      )
    })}
  </ul>
)


const Search = () => {

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  )
}


export default App;