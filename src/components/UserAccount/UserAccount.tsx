import { UserAccountCard } from "./UserAccountCard";
import { UserAccountAccordion } from "./UserAccountAccordion";
import "./UserAccount.css";

export function UserAccount() {
  return (
    <div className="d-flex justify-content-center mt-3 mb-3">
      <div className="account-card">
        <UserAccountCard />
      </div>
      <div className="d-flex justify-content-center">
        <UserAccountAccordion />
      </div>
    </div>
  );
}
