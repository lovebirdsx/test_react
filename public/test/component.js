function Welcome(props) {
  return `Hello, ${props.name}`;
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.src}
      alt={props.alt}
    />
  );
}

function User(props) {
  return (
    <div className="UserInfo">
      <Avatar src={props.author.avatarUrl} alt={props.author.name}/>
      <div className="UserInfo-name">
        {props.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <User author = {props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.data}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div>
        <li><Welcome name='foo'/></li>
        <li><Welcome name='bar'/></li>
        <li><Welcome name='car'/></li>
      </div>
      <div>
        <Comment
          author={{avatarUrl:'./user.ico', name:'name'}}
          text='text'
          data={new Date().toLocaleDateString()}
        />
      </div>
    </div>
  );
}

const element = <App/>;
// eslint-disable-next-line no-undef
ReactDOM.render(element, document.getElementById('component'));
