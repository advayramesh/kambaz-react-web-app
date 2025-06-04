/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation">
      {!currentUser && (
        <>
          <Link
            to="/Kambaz/Account/Signin"
            className={pathname.includes("Signin") ? "text-primary" : ""}
          >
            Signin
          </Link>
          <br />
          <Link
            to="/Kambaz/Account/Signup"
            className={pathname.includes("Signup") ? "text-primary" : ""}
          >
            Signup
          </Link>
          <br />
        </>
      )}
      {currentUser && (
        <Link
          to="/Kambaz/Account/Profile"
          className={pathname.includes("Profile") ? "text-primary" : ""}
        >
          Profile
        </Link>
      )}
    </div>
  );
}
