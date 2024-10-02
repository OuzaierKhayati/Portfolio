import React from 'react';
import snakeImg from '../assets/snakeImg.png';
import mazeImg from '../assets/mazeImg.png';
import rayImg from '../assets/rayImg.png';
import collImg from '../assets/collisionsimg.png';


const Home = () => {

  const boxes = [
    { app: "Snake Game", bgImage: snakeImg, link: "https://ouzaierkhayati.github.io/SnakeGame/"},
    { app: "Maze Game", bgImage: mazeImg, link: "https://ouzaierkhayati.github.io/MazeGame/"},
    { app: "Ray Casting", bgImage: rayImg, link: "https://ouzaierkhayati.github.io/RayCasting/"},
    { app: "Elastic Collisions", bgImage: collImg, link: "https://ouzaierkhayati.github.io/ElasticCollisions/"},
  ];

  return (
    <main>
      <div className='game-container'>
        {boxes.map((box, index) => (
          <div className='box-container'>
            <h5>{box.app}</h5>
            <div
              key={index}
              className="box"
              style={{ backgroundImage: `url(${box.bgImage})` }} // Apply the background image inline
              >
              <a href={box.link}><button>Visit</button></a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;