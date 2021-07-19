import React from 'react'
import PropTypes from 'prop-types'

export const Categories = React.memo((props) => {


    const {activeCategory, items, onSelectItem} = props

    const onClickItem = (index) => {
        onSelectItem(index)
    }
    console.log(props,"CATEGORIES RENDER")

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
Categories.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectItem: PropTypes.func
}

Categories.defaultProps = { activeCategory: null, items: [] }
