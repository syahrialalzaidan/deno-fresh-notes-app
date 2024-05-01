import { Component } from "preact";
import JournalList from "./JournalList.tsx"; // Assuming JournalList component file is in the same directory
import Journal from "./Journal.tsx";
import JournalBox from "./JournalBox.tsx";
import {
  JournalBoxProps,
  JournalListProps,
  JournalProps,
} from "../utils/interface.tsx";

export default class JournalFactory extends Component {
  createJournalList = (
    { id, title, content, createdAt, setCurrentJournal }: JournalListProps,
  ) => {
    return (
      <JournalList
        key={id}
        id={id}
        title={title}
        content={content}
        createdAt={createdAt}
        setCurrentJournal={setCurrentJournal}
      />
    );
  };

  createJournal = ({ data, factory }: JournalProps) => {
    return <Journal data={data} factory={factory} />;
  };

  createJournalBox = ({ id, title, content, createdAt }: JournalBoxProps) => {
    return (
      <JournalBox
        key={id}
        id={id}
        title={title}
        content={content}
        createdAt={createdAt}
      />
    );
  };

  render() {
    return null;
  }
}
