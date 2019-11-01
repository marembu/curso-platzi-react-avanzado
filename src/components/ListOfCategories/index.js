import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(function() {
        window
            .fetch('https://petgram-api-marembu-2.now.sh/categories')
            .then(res => res.json())
            .then(categories => setCategories(categories))
    }, [])
    const pushContent = fixed => {
        return (
            <List className={fixed ? 'fixed' : ''}>
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
    return pushContent()
}
