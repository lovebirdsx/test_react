const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) => {
  return <li key={number}>{number}</li>;
});

// eslint-disable-next-line no-undef
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('list'));
