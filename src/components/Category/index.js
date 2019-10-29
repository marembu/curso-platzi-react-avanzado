import React from 'react'
import { Anchor, Image } from './styles'
const DEFAULT_IMAGE =
    'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
    return (
        <Anchor href={path}>
            <Image src={cover} />
            {emoji}
        </Anchor>
    )
}
