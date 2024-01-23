import { Component } from 'react';

import './card-list.style.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const { name: monsterName, id, email } = monster;
          return (
            <div key={id} className='card-container'>
              <img
                alt={`monster ${monsterName}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{monsterName}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
