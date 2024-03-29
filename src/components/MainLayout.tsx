import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classnames from "classnames";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { navigationRoutes } from "../router/routes.config.tsx";
import { Link, useLocation } from "react-router-dom";
import LoadingWrapper from "./LoadingWrapper.tsx";
import ButtonsList, { ButtonProps } from "./ButtonsList.tsx";

interface MainLayoutProps {
  title: string;
  buttons?: ButtonProps[];
  children: React.ReactNode;
  isLoading?: boolean;
}

const teliaLogoUrl =
  "https://cdn.voca.teliacompany.com/logo/Telia-primary-default-v2.svg";

export default function MainLayout(props: MainLayoutProps) {
  const auth = useAuthenticator();
  const location = useLocation();

  const navigation = navigationRoutes.map((route) => {
    return {
      name: route.label,
      to: route.path,
      current: location.pathname === route.path,
    };
  });

  const userNavigation = [
    {
      name: "Sign out",
      onClick: () => {
        auth.signOut();
      },
    },
  ];

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={teliaLogoUrl}
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src={teliaLogoUrl}
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={`desktop-${item.name}`}
                          to={item.to}
                          className={classnames(
                            item.current
                              ? "border-purple-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <UserIcon className="h-8 w-8 rounded-full" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  key={item.name}
                                  onClick={item.onClick}
                                  className={classnames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700",
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      className={classnames(
                        item.current
                          ? "border-purple-500 bg-purple-50 text-purple-700"
                          : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium w-full text-left",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <Link to={item.to}>{item.name}</Link>
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="text-base font-medium text-gray-800">
                      {auth.user?.username}
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        onClick={item.onClick}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 w-full text-left"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  flex justify-between">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                {props.title}
              </h1>
              {props.buttons && <ButtonsList buttons={props.buttons} />}
            </div>
          </header>
          <main>
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
              <LoadingWrapper isLoading={props.isLoading ?? false}>
                {props.children}
              </LoadingWrapper>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
