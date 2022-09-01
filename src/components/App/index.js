import React, { useState, useEffect } from 'react';
import './App.css';
import Input from '../Input';
import Button from '../Button';
import Card from '../Card';
import Spinner from '../Spinner';
import api from '../../utils/api';

function App() {
  const [seacrhQuery, setSeacrhQuery] = useState('');
  const [submit, setSubmit] = useState(false);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (submit) {
      api.search(seacrhQuery)
        .then(data => {
          const result = data.results.map(item => ({
            id: item.id,
            src: item.urls.regular,
            alt: item.alt_description,
            title: item.description,
            subtitle: item.user.name
          }));

          setCards(result);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setSubmit(false);
        });
    }
  }, [submit, seacrhQuery]);

  return (
    <div className="App">
      <div className='App-content'>
        <div className='App-search'>
          <Input
            placeholder='Введите свой запрос'
            handleChange={(e) => setSeacrhQuery(e.target.value)}
          />
          <Button text='Search' handleClick={() => setSubmit(true)} />
        </div>

        {cards ? (
          <div className='App-cards'>
            {cards.map(card => <Card key={card.id} {...card} />)}
          </div>
        ) : null}

        {submit ? <Spinner /> : null}
      </div>
    </div>
  );
}

export default App;
