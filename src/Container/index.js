import { MainContainer, MultiPurposeContainer } from "./styled.js";

const Container = ({title, body, extraHeaderContent}) => (
  <MainContainer>
      <MultiPurposeContainer withButtons>
        <span className="form__title">{title}</span>
        {extraHeaderContent}
      </MultiPurposeContainer>
      <MultiPurposeContainer>
        {body}
      </MultiPurposeContainer>
    </MainContainer>
);

export default Container;