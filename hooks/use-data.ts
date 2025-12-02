"use client";

import { fetchStaffs, fetchTimeInfo } from "@/actions/server/data";
import { useQuery } from "@tanstack/react-query";

export function useStaffs() {
  return useQuery({
    queryKey: ["staffs"],
    queryFn: fetchStaffs,
    staleTime: Infinity, // Never refetch
  });
}

export function useTimeInfo() {
  return useQuery({
    queryKey: ["hours"],
    queryFn: fetchTimeInfo,
    staleTime: Infinity, // Never refetch
  });
}
