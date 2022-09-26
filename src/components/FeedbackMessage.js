import feedbackMsgImg from '../FeedbackMsgImg.png';

function FeedbackMessage() {
  return (
    <div>
      <h2>Oops! There is no more content to show.</h2>
      <img style={{ width: '400px' }} src={feedbackMsgImg}></img>
    </div>
  );
}

export default FeedbackMessage;
