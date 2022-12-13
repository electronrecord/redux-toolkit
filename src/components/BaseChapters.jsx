import { useSelector, useDispatch } from 'react-redux'
import { ADD_CHAPTER } from '../store/modules/chapters'

export const BaseChapters = function () {
  const chapters = useSelector((state) => state.chapters.data)
  const selectedChapter = useSelector((state) => state.questions.selectedChapter)
  const dispatch = useDispatch()

  function handleAddChapter () {
    const chapter = document.getElementById('chapter').value
    chapter && dispatch(ADD_CHAPTER(chapter))
  }

  return (
    <div>
      <input type="text" id='chapter' />
      <button onClick={handleAddChapter}>ADD CHAPTER</button>
      <ul>
        {
          chapters?.map(chapter => (
            <li key={chapter}>{chapter}</li>
          ))
        }
      </ul>
      <h4>Selected chapter: {selectedChapter}</h4>
    </div>
  )
}
