import styled from 'styled-components'

export const List = styled.ul`
    display: flex;
    overflow: hidden;
    width: 100%;
    &.fixed {
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
    }
`

export const Item = styled.li`
    padding: 0 8px;
`
