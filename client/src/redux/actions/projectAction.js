export const fetchProjects = () => (dispatch) => {
  fetch("https://stanleyy.herokuapp.com/projects")
    .then((response) => response.json())
    .then((projects) => {
      dispatch({
        type: "FETCH_PROJECTS",
        payload: projects,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchProject = (id) => (dispatch) => {
  fetch(`https://stanleyy.herokuapp.com/projects/${id}`)
    .then((response) => response.json())
    .then((project) => {
      dispatch({
        type: "FETCH_PROJECT",
        payload: project,
      });
    })
    .catch((err) => console.log(err));
};

export const newProject = (nproject) => (dispatch) => {
  fetch("https://stanleyy.herokuapp.com/projects/new", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nproject),
  })
    .then((response) => response.json())
    .then((project) => {
      dispatch({
        type: "NEW_PROJECT",
        payload: project,
      });
      console.log(project);
      // return (window.location = "/doxa-admin");
    })
    .catch((err) => console.log(err));
};
