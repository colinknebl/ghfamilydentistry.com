import React from 'react';
import styled from 'styled-components';

interface ISectionProps {
    title: string;
    children: JSX.Element;
}

export function Section({ title, children }: ISectionProps) {
    return (
        <StyledSection>
            <h2>{title}</h2>
            {children}
        </StyledSection>
    );
}

const StyledSection = styled.section`
    font-size: 1rem;

    h2 {
        text-decoration: underline;
        font-size: 1.5rem;
    }
`;
