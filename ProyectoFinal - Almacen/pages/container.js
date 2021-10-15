import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './login';
import Menu from './menu';
import UserRegister from './userRegister';
import ProductRegister from './productRegister';
import ProductDelete from './productDelete';
import DeleteMenu from './DeleteMenu';
import DeleteProdAll from './DeleteProdAll';
import Inventory from './inventory';
import VerUno from './verUno';
import VerTodo from './verTodo';
import ModifyProd from './ModifyProd';
import MakeChanges from './makeChanges';
import SelectProd from './selectProd';
import ViewData from './viewData';

const NavigationStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
    }
  },
  UserRegister: {
    screen: UserRegister,
    navigationOptions: {
      header: null,
    }
  },
  ProductRegister: {
    screen: ProductRegister,
    navigationOptions: {
      header: null,
    }
  },
  ProductDelete: {
    screen: ProductDelete,
    navigationOptions: {
      header: null,
    }
  },
  DeleteMenu: {
    screen: DeleteMenu,
    navigationOptions: {
      header: null,
    }
  },
  DeleteProdAll: {
    screen: DeleteProdAll,
    navigationOptions: {
      header: null,
    }
  },
  Inventory: {
    screen: Inventory,
    navigationOptions: {
      header: null,
    }
  },
  VerUno: {
    screen: VerUno,
    navigationOptions: {
      header: null,
    }
  },
  VerTodo: {
    screen: VerTodo,
    navigationOptions: {
      header: null,
    }
  },
  ModifyProd: {
    screen: ModifyProd,
    navigationOptions: {
      header: null,
    }
  },
  MakeChanges: {
    screen: MakeChanges,
    navigationOptions: {
      header: null,
    }
  },
  SelectProd: {
    screen: SelectProd,
    navigationOptions: {
      header: null,
    }
  },
  ViewData: {
    screen: ViewData,
    navigationOptions: {
      header: null,
    }
  }
});

const Container = createAppContainer(NavigationStack);
export default Container;