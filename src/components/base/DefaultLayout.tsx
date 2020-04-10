import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {};

const DefaultLayout: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
