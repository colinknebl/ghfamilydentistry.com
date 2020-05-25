import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Image } from './image';
import { FluidObject } from 'gatsby-image';

interface IJumbotronSectionProps {
    image: FluidObject;
    children?: JSX.Element;
}

export function JumbotronSection(props: IJumbotronSectionProps) {
    const data = useStaticQuery<{ site: { siteMetadata: { title } } }>(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <StyledJumbotron>
            <Image fluid={props.image} />
            <div className="content-container">
                <div>
                    <h1>{data.site.siteMetadata.title}</h1>
                </div>
                {props.children}
                {/* <span
                    dangerouslySetInnerHTML={{
                        __html: props.subText ? props.subText : '',
                    }}
                ></span> */}
            </div>
        </StyledJumbotron>
    );
}

const StyledJumbotron = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    max-width: 85vw;
    overflow: hidden;
    margin: auto;
    margin-bottom: 40px;

    .content-container {
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .image {
        height: inherit;
        max-height: inherit;
    }

    h1 {
        font-size: max(5vw, 2em, 2rem);
        text-align: center;
        position: relative;
        padding: 25px;

        &::before,
        &::after {
            --width: 60;
            content: '';
            background: var(--primary-color);
            position: absolute;
            left: calc(((100 - var(--width)) / 2) * 1%);
            width: calc(var(--width) * 1%);
            height: 3px;
            margin: auto;
        }

        &::before {
            top: 0;
        }

        &::after {
            bottom: 0;
        }
    }
`;
