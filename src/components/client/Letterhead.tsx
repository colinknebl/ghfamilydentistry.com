import React from 'react';
import styled from 'styled-components';

interface ILetterheadProps {
    date?: string;
}

export function Letterhead({ date }: ILetterheadProps) {
    return (
        <>
            <StyledHeader>
                <div>
                    <span className="practice-name">
                        Grand Haven Family Dentistry
                    </span>
                    <span className="doc-name">
                        Peter D. Rick, D.D.S., P.C.
                    </span>
                    <span className="doc-name">
                        Chelsea L. Klipfel, D.D.S., P.L.L.C.
                    </span>
                    <span className="doc-name">Peter D. Rick, Jr., D.D.S.</span>
                </div>
                <div>
                    <address>
                        <span>919 S. Beechtree, Ste. #7</span>
                        <span>Grand Haven, MI 49417</span>
                        <span>(616) 844-4400</span>
                    </address>
                </div>
            </StyledHeader>
            <hr />
            {date && <p className="date">{date}</p>}
        </>
    );
}

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(2) {
        text-align: right;
    }

    @media screen and (max-width: 859px) {
        grid-template-columns: 1fr;

        grid-gap: 20px;

        & > div:nth-child(2) {
            text-align: left;
        }
    }

    .practice-name {
        font-weight: 900;
    }

    span {
        display: block;
    }
`;
