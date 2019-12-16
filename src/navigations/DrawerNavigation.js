import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from "react-navigation";
import {DrawerScreen} from '../screens/drawerscreen';
import {Home} from '../screens/home';

const DrawerNavigation = createDrawerNavigator({

        //if we want to show screens we will define them here.
        Home,

    },
    {
        //contentComponent used for custom drawer menu
        contentComponent: DrawerScreen,
        drawerWidth: 230,
    }
);

export default createAppContainer(DrawerNavigation);
