import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const Categories = React.memo((props) => {
    console.log('CATEGORIES RENDER')

    const {activeCategory, items, onSelectItem} = props


    const onClickItem = (index) => {
        onSelectItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : "" } onClick={()=> onClickItem(null)}>Все</li>
                {items && items.map((it,index) => (
                    <li className={activeCategory === index ? "active" : "" } onClick={()=> onClickItem(index)}
                        key={`${index}_${it}`}>{it}</li>))}
            </ul>
        </div>
    )
})
Categories.PropTypes = {
    activeCategory:PropTypes.number.isRequired,
    items:PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelectItem:PropTypes.func
}

Categories.defaultProps = { activeCategory: null, items: [] }
