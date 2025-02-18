import UserForm from "../components/users/user-form";
import UserTable from "../components/users/user-table";
export const UserPage = () => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <UserForm />
        <UserTable />
      </div>
    </>
  );
};
