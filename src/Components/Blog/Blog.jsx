import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='question-container lg:px-80'>
        <div className='question'>
            <h3>1. When should you use context API? </h3>
            <p>Ans: Context API allows you to share data between components without having to pass the data through every level of the component tree manually. If i have to applied a function across multiple components then i can use Context API to manage the function data and update it as necessary.</p>
        </div>
        <div className='question'>
            <h3>2. What is custom Hook? </h3>
            <p>Ans: Custom hook is a function that uses one or more of the existing React hooks to provide additional functionality that can be reused across multiple components. Custom hook is a way to share logic between components.</p>
        </div>
        <div className='question'>
            <h3>3. what is useRef & useMemo? </h3>
            <p>Ans: useRef is a hook that returns a mutable ref object whose current property is initialized to the provided argument or undefined  <br />
                useMemo is a hook that memoizes the result of a function, caching its return value and returning it only when its dependencies have changed. </p>
        </div>
      

    </div>
    );
};

export default Blog;