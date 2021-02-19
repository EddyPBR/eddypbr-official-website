import styled from "styled-components";

interface ILineProps {
  color?: string;
  marginTop?: Number;
  marginBottom?: Number;
}

export const LineStyle = styled.div<ILineProps>`
  height: 0.3rem;
  width: 100%;
  color: ${(props) => props.theme.colors.purple};
  background: radial-gradient(
    50% 50% at 50% 50%,
    ${(props) => props.color || "#FFFFFF"} 0%,
    rgba(187, 84, 158, 0) 100%
  );
  margin-top: ${(props) => `${props.marginTop}px` || 0};
  margin-Bottom: ${(props) => `${props.marginBottom}px` || 0};
`;

export default LineStyle;
