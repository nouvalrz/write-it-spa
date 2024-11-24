import EmptyNoteMessage from './notes/EmptyNoteMessage';
import NoteList from './notes/NoteList';

function AppArchiveNoteList({ notes, onDeleteNote, onToggleNoteArchive }) {
  return (
    <div className="note-list">
      <h2>Archive Notes</h2>
      {notes.length != 0 ? (
        <NoteList
          notes={notes}
          onDeleteNote={onDeleteNote}
          onToggleNoteArchive={onToggleNoteArchive}
        />
      ) : (
        <EmptyNoteMessage />
      )}
    </div>
  );
}

export default AppArchiveNoteList;
