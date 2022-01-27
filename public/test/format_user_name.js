function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Love',
  lastName: 'bird'
};


// eslint-disable-next-line no-unused-vars
const element = (
  <h2>Hello, {formatName(user)}!</h2>
);

// element2 和 element效果类似
// eslint-disable-next-line no-undef
const element2 = React.createElement(
  'h2',
  {className: 'format'},
  `Hello2, ${formatName(user)}`
)

// eslint-disable-next-line no-undef
ReactDOM.render(
  element2,
  document.getElementById('format_user_name')
);
