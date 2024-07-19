"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface QueryParams {
  [key: string]: string | undefined;
}

export const useQueryParams = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryParam = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const updateQueryParams = (paramsToUpdate: QueryParams) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(paramsToUpdate).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    replace(`${pathname}?${params.toString()}`);
  };

  const getQueryParam = (key: string): string | null => {
    const params = new URLSearchParams(searchParams.toString());
    return params.get(key);
  };

  const removeAllQueryParams = () => {
    replace(pathname);
  };

  return {
    updateQueryParam,
    updateQueryParams,
    getQueryParam,
    removeAllQueryParams,
  };
};
