import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/slices/userSlice'

const userGetCurrentuser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const result = await axios.get(`${serverUrl}/user/me`, { withCredentials: true });
                dispatch(setUserData(result.data))

            } catch (error) {
                console.log(result);

            }
        }
        getCurrentUser();
    }, [])
}

export default userGetCurrentuser