import Accordion from './Accordion';
import './App.css';

const dataObj = [
  {
    "heading": "Section one",
    "desc": "This is a description of Section one"
  },
  {
    "heading": "Section two",
    "desc": "This is a description of Section two"
  },
  {
    "heading": "Section three",
    "desc": "This is a description of Section three"
  },
  {
    "heading": "Section four",
    "desc": "This is a description of Section four"
  },
]

function App() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold"> Accordion </h1>
      <hr className='w-48 border-2 border-red-900' />
      {
        dataObj.map(({heading, desc}) => (
          <Accordion heading={heading} desc={desc} />
        ))
      }
    </div>
  );
}

export default App;
