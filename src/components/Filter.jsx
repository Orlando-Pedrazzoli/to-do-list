const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className='filter'>
      <h2>Filter</h2>
      <div className='filter-options'>
        <p>Status:</p>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value='All'>All</option>
          <option value='Completed'>Complete</option>
          <option value='Incomplete'>Incomplete</option>
        </select>
      </div>
      <div>
        <p>Alphabetical order</p>
        <button onClick={() => setSort('Asc')}>Asc</button>
        <button onClick={() => setSort('Desc')}>Desc</button>
      </div>
    </div>
  );
};

export default Filter;
