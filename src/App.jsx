import { useEffect, useState, useRef } from 'react'
import Intro from './assets/Intro'
import Quiz from './assets/Quiz'
import Results from './assets/Results'

export default function App() {
  const [renderComponent, setRenderComponent] = useState(0)
  const scoreRef = useRef(0)
  const [data, setData] = useState([])
  const [SelectOptions, setSelectOptions] = useState({
    category: '',
    difficulty: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setSelectOptions(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=8&type=multiple&category=${SelectOptions.category}&difficulty=${SelectOptions.difficulty}`,
    )
      .then(res => res.json())
      .then(json => setData(json.results))
      .catch(err => console.error(err))
  }, [SelectOptions])

  function handleCount() {
    setRenderComponent(prev => prev + 1)
  }
  
  if (renderComponent === 0) {
    return scoreRef = 0
  }

  return (
    <section className='container'>
      {renderComponent === 0 && (
        <Intro
          handleChange={handleChange}
          SelectOptions={SelectOptions}
          render={handleCount}
        />
      )}
      {renderComponent === 1 && (
        <Quiz data={data} score={scoreRef} render={handleCount} />
      )}
      {renderComponent === 2 && (
        <Results score={scoreRef.current} render={setRenderComponent} />
      )}
    </section>
  )
}
