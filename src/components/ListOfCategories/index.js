import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
    const [showFixed, setShowFixed] = useState(false)
    const { categories, loading } = useCategoriesData()

    function useCategoriesData() {
        const [loading, setLoading] = useState(false)
        const [categories, setCategories] = useState([])
        useEffect(function() {
            setLoading(true)
            window
                .fetch('https://petgram-api-marembu-2.now.sh/categories')
                .then(res => res.json())
                .then(categories => {
                    setCategories(categories)
                    setLoading(false)
                })
        }, [])
        return { categories, loading }
    }

    useEffect(
        function() {
            const onScroll = e => {
                const newShowFixed = window.scrollY > 200
                showFixed !== newShowFixed && setShowFixed(newShowFixed)
                //setShowFixed(newShowFixed)
            }
            document.addEventListener('scroll', onScroll)
            return () => document.removeEventListener('scroll', onScroll)
        },
        [showFixed]
    )
    const renderList = fixed => {
        return loading ? (
            <List fixed={fixed}>
                {[1, 2, 3, 4, 5, 6].map(category => {
                    return (
                        <Item key={category}>
                            <Category />
                        </Item>
                    )
                })}
            </List>
        ) : (
            <List fixed={fixed}>
                {categories.map(category => {
                    return (
                        <Item key={category.id}>
                            <Category {...category} />
                        </Item>
                    )
                })}
            </List>
        )
    }
    return (
        <React.Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </React.Fragment>
    )
}
