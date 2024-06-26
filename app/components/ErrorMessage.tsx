import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  // -- check if there's a error message
  if (!children) return null;

  return (
    <Text color="red" as="p" role="alert">
      {children}
    </Text>
  );
};

export default ErrorMessage;
