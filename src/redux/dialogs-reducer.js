const ADD_MESSAGE = 'ADD-MESSAGE';
const CREATE_NEW_MESSAGE_IN_DIALOGS = 'CREATE-NEW-MESSAGE-IN-DIALOGS';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_MESSAGE:
        let newMessageText = {
            id: 5,
            message: state.newMessageText
        };
        state.messages.push(newMessageText);
        state.newMessageText = '';
        return state;
    case CREATE_NEW_MESSAGE_IN_DIALOGS:
        state.newMessageText = action.newMessageText;
        return state;
    default: return state;
}
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const createNewMessageInDialogsActionCreator = (text) => ({
    type: CREATE_NEW_MESSAGE_IN_DIALOGS,
    newMessageText: text
})

export default dialogsReducer;