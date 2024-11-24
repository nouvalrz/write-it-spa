import NoteCard from './NoteCard';

function NoteList({ notes, onDeleteNote, onToggleNoteArchive }) {
  return (
    <div className="note-list__items-wrapper">
      {notes.map((note) => (
        <NoteCard
          {...note}
          key={note.id}
          onDeleteNote={onDeleteNote}
          onToggleNoteArchive={onToggleNoteArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;
