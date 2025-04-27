import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue, updateIssueStatus } from "@/Redux/Issue/Action";

const IssueCard = ({ item, projectId }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (status) => {
    dispatch(updateIssueStatus({ id: item.id, status }));
    console.log(`Issue ${item.id} status updated to ${status}`);
  };

  const handleIssueDelete = () => {
    dispatch(deleteIssue(item.id));
  };

  const navigate = useNavigate();
  return (
    <div>
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pr-0">
        <div className="flex justify-between items-center">
          <CardTitle
            className="cursor-pointer"
            onClick={() => navigate(`/project/${projectId}/issue/${item.id}`)}
          >
            {item.title}
          </CardTitle>

          <div className="flex items-center gap-2">
            <DropdownMenu >
              <DropdownMenuTrigger>
                <Button
                  className="bg-gray-900 hover:text-black text-white rounded-full"
                  size="icon"
                >
                  <Avatar>
                    <AvatarFallback>
                      <PersonIcon />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <UserList issueDelails={item} />
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <DotsVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => handleStatusChange("in_progress")}
                >
                  In Progress
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleStatusChange("done")}>
                  Done
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleIssueDelete}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
    </Card>
  </div>
  );
};

export default IssueCard;
