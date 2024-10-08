// Array of planet objects, each with a name, color, and number of moons
const planets = [
    { name: 'Mercury', color: 'gray', moons: 0 },
    { name: 'Venus', color: 'yellow', moons: 0 },
    { name: 'Earth', color: 'blue', moons: 1 },
    { name: 'Mars', color: 'red', moons: 2 },
    { name: 'Jupiter', color: 'brown', moons: 79 },
    { name: 'Saturn', color: 'gold', moons: 83 },
    { name: 'Uranus', color: 'lightblue', moons: 27 },
    { name: 'Neptune', color: 'darkblue', moons: 14 },
  ];
  
  const section = document.querySelector('.listPlanets');
  
  planets.forEach((planet) => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet', planet.name.toLowerCase());
    planetDiv.style.backgroundColor = planet.color;
  
    for (let i = 0; i < planet.moons; i++) {
      const moonDiv = document.createElement('div');
      moonDiv.classList.add('moon');
      
      moonDiv.style.top = `${Math.random() * 100}px`;
      moonDiv.style.left = `${Math.random() * 100}px`;
      
      planetDiv.appendChild(moonDiv);
    }
  
    section.appendChild(planetDiv);
  });
  