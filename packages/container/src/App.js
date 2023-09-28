import React from 'react';
import MarketingApp from './components/MarketingApp';

// NOTE
// In a use case exporting directly the react component would be easy right now 
// (in this case the marketing App in the marketing folder), but in the future
// If it was decided to use other framework different than React we would have a lot of problems, like update all the 
// files to make it work for the new library and the react part would not work because its unknown to this 
// new framework. So we use mount functions to export frameworks from another "apps" to the container to be displayed


export default () => {
    return <MarketingApp />;
};