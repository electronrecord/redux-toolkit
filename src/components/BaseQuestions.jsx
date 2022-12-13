import {useSelector, useDispatch} from "react-redux"
import {SET_SELECTED_CHAPTER} from "../store/modules/questions"

export const BaseQuestions = function () {
  const chapters = useSelector((state) => state.chapters.data)
  const selectedChapter = useSelector((state) => state.questions.selectedChapter)
  const dispatch = useDispatch()

  function handleChapterSelection (ev) {
    const chapter = ev.target.value
    dispatch(SET_SELECTED_CHAPTER(chapter))
  }

  return (
    <div>
      <h3>Base Questions</h3>
      <select onChange={handleChapterSelection}>
        {
          chapters.map(chapter => (
            <option value={chapter}
                    key={chapter}>{chapter}</option>
          ))
        }
      </select>
      <span>Selected chapter: {selectedChapter}</span>
    </div>
  )
}
