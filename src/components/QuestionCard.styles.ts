import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    border-radius: 10px;
    border: 2px solid #000;
    padding: 20px;
    background: transparent;
    text-align: center;

    p {
        font-size: 1rem;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({  correct, userClicked }) => 
            correct
                ? "linear-gradient(90deg, #56ffa4, #59bc86)"
                : !correct && userClicked
                ? "linear-gradient(90deg, #ff5656, #c16868)"
                : "transparent"};
        border: 3px solid #000;
        border-radius: 10px;
        color: #fff;
    }
`