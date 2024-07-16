import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

/**SimpleMDE is a client-side component, so you need to disable the server side rendering */
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
