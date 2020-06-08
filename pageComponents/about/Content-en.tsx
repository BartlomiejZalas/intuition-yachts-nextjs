import React from 'react';
import { ContentProps } from './types';
import { Variant } from '../../types/types';

export const ContentComponent: React.FC<ContentProps> = ({ variant }) => {
  return (
    <>
      <p>
        Every story has its beginning. Intuition Yachts is based on the passion
        for yachts, which began in 2012. At the time, the founder of the company
        during education came across the yacht called "Intuition" and its main
        designer, the famous Juliusz Strawiński. He took her under his wing and
        infected with his passion for design.
      </p>

      <p>
        After years of learning, the company is ready to meet the customers'
        needs by providing complex design and modelling services.
      </p>

      <p>
        The mission and the biggest dream of the organization is that each
        designed yacht becomes a yacht traversing the waters of the world. Will
        it be your yacht?
      </p>

      <p>
        Our team consists of experienced engineers with a wide range of
        technical knowledge and extraordinary creativity. As a result, we are
        able to match the team of professionals to the needs of the client, to
        meet even the most complicated projects. Our engineers can also support
        our client during prefabrication as a supervisor. Both during the new
        construction and during the reconstruction of the boats.
      </p>

      <p>Trust us and let us know each other. Ask for our portfolio.</p>
      {variant === Variant.FULL && (
        <>
          <p>
            Marta Anna Zawadzka - founder of "Intuition Yachts". She won two
            titles at Gdańsk University of Technology in the field of design and
            management in the maritime economy. Yachts are her hobby and at the
            same time work. She completed numerous professional experience both
            at home and abroad in such companies as, among others: Gdynia
            Shipyard SA, Polish Chamber of Maritime Economy, PRS, Surge Projects
            and in particular Yacht Studio Strawiński.
          </p>

          <p>
            To broaden her horizons, she moved to one of the European yacht
            capitals - Majorca. She gained experience in a company managing
            yacht construction projects, and then she tried her hand at
            designing their interiors. Thanks to these experiences, she
            expressed her sense of style and developed a passion for elegant and
            luxurious interior decorations.
          </p>

          <p>
            The passion for sailing and the hours spent at sea allow Marta to
            get to know individual yachts from the user's side. As a result, the
            designs are not only well-thought-out visually and technically, but
            also aim at ergonomics and continuous improvement of standard
            solutions.
          </p>
        </>
      )}
    </>
  );
};
