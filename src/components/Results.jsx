import React from 'react'

function Results({results}) {
    console.log(results)
  return (
    <div>{
        results.map((result)=>(
            <div key={result.id}>
                <h2>{result.original_title || result.original_name}</h2>
            </div>
        ))}
    </div>
  )
}

export default Results