import React from 'react';
import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';



export const isReadyRef = React.createRef();

export const navigationRef = createNavigationContainerRef()

// function isNavigationReady() {
//   return new Promise((resolve, reject) => {
//     if (!!isReadyRef?.current && !!navigationRef?.current) {
//       resolve();
//     } else {
//       reject();
//     }
//   })
// }
// // Wait up to 1 second for the navigation to mount and take the ref so we can use the navigation service
// async function waitForNavigationToBeReady() {
//   return retry({
//     fn: isNavigationReady,
//     retries: 4,
//     retryDelay: 250,
//   });
// }
async function navigate(name, params) {
//   await waitForNavigationToBeReady();
if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
    throw new Error('Não foi possível realizar a navegação');
  }
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   } else {
//     // crashlytics().log(`Erro ao tentar navegar para ${name} params: ${JSON.stringify(params)}`);
//     throw new Error('Não foi possível realizar a navegação');
//   }
}

// add other navigation functions that you need and export them

// function getActiveRouteName(route) {
//   let currentRoute;

//   if (!isReadyRef.current || !navigationRef.current) {
//     throw new Error('Não foi possível realizar a navegação');
//   }

//   if (!route) {
//     currentRoute = navigationRef.current.state.nav;
//   } else {
//     currentRoute = route;
//   }

//   if (
//     !currentRoute.routes ||
//     currentRoute.routes.length === 0 ||
//     currentRoute.index >= currentRoute.routes.length
//   ) {
//     return currentRoute.routeName;
//   }

//   const childActiveRoute = currentRoute.routes[currentRoute.index];
//   return getActiveRouteName(childActiveRoute);
// }

async function goBack() {
//   await waitForNavigationToBeReady();

  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.goBack());
  } else {
    // crashlytics().log(`Erro ao tentar executar go back`);
    throw new Error('Não foi possível realizar a navegação');
  }
}

// function goPop(screens) {
//   if (isReadyRef.current && navigationRef.current) {
//     navigationRef.current.dispatch(StackActions.pop(screens));
//   } else {
//     throw new Error('Não foi possível realizar a navegação');
//   }
// }

async function dispatch(param) {
//   await waitForNavigationToBeReady();

  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(param);
  } else {
    // crashlytics().log(`Erro ao tentar navegar para params: ${JSON.stringify(param)}`);
    throw new Error('Não foi possível realizar a navegação');
  }
}

// function leaveAuthRestrictedScreen() {
//   const isOnAScreenThatRequiresAuthentication = screensThatRequireAuthentication.includes(
//     getActiveRouteName(),
//   );

//   if (!isReadyRef.current || !navigationRef.current) {
//     throw new Error('Não foi possível realizar a navegação');
//   }

//   if (isOnAScreenThatRequiresAuthentication) {
//     navigationRef.current.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: [{ name: 'Tabs' }],
//       }),
//     );
//   }
// }

// function getParams() {
//   return navigationRef.current.getCurrentRoute().params || {};
// }

export default {
  navigate,
  goBack,
  dispatch,
};