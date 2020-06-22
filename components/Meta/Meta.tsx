import React from 'react';

import Head from 'next/head';

interface Props {
  suffix?: string;
}

const Meta: React.FC<Props> = ({ suffix }) => {
  const descriptionSuffix = suffix ? ` - ${suffix}` : ' - official website';
  const description: string =
    'Intuition Yachts Design Studio' + descriptionSuffix;
  return (
    <Head>
      <title>Intuition Yachts Design Studio Marta Zawadzka{descriptionSuffix}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;
