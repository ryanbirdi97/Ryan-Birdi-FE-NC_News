export const SortBy = ({ setSort, setOrder }) => {
  const handleClick = (sort) => {
    const valueArr = sort.split(" ");
    setSort(valueArr[0]);
    setOrder(valueArr[1]);
  };

  return (
    <section className="sory-by">
      <div>
        <label>
          <select
            className="sort_by"
            onChange={(event) => {
              handleClick(event.target.value);
            }}
          >
            <option value="created_at DESC">Newest</option>
            <option value="created_at ASC">Oldest</option>
            <option value="comment_count DESC">Most Comments</option>
            <option value="comment_count ASC">Fewest Comments</option>
            <option value="votes DESC">Most Votes</option>
            <option value="votes ASC">Least Votes</option>
          </select>
        </label>
      </div>
    </section>
  );
};
