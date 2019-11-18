import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards categoryId="1" />
        </>
    )
}
