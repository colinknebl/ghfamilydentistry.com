import React from 'react';
import styled from 'styled-components';

import { Nav } from './nav';
import { getLinks } from '../gql/queries/links';

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { links } = getLinks();

    const isNavEnabled = links.length > 0;

    return (
        <StyledHeader>
            {isNavEnabled && (
                <>
                    {/* <nav className="test">
                        <ul>
                            <li>one</li>
                            <li>two</li>
                        </ul>
                    </nav> */}
                    <button
                        className="mobile-menu-link"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <Nav links={links} isOpen={isOpen} />
                </>
            )}
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: grid;

    .test {
        /* position: absolute; */
    }

    .mobile-menu-link {
        border: none;
        background: none;
        color: inherit;
        font-size: 1.25rem;
        position: relative;
        top: 10px;
        right: 10px;
        z-index: 2;
        place-self: end;
    }

    @media screen and (min-width: 860px) {
        .mobile-menu-link {
            display: none;
        }
    }
`;
