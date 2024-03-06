import { ForwardIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/20/solid";

export interface EmptyStateViewProps {
  message: string;
  subtitle: string;
  actionLabel: string;
  actionLink: string;
}

export default function EmptyStateView(props: EmptyStateViewProps) {
  return (
    <div className="text-center rounded-lg border-2 border-dashed border-gray-300 p-12">
      <ForwardIcon className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">
        {props.message}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{props.subtitle}</p>
      <div className="mt-6">
        <Link
          to={props.actionLink}
          className="inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          {props.actionLabel}
        </Link>
      </div>
    </div>
  );
}
