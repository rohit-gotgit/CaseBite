import { Suspense } from "react";
import ThankYou from "../thank-you/ThankYou"

const Page = () => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
};

export default Page;
