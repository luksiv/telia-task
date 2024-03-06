import MainLayout from "../../components/MainLayout.tsx";

export default function ArchitecturePage() {
  return (
    <MainLayout title={"High-level AWS architecture diagram"}>
      <img
        src="/public/high-level-arch.png"
        alt="High-level AWS architecture"
        className="w-full"
      />
    </MainLayout>
  );
}
