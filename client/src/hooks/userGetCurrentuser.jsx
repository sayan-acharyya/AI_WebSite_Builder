import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'

const userGetCurrentuser = () => {
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const result = await axios.get(`${serverUrl}/user/me`, { withCredentials: true });
                console.log(result);

            } catch (error) {
                console.log(result);

            }
        }
        getCurrentUser();
    }, [])
}

export default userGetCurrentuser