import React, { useState, useEffect } from 'react';
import './bootstrap.css';
import Header from './components/Header';
import InitialQuestion from './components/InitialQuestion';
import Form from './components/Form';
import ListExpenditures from './components/ListExpenditures';
import ControlRemainder from './components/ControlRemainder';



function App() {

  const [budget, setBudget] = useState(0);
  const [remainder, setRemainder]=useState(0);
  const [questionBudget, setQuestionBudget] = useState(true);
  const [createExpenditure, setCreateExpenditure] = useState(false);
  const [expenditure, setExpenditure] = useState({})
  const [allExpenditures, setAllExpenditures] = useState([])

  useEffect(() => {
    if (createExpenditure) {
      const listExpenditures = [...allExpenditures, expenditure];
      setAllExpenditures(listExpenditures);

      const budgetRemainder = remainder-expenditure.quantityExpenditure;
      setRemainder(budgetRemainder)

      setCreateExpenditure(false)
    }
  }, [expenditure, createExpenditure, allExpenditures, remainder])



  return (
    <div className="App">
      <Header />
      <main className='container'>
        {(questionBudget) ?

          <InitialQuestion 
            setBudget={setBudget} 
            setQuestionBudget={setQuestionBudget} 
            setRemainder={setRemainder}/> :

          <div className='row container-InitialQuestion d-flex justify-content-center align-items-center'>
            <div className='col-12 col-lg-6 '>
              <Form
                setExpenditure={setExpenditure}
                setCreateExpenditure={setCreateExpenditure} />
            </div>
            <div className='result py-3 bg-light col-12 col-lg-6 order-first order-lg-2'>
            <ControlRemainder
              budget={budget}
              remainder={remainder}/>
              <ListExpenditures
                listExpenditures={allExpenditures} />
            </div>

          </div>
        }
      </main>
    </div>
  );
}

export default App;
