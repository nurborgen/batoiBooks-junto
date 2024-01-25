import { reactive } from "vue"

export const store = {
    debug: true,
    state: {
        message: reactive([])
    },
    setMessageAction(newValue) {
        
        this.state.message.push(newValue)
    },
    clearMessageAction() {
        
        this.state.message = []
    }
}