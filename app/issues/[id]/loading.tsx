import { Box, Card, Flex } from "@radix-ui/themes";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailpage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gapX="3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      {/* prose class is from the '@tailwindcss/typography' plugin */}
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailpage;
