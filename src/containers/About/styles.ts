import styled from 'styled-components'

export const GitHubSection = styled.div`
  margin-bottom: 32px;
  margin-top: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
