import { Button, Text, View } from "react-native";

import { supabase } from "@/src/lib/supabase";

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>

      <Button
        title="Sign out"
        onPress={async () => await supabase.auth.signOut()}
      ></Button>
    </View>
  );
};

export default ProfileScreen;
