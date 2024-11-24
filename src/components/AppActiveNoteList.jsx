import EmptyNoteMessage from './notes/EmptyNoteMessage';
import NoteList from './notes/NoteList';

function AppActiceNoteList({ notes, onDeleteNote, onToggleNoteArchive }) {
  return (
    <div className="note-list">
      <h2>Active Notes</h2>
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

export default AppActiceNoteList;
