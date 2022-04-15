import React from 'react';
import {
  Flex as ChakraFlex,
  FlexProps as ChakraFlexProps,
} from '@chakra-ui/react';

const Container: React.FC<ChakraFlexProps> = (props) => (
  <ChakraFlex
    height="100vh"
    alignItems="center"
    backgroundColor="gray.800"
    color="grey.300"
    {...props}
  />
);
export default Container;
