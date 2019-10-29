import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
    return (
        <List>
            {categories.map(category => {
                return (
                    <Item key={category.id}>
                        {/* <Category
                            emoji={category.emoji}
                            cover={category.cover}
                            path={category.path}
                        /> */}
                        <Category {...category} />
                    </Item>
                )
            })}
        </List>
    )
}
