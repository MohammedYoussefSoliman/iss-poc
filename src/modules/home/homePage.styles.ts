import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Flex } from "@components";

export const AccordionTrigger = styled(Flex)(
  ({ theme: { pallet } }) => css`
    background-color: ${pallet.primary[200]};
    cursor: pointer;
    border-radius: 10px;
    &:hover {
      background-color: ${pallet.primary[300]};
    }
  `
);

export const AccordionContent = styled(Flex)(
  ({ theme: { pallet } }) => css`
    background-color: ${pallet.secondary[200]};
    cursor: pointer;
  `
);
