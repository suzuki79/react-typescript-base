import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";
import { auth } from "../config/firebase";
// import router from "next/router";
import useRouter from "use-react-router";

// import { WorkspaceVo } from "../src/vos/WorkspaceVo";
// import { AuthUserVo } from "../src/vos/AuthUserVo";
// import { WorkspacePresenter } from "../src/presenters/WorkspacePresenter";
// import { AuthUserPresenter } from "../src/presenters/AuthUserPresenter";
// import { Role } from "../src/commons/Enums";

export const useAuthUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  // const [workspaces, setWorkspaces] = useState<WorkspaceVo[]>([]);
  // const [currentWorkspace, setCurrentWorkspace] = useState<WorkspaceVo>(null);

  const { history } = useRouter();
  useEffect(() => {
    // if (process.browser) {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        // const user = await AuthUserPresenter.getByUid(authUser.uid);
        // const workspaces = await WorkspacePresenter.getByUserId(user.id);
        setUser(authUser);
        setLoading(false);
      } else {
        setUser(null);
        // setCurrentWorkspace(null);
        // setWorkspaces([]);
        setLoading(false);
      }
    });
    // }
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await auth.signInWithEmailAndPassword(email, password);
    // router.push("/");
    history.push("/");
  };

  const signOut = async () => {
    setLoading(true);
    await auth.signOut();
    // router.push("/signin");
    history.push("/signin");

  };

  // const getAuthorizedProjectIds = () => {
  //   if (!user || !user.projectRoles) return [];
  //   return user.projectRoles
  //     .filter((projectRole: any) => projectRole.role !== Role.none)
  //     .map((projectRole: any) => projectRole.projectId);
  // };

  // const overProjectReviewer = (projectId: string) => {
  //   if (!projectId) return false;
  //   const projectRoles = user.projectRoles.filter((projectRole) => projectRole.projectId === projectId);
  //   if (!projectRoles.length) return false;

  //   const projectRole = projectRoles[0];
  //   if (projectRole.role === Role.none || projectRole.role === Role.creator) {
  //     return false;
  //   }
  //   return true;
  // };

  // const overProjectManager = (projectId: string) => {
  //   if (!projectId) return false;
  //   const projectRoles = user.projectRoles.filter((projectRole) => projectRole.projectId === projectId);
  //   if (!projectRoles.length) return false;

  //   const projectRole = projectRoles[0];
  //   if (projectRole.role === Role.none || projectRole.role === Role.creator || projectRole.role === Role.reviewer) {
  //     return false;
  //   }
  //   return true;
  // };

  // const overWorkspaceManager = () => {
  //   if (!currentWorkspace) return false;
  //   const role = currentWorkspace.workspaceRole.role;
  //   if (role === Role.none || role === Role.creator || role === Role.reviewer) {
  //     return false;
  //   }
  //   return true;
  // };

  return {
    user,
    signIn,
    signOut,
    loading,
    // workspaces,
    // currentWorkspace,
    // getAuthorizedProjectIds,
    // overProjectReviewer,
    // overProjectManager,
    // overWorkspaceManager,
  };
};

export const AuthUserStore = createContainer(useAuthUser);
