import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
        <nav className='navbar'>
            <div className='button-group'>
                {
                    menuList.map((currElem) => {
                        return (
                            <button className='button-group-item' onClick={() => filterItem(currElem)}>
                                {currElem}
                            </button>
                        )
                    } )
                }
            </div>
        </nav>
    </>
  )
}

export default Navbar
