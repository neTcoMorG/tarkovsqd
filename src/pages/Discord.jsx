import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import axios from "axios"

import {API_SERVER} from '../application'

export default function Callback () {

    const navigate = useNavigate()
    const [p, sp] = useSearchParams()

    useEffect(() => {
        const code = p.get('code')
        axios.get(API_SERVER + '/discord?code=' + code)
        .then(res => {
            if (res.data !== null && res.data !== "") {
                localStorage.setItem('squadObject', JSON.stringify(res.data))
                navigate('/')
                return
            }
        })
    }, [])

    return (
        <></>
    )
}
