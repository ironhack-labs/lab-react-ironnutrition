import styled from 'styled-components';

export const AddButton = styled.button`
    border: none;
    border-radius: 10px;
    outline: none;
    background: blue;
    color: white;
    height: 3rem;
    margin: 1.5rem 0;
    transition: all 0.15s;

    &:hover {
        cursor: pointer;
        border: 1px solid blue;
        background-color: white;
        color: blue;
        transition: all 0.15s;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SearchBar = styled.input`
    width: 80%;
    outline: none;
    border: 1px solid blue;
    border-radius: 10px;
    margin: 2rem;
    padding: 0.5rem;
    background: blue;
    color: white;
    transition: all 0.15s;

    ::placeholder {
        color: white;
        opacity: 1; 
    }

    &:focus {
        border: 1px solid blue;
        background-color: white;
        color: black;
        transition: all 0.15s;
    }
`;