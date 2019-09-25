import { createSwitchNavigator } from "react-navigation";

import ApplicationCreate from "../components/application-create";
import ApplicationList from "../components/application-list";
import applicationDetailsView from "../components/application-details";

const Navigation = createSwitchNavigator(
  {
    create: { screen: ApplicationCreate },
    list: { screen: ApplicationList },
    details: { screen: applicationDetailsView }
  },
  {
    initialRouteName: "list",
    mode: "card",
    resetOnBlur: true,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
);

export default Navigation;
