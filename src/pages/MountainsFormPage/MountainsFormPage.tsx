import MainLayout from "../../components/MainLayout.tsx";
import { useParams } from "react-router";

export default function MountainsFormPage() {
  const { mountainId } = useParams<{ mountainId: string }>();

  return (
    <MainLayout
      title={mountainId ? `Edit Mountain ${mountainId}` : "Add Mountain"}
    >
      <div>
        <h1>Mountains</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="height">Height</label>
          <input type="text" id="height" name="height" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </MainLayout>
  );
}
