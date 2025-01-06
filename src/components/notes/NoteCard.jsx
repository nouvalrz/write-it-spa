import { Link } from 'react-router-dom';
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
  withButtons = true,
}) {
  return (
    <div className="note-card">
      <Link className="note-card__title" to={`/note/${id}`}>
        {title}
      </Link>
      <p className="note-card__date">{showFormattedDate(createdAt)}</p>
      <p className="note-card__body">{body}</p>
      {withButtons && (
        <>
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
        </>
      )}
    </div>
  );
}

export default NoteCard;
