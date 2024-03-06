import MainLayout from "../../components/MainLayout.tsx";

export default function RequirementsPage() {
  return (
    <MainLayout title={"Task requirements"}>
      <fieldset className="border-b border-t border-gray-200">
        <legend className="sr-only">Notifications</legend>
        <div className="divide-y divide-gray-200">
          {[
            {
              name: "The web application should consist of a frontend and a backend.",
              description:
                "React frontend and serverless backend using AWS Lambda and API Gateway.",
              isChecked: true,
            },
            {
              name: "The frontend should be a single-page application (SPA) built using a modern JavaScript framework of your choice (e.g., React, Angular, Vue.js).",
              description: "React frontend deployed using AWS Amplify.",
              isChecked: true,
            },
            {
              name: "The backend should be a serverless API built using AWS Lambda and API Gateway.",
              description:
                "Done using AWS Lambda and API Gateway with AWS Amplify.",
              isChecked: true,
            },
            {
              name: "The frontend should interact with the backend API to perform basic CRUD operations (Create, Read, Update, Delete) on a resource of your choice (e.g., a todo list, a blog post).",
              description:
                "The frontend interacts with the backend API to perform CRUD operations on a mountains list.",
              isChecked: true,
            },
            {
              name: "The application should incorporate authentication and authorization using AWS Cognito.",
              description: "Implemented using AWS Amplify and Cognito.",
              isChecked: true,
            },
            {
              name: "The application should use AWS DynamoDB or another suitable AWS database service to store and retrieve data.",
              description: "Mountain data is stored in Amazon DynamoDB.",
              isChecked: true,
            },
            {
              name: "The architecture should be scalable to accommodate increasing traffic and user demand.",
              description:
                "Since the architecture is serverless, it is scalable by default.",
              isChecked: true,
            },
            {
              name: "The architecture should be highly available to minimize downtime.",
              description: "The architecture is highly available by default.",
              isChecked: true,
            },
            {
              name: "The architecture should incorporate security best practices to protect user data.",
              description:
                "AWS Amplify and Cognito are used to incorporate security best practices.",
              isChecked: true,
            },
          ].map((item) => (
            <div
              key={item.name}
              className="relative flex items-start pb-4 pt-3.5"
            >
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  {item.name}
                </label>
                <p id="comments-description" className="text-gray-500">
                  {item.description}
                </p>
              </div>
              <div className="ml-3 flex h-6 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={item.isChecked}
                  onChange={() => {}}
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </MainLayout>
  );
}
