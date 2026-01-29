
//Interface for appraisable entities
class IAppraisable {

    conductAppraisal() {
        throw new Error('Method "conductAppraisal()" must be implemented.');
    }
}
module.exports = IAppraisable;