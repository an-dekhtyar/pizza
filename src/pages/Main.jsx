import React from 'react'
import {SortPopup, Categories, PizzaBlock} from '../components'


export const Main = (props) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {props.items.map(i => <PizzaBlock key={i.id} {...i} />)}
            </div>
        </div>
    )
}
