import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { store } from '@/Redux/Store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IssueDetails from '../IssueDetails/IssueDetails';
import { assignedUserToIssue } from '@/Redux/Issue/Action';

const UserList = ({ issueDelails }) => {
    const { project } = useSelector(store => store)
    const dispatch = useDispatch();

    const handleAssignIssueToUser = (userId) => {
        dispatch(assignedUserToIssue({ issueId: issueDelails.id, userId }))
    }

    return (
        <div className="space-y-2">
            {/* Display Current Assignee */}
            <div className="border rounded-md">
                <p className="py-2 px-3">
                    {issueDelails?.assignee?.fullName || "Unassigned"}
                </p>
            </div>

            {/* List of Team Members */}
            {project.projectDetails?.team?.map((member) => (
                <div
                    onClick={() => handleAssignIssueToUser(member.id)}
                    key={member.id}
                    className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md px-4"
                >
                    <Avatar>
                        <AvatarFallback className="text-lg font">
                            {member.fullName?.[0] || "?"}
                        </AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                        <p className="text-sm leading-none">{member.fullName || "No Name"}</p>
                        <p className="text-sm text-muted-foreground">
                            @{member.fullName?.toLowerCase() || "unknown"}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
