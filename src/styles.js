import styled from "styled-components";

export const Title = styled.h3`
  width: 400px;
  margin: 40px auto;
  height: 1px;
`;

export const MultiSelect = styled.form`
  width: 400px;
  margin: 40px auto;
  background: #eee;
  border-radius: 20px;
`;

export const Selected = styled.ul`
  display: flex;
  padding: 5px;
  margin: 0;
`;

export const SelectedItem = styled.li`
  list-style: none;
  background: pink;
  border-radius: 10px;
  padding: 2px 4px;
  margin: 5px 5px 0px 5px;
`;

export const Checkboxes = styled.ul`
  display: ${({ isExpanded }) => (isExpanded ? "flex" : "none")};
  justify-content: start;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0;
`;

export const CheckboxItem = styled.li`
  width: 50%;
  list-style: none;
`;

export const Toggle = styled.button.attrs({ type: "button" })`
  padding: 8px;
  margin-left: auto;
  cursor: pointer;
  border: none;
`;

export const Searchbar = styled.input`
  margin-top: 10px;
  display: flex;
  margin: 10px auto;
  border-radius: 10px;
  border: none;
  width: 380px;
  height: 25px;
`;
