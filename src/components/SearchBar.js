import React from 'react'

export default function SearchBar({handleSearch,handleSubmit}) {
    return (
        <div>
            <form>
                <input type="text" onChange={handleSearch}/>
                <button type="button" onClick={handleSubmit}>Search</button>
            </form>
            
        </div>
    )
}
