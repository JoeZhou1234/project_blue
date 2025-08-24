import React from 'react';

function App() {
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <img src={process.env.PUBLIC_URL + '/assets/project_blue_banner.png'} alt="Project Blue Banner" width="600" height="250" style={{objectFit: 'cover'}} />
      <h1>Project Blue</h1>
      <p>A living portfolio and collaboration hub for software projects.</p>
    </div>
  );
}

export default App;
