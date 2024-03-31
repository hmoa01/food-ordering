import { ActivityIndicator, FlatList, Text } from "react-native";

import OrderListItem from "@/src/components/OrderListItem";
import orders from "@/assets/data/orders";
import { useAdminOrderList } from "@/src/api/orders";

export default function MenuScreen() {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: true });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch</Text>;
  }
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
