import React from 'react';
function wrapEvent(WrappedComponent, data) {
    return class extends React.Component {
        componentDidMount() {
            window.addEventListener('click', () => alert('haha'));
        }
        render() {
            return <WrappedComponent />;
        }
    }
}
export {wrapEvent}