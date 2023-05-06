export default function Results({ score, render }) {
  return (
    <>
      <h1 className='heading'>
        {score.current === 0
          ? 'Don’t lose Hope!'
          : score.current === 1
          ? 'Better than zero!'
          : score.current === 2
          ? 'Bad!'
          : score.current === 3
          ? 'Ok!'
          : score.current === 4
          ? 'Not Bad!'
          : score.current === 5
          ? 'Good!'
          : score.current === 6
          ? 'Excellent!'
          : score.current === 7
          ? 'Amazing!'
          : score.current === 8
          ? 'Congratulations!'
          : 'Invalid score'}
      </h1>
      <p className='text'>You'r Score is {score.current} out of 8.</p>
      <button
        className='next-btn btn play'
        onClick={() => {
          render(0)
          score.current = 0
        }}
      >
        Play Again
      </button>
    </>
  )
}
