import React, { useEffect, useState, useRef } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMAGE =
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, setShow] = useState(false)
    const element = useRef(null)

    useEffect(
        function() {
            const observer = new IntersectionObserver(function(entries) {
                const { isIntersecting } = entries[0]
                //console.log(isIntersecting)
                if (isIntersecting) {
                    console.log(entries[0].target)
                    setShow(true)
                    observer.disconnect()
                }
            })
            observer.observe(element.current)
        },
        [element]
    )

    return (
        <Article ref={element}>
            {show && (
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <Button>
                        <MdFavoriteBorder size="32px" />
                        {likes} likes!
                    </Button>
                </>
            )}
        </Article>
    )
}
