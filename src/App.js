import React from "react";
import PropsTypes from "prop-types";

function Potato({name, picture, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h3>{rating}</h3>
      <img src={picture} alt={name} />
    </div>
  )
}

const foodILike = [
  {
    "id": 1,
    "name": "kimchi",
    "image": "https://mimgnews.pstatic.net/image/311/2021/10/28/0001365346_001_20211028094001593.jpg?type=w540",
    "rating": "3.4"
  }, {
    "id": 2,
    "name": "pork",
    "image": "https://mimgnews.pstatic.net/image/311/2021/10/28/0001365346_001_20211028094001593.jpg?type=w540",
    "rating": "4"
  }, {
    "id": 3,
    "name": "beef",
    "image": "https://mimgnews.pstatic.net/image/311/2021/10/28/0001365346_001_20211028094001593.jpg?type=w540",
    "rating": "4.6"
  }, {
    "id": 4,
    "name": "chicken",
    "image": "https://mimgnews.pstatic.net/image/311/2021/10/28/0001365346_001_20211028094001593.jpg?type=w540",
    "rating": "3.9"
  }, {
    "id": 5,
    "name": "seafood",
    "image": "https://mimgnews.pstatic.net/image/311/2021/10/28/0001365346_001_20211028094001593.jpg?type=w540",
    "rating": "5"
  }, {
    "id": 6,
    "name": "pasta",
    "image": "https://mimgnews.pstatic.net/image/311/2021/10/28/0001365346_001_20211028094001593.jpg?type=w540",
    "rating": "1.4"
  }
]

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      { foodILike.map(dish => (<Potato key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)) }
    </div>
  );
}

Potato.PropsTypes = {
  name: PropsTypes.string.isRequired,
  picture: PropsTypes.string.isRequired,
  rating: PropsTypes.number
}

export default App;
