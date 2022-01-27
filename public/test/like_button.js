// eslint-disable-next-line strict
'use strict';

// eslint-disable-next-line no-undef
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleClick = () => {
    this.setState({liked: true});
  }

  render() {
    if (this.state.liked) {
      return 'You liked this!';
    }

    return (
      <button onClick = {this.handleClick}>
        Like
      </button>
    );
  }
}

const containers = document.querySelectorAll('#like_button_container');
for (const container of containers) {
  // eslint-disable-next-line no-undef
  ReactDOM.render(<LikeButton/>, container);
}
