
//Interface for Trainer role
class ITrainer {

    //all methods are abstract methods

    conductTraining() {
        throw new Error('Method "conductTraining()" must be implemented.');
    }
    conductHandsOnSession() {
        throw new Error('Method "conductHandsOnSession()" must be implemented.');
    }
}

module.exports = ITrainer;
