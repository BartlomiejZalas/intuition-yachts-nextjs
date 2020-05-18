import React from 'react';
import { ContentProps } from './types';
import { Variant } from '../../types/types';

export const ContentComponent: React.FC<ContentProps> = ({ variant }) => {
  return (
    <>
      <p>
        Każda historia ma swój początek. Intuition Yachts swoją historię opiera
        na pasji do jachtów, która rozpoczęła się w 2012 roku. W tym właśnie
        czasie założycielka firmy podczas edukacji natknęła się na jednostkę
        „Intuition” i jej głównego projektanta, słynnego Juliusza Strawińskiego.
        Przyjął ją pod swoje skrzydła i zaraził niesłabnącą pasją do
        projektowania.
      </p>

      <p>
        Po latach nauki, firma gotowa jest aby samodzielnie spełniać potrzeby
        klientów przez świadczenie kompleksowych usług projektowania i
        modelowania.
      </p>

      <p>
        Misją i największym marzeniem organizacji jest to, aby każdy
        zaprojektowany jacht został jednostką przemierzającą wody świata. Czy
        będzie to Twój jacht?
      </p>

      <p>
        Nasz zespół składa się z doświadczonych inżynierów o szerokim zakresie
        wiedzy technicznej i nietuzinkowej kreatywności. W rezultacie jesteśmy w
        stanie dopasować zespół profesjonalistów do potrzeb klienta, tak aby
        sprostać nawet najbardziej skomplikowanym projektom. Nasi inżynierowie
        mogą również wspierać naszego klienta podczas prefabrykacji jako nadzór.
        Zarówno podczas nowej budowy, jak i podczas przebudowy jednostek.
      </p>

      <p>Zaufaj nam i pozwól nam się poznać. Poproś o nasze portfolio.</p>
      {variant === Variant.FULL && (
        <>
          <p>
            Marta Anna Zawadzka - założycielka „Intuition Yachts”. Zdobyła dwa
            tytuły na Politechnice Gdańskiej z zakresu projektowania oraz
            zarządzania w gospodarce morskiej. Jachty są jej hobby i zarazem
            pracą. Odbyła liczne praktyki zawodowe zarówno w kraju jak i za
            granicą w takich firmach jak m.in.: Stocznia Gdynia S.A., Krajowa
            Izba Gospodarki Morskiej, PRS, Surge-projects i w szczególności
            Yacht Studio Strawiński.
          </p>

          <p>
            Aby poszerzyć horyzonty, przeniosła się do jednej z europejskich
            stolic jachtów - Majorki. Zdobyła tam doświadczenie w firmie
            zarządzającej projektami budowy jachtów, a następnie próbowała
            swoich sił w projektowaniu ich wnętrz. Dzięki tym doświadczeniom
            dała wyraz swojemu wyczuciu stylu oraz rozwinęła zamiłowanie do
            eleganckich i luksusowych wystrojów wnętrz.
          </p>

          <p>
            Pasja do żeglowania i spędzone dzięki temu godziny na morzu
            pozwalają Marcie poznawać poszczególne jednostki od strony
            użytkownika. Dzięki temu projekty są nie tylko przemyślane wizualnie
            i technicznie, ale mają również na celu ergonomię oraz ciągłe
            doskonalenie standardowo stosowanych rozwiązań.
          </p>
        </>
      )}
    </>
  );
};
