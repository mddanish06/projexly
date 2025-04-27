import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProjectById, updateProject } from "@/Redux/Project/Action";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Cross1Icon } from "@radix-ui/react-icons";
import { tags } from "../ProjectList/ProjectList";

const UpdateProjectForm = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const project = useSelector((state) => state.project.currentProject); // Get the current project from Redux
    const [isLoading, setIsLoading] = useState(true); 

    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: [],
        },
    });

    useEffect(() => {
        // Fetch the project details when the component loads
        setIsLoading(true); // Set loading state
        dispatch(fetchProjectById(id))
            .finally(() => setIsLoading(false)); // Reset loading state
    }, [dispatch, id]);

    useEffect(() => {
        // Update form values when the project is fetched
        if (project) {
            form.reset({
                name: project.name || "",
                description: project.description || "",
                category: project.category || "",
                tags: project.tags || [],
            });
        }
    }, [project, form]);

    const handleTagsChange = (newValue) => {
        const currentTags = form.getValues("tags");
        const updatedTags = currentTags.includes(newValue)
            ? currentTags.filter((tag) => tag !== newValue)
            : [...currentTags, newValue];
        form.setValue("tags", updatedTags);
    };

    const onSubmit = (data) => {
        // Dispatch the update action with the updated data
        dispatch(updateProject({ id, ...data }));
        navigate(`/project/${id}`); // Redirect to the project's detail page
    };

    if (isLoading) {
        return <div className="flex justify-center mt-10">Loading project details...</div>; // Show a loader while fetching
    }

    return (
        <div className="flex ">
            <div className="flex bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[100%] h-[40rem] justify-center ">
                <div className="p-5 w-[35rem] mt-5">
                    <h1 className="text-xl font-bold mb-5">Update Project</h1>
                    <Form {...form}>
                        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                className="border w-full border-gray-700 py-3 px-4"
                                                placeholder="Project name..."
                                                required
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                className="border w-full border-gray-700 py-3 px-4"
                                                placeholder="Project description..."
                                                required
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Select
                                                defaultValue="fullstack"
                                                value={field.value}
                                                onValueChange={(value) => {
                                                    field.onChange(value);
                                                }}
                                                required

                                            // className="border w-full border-gray-700 py-5 px-5"
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="fullstack">Full Stack</SelectItem>
                                                    <SelectItem value="frontend">Frontend</SelectItem>
                                                    <SelectItem value="backend">Backend</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                            <FormField
                                control={form.control}
                                name="tags"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex gap-2 flex-wrap">
                                                {field.value.map((tag) => (
                                                    <div
                                                        key={tag}
                                                        onClick={() => handleTagsChange(tag)}
                                                        className="cursor-pointer flex rounded-full items-center border gap-2 py-1 px-4"
                                                        required
                                                    >
                                                        <span>{tag}</span>
                                                        <Cross1Icon />
                                                    </div>
                                                ))}
                                            </div>
                                        </FormControl>
                                        <Select
                                            onValueChange={(value) => handleTagsChange(value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Add Tags" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {tags.map((item) => (
                                                    <SelectItem key={item} value={item}>
                                                        {item}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full mt-5">
                                Save Changes
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProjectForm;
