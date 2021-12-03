import React, {useEffect, useState} from 'react'

import {billLookup} from '../lookup/components'

export function BillsView(props) {
    const [bills, setBills] = useState([])
    const [didSet, setDidSet] = useState(false)
    useEffect(() =>{
        if (didSet === false){
            const handleBillLookup = (response, status) => {
                if(status === 200){
                    setBills(response.results)
                    setDidSet(true)
                }
            }
            billLookup('GET', handleBillLookup)
        }},)
    
    
//     const content = bills.map((item, index)=>
//         <li key={index}> {item} </li>
//     )

    return <Blog posts={bills} />
}

function Blog(props) {
    const sidebar = (
      <div>
        {props.posts.map((post) =>
          <p key={post.id} className='my-5 py-5 border bg-white text-dark'>
            {post.title}
          </p>
        )}
      </div>
    );
    return (
      <div>
        {sidebar}
      </div>
    );
  }
  
//   const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];
//   ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('apc-web-bill')
//   );