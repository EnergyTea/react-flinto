import React from 'react';

class Iproject extends React.Component {
    render() {
        const id = this.props.match.params.id;
        return <h2>id: {id}</h2>;
    }
}

export default Iproject;