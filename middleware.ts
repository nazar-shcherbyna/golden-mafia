import { auth } from "./auth";

export default auth((req) => {
  console.log("middleware", !!req.auth);

  const objWithEmptyAncestor = new Proxy(
    {},
    {
      get(obj, prop, receiver) {
        if (prop in obj) {
          return obj[prop];
        }
        obj[prop] = {};

        return Reflect.get(obj, prop, receiver);
      },
    }
  );

  objWithEmptyAncestor.a.b = 1;
  objWithEmptyAncestor.a.c = 1;

  console.log("objWithEmptyAncestor", objWithEmptyAncestor);
});

export const config = {
  matcher: ["/auth/login"],
};
