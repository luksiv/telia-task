import MainLayout from "../../components/MainLayout.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useCreateMountain,
  useGetMountain,
  usePatchMountain,
} from "../../api/Mountains/Mountains.queries.ts";
import { FormProvider, useForm } from "react-hook-form";
import { ApiContract } from "../../api/ApiContract.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { ROUTE_PATHS } from "../../router/routes.config.tsx";
import { enqueueSnackbar } from "notistack";
import { generatePath } from "react-router";
import { useEffect } from "react";
import EContinent = ApiContract.MountainsApiContract.EContinent;

interface MountainFormData {
  name: string;
  continent: EContinent;
  height: string;
  pictureUrl: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  continent: yup.string().required("Continent is required"),
  height: yup
    .string()
    .required("Height is required")
    .matches(/^\d+$/, "Height must be a number"),
  pictureUrl: yup.string().required("Picture is required").url("Invalid URL"),
});

export default function MountainsFormPage() {
  const navigate = useNavigate();
  const { mountainId } = useParams<{ mountainId?: string }>();

  const isEditing = !!mountainId;

  const { data: mountainData, isLoading: isMountainLoading } =
    useGetMountain(mountainId);

  const form = useForm<MountainFormData>({
    // @ts-expect-error -- some issue with react-hook-form types
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: mountainData?.name ?? "",
      continent: mountainData?.continent ?? EContinent.EUROPE,
      height: mountainData?.height?.toString() ?? "",
      pictureUrl: mountainData?.pictureUrl ?? "",
    },
  });

  useEffect(() => {
    if (mountainId && mountainData) {
      form.reset({
        name: mountainData.name,
        continent: mountainData.continent,
        height: mountainData.height.toString(),
        pictureUrl: mountainData.pictureUrl,
      });
    }
  }, [form, mountainData, mountainId]);

  const createMutation = useCreateMountain();
  const patchMutation = usePatchMountain();

  const onSubmit = (data: MountainFormData) => {
    if (isEditing) {
      patchMutation.mutate(
        {
          id: mountainId,
          name: data.name,
          height: +data.height,
          continent: data.continent,
          pictureUrl: data.pictureUrl,
        },
        {
          onSuccess: () => {
            enqueueSnackbar("Mountain updated", { variant: "success" });
            navigate(
              generatePath(ROUTE_PATHS.mountainsDetails, {
                mountainId,
              }),
            );
          },
          onError: () => {
            enqueueSnackbar("Failed to update mountain", { variant: "error" });
          },
        },
      );
    } else {
      createMutation.mutate(
        {
          name: data.name,
          height: +data.height,
          continent: data.continent,
          pictureUrl: data.pictureUrl,
        },
        {
          onSuccess: (result) => {
            enqueueSnackbar("Mountain created", { variant: "success" });
            navigate(
              generatePath(ROUTE_PATHS.mountainsDetails, {
                mountainId: result.id,
              }),
            );
          },
          onError: () => {
            enqueueSnackbar("Failed to create mountain", { variant: "error" });
          },
        },
      );
    }
  };

  const pictureUrl = form.watch("pictureUrl");

  return (
    <MainLayout
      title={isEditing ? `Edit mountain` : "Add mountain"}
      isLoading={
        createMutation.isPending ||
        patchMutation.isPending ||
        (isEditing && isMountainLoading)
      }
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <div className="border-b border-gray-900/10 pb-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="name"
                      {...form.register("name", { required: true })}
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      placeholder={"Mont Blanc"}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="continent"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Continent
                  </label>
                  <div className="mt-2">
                    <select
                      id="continent"
                      {...form.register("continent", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {Object.values(EContinent).map((continent) => (
                        <option key={continent} value={continent}>
                          {continent}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="height"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Height (meters)
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="height"
                      {...form.register("height", { required: true })}
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      placeholder={"4808"}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="pictureUrl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Picture
                  </label>
                  <div className="mt-2">
                    <input
                      type="url"
                      id="pictureUrl"
                      {...form.register("pictureUrl", { required: true })}
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      placeholder={"https://example.com/image.jpg"}
                    />
                  </div>
                  {pictureUrl && (
                    <div className="mt-4">
                      <img
                        src={pictureUrl}
                        alt="Mountain"
                        className="h-64 w-64 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {Object.entries(form.formState.errors).length > 0 && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <XCircleIcon
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      There were {Object.entries(form.formState.errors).length}{" "}
                      errors with your submission
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <ul role="list" className="list-disc space-y-1 pl-5">
                        {Object.entries(form.formState.errors).map(
                          ([key, value]) => (
                            <li key={key}>{value.message}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link
              to={ROUTE_PATHS.mountainsList}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Save
            </button>
          </div>
        </form>
      </FormProvider>
    </MainLayout>
  );
}
