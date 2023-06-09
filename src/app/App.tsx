import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Button,
  Stack,
  Text,
  Container,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container mt={8}>
      <Card>
        <CardHeader>
          <Heading size="md">Questionnaire</Heading>
        </CardHeader>

        <CardBody>
          <Stack spacing="4">
            <Text pt="2" fontSize="sm">
              Count : {count}
            </Text>
            <HStack spacing="24px">
              <Button onClick={() => setCount((c) => c > 0 ? c - 1 : c)}>Decrement</Button>
              <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
