import { $authHost, $host } from "./index";

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/getOnePointHelp/' + id)
    return data
}

export const fetchOneNeedHelp = async (id) => {
    const { data } = await $host.get('api/getOneNeedHelp/' + id)
    return data
}
export const getDialog = async (id) => {
    const { data } = await $authHost.get(`api/getDialog?companion=${id}`)
    return data
}
export const addAsistant = async (email, name, city, description, phone, title, namefile) => {
    const { data } = await $authHost.post('api/addAsistant', { email, name, city, description, phone, title, namefile })
    return data
}

export const updatepost = async (id, name, phone, description, listThings, city, secondName) => {
    const { data } = await $authHost.post('api/updatepost/' + id, { name, phone, description, listThings, city, secondName })
    return data
}

export const addNeedHelp = async (name, secondName, phone, city, listThings, description) => {
    const { data } = await $authHost.post('api/addNeedHelp', { name, secondName, phone, city, listThings, description })
    return data
}
export const updateOneAsistant = async (id, name, phone, description, city, email, title) => {
    const { data } = await $authHost.post('api/updateOneAsistant/' + id, { name, phone, description, city, email, title })
    return data
}
export const allDialogs = async () => {
    const { data } = await $authHost.get(`api/allDialogs`)
    return data
}
export const generalchatinformation = async () => {
    const { data } = await $authHost.get(`api/generalchatinformation`)
    return data
}

export const Generalchat = async () => {
    const { data } = await $authHost.get(`api/generalchat`)
    return data
}


export const fetchAllNeedHElp = async (text) => {
    const { data } = await $host.get(`api/getAllNeedHelp?text=${text}`)
    return data
}

export const getAsistant = async (text) => {
    const { data } = await $host.get(`api/getAsistant?text=${text}`)
    return data
}

export const fetchAssist = async (id) => {
    const { data } = await $host.get('api/getOneAsistant/' + id)
    return data
}

export const fetchOneCanHelp = async (id) => {
    const { data } = await $host.get('api/getOneAsistant/' + id)
    return data
}

export const getAllPointHelp = async (text, sort) => {
    const { data } = await $host.get(`api/getAllPointHelp?text=${text}&sort=${sort}`)
    return data
}

export const tryremovepassvord = async (email) => {
    const dta = await $host.post('api/tryremovepassword', { email })
    return dta
}
export const removepassvord = async (email, password, id) => {
    const dta = await $host.post('api/removepassword', { email, password, id })
    return dta
}
export const deleteonepost = async (id) => {
    const dta = await $authHost.post('api/deleteneedhelp', { id })
    return dta
}
export const deleteasistpost = async (id) => {
    const dta = await $authHost.post('api/deleteassist', { id })
    return dta
}
export const getAP = async () => {
    const dta = await $authHost.get('api/getAsistPerson')
    return (dta.data)
}
export const getNHP = async () => {
    const dta = await $authHost.get('api/getNeedHelpPerson')
    return (dta.data)
}
export const postComment = async (id, text, timeCreate,typepost) => {
    const data = await $authHost.post('api/addComment', { id,text, timeCreate ,typepost})
    return (data)
}
export const getCommentss = async (id,type) => {
    const data = await $host.get(`api/getComment/?id=${id}&type=${type}`)
    return (data.data)
}
export const addPointhelp = async (name, nameBoss, phone, address, city, email, region, listThings, description) => {
    const data = await $authHost.post('api/addPointHelp', { name, nameBoss, phone, address, city, email, region, listThings, description })
    return (data)
}
export const requesetaddPointhelp = async (name, nameBoss, phone, address, city, email, region, listThings, description) => {
    const { data } = await $authHost.post('api/requesetaddPointHelp', { name, nameBoss, phone, address, city, email, region, listThings, description })
    console.log(data)
    return data
}
export const grade = async (id, mark) => {
    const { data } = await $authHost.post('api/grade/' + id, { mark })
    return data
}
export const getmark = async (id, mark) => {
    const { data } = await $authHost.post('api/getmark/' + id)
    return data
}
export const ProfileInformation = async () => {
    const { data } = await $authHost.get('api/ProfileInformation')
    return data
}
export const changeNick = async (nick) => {
    const { data } = await $authHost.post('api/changeNick', { nick })
    return data
}
export const changeEmail = async (email) => {
    const { data } = await $authHost.post('api/changeEmail', { email })
    return data
}
export const changePassword = async (password, passwordtwo) => {
    const { data } = await $authHost.post('api/changePassword', { password, passwordtwo })
    return data
}
export const sendAnswer = async (commentId, text) => {
    const { data } = await $authHost.post('api/sendAnswer', { commentId, text })
    return data
}
export const changeavata = async (avatar) => {
    const { data } = await $authHost.post('api/changeavatar', { avatar })
    return data
}
export const getposts = async () => {
    const { data } = await $host.get('api/getposts')
    return data
}

export const newblogpost = async (title, text, namefile) => {
    const { data } = await $authHost.post('api/blogpost', {title, text, namefile})
    return data
}

export const getblogpost = async () => {
    const { data } = await $host.get('api/blogpost')
    return data
}

export const OneBlogPost = async (id) => {
    const { data } = await $host.get(`api/oneblogpost?id=${id}`)
    return data
}