export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/issues/new",
    "/issues/edit/:id+", // -- the '+' it's a modifier to the parameter, so you need one or more parameters, anything that comes after edit/ it's include in the middleware function
  ],
};
