import styled from "styled-components";

export const TextArrtibute = styled.label`
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 160%;
  cursor: pointer;
  color: #1d1f22;
  border: 1px solid #1d1f22;
  padding: 0 5px;
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + ${TextArrtibute} {
    background: #1d1f22;
    color: white;
  }
`;

export const TextWrapper = styled.div`
  margin-left: 3px;
`;

export const ColorAttribute = styled.label`
  font-family: "Source Sans Pro";
  background: ${(props) => props.color};
  cursor: pointer;
  padding: 0 8px; 
  outline-offset: -1 px; 
    outline: 1px solid rgba(0,0,0, 0.1);
  }
  
`;

export const RadioInputColor = styled.input`
  display: none;

  &:checked + ${ColorAttribute} {
    outline-offset: 1px;
    outline: 1px solid #5ece7b;
  }
`;

export const AttributesWrap = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
