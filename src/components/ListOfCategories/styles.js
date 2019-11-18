import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'
export const List = styled.ul`
    display: flex;
    overflow-x: scroll;
    width: 100%;
    padding-bottom: 20px;
    ${props =>
        props.fixed &&
        css`
             {
                background-color: #fff;
                border-radius: 60px;
                box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
                left: 0;
                right: 0;
                top: -20px;
                margin: 0 auto;
                max-width: 400px;
                padding: 5px;
                position: fixed;
                transform: scale(0.5);
                z-index: 1;
                ${fadeIn()}
            }
        `}
`

export const Item = styled.li`
    padding: 0 8px;
`
