import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issueId = parseInt(params.id);
  if (isNaN(issueId)) notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gapX="3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toString()}</Text>
      </Flex>
      {/* prose class is from the '@tailwindcss/typography' plugin */}
      <Card className="prose" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
/*Buy default, tailwind unstyle all html tags. To show the
markdown properly, use a plugin  https://github.com/tailwindlabs/tailwindcss-typography*/
