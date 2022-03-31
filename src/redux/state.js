const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
    },

    _callSubscriber() {
        console.log('State changed!')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessage
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'CREATE-NEW-MESSAGE-IN-DIALOGS') {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>  ({type: UPDATE_NEW_POST_TEXT, newText: text})


window.store = store;
export default store;