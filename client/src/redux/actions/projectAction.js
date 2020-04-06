export const fetchProjects = () => (dispatch) => {
  fetch("https://doxa-wears.herokuapp.com/projects")
    .then((response) => response.json())
    .then((projects) => {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: projects,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchProject = (id) => (dispatch) => {
  fetch(`https://doxa-wears.herokuapp.com/projects/${id}`)
    .then((response) => response.json())
    .then((project) => {
      dispatch({
        type: "FETCH_PRODUCT",
        payload: project,
      });
      // console.log(project);
    })
    .catch((err) => console.log(err));
};

export const newProject = (nproject) => (dispatch) => {
  fetch("https://doxa-wears.herokuapp.com/projects", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nproject),
  })
    .then((response) => response.json())
    .then((project) => {
      dispatch({
        type: "NEW_PRODUCT",
        payload: project,
      });
      return (window.location = "/doxa-admin");
    })
    .catch((err) => console.log(err));
};
