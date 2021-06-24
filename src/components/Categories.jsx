import React, {useState} from 'react'

export const Categories = (props) => {

    const {items} = props

    const [activeItem, setActiveItem] = useState(null)
    const onClickItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? "active" : "" } onClick={()=> onClickItem(null)}>Все</li>
                {items && items.map((it,index) => (
                    <li className={activeItem === index ? "active" : "" } onClick={()=> onClickItem(index)}
                        key={`${index}_${it}`}>{it}</li>))}
            </ul>
        </div>
    )
}

