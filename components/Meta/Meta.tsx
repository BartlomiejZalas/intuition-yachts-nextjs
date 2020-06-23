import React from 'react';

import Head from 'next/head';

interface Props {
  suffix?: string;
}

const Meta: React.FC<Props> = ({ suffix }) => {
  const suffixString = suffix ? ` - ${suffix}` : ' - official website';
  const description: string =
    'Intuition Yachts Design Studio' + suffixString;
  return (
    <Head>
      <title>Intuition Yachts Design Studio Marta Zawadzka{suffixString}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;
