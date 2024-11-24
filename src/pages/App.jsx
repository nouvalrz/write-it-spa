import React from 'react';
import AppHeader from '../components/AppHeader';
import { getInitialData } from '../utils';
import AppNoteForm from '../components/AppNoteForm';
import BackLine from '../assets/images/back-line.svg';
import AppSearchForm from '../components/AppSearchForm';
import AppActiceNoteList from '../components/AppActiveNoteList';
import AppArchiveNoteList from '../components/AppArchiveNoteList';
import AppFooter from '../components/AppFooter';
import CircleGradient from '../assets/images/circle-gradient.svg';
import BodyCircleGradient from '../assets/images/body-circle-gradient.svg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: '',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onToggleNoteArchiveHandler =
      this.onToggleNoteArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((state) => {
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const noteIndex = this._findNoteIndex(id);

    if (noteIndex === -1) {
      return;
    }

    this.setState((state) => {
      const updatedNotes = [...state.notes];
      updatedNotes.splice(noteIndex, 1);
      return {
        ...state,
        notes: updatedNotes,
      };
    });
  }

  onToggleNoteArchiveHandler(id) {
    const noteIndex = this._findNoteIndex(id);

    if (noteIndex === -1) {
      return;
    }

    this.setState((state) => {
      const updatedNotes = [...state.notes];
      updatedNotes.splice(noteIndex, 1, {
        ...state.notes[noteIndex],
        archived: !state.notes[noteIndex].archived,
      });

      return {
        ...state,
        notes: updatedNotes,
      };
    });
  }

  onSearchChangeHandler(event) {
    this.setState((state) => {
      return {
        ...state,
        searchQuery: event.target.value,
      };
    });
  }

  _findNoteIndex(id) {
    return this.state.notes.findIndex((item) => item.id === id);
  }

  render() {
    const filteredNotes = this.state.notes.filter(
      (note) =>
        note.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) != -1
    );

    return (
      <>
        <header>
          <AppHeader></AppHeader>
        </header>
        <main>
          <img src={BackLine} className="back-line" />
          <img src={BodyCircleGradient} className="body-circle-gradient" />
          <AppNoteForm onAddNote={this.onAddNoteHandler} />
          <AppSearchForm onChange={this.onSearchChangeHandler} />

          <AppActiceNoteList
            notes={filteredNotes.filter((item) => !item.archived)}
            onDeleteNote={this.onDeleteNoteHandler}
            onToggleNoteArchive={this.onToggleNoteArchiveHandler}
          />

          <AppArchiveNoteList
            notes={filteredNotes.filter((item) => item.archived)}
            onDeleteNote={this.onDeleteNoteHandler}
            onToggleNoteArchive={this.onToggleNoteArchiveHandler}
          />
          <img src={CircleGradient} className="circle-gradient" />
        </main>
        <footer>
          <AppFooter></AppFooter>
        </footer>
      </>
    );
  }
}

export default App;
