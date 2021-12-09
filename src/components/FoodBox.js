import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
const FoodBox = (props) => {
  const name = props.name;
  const calories = props.calories;
  const image = props.image;
  const quantity = props.quantity;

  return (
    <>
        <div id="direct">
      <ListGroup>
        <ListGroup.Item>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img id="img" src={image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{name}</strong> <br />
                    <small>{calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={quantity} />
                  </div>
                  <div className="control">
                    <Button variant="primary" className="button is-info">
                      +
                    </Button>{' '}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </ListGroup.Item>
      </ListGroup>
      </div>
    </>
  );
};

export default FoodBox;