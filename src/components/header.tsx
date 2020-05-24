import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { getLinks, QueriedLink } from '../gql/queries/links';

export function Header() {
    const links = getLinks();

    return (
        <StyledHeader>
            {Boolean(links.length) && <Nav links={links} />}
        </StyledHeader>
    );
}

const StyledHeader = styled.header``;

interface INavProps {
    links: QueriedLink[];
}

function Nav({ links }: INavProps) {
    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link to={link.to}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
