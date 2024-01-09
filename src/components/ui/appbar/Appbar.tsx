import Style from "./Appbar.module.css";

export const Appbar = () => {
  return (
    <nav className={Style.appbar}>
      <section className="flex gap-2">
        <h1>Logo</h1>
        <span>breadcrumb</span>
      </section>
      <section className="flex gap-2">
        <span>notifications</span>
        <span>user</span>
      </section>
    </nav>
  );
};
