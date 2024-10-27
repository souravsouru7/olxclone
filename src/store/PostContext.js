import React,{createContext,useState} from 'react'


export const PostContext = React.createContext({
    postDetails: null,
    setPostDetails: () => {},
  });

function Post({children}) {

    const [postDetails,setPostDetails] = useState(null);
    
return(
    <PostContext.Provider value={{ setPostDetails: () => {} }}>
        {children}
    </PostContext.Provider>

)
}


export default Post