export const goToHomePage = (history) => {
  history.push("/");
};

export const goToTripList = (history) => {
  history.push("/trips/list");
};

export const goToTripApplication = (history) => {
  history.push("/trips/application");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToAdminTripList = (history) => {
  history.push("/admin/trips/list");
};

export const goToAdminTripCreate = (history) => {
  history.push("/admin/trips/create");
};

export const goToAdminTripDetail = (history, id) => {
  history.push(`/admin/trips/${id}`);
};

export const goToLastPage = (history) => {
  history.goBack();
};
