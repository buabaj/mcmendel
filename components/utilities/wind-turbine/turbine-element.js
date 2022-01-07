import styled from 'styled-components';


export const Turbine = styled.div`
background: grey;

    /* position: absolute;
    top: 30%;
    left: 50%; */

    & .rotor{
        width: 5em;
        height: 5em;
        background-color: green;
        border-radius: 50%;
        /* position: absolute; */
        animation-name: rotate;
        animation-duration: 5s;
        animation-iteration-count: 1000;
        animation-timing-function: linear;


        @keyframes rotate {
            from {
                transform: rotate(360deg);
            }
                to {
                transform: rotate(0deg);
            }
        }
    }

    & .pole{
        width: 3em;
        height: 3em;
        margin: 0 1.1em;
        border-bottom: 8em solid brown;
        border-right: 1em solid transparent;
        border-left: 1em solid transparent;  
    }

`;

export const Blade = styled.div`

    width: 15em;//32
    height: 1em;
    background-color: green;
    position: absolute;
    top: 2em;
    left: 3em;
    border-radius: 0 3em 5em 0;
    transform-origin: 0 1em;

    &:before {
        content: "";
        background-color: green;
        position: absolute;
        width: 2em;//5
        height: 1em;//2
    }

    &:after {
        content: "";
        width: 0em;//1.5
        position: absolute;
        top: 1em;
        left: 2em;
        border-top: 1.2em solid green;//2
        border-right: 12em solid transparent;//22
        border-left: 1.5em solid transparent;//6
    }

    &.blade1 {
    transform: rotate(0deg);
    }

    &.blade2 {
    transform: rotate(120deg);
    }

    &.blade3 {
    transform: rotate(240deg);
    }
`;

