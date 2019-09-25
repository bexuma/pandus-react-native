import { createStackNavigator } from 'react-navigation-stack';

import ApplicationCreate from "../components/application-create";
import ApplicationList from "../components/application-list";

const Navigation = createStackNavigator(
  {
    create: { screen: ApplicationCreate },
    list: { screen: ApplicationList, navigationOptions: {
      headerBackTitle: null
    } }
  },
  {
    initialRouteName: "list",
    mode: "card",
    resetOnBlur: true,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default Navigation;
