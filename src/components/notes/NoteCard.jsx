import { showFormattedDate } from '../../utils';
import Button from '../base/Button';

function NoteCard({
  id,
  title,
  body,
  archived,
  createdAt,
  onDeleteNote,
  onToggleNoteArchive,
}) {
  return (
    <div className="note-card">
      <h3 className="note-card__title">{title}</h3>
      <p className="note-card__date">{showFormattedDate(createdAt)}</p>
      <p className="note-card__body">{body}</p>
      <div className="note-card__actions">
        <Button
          onClick={() => onToggleNoteArchive(id)}
          className="note-card_archive-button"
          title={archived ? 'Unarchive' : 'Archive'}
        />
        <Button
          onClick={() => onDeleteNote(id)}
          className="note-card_delete-button"
          iconClass="fa-regular fa-trash-can"
        />
      </div>
    </div>
  );
}

export default NoteCard;
