import { Link, useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import React from "react";

const CustomBreadCrums = () => {
  const { pathname } = useLocation();

  const splitPath = (): string[] | undefined => {
    const paramWhioutHome = pathname.slice(1);
    return paramWhioutHome.split("/");
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {splitPath()?.map((value, index, array) => {
          const linkToReturn = array.slice(0, index).join("/");
          return (
            <React.Fragment key={value}>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={linkToReturn}>{value}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadCrums;
