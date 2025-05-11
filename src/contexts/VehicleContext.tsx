"use client";
import { ResponseContext } from "@/types/Vehicle";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type VehicleContextType = {
  apiReponse: ResponseContext | null;
  isLoading: boolean;
  filterType: string;
  setFilterType: (type: string) => void;
};

export const VehicleContext = createContext<VehicleContextType>({
  apiReponse: null,
  isLoading: false,
  filterType: "tracked",
  setFilterType: () => {},
});

export const VehicleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiReponse, setApiReponse] = useState<ResponseContext | null>(null);
  const [filterType, setFilterTypeState] = useState("tracked");

  const fetchData = useCallback(async (type: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}?type=${type}&page=1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setApiReponse(data.content);
    } catch (error) {
      console.error("Failed to fetch vehicles:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(filterType);
  }, [fetchData, filterType]);

  const setFilterType = (type: string) => {
    setFilterTypeState(type);
  };

  const contextValue = useMemo(
    () => ({
      apiReponse,
      isLoading,
      filterType,
      setFilterType,
    }),
    [apiReponse, isLoading, filterType]
  );

  return (
    <VehicleContext.Provider value={contextValue}>
      {children}
    </VehicleContext.Provider>
  );
};
