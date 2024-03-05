import MainLayout from "../../components/MainLayout.tsx";

export default function MountainsListPage() {
  return (
    <MainLayout title={"Mountains"}>
      <div>
        <h1>Mountains</h1>
        <ul>
          <li>
            <a href="/mountains/1">Mountain 1</a>
          </li>
          <li>
            <a href="/mountains/2">Mountain 2</a>
          </li>
          <li>
            <a href="/mountains/3">Mountain 3</a>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}
