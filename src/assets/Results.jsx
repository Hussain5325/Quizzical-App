export default function Results({ score, render }) {
  return (
    <>
      <h1 className='heading'>
        {score === 0
          ? 'Don’t lose Hope!'
          : score === 1
          ? 'Better than zero!'
          : score === 2
          ? 'Bad!'
          : score === 3
          ? 'Ok!'
          : score === 4
          ? 'Not Bad!'
          : score === 5
          ? 'Good!'
          : score === 6
          ? 'Excellent!'
          : score === 7
          ? 'Amazing!'
          : score === 8
          ? 'Congratulations!'
          : 'Invalid score'}
      </h1>
      <p className='text'>You'r Score is {score} out of 8.</p>
      <button className='next-btn btn play' onClick={() => render(0)}>
        Play Again
      </button>
    </>
  )
}
