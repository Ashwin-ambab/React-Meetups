import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className="layout">{props.children}</main>
    </div>
  );
};
export default Layout;
