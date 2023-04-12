import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='question-container lg:px-80'>
        <div className='question'>
            <h3>1. When should you use contextAPI? </h3>
            <p>Ans: The difference between Props and state is that, The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
        </div>
        <div className='question'>
            <h3>2. What is custom Hook? </h3>
            <p>Ans: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
        </div>
        <div className='question'>
            <h3>3. what is useRef, useMemo? </h3>
            <p>Ans: The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers.</p>
        </div>
      

    </div>
    );
};

export default Blog;