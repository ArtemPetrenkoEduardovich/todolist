// @flow

const addItem = function (todo: string) {
	return {
		type: "ADD_TODO",
        todo
	}
};

const deleteItem = function (todo_id: number) {
	return {
		type: "DELETE_TODO",
        todo_id
	}
};

const assignUser = function (todo_id: number, user_id: number) {
    return {
        type: "ASSIGN_USER",
        todo_id, user_id
    }
};

const unassignUser = function (todo_id: number, user_id: number) {
    return {
        type: "UNASSIGN_USER",
        todo_id, user_id
    }
};

const deleteAssigned = function (user_id: number) {
	return {
		type: "DELETE_USER",
        user_id
	}
};

const addUser = function (name: string) {
	return {
		type: "ADD_NEW_USER",
        name
	}
}

const addUserAndAssign = function (name: string, todo_id: number, last_id: number) {
    return {
        type: "ADD_NEW_USER_AND_ASSIGN",
        name, todo_id, last_id
    }
}

const openAssignWindow = function(todo: string, todo_id: number, assigned_users: Array<number>) {
    return {
        type: "OPEN_ASSIGN_WINDOW",
        todo, todo_id, assigned_users
    }
}

const saveAssignWindow = function(
        userList: Array<Object>, 
        last_id: number, 
        assigned_users: Array<number>, 
        todo_id: number
    ) {
    return {
        type: "SAVE_ASSIGN_WINDOW",
        userList,
        last_id,
        assigned_users,
        todo_id
    }
}

const showDialog = function() {
    return {
        type: "SHOW_DIALOG"
    }
}

const closeDialog = function() {
    return {
        type: "CLOSE_DIALOG"
    }
}

const closeDialogAndAssign = function() {
    return {
        type: "CLOSE_DIALOG_AND_ASSIGN"
    }
}

 
module.exports = {
    addItem,
    deleteItem,
    assignUser,
    unassignUser,
    deleteAssigned,
    addUser,
    addUserAndAssign,
    openAssignWindow,
    saveAssignWindow,
    showDialog,
    closeDialog,
    closeDialogAndAssign
};

















