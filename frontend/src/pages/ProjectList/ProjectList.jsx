import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectCard from "../Project/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, searchProjects } from "@/Redux/Project/Action";

export const tags = [
  "all",
  "html",
  "javascript",
  "react",
  "spring boot",
  "mysql",
  "nextjs",
  "mongodb",
  "angular",
  "nodejs",
  "expressjs",
  "python",
  "flask",
  "django",
];

const ProjectList = () => {
  const [keyword, setKeyword] = useState("");
  const { project } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleFilterCategory = (value) => {
    if (value == 'all') {
      dispatch(fetchProjects({}));
    }
    else
      dispatch(fetchProjects({ category: value }));
  };

  const handleFilterTags = (value) => {
    if (value == 'all') {
      dispatch(fetchProjects({}));
    }
    else
      dispatch(fetchProjects({ tag: value }));
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    dispatch(searchProjects(e.target.value));
  };


  console.log("Project store", project);
  return (
    <>
      <div className="relative px-5 lg:px-0 lg:flex gap-10 justify-center py-5">
        <section className="filterSection w-full lg:w-[25rem] lg:ml-20">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-full">

              <p className="text-xl -tracking-wider">Filters</p>

              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>

            <CardContent className="mt-5">
              <ScrollArea className="space-y-7 h-[70vh]">
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">Category</h1>

                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(value) =>
                        handleFilterCategory(value)
                      }
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlFor='"rl'>all</Label>
                      </div>

                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="fullstack" id="r2" />
                        <Label htmlFor='"r2'>fullstack</Label>
                      </div>

                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="frontend" id="r3" />
                        <Label htmlFor='"r3'>frontend</Label>
                      </div>

                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="backend" id="r4" />
                        <Label htmlFor='"r4'>backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="pt-9">
                  <h1 className="pb-3 text-gray-400 border-b">Tag</h1>

                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(value) =>
                        handleFilterTags(value)
                      }
                    >
                      {tags.map((item) => (
                        <div key={item} className="flex items-center gap-2 ">
                          <RadioGroupItem value={item} id={`r1-${item}`} />
                          <Label htmlFor={`r1-${item}`}>{item}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        <section className="projectListSection w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center pb-5 justify-between">
            <div className="relative p-0 w-full">
              <Input
                onChange={handleSearchChange}
                placeholder="Search project"
                className="40%  px-10"
              />
              <MagnifyingGlassIcon className="absolute top-3 left-4" />
            </div>
          </div>

          <div>
            <div className="space-y-5 min-h-[74vh]">
              {keyword
                ? project.searchProjects?.map((item, index) => <ProjectCard item={item} key={item.id * index} />)
                : project.projects?.map((item) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectList;
