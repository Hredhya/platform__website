import styled from "styled-components";

export const Wrapper = styled.div``;

export const TeamContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 0;
  }
  p {
    margin: 0;
  }
`;

export const MembersContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 5rem;

  & > li {
    margin-right: 5rem;
    margin-bottom: 1rem;
  }
`;
