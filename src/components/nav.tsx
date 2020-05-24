import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import type { QueriedLink } from '../gql/queries/links';

interface INavProps {
    links: QueriedLink[];
    isOpen: boolean;
}

export function Nav({ links, isOpen }: INavProps) {
    return (
        <StyledNav {...(isOpen ? { open: true } : {})}>
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link className="link" to={link.to}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    position: relative;

    ul {
        display: none;
        list-style-type: none;
        padding: 0;
        margin: 0;
        position: relative;
    }

    li {
        display: inline-block;
    }

    .link {
        text-decoration: none;
        color: inherit;

        &:active,
        &:hover {
            color: var(--secondary-color);
        }
    }

    @media screen and (max-width: 859px) {
        &[open] {
            position: absolute;
            height: 100vh;
            width: 100vw;
            background: rgba(255, 255, 255, 0.9);
            z-index: 1;
            ul {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            li {
                margin-bottom: 10px;
            }
        }
    }

    /* desktop version */
    @media screen and (min-width: 860px) {
        padding: 20px 5px;
        margin: 10px 0;
        position: relative !important;

        ul {
            display: flex !important;
            justify-content: space-around;
        }

        &::before,
        &::after {
            content: '';
            border-radius: 10px;
            display: block;
            background: var(--primary-color);
            width: 60%;
            height: 3px;
            margin: auto;
            position: absolute;
            left: 0;
            right: 0;
        }
        &::before {
            top: 0;
        }
        &::after {
            bottom: 0;
        }
    }
`;
