import React from 'react';
import Input from '../Input/Input';
import FunctionButton from '../FunctionButton/FunctionButton';

export default class FoodBox extends React.Component {
    render() {
        return (
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{this.props.name}</strong> <br />
                            <small>{this.props.calories} Cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <Input type="number" idx={this._reactInternalFiber.key} value={this.props.quantity} function={this.props.function} min="1">Quantity</Input>
                        </div>
                        <div className="control">
                            <FunctionButton className={"button is-info"} function={() => this.props.buttonFunction(this.props)}>+</FunctionButton>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}