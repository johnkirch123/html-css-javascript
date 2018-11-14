const state = {
  route: ""
};

export const setNavbar = route => {
  state.route = route;
};

export const getNavbar = () => {
  return state.route;
};
