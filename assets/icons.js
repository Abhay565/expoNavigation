import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
    Home: (props) => <AntDesign  name="home" size={24} {...props} />,
    Explore: (props) => <Feather name="compass" size={24} {...props} />,
    Create: (props) => <AntDesign name="pluscircleo" size={24} {...props} />,
    Profile: (props) => <AntDesign name="user" size={24} {...props} />,
  };