export const SortBy = ({ setSort, setOrder }) => {
  const handleClick = (sort) => {
    const [sortBy, order] = sort.split(" ");
    setSort(sortBy);
    setOrder(order);
  };

  return (
    <div>
      <label>
        <select
          className="sort_by"
          onChange={(event) => {
            handleClick(event.target.value);
          }}
        >
          <option value="">Sort By...</option>
          <option value="created_at ASC">Oldest</option>
          <option value="created_at DESC">Most Recent</option>
          <option value="comment_count ASC">Fewest Comments</option>
          <option value="comment_count DESC">Most Comment</option>
          <option value="votes ASC">Least Votes</option>
          <option value="votes DESC">Most Votes</option>
        </select>
      </label>
    </div>
  );
};
