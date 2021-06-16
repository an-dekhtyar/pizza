import React from 'react'

export const Categories = (props) => {

    const {items, onClickItem, activeItem} = props
    
    return (
        <div className="categories">
        <ul>
        <li className={activeItem === null ? "active" : "" } onClick={()=> onClickItem(null)}>Все</li>
        {items && items.map((it,indx) => (
        <li className={activeItem === indx ? "active" : "" } onClick={()=> onClickItem(indx)} 
        key={`${indx}_${it}`}>{it}</li>))}
        </ul>
      </div>
    )
}

