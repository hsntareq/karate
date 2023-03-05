import './App.css';
import Modal from './components/Modal';
// import Modal from './components/Modal';


function App() {
  const people = [{
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
  {
    url: 'https://www.youtube.com/watch?v=XVchWB3Bx5k',
    title: 'web developer',
    phone: '01626287272'
  },
  {
    url: 'https://www.youtube.com/watch?v=XVchWB3Bx5k',
    title: 'web developer',
    phone: '01626287272'
  },
  {
    url: 'https://www.youtube.com/watch?v=XVchWB3Bx5k',
    title: 'web developer',
    phone: '01626287272'
  },
  {
    url: 'https://www.youtube.com/watch?v=XVchWB3Bx5k',
    title: 'web developer',
    phone: '01626287272'
  },
  {
    url: 'https://www.youtube.com/watch?v=XVchWB3Bx5k',
    title: 'web developer',
    phone: '01626287272'
  },
  {
    url: 'https://www.youtube.com/watch?v=XVchWB3Bx5k',
    title: 'web developer',
    phone: '01626287272'
  }
  ];
  return (
    <div className="App h-screen flex flex-col">
      
      <header className='shadow-md py-5 w-full'>
        <h1 className='font-bold text-2xl'>Karate kata, zuki, uke, geri</h1>
      </header>
      <main className='flex-1 p-0 container mx-auto p-10'>
        <ul className='list grid grid-cols-3 cursor-pointer gap-5'>
          {
            people.map(person => (
              <li class="hover:bg-slate-100 shadow-md rounded-md transition border p-5">
                <Modal name='Hasan Tareq'/>
                <div className='mt-4'>
                  <p>{person.phone}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </main>
      <footer className='w-full border-t py-3 bg-gray-200'>
        Copyright &copy; 2023. All right reserved.
      </footer>
    </div>
  );
}

export default App;
