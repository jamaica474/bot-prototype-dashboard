import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { AccelerationCollection } from '../api/index';

export class Acceleration extends Component {
    renderData(data) {
        return data.map((elem) => (
            <div key={elem._id} >{elem.text}</div>
        ));
    }

    render() {
        return (
            <div className="acceleration">
                <h1>Acceleration</h1>
                {this.renderData(this.props.data)}
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        data: AccelerationCollection.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(Acceleration);

