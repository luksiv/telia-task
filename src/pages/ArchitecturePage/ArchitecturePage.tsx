import MainLayout from "../../components/MainLayout.tsx";

export default function ArchitecturePage() {
  return (
    <MainLayout title={"High-level AWS architecture diagram"}>
      <img
        src="https://i.ibb.co/K2C51Ns/high-level-arch.png"
        alt="High-level AWS architecture"
        className="w-full"
      />
    </MainLayout>
  );
}
