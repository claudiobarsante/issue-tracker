import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

/**To show the title and the description at the same time, you have to load
 * the intire component dynamic, because previously the SimpleMDE editor
 * was lazy loaded
 */
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false, // -- Make sure to disable SSR for the SimpleMDE Editor work
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
