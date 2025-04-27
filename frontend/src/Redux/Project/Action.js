import api from "@/config/api";
import {
  ACCEPT_INVITATION_REQUEST,
  ACCEPT_INVITATION_SUCCESS,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  FETCH_PROJECT_BY_ID_REQUEST,
  FETCH_PROJECT_BY_ID_SUCCESS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  INIVITE_TO_PROJECT_REQUEST,
  INIVITE_TO_PROJECT_SUCCESS,
  SEARCH_PROJECTS_REQUEST,
  SEARCH_PROJECTS_SUCCESS,
} from "./ActionType";

export const fetchProjects =
  ({ category, tag }) =>
    async (dispatch) => {
      dispatch({ type: FETCH_PROJECTS_REQUEST });
      try {
        const { data } = await api.get("/api/projects", {
          params: { category, tag },
        });
        console.log("All Projects", data);
        dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data });
      } catch (error) {
        console.log("Error", error);
      }
    };

export const searchProjects = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_PROJECTS_REQUEST });
  try {
    const { data } = await api.get("/api/projects/search?keyword=" + keyword);
    console.log("Search Projects", data);
    dispatch({ type: SEARCH_PROJECTS_SUCCESS, projects: data });
  } catch (error) {
    console.log("Error", error);
  }
};

export const createProjects = (projectData) => async (dispatch) => {
  dispatch({ type: CREATE_PROJECT_REQUEST });
  try {
    const { data } = await api.post("/api/projects", projectData);
    console.log("Create Project", data);
    dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
  } catch (error) {
    console.log("Error", error);
  }
};

export const fetchProjectById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST });
  try {
    const { data } = await api.get("/api/projects/" + id);
    console.log("Project By Id", data);
    dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data });
  } catch (error) {
    console.log("Error", error);
  }
};

export const deleteProject = ({ projectId }) => async (dispatch) => {
  dispatch({ type: DELETE_PROJECT_REQUEST });
  try {
    const { data } = await api.delete("/api/projects/" + projectId);
    console.log("Delete Project", data);
    dispatch({ type: DELETE_PROJECT_SUCCESS, projectId });
  } catch (error) {
    console.log("Error", error);
  }
};

export const inviteToProject = ({ email, projectId }) =>
  async (dispatch) => {
    dispatch({ type: INIVITE_TO_PROJECT_REQUEST });
    try {
      const { data } = await api.post("/api/projects/invite", { email, projectId })
      console.log("Invite to Project", data);
      dispatch({ type: INIVITE_TO_PROJECT_SUCCESS, payload: data });
    } catch (error) {
      console.log("Error", error);
    }
  };

export const acceptInvitation =
  ({ token, navigate }) =>
    async (dispatch) => {
      dispatch({ type: ACCEPT_INVITATION_REQUEST });
      try {
        const { data } = await api.get("/api/projects/accept_invitation", {
          params: {
            token,
          },
        });
        navigate("/project/" + data.projectId);
        console.log("Accept Invitation", data);
        dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data });
      } catch (error) {
        console.log("Error", error);
      }
    };

export const updateProject = (projectData, navigate) => async (dispatch) => {
  dispatch({ type: UPDATE_PROJECTS_REQUEST });
  try {
    const { data } = await api.patch(`/api/projects/${projectData.id}`, projectData);
    console.log("Updated Project", data);
    dispatch({ type: UPDATE_PROJECTS_SUCCESS, project: data });

    // After successful update, navigate to project details page or any other page
    navigate(`/project/${data.id}`);
  } catch (error) {
    console.log("Error updating project", error);
  }
};
