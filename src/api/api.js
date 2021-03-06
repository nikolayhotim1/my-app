import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',

    headers: {
        'API-KEY': '7d7c0cc8-9365-47ef-8d77-ea42e5daa598'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data;
        });
    },

    getNewFollowedUser(userId) {
        return instance.post(
            `follow/${userId}`,
            {}
        ).then(response => {
            return response.data;
        });
    },

    getNewUnfollowedUser(userId) {
        return instance.delete(
            `follow/${userId}`
        ).then(response => {
            return response.data;
        });
    }
};

export const authAPI = {
    getAuthUserData() {
        return instance.get(
            `auth/me`
        ).then(response => {
            return response.data;
        });
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(
            `profile/${userId}`
        ).then(response => {
            return response.data;
        });
    },

    getUserStatus(userId) {
        return instance.get(
            `profile/status/${userId}`
        ).then(response => {
            return response.data;
        });
    },

    getUpdateStatus(status) {
        return instance.put(
            `profile/status`,
            { status: status }
        ).then(response => {
            return response.data;
        });
    }
};

// export const followUnfollowAPI = {
//     getNewFollowedUser(userId = 2) {
//         return instance.post(
//             `follow/${userId}`,
//             {}
//         ).then(response => {
//             return response.data;
//         });
//     },

//     getNewUnfollowedUser(userId = 2) {
//         return instance.delete(
//             `follow/${userId}`,
//         ).then(response => {
//             return response.data;
//         });
//     }
// };