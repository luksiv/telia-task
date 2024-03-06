export default function Loader() {
  return (
    <div
      className="inline-block h-12 w-12 animate-spin rounded-full border-4"
      style={{
        verticalAlign: "-0.125em",
        border: "0.25em solid",
        borderRightColor: "#9333ea",
      }}
      role="status"
    />
  );
}
