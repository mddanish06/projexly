import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";
import { useEffect } from "react";
import { fetchProjectById } from "@/Redux/Project/Action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { tagColors } from "@/utils/Theme";
import {
  CheckCircleOutlineOutlined,
  Checklist,
  DonutLarge,
  PersonAdd,
} from "@mui/icons-material";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((store) => store);
  const { id } = useParams();
  const theme = useTheme();
  const handleProjectInvitation = () => {};

  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id]);

  return (
    <>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-gray-200 text-lg font-semibold pb-5">
                {project.projectDetails?.name}
              </h1>

              <div className="space-y-5 pb-10  text-sm">
                <p className="w-full md:max-w-lg lg:max-w-xl text-sm">
                  {project.projectDetails?.description}
                </p>

                <div className="flex">
                  <p className="w-36">Project Lead : </p>
                  <p>{project.projectDetails?.owner.fullName}</p>
                </div>

                <div className="flex">
                  <p className="w-36">Members :</p>

                  <div className="flex items-center gap-2">
                    {project.projectDetails?.team.map((item) => (
                      <Avatar key={item.id} className="cursor-pointer">
                        <AvatarFallback
                          className="text-lg"
                          style={{
                            borderColor: `${
                              tagColors[
                                Math.floor(Math.random() * tagColors.length)
                              ]
                            }${theme.lightAdd}`,
                            borderWidth: "1px",
                            borderStyle: "solid",
                            color: `${
                              tagColors[
                                Math.floor(Math.random() * tagColors.length)
                              ]
                            }${theme.lightAdd}`,
                            backgroundColor: `${
                              tagColors[
                                Math.floor(Math.random() * tagColors.length)
                              ]
                            }10`,
                          }}
                        >
                          {item.fullName[0]}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleProjectInvitation}
                          className="ml-2 rounded-[10px] transition-all duration-300 ease-in-out"
                          style={{
                            borderColor: theme.primary,
                            color: theme.primary,
                            backgroundColor: "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = theme.primary;
                            e.target.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = theme.primary;
                          }}
                        >
                          <PersonAdd sx={{ fontSize: "12px" }} />
                          <span>Invite</span>
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>Invite Member</DialogHeader>
                      <InviteUserForm />
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex">
                  <p className="w-36">Category : </p>
                  <p>{project.projectDetails?.category}</p>
                </div>

                <div className="flex">
                  <p className="w-36">Progress : </p>
                  <Badge className="cursor-pointer">In Progress</Badge>
                </div>
              </div>

              <section>
                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList
                    status="pending"
                    icon
                    title={
                      <span className="flex items-center">
                        <Checklist
                          style={{ color: "#FACC15", fontSize: "20px" }}
                        />
                        <span className="ml-2">Todo List</span>
                      </span>
                    }
                  />
                  <IssueList
                    status="in_progress"
                    title={
                      <span className="flex items-center">
                        <DonutLarge
                          sx={{ color: "#1976D2", fontSize: "20px" }}
                        />
                        <span className="ml-2">In Progress</span>
                      </span>
                    }
                  />
                  <IssueList
                    status="done"
                    title={
                      <span className="flex items-center">
                        <CheckCircleOutlineOutlined
                          sx={{ color: "#67BC6D", fontSize: "20px" }}
                        />
                        <span className="ml-2">Done</span>
                      </span>
                    }
                  ></IssueList>
                </div>
              </section>
            </div>
          </ScrollArea>

          <div className="lg:w-[30%] rounded-md sticky right-5 top-0">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
