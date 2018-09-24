import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { FingerprintCollection } from '../api/index';

export class Fingerprint extends Component {
    renderData(data) {
        return data.map((elem) => (
            <div key={elem._id} >{elem.text}</div>
        ));
    }

    render() {
        return (
            <div className="fingerprint">
                <h1>Fingerprint</h1>
                {this.renderData(this.props.data)}
            </div>
        );
    }
}


export default withTracker(() => {
    return {
        data: FingerprintCollection.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(Fingerprint);
