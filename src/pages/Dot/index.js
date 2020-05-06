import React, { useState } from 'react';

import { Container, DotButton } from './styles';

export default function Dot() {
  const [working, setWorking] = useState(false);

  function handleWork() {
    setWorking(!working);
  }

  return (
    <Container>
      <DotButton onClick={handleWork}>
        {!working ? 'Começar à trabalhar' : 'Parar de trabalhar'}
      </DotButton>
    </Container>
  );
}
