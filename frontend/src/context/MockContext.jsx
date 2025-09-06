import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from '../assets/images/user.png'
import user2Image from '../assets/images/user2.jpg'
import user3Image from '../assets/images/user3.jpg'
import user4Image from '../assets/images/user4.jpg'
import user5Image from '../assets/images/user5.jpg'

const MockContext = createContext()

export const MockProvider = ({ children }) => {

    const users = [
        {
            userId: 0,
            name: "John Doe",
            email: "JohnDoe01@gmail.com",
            contactNumber: "08976654098",
            image: userImage
        },
        {
            userId: 1,
            name: "Jane Doe",
            email: "JaneDoe02@gmail.com",
            contactNumber: "08976654098",
            image: user2Image
        },
        {
            userId: 2,
            name: "Emma Smith",
            email: "EmmaSmith03@gmail.com",
            contactNumber: "08976654098",
            image: user3Image
        },
        {
            userId: 3,
            name: "Felix Jones",
            email: "FelixJones04@gmail.com",
            contactNumber: "08976654098",
            image: user4Image
        },
        {
            userId: 4,
            name: "Dakota Davis",
            email: "DakotaDavis05@gmail.com",
            contactNumber: "08976654098",
            image: user5Image
        },
    ]

    const projects = [
        {
            projectId: 0,
            name: "Task App",
            priority: "Low",
            description: "Build a task app that allows user to create new tasks, edit tasks and delete tasks, with a calendar page and project page.",
            projectLeaderId: 0,
            percentage: 45,
            date: "Aug 26 2025",
            teamIds: [0, 1 ,2]
        },
        {
            projectId: 1,
            name: "Note App",
            priority: "Medium",
            description: "Build a note app that allows user to create new notes, edit notes and delete notes, project page.",
            projectLeaderId: 3,
            percentage: 32,
            date: "sep 05 2025",
            teamIds: [0, 1 ,2, 3]
        },
        {
            projectId: 2,
            name: "Build a dashboard",
            priority: "High",
            description: "Build a dashboard and other relevant pages to see current tasks and statistics of the users current topic, allowing them to change the dashboard to their preferences",
            projectLeaderId: 2,
            percentage: 85,
            date: "sep 20 2025",
            teamIds: [1 ,2, 4]
        },
        {
            projectId: 3,
            name: "Learn java",
            priority: "Low",
            description: "Learn all the necessary things about java, like the syntax, object oriented programming and learn how to build GUIs and connect it to the backend",
            projectLeaderId: 0,
            percentage: 60,
            date: "oct 10 2025",
            teamIds: [0, 1 ,4]
        },
    ]

    const getSpecificUsers = (teamIds) => {
        // Create a Set for faster lookups (O(1) instead of O(n))
        const teamIdSet = new Set(teamIds);
        
        // Use filter and map for more concise and efficient code
        return users
            .filter(user => teamIdSet.has(user.userId))
            .map(user => ({
                name: user.name,
                image: user.image
            }));
    };

    return (
        <MockContext.Provider 
            value={{ users, projects, getSpecificUsers }}
        >
            {children}
        </MockContext.Provider>
    )

}

export const useMock = () => useContext(MockContext)