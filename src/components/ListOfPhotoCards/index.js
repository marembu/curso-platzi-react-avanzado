import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
    return (
        <ul>
            {[1, 2, 3, 4].map(photo => {
                return (
                    <li key={photo}>
                        {' '}
                        <PhotoCard />{' '}
                    </li>
                )
            })}
        </ul>
    )
}
