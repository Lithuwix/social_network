import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
            newMessageText: "MESSAGE FROM STATE"
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;