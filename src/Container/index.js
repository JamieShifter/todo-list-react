import { MainContainer, MultiPurposeContainer } from "./styled.js";
import {FormTitle} from "../Form/styled";

const Container = ({title, body, extraHeaderContent}) => (
  <MainContainer>
      <MultiPurposeContainer withButtons>
        <FormTitle>{title}</FormTitle>
        {extraHeaderContent}
      </MultiPurposeContainer>
      <MultiPurposeContainer>
        {body}
      </MultiPurposeContainer>
    </MainContainer>
);

export default Container;