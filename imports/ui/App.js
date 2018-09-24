import React, { Component } from 'react';

import Fingerprint from './Fingerprint.js';
import Acceleration from './Acceleration.js';
import Velocity from './Velocity.js';

// App component - represents the whole app
export default class App extends Component {

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="container">
                <Fingerprint/>
                <Acceleration/>
                <Velocity/>
            </div>
        );
    }
}
