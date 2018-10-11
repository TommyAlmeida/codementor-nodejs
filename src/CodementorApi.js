const {confirmSession, 
    declineSession, 
    rescheduleSession
} = require('./Codementor.service');

let CodementorApi = function(apiKey){
    this._apiKey = apiKey;
}

CodementorApi.prototype = {

    /**
     * Confirm a scheduled session
     * 
     * @param {string} scheduled_session_id The ID of the scheduled session to confirm
     * @example confirmSession('abc123').then(...)
     * @returns {Promise|undefined} A promise that if successful, returns an object containing information
     * about the session. Not returned if a callback is given.
     */
    confirmSession: (scheduled_session_id) => {
        confirmSession(this._apiKey, scheduled_session_id);
    },

    /**
     * Decline a scheduled session
     * 
     * @param {string} scheduled_session_id The ID of the scheduled session to decline
     * @example declineSession('abc123').then(...)
     * @returns {Promise|undefined} A promise that if successful, returns an object containing information
     * about the session. Not returned if a callback is given.
     */
    declineSession: (scheduled_session_id) => {
        declineSession(this._apiKey, scheduled_session_id);
    },

    /**
     * Reschedule a scheduled session
     * 
     * @param {string} scheduled_session_id The ID of the scheduled session to reschedule
     * @example rescheduleSession('abc123').then(...)
     * @returns {Promise|undefined} A promise that if successful, returns an object containing information
     * about the session. Not returned if a callback is given.
     */
    rescheduleSession: (scheduled_session_id) => {
        rescheduleSession(this._apiKey, scheduled_session_id);
    },
}

module.exports = CodementorApi;