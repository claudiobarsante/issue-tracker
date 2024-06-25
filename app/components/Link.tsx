import { Link as RadixLink } from "@radix-ui/themes";
import NextLink from "next/link";
import { ReactNode } from "react";

/**
 * https://nextjs.org/docs/app/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
If the child of Link is a custom component that wraps an <a> tag, you must add passHref to Link. 
This is necessary if you’re using libraries like styled-components. Without this, 
the <a> tag will not have the href attribute, which hurts your site's accessibility and might affect SEO. 
If you're using ESLint, there is a built-in rule next/link-passhref to ensure correct usage of passHref. 
* 
 */
interface Props {
  href: string;
  children: ReactNode;
}
const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
