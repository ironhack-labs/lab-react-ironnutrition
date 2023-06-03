import Image from './Image';
import Message from './Message';

function Foods(props) {
  return (
    <div className="tweet">
      <Image image={props.food.user.image} />

      <Message message={props.food.message} />
    </div>
  );
}

export default Foods;
