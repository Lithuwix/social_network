import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hey, Why nobody love me..?", likesCount: 23},
            {id: 2, message: "It's my first Post", likesCount: 0}
        ]
    },
    dialogsPage: {
        friend_list: [
            {id: 1, name: 'Paul'},
            {id: 2, name: 'Doom'},
            {id: 3, name: 'Flake'},
            {id: 4, name: 'Oliver'},
            {id: 5, name: 'Richard'},
            {id: 6, name: 'Till'}
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How is your It KAMASUTRA?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo yo yo!!!'}
        ]
    }
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree(state);
}


export default state;