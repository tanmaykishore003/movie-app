
import React, { Component } from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    height: 70px;
    background: linear-gradient(to right, #4267b2, #6a89cc);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 25px;
`

const Title = styled.div`
    font-size: 2.5rem;
    color: white;
    font-family: Bodoni MT
`

const CartContainer = styled.div`
    position: relative;
    cursor: pointer;
`

const CartIcon = styled.img`
    height: 48px;
    margin-right: 20px;
`

const CartCount = styled.span`
    background-color: orange;
    border-radius: 50%;
    padding: 4px 8px;
    border: 1px solid black;
    position: absolute;
    font-size: 12px;
    top: -5px;
    right: 0.5px;
`

export class NavBar extends Component {
    render() {
        return (
            <>
                <Nav>
                    <Title>Movie App</Title>
                    <CartContainer>
                        <CartIcon src="https://cdn-icons-png.flaticon.com/128/6737/6737614.png" alt="cart" />
                        <CartCount>3</CartCount>
                    </CartContainer>
                </Nav>
            </>
        )
    }
}

export default NavBar

const styles = {
    nav: {
        height: 70,
        background: 'linear-gradient(to right, #4267b2, #6a89cc)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        padding: '0 25px'
    },

    title: {
        fontSize: '2.5rem',
        color: 'white',
        fontFamily: 'Bodoni MT'
    },

    cartContainer: {
        position: 'relative',
        cursor: 'pointer'
    },

    cartIcon: {
        height: 48,
        marginRight: 20
    },

    cartCount: {
        backgroundColor: 'orange',
        borderRadius: '50%',
        padding: '4px 8px',
        border: '1px solid black',
        position: 'absolute',
        fontSize: 12,
        top: -5,
        right: 0.5
    }
}