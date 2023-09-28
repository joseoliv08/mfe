import {mount} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';

// The mount function is responsible for rendering the microfrontend inside a specified DOM element.

export default () => {
    // The use of useRef here is for a value to persists across renders, and changes to it don't trigger the component 
    // to re-render. This is useful for cases where you want a value to be preserved
    const ref = useRef(null);

    // it's used to call the mount function only one time and only when the component is mounted.
    // the ref.current value is the reference to the div element created by this component.
    // this ref will allows the mount function to attach the marketing app to the returned div
    useEffect(() => {
        mount(ref.current);
    })

    return <div ref={ref} />;
}