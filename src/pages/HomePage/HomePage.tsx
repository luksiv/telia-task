import MainLayout from "../../components/MainLayout.tsx";

export default function HomePage() {
  return (
    <MainLayout title={"👋 Welcome to our Mountain Data Repository!"}>
      <p>
        This is a unique platform where you can store and manage data about
        various mountains across the globe.
      </p>

      <p>
        Our platform allows you to record key details about each mountain, such
        as its height and the continent it's located in. This information can be
        useful for researchers, hikers, or anyone interested in geographical
        data.
      </p>
      <p>
        Start exploring the vast range of mountains we have in our database, or
        add your own to contribute to our growing collection of mountain data.
      </p>
    </MainLayout>
  );
}
