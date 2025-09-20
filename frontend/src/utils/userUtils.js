export function getSpecificUsers (teamIds, users) {
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

    