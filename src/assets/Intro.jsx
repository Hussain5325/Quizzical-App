export default function Intro({ handleChange, SelectOptions, render }) {
  return (
    <>
      <h1 className='heading'>Quizzical App</h1>
      <p className='text'>
        Quiz apps provide an engaging and interactive way for users to learn and
        test their knowledge.
      </p>
      <form>
        <label htmlFor='category' className='input'>
          Category
        </label>
        <select
          name='category'
          id='category'
          value={SelectOptions.category}
          onChange={handleChange}
        >
          <option value='any'>Any Category</option>
          <option value='9'>General Knowledge</option>
          <option value='10'>Entertainment: Books</option>
          <option value='11'>Entertainment: Film</option>
          <option value='12'>Entertainment: Music</option>
          <option value='13'>Entertainment: Musicals & Theatres</option>
          <option value='14'>Entertainment: Television</option>
          <option value='15'>Entertainment: Video Games</option>
          <option value='16'>Entertainment: Board Games</option>
          <option value='17'>Science & Nature</option>
          <option value='18'>Science: Computers</option>
          <option value='19'>Science: Mathematics</option>
          <option value='20'>Mythology</option>
          <option value='21'>Sports</option>
          <option value='22'>Geography</option>
          <option value='23'>History</option>
          <option value='24'>Politics</option>
          <option value='25'>Art</option>
          <option value='26'>Celebrities</option>
          <option value='27'>Animals</option>
          <option value='28'>Vehicles</option>
          <option value='29'>Entertainment: Comics</option>
          <option value='31'>Entertainment: Japanese Anime & Manga</option>
          <option value='32'>Entertainment: Cartoon & Animations</option>
        </select>
        <label htmlFor='difficulty' className='input'>
          Difficulty
        </label>
        <select
          name='difficulty'
          id='difficulty'
          onChange={handleChange}
          value={SelectOptions.difficulty}
        >
          <option value='any'>Any Difficulty</option>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
        <button
          className='start-btn btn'
          onClick={e => {
            e.preventDefault()
            return render()
          }}
        >
          Start Quiz
        </button>
      </form>
    </>
  )
}
