import React, { useState } from "react";
import {
  Title,
  MultiSelect,
  Toggle,
  Checkboxes,
  Searchbar,
  CheckboxItem,
  Selected,
  SelectedItem,
} from "./styles";

export default function App() {
  const [selected, setSelected] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnCheck = (event) => {
    if (event.target.checked) {
      setSelected([...selected, event.target.value]);
    } else {
      setSelected(selected.filter((item) => item !== event.target.value));
    }
  };

  const handleToggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <>
      <Title>Multi-select</Title>
      <MultiSelect>
        <Selected>
          <>
            {!selected.length ? (
              <p>Choose a tag</p>
            ) : (
              selected
                .slice(0, 3)
                .map((item) => <SelectedItem key={item}>{item}</SelectedItem>)
            )}
            {selected.length > 3 && <> - {selected.length}</>}
            <Toggle onClick={handleToggle}>⌵</Toggle>
          </>
        </Selected>
        <Checkboxes isExpanded={isExpanded}>
          <Searchbar placeholder="Search" />
          <CheckboxItem>
            <input type="checkbox" value="Family" onChange={handleOnCheck} />{" "}
            Family
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              value="FamilyInLaw"
              onChange={handleOnCheck}
            />{" "}
            Family in Law
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              value="Co-workers"
              onChange={handleOnCheck}
            />{" "}
            Co-workers
          </CheckboxItem>
          <CheckboxItem>
            <input type="checkbox" value="Friends" onChange={handleOnCheck} />{" "}
            Friends
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              value="HockeyClub"
              onChange={handleOnCheck}
            />{" "}
            Hockey club
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              value="StartupInvestor"
              onChange={handleOnCheck}
            />{" "}
            Startup Investor
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              value="SwissEmbassy"
              onChange={handleOnCheck}
            />{" "}
            Swiss Embassy
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              value="ZurichMeetup"
              onChange={handleOnCheck}
            />{" "}
            Zurich Meetup
          </CheckboxItem>
        </Checkboxes>
      </MultiSelect>
    </>
  );
}
