import React, { useState } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { sendMessage } from '../../bot';

import { Container, DotButton } from './styles';

export default function Dot() {
  const [working, setWorking] = useState(false);
  const [dateHour, setDateHour] = useState('');

  async function handleWork() {
    let formatDate = format(
      new Date(),
      "dd/MM/yyyy 'às' HH:mm",
      { locale: pt }
    );

    setDateHour(formatDate);

    const message = (
      !working 
      ? 
      `Cauê iniciou o trabalho | ${formatDate}`
      : 
      `Cauê parou de trabalhar | ${formatDate}`
    );

    await sendMessage(message);
    setWorking(!working);
  }

  return (
    <Container>
      {working && (
        <span>Você iniciou {dateHour}</span>
      )}
      <DotButton onClick={handleWork}>
        {!working ? 'Começar à trabalhar' : 'Parar de trabalhar'}
      </DotButton>
    </Container>
  );
}
