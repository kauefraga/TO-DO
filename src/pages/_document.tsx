import React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

function MyDocument() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" type="image/png" href="https://imagepng.org/wp-content/uploads/2019/12/check-icone-scaled.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
