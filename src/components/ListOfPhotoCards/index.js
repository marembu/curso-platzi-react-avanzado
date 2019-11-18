import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
    return (
        <ul>
            {photos.map(photo => {
                return (
                    <li key={photo.id}>
                        <PhotoCard {...photo} />
                    </li>
                )
            })}
        </ul>
    )
}
