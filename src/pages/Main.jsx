import React, { useCallback, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {SortPopup, Categories, PizzaBlock, PizzaLoader} from '../components'
import {setCategory} from '../bll/filter-reducer'
import {changeCategory} from '../bll/filter-reducer'
import { getPizzas } from '../bll/pizzas-reducer';

export const Main = () => {


    const isLoaded = useSelector(state => state.pizzas.isLoaded)
    const category = useSelector(state => state.filter.category)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPizzas())
    }, [])


    const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
    const sortItems = [
        {name: 'популярности', sortType: {type: 'rating', order: 'desc'}},
        {name: 'цене', sortType: {type: 'price', order: 'desc'}},
        {name: 'алфавиту', sortType: {type: 'name', order: 'asc'}}]

    const items = useSelector(state => state.pizzas.items)


    const onSelectItem = useCallback((index) => {
        index === null ? dispatch(getPizzas()) : dispatch(changeCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onSelectItem={onSelectItem}
                            activeCategory={category}
                            items={categoryNames}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ?
                    items.map(i => <PizzaBlock key={i.id} {...i} /> )
                    :
                    [...Array(8)].map((_,index) => <PizzaLoader key={index}/>)}
            </div>
        </div>
    )
}
