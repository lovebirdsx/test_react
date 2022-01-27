function GuestGreeting(props) {
  return (
    <div>
      <h2>Welcome Guest: {props.who}</h2>
    </div>
  );
}

function UserGreeting(props) {
  return (
    <div>
      <h2>Welcome User: {props.who}</h2>
    </div>
  );
}

function Greeting(props) {
  if (props.user.isGuest) {
    return <GuestGreeting who={props.user.name}/>
  } else {
    return <UserGreeting who={props.user.name}/>
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(
  <Greeting user={{name:'lovebird', isGuest: true}}/>,
  document.getElementById('condition_render')
);