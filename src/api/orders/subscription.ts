import { supabase } from "@/src/lib/supabase";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const useInsertOrderSubscription = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ordersSubscription = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => {
          console.log("Change received!", payload);
          // @ts-ignore
          queryClient.invalidateQueries(["orders"]);
        }
      )
      .subscribe();
    return () => {
      ordersSubscription.unsubscribe();
    };
  });
};

export const useUpdateOrderSubscription = (id: number) => {
  const queryClient = useQueryClient();

  const channels = supabase
    .channel("custom-filter-channel")
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "orders",
        filter: `id=eq.${id}`,
      },
      (payload) => {
        console.log("Change received!", payload);
        // @ts-ignore
        queryClient.invalidateQueries(["orders", id]);
      }
    )
    .subscribe();
};
