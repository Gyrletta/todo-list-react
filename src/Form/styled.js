import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #28a745;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 225, 0.5);
  }

  &.input-error {
    border: 1px solid gray;
    background-color: #f0f0f0;
    box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      border: 1px solid #999;
    }
  }
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background: teal;
  color: white;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgb(1, 104, 104);
    transform: scale(1.05);
  }

  &:active {
    background: rgb(25, 175, 175);
  }
`;
