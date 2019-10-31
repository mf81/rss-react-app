import React from "react";

const Author = () => {
  return (
    <div>
      <h3>Rejestr Spraw Sądowych</h3>
      <br />
      <h5>autor: Maciej Fijałkowski</h5>
      <p>Wszystkie prawa do własności intelektualnej zastrzeżone.</p>
      <p>
        <b>Program wykonany dla: </b>
        <br />
        Przedsiębiorstwo Gospodarki Mieszkaniowej Sp. z o.o. <br />w Przemyślu
      </p>

      <p>
        <b>Pomoc techniczna:</b>
        <br />
        tel. wew.: 122
        <br />
        e-mail:{" "}
        <a href="mailto:poczta@maciejfijalkowski.eu">
          poczta@maciejfijalkowski.eu
        </a>
        <br />
        tel.: 690 517 410
      </p>
      <p>Wersja: 2019r.</p>
    </div>
  );
};

export default Author;
