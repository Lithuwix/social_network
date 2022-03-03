let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hey, Why nobody love me..?", likesCount: 23},
            {id: 2, message: "It's my first Post", likesCount: 0}
        ],
        newPostText: 'text from state'
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
        ],
        newMessage: "MESSAGE FROM STATE"
    }
}

window.state = state;

let rerenderEntireTree = () => {
    console.log('it worked!')
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessage
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state);
}

export const createNewMessageInDialogs = (newMessage) => {
    state.dialogsPage.newMessage = newMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}



export default state;