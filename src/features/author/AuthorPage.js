import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Wioletta Koperska"
      body={
        <>
          <p>
            <strong>Cześć!</strong>
          </p>
          <p>
            Mam na imię <strong>Wioletta</strong> i łączę w życiu kilka światów,
            które – choć pozornie różne – doskonale się uzupełniają. Od zawsze
            moje życie kręci się wokół pasji. Jedną z nich, najstarszą i
            najbliższą sercu, jest jazda konna. Jeżdżę odkąd pamiętam – to coś
            więcej niż sport. To wolność, spokój i głęboki kontakt z naturą,
            którego nie da się ubrać w słowa. Każdy galop daje mi poczucie, że
            jestem dokładnie tam, gdzie powinnam być.
          </p>

          <p>
            🐎<strong>Zwierzęta</strong> są w ogóle bardzo ważną częścią mojego
            świata. Mam dwa energiczne yorki, które każdego dnia przypominają
            mi, jak cieszyć się małymi rzeczami – ich radość jest zaraźliwa, a
            dom bez nich byłby po prostu cichy i pusty.
          </p>

          <p>
            📚Obok nich są książki – kocham zapach papieru, zatapianie się w
            opowieściach, które przenoszą mnie do innych światów. I kuchnia –
            moje małe codzienne laboratorium, gdzie relaksuję się gotując,
            testując nowe smaki i tworząc coś dla bliskich.
          </p>

          <p>
            💻Ale jest też inna przestrzeń, która od jakiegoś czasu zajmuje
            ważne miejsce w moim życiu – <strong>programowanie</strong>. To
            pasja, która pojawiła się później, ale wciągnęła mnie całkowicie.
            Zaczęłam od podstaw: <code>HTML</code> i <code>CSS</code>. Potem
            przyszedł <code>JavaScript</code>, który otworzył drzwi do bardziej
            dynamicznych, kreatywnych rozwiązań. Teraz rozwijam się w{" "}
            <code>React</code>, korzystam z <code>Redux Toolkit</code>, poznaję{" "}
            <code>React Router</code>i uczę się <code>Redux Sagi</code>.
          </p>

          <p>
            <strong>Frontend</strong> to dla mnie połączenie logiki i estetyki –
            coś jak układanie puzzli, które na końcu tworzą coś funkcjonalnego i
            pięknego zarazem. Każdy projekt, każda linijka kodu to dla mnie nie
            tylko zadanie do wykonania, ale szansa na naukę, rozwój i
            satysfakcję z tworzenia czegoś własnymi rękami (i klawiaturą 😉).
          </p>

          <p>
            🐾Wszystko, co robię – czy to w siodle, w kuchni, z psem na spacerze
            czy przy komputerze – robię z sercem. I to właśnie serce, pasja i
            ciekawość świata są tym, co mnie napędza.
          </p>
        </>
      }
    />
  </Container>
);
