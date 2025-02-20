import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}




//{notes.map(note => 
//
//  <li key={note.id}>
//  {note.content}
// </li>
export default App

