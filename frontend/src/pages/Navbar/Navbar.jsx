import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateProjectForm from "../Project/CreateProjectForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/Auth/Action";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "styled-components";
import { PersonIcon } from "@radix-ui/react-icons";
import { Add } from "@mui/icons-material";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="border-b py-4 px-5 flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer text-[20px] font-bold"
          style={{
            color: theme.primary,
          }}
        >
          Projexly
        </p>
        <Dialog>
          <DialogTrigger>
            <Button
              style={{
                borderColor: theme.primary,
                color: "white",
                background:
                  "linear-gradient(225deg, #003399E6 0%, #00CCFFE6 100%)",
              }}
            >
              <Add />
              New Project
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>Create New Project</DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>

        <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">
          Upgrade
        </Button>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon" className="rounded-full">
              <Avatar>
                <AvatarFallback
                  className="text-lg"
                  style={{
                    color: "white",
                    backgroundColor: theme.primary + theme.lightAdd,
                  }}
                >
                  <PersonIcon />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>{auth.user?.fullName}</p>
      </div>
    </div>
  );
};

export default Navbar;
