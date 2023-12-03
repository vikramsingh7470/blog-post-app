import React, { createContext, useContext } from 'react'
import { useSelector } from 'react-redux'

const Context = createContext();

function Provider({ children }) {
    const blogs = useSelector(state => state);

    const blogFinder = (id) => {
        const currBlog = blogs.find(blog => blog.id === parseInt(id));
        if (currBlog) {
            return currBlog.like;
        } else {
            return null;
        }
    }

    const likeBlog = (id) => {
        const blog = blogs.find(like => like.id === parseInt(id));
        if (blog.like === 1) {
            blog.like = 0
        } else {
            blog.like = 1
        }
    }

    const value = {
        blogFinder,
        likeBlog
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export function LikeProvider() {
    return useContext(Context);
}

export default Provider;