import Head from "next/head";
import { useRouter } from "next/router";

import Header from "@/components/header";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const ErrorPage = ({ children, title = "Gigi Brave Cakes – Baked with Love, Designed to Impress!" }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>Page not found &mdash; {title}</title>
      </Head>

      <Header isErrorPage />

      <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
    </div>
  );
};

export default ErrorPage;
