import React from 'react';
const Blog = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-5xl mt-5
            mb-5'>Three Questions</h2>
            <section className="dark:bg-gray-800 dark:text-gray-100">

                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="w-full lg:w-1/3 mt-5"><img src='https://res.cloudinary.com/practicaldev/image/fetch/s--vtI2NHvd--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q0lj87mz6whntv2zbxdm.png' alt="" className='rounded-2xl h-60 w-full' /></div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <h2 className="text-3xl font-semibold leading-none">What is the purpose of react router?</h2>
                        <p className="mt-4 mb-8 text-sm">React Router isn't just about matching a url to a function or component: it's about building a full user interface that maps to the URL, so it might have more concepts in it than you're used to.
                            It is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. We'll go into detail on the three main jobs of React Router:
                            1. Subscribing and manipulating the history stack
                            2. Matching the URL to your routes
                            3. Rendering a nested UI from the route matches</p>
                    </div>
                </div>
            </section>
            <section className="dark:bg-gray-800 dark:text-gray-100">

                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="w-full  lg:w-1/3 mt-5"><img src='https://miro.medium.com/max/800/0*_54xAc93WGeIuRZZ.png' alt="" className='rounded-2xl h-60 w-full' /></div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <h2 className="text-3xl font-semibold leading-none">How does Context Api works?</h2>
                        <p className="mt-4 mb-8 text-sm">In a typical React application, data is passed top-down parent to child via props, but such usage can be cumbersome for certain types of props that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    </div>
                </div>
            </section>
            <section className="dark:bg-gray-800 dark:text-gray-100">

                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="w-full  lg:w-1/3 mt-5"><img src='https://blog.alexdevero.com/wp-content/uploads/2021/05/10-05-21-reacts-useref-hook-what-it-is-and-how-to-use-it-blog.jpg' alt="" className='rounded-2xl h-60 w-full' /></div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <h2 className="text-3xl font-semibold leading-none">How does useRef hook works?</h2>
                        <p className="mt-4 mb-8 text-sm">The useRef Hook allows you to persist values between renders.
                        It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook. useRef returns a mutable ref object whose .current property is initialized to the passed argument initialValue . The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;