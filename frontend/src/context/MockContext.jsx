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
            projectId: 0
            ,
            name: "Task App",
            priority: "Low",
            description: "Build a task app that allows user to create new tasks, edit tasks and delete tasks, with a calendar page and project page.",
            projectLeaderId: 0,
            percentage: 45,
            date: "Aug 26 2025",
            teamIds: [0, 1 ,2]
        },
        {
            projectId: 1
            ,
            name: "Note App",
            priority: "Medium",
            description: "Build a note app that allows user to create new notes, edit notes and delete notes, project page.",
            projectLeaderId: 3,
            percentage: 32,
            date: "Sep 05 2025",
            teamIds: [0, 1 ,2, 3]
        },
        {
            projectId: 2
            ,
            name: "dashboard project",
            priority: "High",
            description: "Build a dashboard and other relevant pages to see current tasks and statistics of the users current topic, allowing them to change the dashboard to their preferences",
            projectLeaderId: 2,
            percentage: 85,
            date: "Sep 20 2025",
            teamIds: [1 ,2, 4]
        },
        {
            projectId: 3
            ,
            name: "Learn java",
            priority: "Low",
            description: "Learn all the necessary things about java, like the syntax, object oriented programming and learn how to build GUIs and connect it to the backend",
            projectLeaderId: 0,
            percentage: 60,
            date: "oct 10 2025",
            teamIds: [0, 1 ,4]
        },
    ]

    const tasks = [
        {
            taskId: 0,
            name: "Create a task card component",
            description: "Create a task card component that shows the title of the card the paragraph of the card, and the date its due.",
            date: "Sep 28 2025",
            priority: "Low",
            teamIds: [0, 1, 4],
            completed: false,
            projectId: 0,
        },
        {
            taskId: 1,
            name: "Implement user authentication",
            description: "Set up user login, registration, and password reset functionality with JWT tokens.",
            date: "Sep 28 2025",
            priority: "High",
            teamIds: [0, 2],
            completed: false,
            projectId: 2,
        },
        {
            taskId: 2,
            name: "Design database schema",
            description: "Create the database structure for users, projects, tasks, and teams with proper relationships.",
            date: "Aug 30 2025",
            priority: "High",
            teamIds: [1, 3],
            completed: true,
            projectId: 1,
        },
        {
            taskId: 3,
            name: "Add drag and drop functionality",
            description: "Implement drag and drop for task cards between different status columns.",
            date: "Sep 02 2025",
            priority: "Medium",
            teamIds: [0, 4],
            completed: false,
            projectId: 3,
        },
        {
            taskId: 4,
            name: "Create notification system",
            description: "Build a notification center for task assignments, due dates, and team updates.",
            date: "Sep 05 2025",
            priority: "Medium",
            teamIds: [2, 3],
            completed: false,
            projectId: 1,
        },
        {
            taskId: 5,
            name: "Optimize mobile responsiveness",
            description: "Ensure the application works seamlessly on mobile devices and tablets.",
            date: "Sep 08 2025",
            priority: "Low",
            teamIds: [1, 4],
            completed: true,
            projectId: 0,
        },
        {
            taskId: 6,
            name: "Implement search functionality",
            description: "Add global search to find tasks, projects, and team members quickly.",
            date: "Sep 10 2025",
            priority: "Medium",
            teamIds: [0, 3],
            completed: false,
            projectId: 2,
        },
        {
            taskId: 7,
            name: "Create analytics dashboard",
            description: "Build a dashboard showing project progress, team performance, and task completion rates.",
            date: "Sep 12 2025",
            priority: "High",
            teamIds: [2, 4],
            completed: false,
            projectId: 3,
        },
        {
            taskId: 8,
            name: "Add file attachment feature",
            description: "Allow users to attach files to tasks and projects with proper storage management.",
            date: "Sep 15 2025",
            priority: "Low",
            teamIds: [1, 3],
            completed: false,
            projectId: 1,
        },
        {
            taskId: 9,
            name: "Implement real-time updates",
            description: "Add WebSocket support for real-time task updates and team collaboration.",
            date: "Sep 18 2025",
            priority: "High",
            teamIds: [0, 2, 4],
            completed: false,
            projectId: 2,
        },
        {
            taskId: 10,
            name: "Create user profile pages",
            description: "Build user profile pages with avatar upload, bio, and activity history.",
            date: "Sep 20 2025",
            priority: "Medium",
            teamIds: [3, 4],
            completed: true,
            projectId: 2,
        },
        {
            taskId: 11,
            name: "Add task filtering options",
            description: "Implement filters for priority, due date, assignee, and completion status.",
            date: "Sep 22 2025",
            priority: "Low",
            teamIds: [1, 2],
            completed: false,
            projectId: 0,
        },
        {
            taskId: 12,
            name: "Set up automated testing",
            description: "Create unit tests, integration tests, and end-to-end tests for critical features.",
            date: "Sep 28 2025",
            priority: "Medium",
            teamIds: [0, 1, 3],
            completed: false,
            projectId: 0,
        },
        {
            taskId: 13,
            name: "Implement dark mode toggle",
            description: "Add dark/light mode switching with persistent user preferences.",
            date: "Sep 28 2025",
            priority: "Low",
            teamIds: [2, 4],
            completed: true,
            projectId: 3,
        },
        {
            taskId: 14,
            name: "Create project templates",
            description: "Build reusable project templates for common workflow patterns.",
            date: "Oct 01 2025",
            priority: "Medium",
            teamIds: [0, 3, 4],
            completed: false,
            projectId: 1,
        },
        {
            taskId: 15,
            name: "Add keyboard shortcuts",
            description: "Implement keyboard navigation and shortcuts for power users.",
            date: "Oct 05 2025",
            priority: "Low",
            teamIds: [1, 2],
            completed: false,
            projectId: 0,
        }
    ];

    const userTasks = [
        {
            taskId: 0,
            name: "Create a task card component",
            description: "Create a task card component that shows the title of the card the paragraph of the card, and the date its due.",
            date: "Aug 26 2025",
            priority: "Low",
            teamIds: [0, 1, 4],
            completed: false,
            projectId: 0,
        },
        {
            taskId: 14,
            name: "Create project templates",
            description: "Build reusable project templates for common workflow patterns.",
            date: "Oct 01 2025",
            priority: "Medium",
            teamIds: [0, 3, 4],
            completed: false,
            projectId: 1,
        },
        {
            taskId: 12,
            name: "Set up automated testing",
            description: "Create unit tests, integration tests, and end-to-end tests for critical features.",
            date: "Sep 25 2025",
            priority: "Medium",
            teamIds: [0, 1, 3],
            completed: false,
            projectId: 0,
        },
         {
            taskId: 9,
            name: "Implement real-time updates",
            description: "Add WebSocket support for real-time task updates and team collaboration.",
            date: "Sep 25 2025",
            priority: "High",
            teamIds: [0, 2, 4],
            completed: false,
            projectId: 2,
        },
    ]

    const currentUser = {
        userId: users[0].userId,
        name: users[0].name,
        email: users[0].email,
        contactNumber: users[0].contactNumber,
        image: users[0].image,
        password: "GenericPassword0982"

    }

    const getSpecificUsers = (teamIds) => {
        // Create a Set for faster lookups (O(1) instead of O(n))
        const teamIdSet = new Set(teamIds);
        
        // Use filter and map for more concise and efficient code
        return users
            .filter(user => teamIdSet.has(user.userId))
            .map(user => ({
                userId: user.userId,
                name: user.name,
                email: user.email,
                contactNumber: user.contactNumber,
                image: user.image
            }));
    };

    return (
        <MockContext.Provider 
            value={{ users, projects, tasks, userTasks ,getSpecificUsers, currentUser }}
        >
            {children}
        </MockContext.Provider>
    )

}

export const useMock = () => useContext(MockContext)