import { useState } from 'react'

export default function Quiz({ data, score, render }) {
  const [count, setCount] = useState(0)

  const options = data.map(item => {
    return [...item.incorrect_answers, item.correct_answer]
  })

  function checkAnswer(userAnswer, e) {
    if (userAnswer === data[count].correct_answer) {
      e.target.style.backgroundImage = 'url(/correct.svg)'
      document.querySelectorAll('.option').style.backgroundColor = 'blue'
      e.target.style.backgroundColor = 'hsl(260, 75%, 70%)'
      score.current += 1
    } else {
      e.target.style.backgroundImage = 'url(/cross.svg)'
    }
    document.querySelector('.question-box').style.pointerEvents = 'none'
  }

  const optionsArray = options[count]

  optionsArray.sort(() => Math.random() * 2 - 1)

  return (
    <>
      <h1 className='heading'>
        Question: {count + 1}/{data.length}
      </h1>
      <section className='question-box'>
        <h1 className='heading-2'>
          {data[count].question
            .replaceAll('&quot;', '"')
            .replaceAll('&#039;', "'")}
        </h1>
        {optionsArray.map(option => (
          <p
            key={crypto.randomUUID()}
            className='option'
            onClick={e => checkAnswer(option, e)}
          >
            {option.replaceAll('&quot;', '"').replaceAll('&#039;', "'")}
          </p>
        ))}
      </section>
      {count !== 7 ? (
        <button
          className='next-btn btn'
          onClick={() => {
            document.querySelector('.question-box').style.pointerEvents = 'auto'
            setCount(prev => prev + 1)
          }}
        >
          Next Question
        </button>
      ) : (
        <button className='next-btn btn' onClick={() => render()}>
          Results
        </button>
      )}
    </>
  )
}
