import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';


function App() {

  const [showModal, setShowModal] = useState(false);
  const [getUrl, setGetUrl] = useState('');

  const people = [
    {
      url: 'https://www.youtube.com/watch?v=XVchWB3Bx5k',
      title: 'web developer',
      phone: '01626287272'
    },
    {
      url: 'https://www.youtube.com/watch?v=gxCtHmPOqtg',
      title: 'web developer',
      phone: '01626287272'
    },
    {
      url: 'https://www.youtube.com/watch?v=1O0ZOxvvrQ8',
      title: 'web developer',
      phone: '01626287272'
    },
  ];

  const handleClick = (event) => {
    const url = event.target.dataset.url;
    const youtubeID = url && url.split('v=')[1];
    console.log(youtubeID);
    setShowModal(true);
    setGetUrl(youtubeID);
  }


  return (
    <div className="App h-screen flex flex-col">
      <Header />
      {showModal && <Modal url={getUrl} />}
      <main className='flex-1 p-0 container mx-auto p-10'>
        <ul className='list grid grid-cols-3 cursor-pointer gap-5'>
          {
            people.map((person, index) => (
              <li key={index} className="hover:bg-slate-100 shadow-md rounded-md transition border p-5" onClick={handleClick} data-url={person.url}>
                <div className='mt-4'>
                  <p>{person.phone}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
