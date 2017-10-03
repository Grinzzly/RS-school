class FSM {
    constructor(config) {
        if (config === null) throw Error('Houston, we have a problem!');
        this.config = config;
        this.activeState = this.config.initial;
        this.prev = [];
        this.next = [];
    }

    getState() {
        return this.activeState;
    }

    changeState(state) {
        if (state in this.config.states){
            this.prev.push(this.activeState);
            this.activeState = state;
            this.next =  [];
        }
        else
            throw Error('Houston, we have a problem!')
    }

    trigger(event) {
        const transition = this.config.states[this.activeState].transitions;
        if (event in transition) {
            this.prev.push(this.activeState);
            this.activeState = transition[event];
            this.next = [];
        }
        else
            throw Error('Houston, we have a problem!');
    }

    reset() {
        this.prev.push(this.activeState);
        this.activeState = this.config.initial;
        this.next = [];
    }

    getStates(event) {
        let result = [];
        const states = this.config.states;
        if (typeof(event) === 'undefined') {
            for (let i in states) result.push(i);
            return result;
        }
        for (let i in states) {
            if (event in states[i].transitions) result.push(i);
        }
        return result;
    }

    undo() {
        if (this.prev.length !== 0) {
            this.next.push(this.activeState);
            this.activeState = this.prev.pop();
            return true;
        }
        return false;
    }

    redo() {
        if (this.next.length !== 0) {
            this.prev.push(this.activeState);
            this.activeState = this.next.pop();
            return true;
        }
        return false;
    }

    clearHistory() {
        this.next = [];
        this.prev = [];
    }
}

module.exports = FSM;