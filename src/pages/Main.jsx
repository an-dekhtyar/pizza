import React from 'react'
import {SortPopup, Categories, PizzaBlock} from '../components'
import {useSelector} from "react-redux";


export const Main = () => {

    const items = useSelector(state => state.pizzas.items)

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup
                    items={[
                        {name: 'популярности', sortType: 'popular'},
                        {name: 'цене', sortType: 'price'},
                        {name: 'алфавиту', sortType: 'alphabet'}]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(i => <PizzaBlock key={i.id} {...i} />)}
            </div>
        </div>
    )
}
