import styled from "@emotion/styled";

export const HeaderBetween = styled('header')(() => ({
    backgroundColor: '#0B60D1',
    display: 'flex',
    justifyContent: 'space-between',
    padding: "20px 0",
    zIndex: "2",
    boxShadow: '0px 1px 5px 0px rgba(45,45,45,0.75)',
}));

export const NavLinks = styled('nav')(() => ({
    ul: {
        display: 'flex',
        color: '#FFFFFF',
    }
}));