import React from 'react';
import styled from 'styled-components';

import { Letterhead } from '../client/Letterhead';
import { StyledPaper } from '../letter';
import { getDoctors } from '../../gql/queries/doctors';
import { Doctor } from '../../models/Doctor';
import { ContentView } from '../content-view';

export function Letter() {
    const { doctors } = getDoctors();
    return (
        <StyledLetter>
            <Letterhead date="" />
            <p>Dear Grand Haven Family Dentistry Family/Patients,</p>

            <p>
                We have some exciting news to share with you about our practice!
                We are thrilled to welcome Dr. Rick’s son, Dr. Peter Rick, Jr.,
                D.D.S. to our practice! Many of you have met Dr. Rick, Jr. over
                the years as he worked here throughout high school and college.
                Dr. Rick, Jr. graduated from the University of Michigan School
                of Dentistry and is excited to start his career here in Grand
                Haven. He is looking forward to building the professional
                relationships and continuing caring for the wonderful patients
                of this office, working alongside his father. He has a passion
                for oral health and is dedicated to providing you with the
                highest quality of care.
            </p>

            <p>
                With the arrival of Dr. Rick, Jr. also means that we must say
                goodbye to Dr. Chelsea Klipfel, Dr. Rick’s daughter. Many of you
                have worked with Dr. Klipfel over the past few years, and while
                she has enjoyed her time with us here in Grand Haven, she is
                making the transition to working full-time and purchasing Dr.
                Rick’s wife’s practice in Fruitport. She thanks you for being so
                welcoming and for allowing her to be a part of your oral health.
                We are grateful for all of Dr. Klipfel’s hard work and
                dedication and will certainly miss her in our office.
            </p>

            <p>
                In the month of May, we also had both Connie, a dental
                hygienist, and Chris, a dental assistant, retire. We are so
                grateful for the many years of excellent patient care provided.
                We are happy for them, but they will certainly be missed.
            </p>

            <p>
                With that said, there will be some changes and new faces around
                our office. We are excited to introduce you to the new employees
                of the office who are passionate about providing you with the
                highest quality of care. To clarify, as we have had inquiries
                already, Dr. Peter Rick is not retiring and will still be here
                for the foreseeable future.
            </p>

            <p>
                Even though there are many changes going on, we are still
                committed to you and your oral health and take pride in
                providing excellent care.
            </p>

            <footer>
                <p>
                    <span>Sincerely,</span>
                    {/* Peter Jr. is not listed in the sig block here */}
                    <span className="doc-name">Peter Rick, D.D.S</span>
                    {/* {doctors.map((doctor) => (
                        <span key={doctor.id} className="doc-name">
                            {doctor.name}
                        </span>
                    ))} */}
                </p>
            </footer>

            <MeetPeterJr jr={doctors.find((doc) => doc.name.includes('Jr'))} />
        </StyledLetter>
    );
}

const StyledLetter = styled(StyledPaper)``;

function MeetPeterJr({ jr }: { jr: Doctor }) {
    if (!jr) return null;
    return (
        <SyledMeetPeterJr>
            <img src={jr.imageUrl} alt={jr.name} />
            <h4>Meet Dr. Peter Rick, Jr.:</h4>
            <p>
                Hello! I’m Dr. Peter Rick, Jr. Many of you know me from the many
                years I have worked in the office throughout high school and
                college. My wife and I are both from Spring Lake and are so
                excited to be back in the West Michigan area. I love being
                outdoors and am an avid hunter and fisherman. I enjoy being
                active and spending time on the water and doing watersports. I
                am eager to share my passion and knowledge with the patients of
                this office and am looking forward to meeting all of you! I am
                committed to provide the highest standards of dentistry and
                continue to model the professionalism here at Grand Haven Family
                Dentistry.
            </p>
        </SyledMeetPeterJr>
    );
}

const SyledMeetPeterJr = styled.article`
    display: grid;
    grid-template-areas: 'img head' 'img para';
    grid-gap: 20px;

    img {
        grid-area: img;
        max-width: 175px;
    }

    h4 {
        grid-area: head;
        align-self: end;
        margin: 0;
    }

    p {
        grid-area: para;
        margin: 0;
    }

    @media screen and (max-width: 800px) {
        grid-template-areas: 'head' 'img' 'para';
    }
`;
