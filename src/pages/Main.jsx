import React, { useCallback, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {SortPopup, Categories, PizzaBlock, PizzaLoader} from '../components'
import {setCategory} from '../bll/filter-reducer'
import {changeCategory, sortPizzas} from '../bll/filter-reducer'
import {addPizzaToCart} from '../bll/cart-reducer'

export const Main = () => {


    const isLoaded = useSelector(state => state.pizzas.isLoaded)
    const category = useSelector(state => state.filter.category)
    const sortCategoryName = useSelector(state => state.filter.name)
    const sortType = useSelector(state => state.filter.sortType)
    const cartItems = useSelector(state => state.cart.items)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sortPizzas(sortType, category, sortCategoryName))
    }, [])


    const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
    const sortItems = [
        {name: 'популярности', sortType: {type: 'rating', order: 'desc'}},
        {name: 'цене', sortType: {type: 'price', order: 'desc'}},
        {name: 'алфавиту', sortType: {type: 'name', order: 'asc'}}]

    const items = useSelector(state => state.pizzas.items)


    const onSelectCategoryItem = useCallback((index) => {
        dispatch(changeCategory(sortType, index))}, [sortType])

    const onSelectSortItem = (item, sortCategoryName) => {
        dispatch(sortPizzas(item,category,sortCategoryName))
    }
    const onAddPizza = (pizza) => {
        dispatch(addPizzaToCart(pizza))
    }


    /* index === null ? dispatch(sortPizzas(sortType, sortValue)) : dispatch(changeCategory(index)) */

    return (
        <div className="container">
            <div className="content__top">
                <Categories onSelectItem={onSelectCategoryItem}
                            activeCategory={category}
                            items={categoryNames}/>
                <SortPopup items={sortItems}
                           onSelectItem={onSelectSortItem}
                           activeSortValue={sortCategoryName}
                           category={category}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ?
                    items.map(i => <PizzaBlock
                        key={i.id} {...i}
                        onAddPizza={onAddPizza}
                        addedCount={cartItems[i.id] && cartItems[i.id].length}
                    /> )
                    :
                    [...Array(4)].map((_,index) => <PizzaLoader key={index}/>)}
            </div>
        </div>
    )
}
