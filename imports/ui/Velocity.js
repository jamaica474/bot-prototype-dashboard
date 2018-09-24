import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { VelocityCollection } from "../api";

export class Velocity extends Component {
    renderData(data) {
        return data.map((elem) => (
            <div key={elem._id} >{elem.text}</div>
        ));
    }

    render() {
        return (
            <div className="velocity">
                <h1>Velocity</h1>
                {this.renderData(this.props.data)}
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        data: VelocityCollection.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(Velocity);
