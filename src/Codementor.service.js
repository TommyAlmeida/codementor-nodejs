const fetch = require('node-fetch');
const BASE_URL = "https://dev.codementor.io/api";

async function confirmSession(api_key, scheduled_session_id) {
    const promise = await fetch(`${BASE_URL}/scheduled-sessions/${scheduled_session_id}/confirm`, {
        method: "POST",
        headers: {
            "x-codementor-api-key": api_key
        }
    });

    return promise.json();
}

async function declineSession(api_key, scheduled_session_id) {
    const promise = await fetch(`${BASE_URL}/scheduled-sessions/${scheduled_session_id}/cancel`, {
        method: "POST",
        headers: {
            "x-codementor-api-key": api_key
        }
    });

    return promise.json();
}

async function rescheduleSession(api_key, scheduled_session_id) {
    const promise = await fetch(`${BASE_URL}/scheduled-sessions/${scheduled_session_id}/reschedule`, {
        method: "POST",
        headers: {
            "x-codementor-api-key": api_key
        }
    });

    return promise.json();
}

module.exports = {
    confirmSession,
    declineSession,
    rescheduleSession
}